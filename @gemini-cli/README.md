# Gemini CLI 使用说明

## 功能特性

- ✅ 自动加载三个 API keys
- ✅ 智能 key 轮换（失败时自动切换）
- ✅ 交互式聊天界面
- ✅ 对话历史记录（保留最近3轮）
- ✅ 错误处理和重试机制
- ✅ 多种退出方式
- ✅ 针对配额/网络抖动的自动退避与冷却
- ✅ 参考 GPT-Load 部署指南的权重调度与限速策略（支持百余把 key）
- ✅ 支持 GPT-Load 风格的“系统配置 + 分组配置”，热更新密钥文件即可生效

## 使用方法

### 1. 启动聊天
```bash
# 方法1: 直接运行 Python 脚本
python gemini_cli.py

# 方法2: 使用批处理文件（Windows）
run.bat

# 方法3: 指定自定义 key 文件
python gemini_cli.py your_keys.md

# 方法4: 终端直接输入命令（Windows）
# 第一步: 将 @gemini-cli 目录添加到 PATH（或把 gemini.cmd 复制到任意 PATH 目录）
#          （可运行 add_to_path.cmd 自动写入当前用户 PATH）
# 第二步: 直接运行
gemini --group=gemini
```

> `gemini.cmd` 启动器优先使用当前虚拟环境的 Python，自动回退到系统中的 `py`/`python`，避免手动切换解释器导致的不稳定。

> `add_to_path.cmd` 会把 `@gemini-cli` 目录追加到当前用户 PATH，执行成功后重新打开终端即可直接敲 `gemini`。

> 如果需要调整每把 key 的限速或冷却策略，可在 `gemini_cli.py` 中修改 `per_key_minute_limit`、`cooldown_seconds` 等参数。

### 2. 聊天命令

在聊天过程中，你可以使用以下特殊命令：

- `quit` 或 `exit` 或 `q` - 退出程序
- `switch` - 手动切换到下一个 API key
- `status` - 查看关键指标（`status all` 可展开所有 key）

## 配置体系（对齐 GPT-Load）

`ai_config.json` 采用 **系统配置 + 分组配置** 的层级结构，对齐 GPT-Load 的配置理念：

```json
{
  "system": {
    "request_timeout": 32,
    "max_retries": 6,
    "retry_backoff": { "base": 1.5, "cap": 12 },
    "per_key_minute_limit": 90,
    "per_key_daily_limit": 50,
    "default_group": "gemini"
  },
  "groups": [
    {
      "name": "gemini",
      "base_url": "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent",
      "max_retries": 6,
      "keys": [
        { "value": "AIzaSyB2z3beTsALMXl4VF5Zf_IVZqRwc0bNlnc", "weight": 1.0, "minute_limit": 90, "daily_limit": 50 }
      ]
    }
  ]
}
```

- **system**：全局默认参数（超时、退避、配额上限等），与 GPT-Load 的 “系统设置” 对应。
- **groups**：单个模型/渠道的策略，与 GPT-Load 的 “分组设置” 对应，可独立配置权重、限速、重试等。
- **keys**：支持直接写 `value`，也支持引用密钥文件；引用 `key.md` 时，只需更新文件内容即可热加载。

命令行也保持与 GPT-Load 相似的多维配置：

- `gemini --group=gemini` 指定分组（默认取 `system.default_group`）。
- `gemini path/to/keys.txt` 可临时覆盖该分组的密钥池（保留分组的权重/限速策略）。若仅需固定使用单一付费 key，可在配置中直接写 `"value"` 字段，本例已指向首个付费 key。
- `gemini --config=custom.json` 切换到另一份配置副本，便于区分测试/生产环境。

### 3. Key 文件格式

`key.md` 文件应该包含每行一个 API key：

```
AIzaSyBYKV7FcMhhO-Newt70sKrLTTxb3GwVyV0
AIzaSyACLYcBpktHTNNOdyFLyqaD0d_OTKXPuB0
AIzaSyDLGoPPbr0kHH0Zvk7WJSTz4zzJ89K6XFY
```

## 自动轮换机制

CLI 会在以下情况自动切换 API key：

1. **限流错误** (HTTP 429) - 当前 key 达到使用限制
2. **认证错误** (HTTP 403) - 当前 key 无效或被禁用
3. **网络超时** - 请求超时自动重试下一个 key
4. **其他错误** - 任何请求失败都会触发 key 轮换

### 高级负载均衡（GPT-Load 策略的本地实现）

- **动态打分轮换**：根据成功率、连续失败次数、最近延迟和每分钟用量计算优先级，优先选健康且空闲的 key。
- **细粒度冷却**：401/403 会进入长时间阻断，429 会读取 `Retry-After` 并延长冷却，其它错误按指数退避处理。
- **分钟限速**：默认每把 key 每分钟最多 90 次调用，超出后自动排队等待，不会把 100+ 把 key 一次性打爆。
- **手动调度**：`switch` 将当前 key 拉入短暂冷却，立刻轮换下一把；`status all` 可查看所有 key 的实时负载。
- **健康摘要**：状态面板展示成功/失败总数、平均延迟、冷却剩余时间，可快速定位被限流或性能不佳的 key。

## 示例对话

```
Gemini CLI 已启动! 输入 'quit' 或 'exit' 退出
==================================================

你: 你好，请介绍一下自己

使用 API key 1 发送请求...

Gemini: 你好！我是 Gemini，由 Google 开发的大型语言模型...

你: status
当前使用 API key: 1/3

你: switch
切换 API key: 1 -> 2

你: quit
再见!
```

## 故障排除

### 1. 没有找到 key.md 文件
确保 `key.md` 文件在同一目录下，或者使用绝对路径。

### 2. 所有 keys 都失败
检查：
- API keys 是否有效
- 网络连接是否正常
- 是否有足够的配额

### 3. Python 模块未找到
运行：`pip install -r requirements.txt`

## 技术特性

- **智能重试**: 失败时自动切换 key 并重试
- **历史记录**: 保持对话上下文（最近3轮）
- **超时处理**: 30秒请求超时
- **优雅退出**: 支持 Ctrl+C 中断
- **状态监控**: 实时显示当前使用的 key

祝你使用愉快！🚀
