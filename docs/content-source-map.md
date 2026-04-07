# Content Source Map

## 1. Source Of Truth

- Source file: `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\刘鑫_策划.pdf`
- Parsed on: `2026-04-03`
- Purpose: provide a stable content source summary for PRD, RFC, and future implementation without repeatedly re-reading the PDF

## 2. Identity And Contact

- Chinese name: `刘鑫`
- Public status in resume: `在校生`
- Phone: `13162866856`
- Email: `liuxin52534@gmail.com`
- City: `上海`
- WeChat: `Sonambulo_0827`

Implementation note:

- Website should not automatically expose every resume contact field.
- The current approved public scope for V1 is `email + WeChat + phone`.

## 3. Education

- School: `东华大学`
- Program: `信息管理与信息系统`
- School tag in resume: `211 / 双一流`
- Degree: `本科`
- College: `旭日工商管理学院`
- Location: `上海`
- Time range in resume: `2020-06` to `2026-06`
- GPA: `3.87`
- Rank: `前 15%`

Public-site implication:

- About 页可以把这部分压缩成一条强信息，而不是完整照搬简历格式。

## 4. Experience Sources

### 网易互娱《万民长歌》项目组

- Role: `玩法策划`
- Time range in resume: `2025-12 - 至今`
- Strong signals:
  - 图鉴系统设计与历史文本结构化
  - 低代码 UGC 编辑器功能搭建
  - AI Skill / MCP / UE-UMG 工作链路
  - 势力 AI 差异化设计与规则生成

Public-site implication:

- 这段经历很适合被提炼成“系统设计 + AI 工具链 + 游戏体验落地”的代表案例。

### 腾讯 START 产品中心

- Role: `平台产品运营`
- Time range in resume: `2025-08 - 2025-12`
- Strong signals:
  - 厂商合作与平台商业化落地
  - 云游戏体验、兼容、Touch 适配优化
  - AI 自动化告警与运维效率提升

Public-site implication:

- 适合作为“平台视角 + 业务落地 + AI 自动化”的支撑经历，不一定要在首页突出。

### 深圳奥拓盖母科技有限公司

- Role: `技术策划`
- Time range in resume: `2023-11 - 2025-02`
- Strong signals:
  - 实时 AI 角色生产管线搭建
  - Diffuser TensorRT 推理加速与后端服务
  - 节点式 GPT 到 SD 出图工具
  - AI 驱动实时生成剧情 / UGC 玩法
- Demo video:
  - `https://www.bilibili.com/video/BV1HjnozhELr`

Public-site implication:

- 这是非常适合放进精选作品池的“AI 工程化 + 玩法落地”案例。

### 腾讯光子工作室群 H 工作室

- Role: `角色设计（AI 技术）`
- Time range in resume: `2023-04 - 2023-10`
- Strong signals:
  - 定制化 AI 美术工具和模型
  - LoRa / checkpoint / controlnet 训练与流程标准化
  - AI 小玩法原型探索

Public-site implication:

- 适合作为“AI 生产工具 + 游戏制作协作”背景支撑。

## 5. Project Sources

### Multi-Agent 互动游戏实践——复刻斯坦福小镇

- Time range in resume: `2025-06 - 2026-07`
- Strong signals:
  - 长短期记忆与 RAG
  - 事件优先级排序与空间感知
  - 长短规划与 Reflection 机制
  - Reacting 与连续对话生成
- Demo video:
  - `https://www.bilibili.com/video/BV1amTvzXE8q`

Public-site implication:

- 非常适合成为首页和作品页的 Featured 头部项目。

### 2022 腾讯游戏策划公开课

- Role in resume: `玩法策划`
- Strong signals:
  - 系统、玩法、引导优化
  - 行为树配置、经验曲线设计
  - 美术需求与验收标准整理

Public-site implication:

- 更适合作为 About 页或 Work 页中的支撑型项目。

### 2023 CIGA Game Jam

- Role in resume: `玩法策划`
- Strong signals:
  - 主题拆解与核心玩法落地
  - 与程序、美术协作迭代
  - 地图环境、UI 与资源配置
- Demo video:
  - `www.bilibili.com/video/BV1W34y1p7QS/`

Public-site implication:

- 可作为“短周期协作与落地能力”的补充项目。

## 6. Portfolio Links Found In PDF

Text links:

- `https://www.bilibili.com/video/BV1HjnozhELr`
- `https://www.bilibili.com/video/BV1amTvzXE8q`
- `www.bilibili.com/video/BV1W34y1p7QS/`

QR / annotation links extracted from page 2:

- `https://pan.quark.cn/s/95e6b7b2d449`
- `https://pan.quark.cn/s/021ee894165a`

V1 decision:

- The PDF text shows `AI游戏实践 / HADES系统拆解案 / 模型制作参考`
- The two Quark URLs are intentionally not wired into V1 because local media files are already available

## 6.1 V1 Local Work Asset Inventory

Local asset directory:

- `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\AI 实践作品`

Featured:

- `AI开发模拟.mp4`
  - slug: `ai-dev-simulation`
  - order: `1`
- `玩法流程demo演示.mp4`
  - slug: `gameplay-flow-demo`
  - order: `2`
- `势力 AI demo 演示.mp4`
  - slug: `faction-ai-demo`
  - order: `3`
- `哈迪斯系统拆解.xmind`
  - slug: `hades-system-breakdown`
  - order: `4`

Secondary:

- `人物图鉴系统demo.mp4`
- `势力地图演示.mp4`
- `大事年表图鉴.mp4`

V1 rule:

- All of the above will be shown in the site
- All of them get their own detail pages
- Local media replaces the need to wire Quark links in V1

## 7. Skills, Certificates, Interests

- Skills:
  - `ComfyUI`
  - `Coze`
  - AI workflow design
  - UE awareness
  - AI 应用工程化落地
- Certificates / tools listed:
  - `Python`
  - `SQL`
  - `Tableau`
- Interests:
  - `吉他`
  - `摄影`
- Language:
  - `英语 CET-6`
  - `雅思 6.5`

Public-site implication:

- 技能模块应突出“AI workflow + 游戏策划 + 工具落地”的组合，而不是简单技能点堆叠。

## 8. Not Recommended For Direct Homepage Use

以下内容更适合作为 About 页补充，不建议直接塞进首页：

- 完整游戏经历清单
- 过长的经历 bullet 原文
- 过细的技术名词堆叠
- 所有联系字段同时展示

## 9. Recommended Featured Candidate Pool

该节已被 `docs/decisions.md` 与本地素材目录确认结果替代，不再作为待选池使用。

---

Document version: 1.2  
Updated: 2026-04-08
