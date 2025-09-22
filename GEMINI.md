# GEMINI.md

本项目的 Gemini CLI 定制说明（在项目根）。CLI 会自动读取此文件作为上下文与行为参考。

## 模型与 API
- 推荐模型：
  - `gemini-2.5-pro`（高质量）
  - `gemini-2.5-flash`（低延迟）
  - `gemini-2.5-flash-lite-preview-06-17`（更省）
- API 基地址：`https://generativelanguage.googleapis.com`
- 环境变量：已在本机设置 `GOOGLE_API_KEY`。

## IDE 集成（Cursor）
- 已连接：在 CLI 输入 `/ide status` 应显示 `🟢 Connected to Cursor`。
- 常用：
  - 预览并应用变更：`/ide diff`
  - 查看状态：`/ide status`
  - 需要时可在编辑器运行命令“Gemini Code Assist: Show Code Actions”。

## 上下文包含规则
- 项目根目录：`D:/WPS Office/2025/254805819/WPS云盘/教材/在线课堂`
- 常用包含：
  - `common-assets/`
  - `课件/`
  - `网页资源/`
  - `故事书/`
  - `习题/`
- 排除建议（如需大体量资源排除）：
  - 图片、二进制、PDF：`*.png`, `*.jpg`, `*.pdf`, `*.ttf`, `*.woff*`
  - 第三方库的打包产物

## 代码风格与编辑原则
- 保持文件现有缩进与格式，不混用空格/Tab。
- 中文内容保持简洁；脚本/样式遵循现有风格。
- 修改前在 CLI 中简述目标；通过 `/ide diff` 审阅与应用。

## 常用工作流
1. 在 Cursor 集成终端启动：
   ```powershell
   cd "D:\WPS Office\2025\254805819\WPS云盘\教材\在线课堂"
   gemini
   ```
2. 确认 IDE 连接：
   ```
   /ide status
   ```
3. 包含目录（如需要）：
   ```
   /include .
   ```
4. 提出修改需求（尽量具体），然后：
   ```
   /ide diff
   ```
5. 验证与提交（可选）：
   ```
   /git status
   ```

## 任务示例
- 优化 `课件/第1章代数.html` 图表边距/布局。
- 修复 MathJax 渲染延迟与公式溢出问题。
- 为课件页添加目录锚点与返回顶部按钮。
- 资源性能优化（延迟加载、合并、缓存提示）。

---
如遇 IDE 异常：
- 在 CLI 输入 `/ide status`；若未连接，先 `gemini` 再尝试自动连接。
- 若编辑器命令报错，打开“输出(Output)”查看“Gemini Code Assist / Companion”日志，并反馈错误信息。
