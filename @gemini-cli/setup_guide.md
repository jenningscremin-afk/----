# 多AI服务CLI工具使用指南

## 问题解决

您遇到的Gemini API配额限制问题已经通过新的多AI服务CLI工具解决。

## 新工具特点

1. **多服务支持**: 支持Gemini、通义千问、Claude等多个AI服务商
2. **智能切换**: 当一个服务配额用完时，自动切换到其他可用服务
3. **配额管理**: 自动检测配额限制，24小时后自动重置
4. **错误处理**: 智能错误处理和重试机制

## 使用方法

### 1. 运行新工具
```bash
cd @gemini-cli
python alternative_ai_cli.py
```

### 2. 配置其他AI服务（可选）

#### 通义千问配置
1. 访问 [阿里云百炼平台](https://bailian.console.aliyun.com/)
2. 获取API Key
3. 在 `ai_config.json` 中添加：
```json
"qwen": {
  "enabled": true,
  "keys": ["your_qwen_api_key_here"]
}
```

#### Claude配置
1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 获取API Key
3. 在 `ai_config.json` 中添加：
```json
"claude": {
  "enabled": true,
  "keys": ["your_claude_api_key_here"]
}
```

## 命令说明

- `quit/exit/q` - 退出程序
- `switch` - 手动切换到下一个服务
- `status` - 显示所有服务的状态信息
- `help` - 显示帮助信息

## 配额限制解决方案

### 1. 立即解决方案
- 使用新的多AI服务CLI工具
- 自动在多个服务间切换
- 避免单一服务配额限制

### 2. 长期解决方案

#### Gemini配额增加
1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 进入 "IAM & Admin" > "Quotas"
3. 搜索 "Gemini API"
4. 申请配额增加

#### 启用付费计划
1. 在Google Cloud Console中启用计费
2. 付费计划提供更高的配额限制
3. 按使用量付费，更灵活

## 免费替代方案

### 1. 通义千问
- 阿里云提供的免费AI服务
- 每月有免费额度
- 国内访问速度快

### 2. 文心一言
- 百度提供的AI服务
- 有免费试用额度
- 中文支持好

### 3. 月之暗面
- 国内AI公司
- 提供免费API额度
- 性能优秀

## 使用建议

1. **配置多个服务**: 建议至少配置2-3个不同的AI服务
2. **监控使用量**: 定期检查各服务的使用情况
3. **合理使用**: 避免频繁的重复请求
4. **备份方案**: 始终有备用的AI服务可用

## 故障排除

### 如果所有服务都不可用
1. 检查网络连接
2. 验证API密钥是否正确
3. 检查服务商是否有维护
4. 等待配额重置（通常24小时）

### 如果响应质量不佳
1. 调整temperature参数
2. 尝试不同的模型
3. 优化prompt内容
4. 使用更高级的付费模型

## 联系支持

如果遇到问题，可以：
1. 查看错误日志
2. 检查服务状态
3. 联系相应的AI服务商支持
4. 在GitHub上提交issue
