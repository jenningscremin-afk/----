#!/usr/bin/env python3
import sys
import time
from collections import deque
from pathlib import Path
from typing import Optional

import requests

from config_manager import GroupConfig, KeyConfig, load_config
from key_manager import KeyLoadBalancer, NoAvailableKeyError


class GeminiCLI:
    """Simple terminal interface for Gemini with multi-key failover."""

    def __init__(
        self,
        key_file: Optional[str] = None,
        *,
        config_path: str = "ai_config.json",
        group_name: Optional[str] = None,
    ):
        self.config_path = Path(config_path)
        self.key_file_override = Path(key_file) if key_file else None
        self.system_config, groups = load_config(str(self.config_path))
        self.group = self._select_group(groups, group_name)
        self._apply_key_override()

        self.keys = [key.value for key in self.group.keys]
        self.current_key_index: Optional[int] = None
        self.last_key_switch_time = 0
        self.base_url = self.group.base_url
        self.retry_backoff_base = max(0.5, self.group.retry_backoff.base)
        self.retry_backoff_cap = max(self.retry_backoff_base, self.group.retry_backoff.cap)
        self.cooldown_seconds = self.group.cooldown_seconds
        self.per_key_minute_limit = self.group.per_key_minute_limit
        self.per_key_daily_limit = self.group.per_key_daily_limit
        self.max_attempts = max(1, self.group.max_retries)
        self.request_timeout = self.group.request_timeout
        self.temperature = self.group.temperature
        self.top_k = self.group.top_k
        self.top_p = self.group.top_p
        self.max_output_tokens = self.group.max_output_tokens
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        self.conversation_history = deque(maxlen=3)
        self.load_balancer = KeyLoadBalancer(
            [
                {
                    "value": key.value,
                    "weight": key.weight,
                    "minute_limit": key.minute_limit if key.minute_limit is not None else self.per_key_minute_limit,
                    "daily_limit": key.daily_limit if key.daily_limit is not None else self.per_key_daily_limit,
                }
                for key in self.group.keys
            ],
            minute_limit=self.per_key_minute_limit,
            cooldown_seconds=self.cooldown_seconds,
            rate_limit_cooldown=self.group.rate_limit_cooldown,
            hard_block_seconds=self.group.hard_block_seconds,
            base_latency=self.group.base_latency,
            sleep_cap=12.0,
        )

        print(f"已加载 {len(self.keys)} 个 API keys (分组: {self.group.name})")

    # ------------------------------------------------------------------
    def _select_group(self, groups: dict, explicit: Optional[str]) -> GroupConfig:
        self.group_configs = groups
        if explicit:
            if explicit not in groups:
                available = ", ".join(groups.keys())
                raise ValueError(f"未找到指定分组 '{explicit}'，可用分组: {available}")
            return groups[explicit]

        default_name = self.system_config.default_group
        if default_name and default_name in groups:
            return groups[default_name]

        return next(iter(groups.values()))

    def _apply_key_override(self) -> None:
        if self.key_file_override is None:
            return

        try:
            content = self.key_file_override.read_text(encoding='utf-8')
        except FileNotFoundError:
            print(f"警告: 找不到密钥文件 {self.key_file_override}, 使用配置中的密钥。")
            return

        template = self.group.keys[0] if self.group.keys else KeyConfig(
            value="",
            weight=1.0,
            minute_limit=self.system_config.per_key_minute_limit,
            daily_limit=self.system_config.per_key_daily_limit,
        )

        parsed: list[KeyConfig] = []
        for line in content.splitlines():
            stripped = line.strip()
            if stripped and not stripped.startswith('#'):
                parsed.append(
                    KeyConfig(
                        value=stripped,
                        weight=template.weight,
                        minute_limit=template.minute_limit if template.minute_limit is not None else self.per_key_minute_limit,
                        daily_limit=template.daily_limit if template.daily_limit is not None else self.per_key_daily_limit,
                    )
                )

        if parsed:
            for item in parsed:
                if item.minute_limit is None:
                    item.minute_limit = self.per_key_minute_limit
                if item.daily_limit is None:
                    item.daily_limit = self.per_key_daily_limit
            self.group.keys = parsed

    def switch_key(self, reason: str = ""):
        """手动触发下一把 key，避免单点压测。"""
        current_time = time.time()
        if (current_time - self.last_key_switch_time) < 2 and not reason:
            return
        previous = self.current_key_index
        new_index = self.load_balancer.penalise_active(reason=reason or "manual switch")
        self.last_key_switch_time = current_time
        if new_index is None:
            print("当前没有活跃的 key，等待冷却后自动恢复。")
            self.current_key_index = None
            return
        self.current_key_index = new_index
        old_label = f"{(previous or 0) + 1}" if previous is not None else "?"
        message = f"切换 API key: {old_label} -> {new_index + 1}"
        if reason:
            message += f" ({reason})"
        print(message)

    @staticmethod
    def _parse_retry_after(headers) -> Optional[float]:
        value = headers.get("Retry-After") if isinstance(headers, dict) else None
        if not value:
            return None
        try:
            return float(value)
        except (TypeError, ValueError):
            return None

    def _wait_for_capacity(self, hint: Optional[float] = None):
        wait_time = hint if hint is not None else self.load_balancer.wait_time_until_next()
        wait_time = max(1.0, min(self.load_balancer.sleep_cap, float(wait_time)))
        print(f"所有 key 暂不可用，等待 {wait_time:.1f} 秒后重试...")
        time.sleep(wait_time)

    def _compute_backoff(self, attempt: int) -> float:
        exponent = max(attempt - 1, 0)
        wait = self.retry_backoff_base * (2 ** exponent)
        return min(self.retry_backoff_cap, wait)

    def make_request(self, prompt: str) -> Optional[str]:
        """发送请求到 Gemini API，结合细粒度负载均衡。"""
        total_attempts = max(1, self.max_attempts)
        attempt = 0

        while attempt < total_attempts:
            try:
                key_index, state = self.load_balancer.acquire()
            except NoAvailableKeyError as exc:
                self._wait_for_capacity(exc.wait_time)
                continue

            self.current_key_index = key_index
            url = f"{self.base_url}?key={state.key}"
            payload = {
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {
                    "temperature": self.temperature,
                    "topK": self.top_k,
                    "topP": self.top_p,
                    "maxOutputTokens": self.max_output_tokens,
                },
            }

            start_time = time.time()
            attempt += 1

            try:
                print(
                    f"使用 API key {key_index + 1} 发送请求... (尝试 {attempt}/{total_attempts})"
                )
                response = self.session.post(url, json=payload, timeout=self.request_timeout)
                latency = time.time() - start_time

                if response.status_code == 200:
                    result = response.json()
                    if 'candidates' in result and result['candidates']:
                        self.load_balancer.record_success(key_index, latency)
                        content = result['candidates'][0]['content']['parts'][0]['text']
                        return content

                    print("警告: 响应中没有找到有效内容")
                    self.load_balancer.record_success(key_index, latency)
                    return None

                retry_after = self._parse_retry_after(response.headers)
                self.load_balancer.record_failure(
                    key_index,
                    status_code=response.status_code,
                    retry_after=retry_after,
                )

                if response.status_code in (401, 403, 429):
                    print(f"API key {key_index + 1} 遇到问题: HTTP {response.status_code}")
                else:
                    print(f"请求失败: HTTP {response.status_code}")
                    if response.text:
                        print(f"响应内容: {response.text[:200]}...")

            except requests.exceptions.RequestException as exc:
                print(f"网络或请求错误: {exc}")
                self.load_balancer.record_failure(key_index, exception=exc)

            # 避免在瞬间把所有 key 都压满
            if attempt < total_attempts:
                time.sleep(self._compute_backoff(attempt))

        print("错误: 所有 API keys 都已尝试，请求失败")
        return None

    def show_status(self, show_all: bool = False):
        """显示API key状态信息"""
        snapshot = self.load_balancer.stats_snapshot()
        summary = self.load_balancer.summary()
        print(
            f"\n=== API Key 状态（共 {summary['keys']} 把） ===\n"
            f"请求总数: {summary['attempts']} | 成功: {summary['success']} | 失败: {summary['errors']}\n"
        )

        display_count = len(snapshot) if show_all or len(snapshot) <= 20 else 12
        for row in snapshot[:display_count]:
            marker = "→" if row["index"] == self.current_key_index else " "
            avg_latency = row["avg_latency"] if row["avg_latency"] is not None else "-"
            daily_info = ""
            if row.get("daily_limit"):
                daily_usage = row.get("daily_usage", 0)
                daily_info = f" 日:{daily_usage}/{row['daily_limit']}"
            print(
                f"{marker}#{row['index'] + 1:<3} {row['key']:<16} 状态:{row['health']:<12} 权重:{row['weight']:<4}"
                f"成功:{row['success']:<4} 失败:{row['error']:<4} 连错:{row['consecutive_errors']:<2} "
                f"负载:{row['minute_usage']}/{row['minute_limit']}{daily_info} 待机:{row['ready_in']:>5}s 平均延迟:{avg_latency}"
            )

        if display_count < len(snapshot):
            print(f"... 其余 {len(snapshot) - display_count} 把 key 可使用 'status all' 查看")

        print("==================\n")

    def show_help(self):
        """显示帮助信息"""
        print("\n=== Gemini CLI 帮助 ===")
        print("可用命令:")
        print("  quit/exit/q - 退出程序")
        print("  switch      - 手动切换到下一个API key")
        print("  status      - 查看关键指标 ('status all' 显示全部)")
        print("  help        - 显示此帮助信息")
        print("\n功能特点:")
        print("  - 自动多key轮换，无感切换")
        print("  - 智能错误处理和key管理")
        print("  - 自动重试和故障转移")
        print("  - 实时状态监控")
        print("=====================\n")

    def chat_loop(self):
        """交互式聊天循环"""
        print("Gemini CLI 已启动!")
        print("命令: 'quit'/'exit' 退出 | 'switch' 切换key | 'status' 查看状态 | 'help' 帮助")
        print("=" * 60)

        while True:
            try:
                user_input = input("\n你: ").strip()

                command = user_input.strip().lower()

                if command in ['quit', 'exit', 'q']:
                    print("再见!")
                    break

                if not user_input:
                    continue

                if command == 'switch':
                    self.switch_key(reason="手动切换")
                    continue

                if command.startswith('status'):
                    tokens = user_input.split()
                    show_all = len(tokens) > 1 and tokens[1].lower() == 'all'
                    self.show_status(show_all=show_all)
                    continue

                if command == 'help':
                    self.show_help()
                    continue

                # 构建包含历史对话的prompt
                full_prompt = "".join(
                    f"用户: {q}\nGemini: {a}\n\n"
                    for q, a in self.conversation_history
                )
                full_prompt += f"用户: {user_input}\nGemini: "

                response = self.make_request(prompt=full_prompt)

                if response:
                    print(f"\nGemini: {response}")
                    self.conversation_history.append((user_input, response))
                else:
                    print("抱歉，无法获取响应。请稍后重试。")

            except KeyboardInterrupt:
                print("\n\n再见!")
                break
            except EOFError:
                print("\n\n再见!")
                break

def main():
    key_file: Optional[str] = None
    group_name: Optional[str] = None
    config_path = "ai_config.json"

    for raw_arg in sys.argv[1:]:
        if raw_arg.startswith("--group="):
            group_name = raw_arg.split("=", 1)[1] or None
        elif raw_arg.startswith("--config="):
            config_path = raw_arg.split("=", 1)[1] or config_path
        else:
            candidate = Path(raw_arg)
            if candidate.exists():
                key_file = str(candidate)
            else:
                group_name = raw_arg

    cli = GeminiCLI(key_file, config_path=config_path, group_name=group_name)
    try:
        cli.chat_loop()
    finally:
        cli.session.close()

if __name__ == "__main__":
    main()
