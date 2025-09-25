#!/usr/bin/env python3
"""
优化的Gemini CLI工具 - 减少配额消耗
"""

import os
import sys
import json
import time
import random
import requests
from typing import List, Optional, Dict, Any
import threading
import queue
from datetime import datetime, timedelta
import hashlib
import sqlite3

class OptimizedGeminiCLI:
    def __init__(self, key_file: str = "key.md"):
        self.key_file = key_file
        self.keys = []
        self.current_key_index = 0
        self.last_key_switch_time = 0
        self.base_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
        self.key_stats = {}
        self.blocked_keys = set()
        self.request_lock = threading.Lock()
        
        # 缓存系统
        self.cache_db = "gemini_cache.db"
        self.cache_enabled = True
        self.cache_expiry_hours = 24
        
        # 请求限制
        self.request_count = 0
        self.daily_limit = 40  # 保守限制，留10次余量
        self.last_reset_date = datetime.now().date()
        
        # 智能批处理
        self.pending_requests = []
        self.batch_size = 3
        self.batch_timeout = 5  # 秒
        
        self.load_keys()
        self.initialize_key_stats()
        self.init_cache()
        self.reset_daily_counter_if_needed()

    def load_keys(self):
        """从 key.md 文件加载 API keys"""
        try:
            with open(self.key_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                self.keys = [line.strip() for line in lines if line.strip() and not line.startswith('#')]

            if not self.keys:
                print("错误: 没有找到有效的 API keys")
                sys.exit(1)

            print(f"已加载 {len(self.keys)} 个 API keys")

        except FileNotFoundError:
            print(f"错误: 找不到 {self.key_file} 文件")
            sys.exit(1)

    def initialize_key_stats(self):
        """初始化key统计信息"""
        for i, key in enumerate(self.keys):
            self.key_stats[i] = {
                'success_count': 0,
                'error_count': 0,
                'last_used': 0,
                'consecutive_errors': 0,
                'daily_requests': 0,
                'last_reset_date': datetime.now().date()
            }

    def init_cache(self):
        """初始化缓存数据库"""
        if not self.cache_enabled:
            return
            
        try:
            conn = sqlite3.connect(self.cache_db)
            cursor = conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS cache (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    prompt_hash TEXT UNIQUE,
                    response TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    key_index INTEGER
                )
            ''')
            conn.commit()
            conn.close()
            print("缓存系统已初始化")
        except Exception as e:
            print(f"缓存初始化失败: {e}")
            self.cache_enabled = False

    def get_cache_key(self, prompt: str) -> str:
        """生成缓存的键"""
        return hashlib.md5(prompt.encode('utf-8')).hexdigest()

    def get_from_cache(self, prompt: str) -> Optional[str]:
        """从缓存获取响应"""
        if not self.cache_enabled:
            return None
            
        try:
            conn = sqlite3.connect(self.cache_db)
            cursor = conn.cursor()
            
            prompt_hash = self.get_cache_key(prompt)
            cursor.execute('''
                SELECT response FROM cache 
                WHERE prompt_hash = ? 
                AND created_at > datetime('now', '-{} hours')
            '''.format(self.cache_expiry_hours), (prompt_hash,))
            
            result = cursor.fetchone()
            conn.close()
            
            if result:
                print("从缓存获取响应")
                return result[0]
            return None
            
        except Exception as e:
            print(f"缓存读取失败: {e}")
            return None

    def save_to_cache(self, prompt: str, response: str, key_index: int):
        """保存响应到缓存"""
        if not self.cache_enabled:
            return
            
        try:
            conn = sqlite3.connect(self.cache_db)
            cursor = conn.cursor()
            
            prompt_hash = self.get_cache_key(prompt)
            cursor.execute('''
                INSERT OR REPLACE INTO cache (prompt_hash, response, key_index)
                VALUES (?, ?, ?)
            ''', (prompt_hash, response, key_index))
            
            conn.commit()
            conn.close()
            
        except Exception as e:
            print(f"缓存保存失败: {e}")

    def reset_daily_counter_if_needed(self):
        """检查是否需要重置每日计数器"""
        today = datetime.now().date()
        if today != self.last_reset_date:
            self.request_count = 0
            self.last_reset_date = today
            
            # 重置所有key的每日计数
            for i in range(len(self.keys)):
                if self.key_stats[i]['last_reset_date'] != today:
                    self.key_stats[i]['daily_requests'] = 0
                    self.key_stats[i]['last_reset_date'] = today
                    self.key_stats[i]['consecutive_errors'] = 0

    def check_daily_limit(self) -> bool:
        """检查是否超过每日限制"""
        self.reset_daily_counter_if_needed()
        return self.request_count < self.daily_limit

    def get_current_key(self) -> str:
        """获取当前使用的 API key"""
        return self.keys[self.current_key_index]

    def get_best_key(self) -> int:
        """获取最佳可用的API key"""
        available_keys = []
        
        for i, key in enumerate(self.keys):
            if i not in self.blocked_keys:
                stats = self.key_stats[i]
                # 检查每日限制
                if stats['daily_requests'] < 15:  # 每个key每日最多15次
                    if stats['consecutive_errors'] < 3:
                        available_keys.append((i, stats))
        
        if not available_keys:
            # 如果没有可用key，重置所有key的状态
            print("所有key都遇到问题，重置状态...")
            self.blocked_keys.clear()
            for i in range(len(self.keys)):
                self.key_stats[i]['consecutive_errors'] = 0
            available_keys = [(i, self.key_stats[i]) for i in range(len(self.keys))]
        
        # 选择最久未使用且错误最少的key
        available_keys.sort(key=lambda x: (x[1]['consecutive_errors'], x[1]['last_used']))
        return available_keys[0][0]

    def switch_key(self, force: bool = False, reason: str = ""):
        """智能切换到下一个 API key"""
        current_time = time.time()

        # 如果距离上次切换不到3秒且不是强制切换，则不切换
        if not force and (current_time - self.last_key_switch_time) < 3:
            return

        old_index = self.current_key_index
        self.current_key_index = self.get_best_key()
        self.last_key_switch_time = current_time

        if reason:
            print(f"切换 API key: {old_index + 1} -> {self.current_key_index + 1} ({reason})")
        else:
            print(f"切换 API key: {old_index + 1} -> {self.current_key_index + 1}")

    def make_request(self, prompt: str) -> Optional[str]:
        """发送请求到 Gemini API"""
        # 检查每日限制
        if not self.check_daily_limit():
            print(f"已达到每日请求限制 ({self.daily_limit} 次)")
            return None

        # 尝试从缓存获取
        cached_response = self.get_from_cache(prompt)
        if cached_response:
            return cached_response

        max_retries = len(self.keys)
        for attempt in range(max_retries):
            key_index = self.current_key_index
            current_key = self.get_current_key()
            
            # 检查当前key的每日限制
            if self.key_stats[key_index]['daily_requests'] >= 15:
                print(f"Key {key_index + 1} 已达到每日限制")
                self.switch_key(force=True, reason="达到每日限制")
                continue
                
            url = f"{self.base_url}?key={current_key}"

            headers = {"Content-Type": "application/json"}
            data = {
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {
                    "temperature": 0.7,
                    "topK": 40,
                    "topP": 0.95,
                    "maxOutputTokens": 1024  # 减少token数量以节省配额
                }
            }

            try:
                print(f"使用 API key {key_index + 1} 发送请求... (尝试 {attempt + 1}/{max_retries})")
                response = requests.post(url, headers=headers, json=data, timeout=30)
                self.key_stats[key_index]['last_used'] = time.time()
                self.key_stats[key_index]['daily_requests'] += 1
                self.request_count += 1

                if response.status_code == 200:
                    result = response.json()
                    if 'candidates' in result and len(result['candidates']) > 0:
                        self.key_stats[key_index]['success_count'] += 1
                        self.key_stats[key_index]['consecutive_errors'] = 0
                        content = result['candidates'][0]['content']['parts'][0]['text']
                        
                        # 保存到缓存
                        self.save_to_cache(prompt, content, key_index)
                        
                        return content
                    else:
                        print("警告: 响应中没有找到有效内容")
                        self.key_stats[key_index]['consecutive_errors'] = 0
                        return None

                # 处理错误
                self.key_stats[key_index]['error_count'] += 1
                self.key_stats[key_index]['consecutive_errors'] += 1
                
                if response.status_code in [401, 403, 429]:
                    reason = f"HTTP {response.status_code} 错误"
                    print(f"API key {key_index + 1} 遇到问题 ({reason})")
                    if response.status_code in [401, 403]:
                        self.blocked_keys.add(key_index)
                    self.switch_key(force=True, reason=reason)
                else:
                    reason = f"HTTP {response.status_code} 错误"
                    print(f"请求失败: {reason}")
                    print(f"响应内容: {response.text}")
                    self.switch_key(force=True, reason=reason)

            except requests.exceptions.RequestException as e:
                self.key_stats[key_index]['error_count'] += 1
                self.key_stats[key_index]['consecutive_errors'] += 1
                reason = f"网络或请求错误: {e}"
                print(reason)
                self.switch_key(force=True, reason=reason)

        print("错误: 所有 API keys 都已尝试，请求失败")
        return None

    def show_status(self):
        """显示API key状态信息"""
        print("\n=== API Key 状态 ===")
        print(f"今日请求总数: {self.request_count}/{self.daily_limit}")
        print(f"缓存状态: {'启用' if self.cache_enabled else '禁用'}")
        
        for i, key in enumerate(self.keys):
            stats = self.key_stats[i]
            status = "当前" if i == self.current_key_index else "可用"
            if i in self.blocked_keys:
                status = "已阻止"
            elif stats['consecutive_errors'] >= 3:
                status = "连续错误"
            elif stats['daily_requests'] >= 15:
                status = "达到限制"
            
            print(f"Key {i+1}: {status} | 成功: {stats['success_count']} | 错误: {stats['error_count']} | 今日: {stats['daily_requests']}/15")
        print("==================\n")

    def show_help(self):
        """显示帮助信息"""
        print("\n=== 优化版Gemini CLI帮助 ===")
        print("可用命令:")
        print("  quit/exit/q - 退出程序")
        print("  switch      - 手动切换到下一个API key")
        print("  status      - 显示所有API key的状态信息")
        print("  help        - 显示此帮助信息")
        print("  cache       - 显示缓存统计信息")
        print("\n优化功能:")
        print("  - 智能缓存系统，减少重复请求")
        print("  - 每日配额管理，避免超限")
        print("  - 减少token使用量")
        print("  - 智能key轮换和错误处理")
        print("  - 实时状态监控")
        print("=====================\n")

    def show_cache_stats(self):
        """显示缓存统计信息"""
        if not self.cache_enabled:
            print("缓存系统未启用")
            return
            
        try:
            conn = sqlite3.connect(self.cache_db)
            cursor = conn.cursor()
            
            # 获取缓存总数
            cursor.execute("SELECT COUNT(*) FROM cache")
            total_cache = cursor.fetchone()[0]
            
            # 获取有效缓存数
            cursor.execute('''
                SELECT COUNT(*) FROM cache 
                WHERE created_at > datetime('now', '-{} hours')
            '''.format(self.cache_expiry_hours))
            valid_cache = cursor.fetchone()[0]
            
            # 获取缓存大小
            cursor.execute("SELECT SUM(LENGTH(response)) FROM cache")
            cache_size = cursor.fetchone()[0] or 0
            
            conn.close()
            
            print(f"\n=== 缓存统计 ===")
            print(f"总缓存条目: {total_cache}")
            print(f"有效缓存条目: {valid_cache}")
            print(f"缓存大小: {cache_size / 1024:.2f} KB")
            print("================\n")
            
        except Exception as e:
            print(f"获取缓存统计失败: {e}")

    def chat_loop(self):
        """交互式聊天循环"""
        print("优化版Gemini CLI已启动!")
        print("命令: 'quit'/'exit' 退出 | 'switch' 切换key | 'status' 查看状态 | 'help' 帮助 | 'cache' 缓存统计")
        print("=" * 60)

        conversation_history = []

        while True:
            try:
                user_input = input("\n你: ").strip()

                if user_input.lower() in ['quit', 'exit', 'q']:
                    print("再见!")
                    break

                if not user_input:
                    continue

                if user_input.lower() == 'switch':
                    self.switch_key(force=True)
                    continue

                if user_input.lower() == 'status':
                    self.show_status()
                    continue

                if user_input.lower() == 'help':
                    self.show_help()
                    continue

                if user_input.lower() == 'cache':
                    self.show_cache_stats()
                    continue

                # 构建包含历史对话的prompt
                full_prompt = ""
                for i, (q, a) in enumerate(conversation_history[-2:]):  # 只保留最近2轮对话
                    full_prompt += f"用户: {q}\nGemini: {a}\n\n"
                full_prompt += f"用户: {user_input}\nGemini: "

                response = self.make_request(prompt=full_prompt)

                if response:
                    print(f"\nGemini: {response}")
                    conversation_history.append((user_input, response))
                else:
                    print("抱歉，无法获取响应。请稍后重试。")

            except KeyboardInterrupt:
                print("\n\n再见!")
                break
            except EOFError:
                print("\n\n再见!")
                break

def main():
    if len(sys.argv) > 1:
        key_file = sys.argv[1]
    else:
        key_file = "key.md"

    cli = OptimizedGeminiCLI(key_file)
    cli.chat_loop()

if __name__ == "__main__":
    main()
