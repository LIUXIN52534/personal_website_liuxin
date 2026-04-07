# 个人网站 V1 开发文档

## Summary

项目采用 `Next.js App Router + TypeScript + npm` 初始化，内容以仓库内结构化文件管理，站点结构为 `中文根路径 + /en 英文镜像`。  
首页负责视觉展示与高强度导流，详细信息拆到独立页面；V1 首发上线 `首页 / 作品集 / About-简历 / Contact / Journal 占位页`。  
视觉方向固定为 `C 为主，偏 A 一点`，强调“海报感、系统感、数字档案感”，同时保持招聘场景下的清晰表达。  
长期自动开发采用 `主仓文档基线 + 独立 git worktree + checkpoint 式 Ralph loop`，主仓负责文档和审阅，worktree 负责实际实现。

## 1. 现在已经具备的输入

### 1.1 已确认素材

- 简历 PDF：`刘鑫_策划.pdf`
- 联系信息：邮箱、手机、微信、城市
- 英文公开名：`Liu Xin`
- Hero 标题：`正在编制游戏梦`
- Hero 副标题：`Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、互动结构与游戏体验`
- 教育背景：东华大学 / 信息管理与信息系统 / GPA 3.87 / 前 15%
- 经历来源：网易互娱、腾讯 START、奥拓盖母、腾讯光子 H 工作室
- 项目来源：Multi-Agent 互动游戏实践、腾讯游戏策划公开课、CIGA Game Jam
- 作品主目录：`AI 实践作品`
- 已发现作品链接：
  - `https://www.bilibili.com/video/BV1amTvzXE8q`
  - `https://www.bilibili.com/video/BV1HjnozhELr`
  - `www.bilibili.com/video/BV1W34y1p7QS/`
  - `https://pan.quark.cn/s/95e6b7b2d449`
  - `https://pan.quark.cn/s/021ee894165a`

### 1.2 仍需你确认的内容

- 域名名称
- 每个项目页中英文简介精修
- poster 帧和封面图最终选择

## 2. 工程方案

### 2.1 推荐基础架构

- 使用 `Next.js App Router + TypeScript + npm`
- 默认采用 `static-first`，必要时才引入少量客户端交互
- 内容全部放在仓库内，不接 CMS
- Journal 在 V1 只做占位，不接 MDX 发布系统

### 2.2 样式实现策略

- `Tailwind` 负责布局、间距、断点与基础排版
- `globals.css / CSS Modules / SVG / 轻量 Canvas` 负责 ASCII、noise、scanline、hairline、metadata panel 等视觉特征
- `Three.js / 重型 WebGL` 不作为首发依赖，仅在首页结构稳定后再评估

### 2.3 部署策略

- 主路径：`Vercel`
  - 默认生产环境与预览环境
  - 适合作为 Next.js App Router 的零配置部署路径
- 兼容路径：`Cloudflare Workers`
  - 仅在明确有 Cloudflare 平台需求时启用
  - 必须按 Workers 运行时做一次本地 `preview` 验证
- 退化路径：`Cloudflare Pages`
  - 仅在站点保持纯静态输出时考虑
  - 一旦引入 SSR、middleware、route handlers，就不能把 Pages 视为等价默认目标

部署规则见 [deployment-matrix.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/deployment-matrix.md)。

### 2.4 内容模型

实现阶段固定建立以下数据层：

- `SiteConfig`
- `ProjectEntry`
- `ResumeProfile`
- `ContactConfig`
- `LocalizedCopy`

字段细则见：

- [decisions.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/decisions.md)
- [content-schema.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/content-schema.md)
- [i18n-metadata-contract.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/i18n-metadata-contract.md)
- [asset-spec.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/asset-spec.md)
- [design-tokens.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/design-tokens.md)
- [hero-layout-spec.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/hero-layout-spec.md)
- [component-catalog.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/component-catalog.md)

## 3. 路由与页面范围

### 3.1 固定路由

- `/`
- `/work`
- `/about`
- `/contact`
- `/journal`
- `/en`
- `/en/work`
- `/en/about`
- `/en/contact`
- `/en/journal`

### 3.2 页面职责

首页：

- 强主视觉 Hero
- 快速导流入口
- 精选项目预览
- 履历与联系摘要

作品页：

- 多媒介项目列表
- `featured` 置顶排序
- 所有项目进入独立详情页
- 站内直接播放本地视频
- 站内直接展示 XMind 交互查看器

About 页：

- 模块化网页简历
- 公开版经历与教育
- 技能 / 工具 / 兴趣
- PDF 下载入口

Contact 页：

- 直接展示公开联系信息
- 公开 `邮箱 + 微信 + 手机`
- 不做表单

Journal 页：

- 公开占位页
- 说明未来会更新文章

## 4. 版本管理与工作树策略

### 4.1 当前仓库角色

- 主仓目录：`C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin`
- 主仓职责：文档、规划、审阅、基线管理
- 当前状态：baseline commit 已创建，worktree 已初始化

### 4.2 审阅后执行的基线步骤

当你 review 当前文档并确认后，按下面顺序建立可长期自动开发的基线：

```powershell
git branch -m main
git add .gitignore docs
git commit -m "docs: establish personal site v1 baseline"
git worktree add ..\personal_website_liuxin-dev -b feat/site-v1-foundation
```

### 4.3 分工方式

- 窗口 A：主仓，用于看文档、补素材、审阅进度
- 窗口 B：`personal_website_liuxin-dev`，用于长时间自动开发
- 自动开发按 checkpoint 停靠并提交，不跑超长连续链路

## 5. 开发边界

### 5.1 已锁定边界

- `V1` 不做 CMS
- `V1` 不做完整博客系统
- `V1` 不做表单
- `V1` 不做多主题切换
- `V1` 不做站内统一视频/XMind 播放器
- `V1` 不用重型 3D 作为首发依赖

### 5.2 公开内容边界

- 首页不展示完整原始简历内容
- About 页使用“公开版履历”，强调与你的目标岗位相关的内容
- 简历里的完整游戏经历清单不建议直接搬到首页或 Contact
- 联系方式页面默认优先公开邮箱，其余字段等你确认

### 5.3 视觉边界

- 首页允许最强视觉表达
- 内页必须更理性、更利于阅读
- 默认卡片化程度低，优先海报式区块、列表、分栏和 metadata 面板
- 动效用于建立层次，不用于堆砌噱头

## 6. Checkpoint 计划

说明：

- `Checkpoint 0-5` 是面向人阅读的阶段分组
- 它们与 RFC 中 `U0-U8` 的映射关系如下：
  - `Checkpoint 0` -> `U0`
  - `Checkpoint 1` -> `U1 + U2 + U3`
  - `Checkpoint 2` -> `U4`
  - `Checkpoint 3` -> `U5 + U6 + U7`
  - `Checkpoint 4` -> `U5/U6/U7` 的真实内容接线补充
  - `Checkpoint 5` -> `U8`

### Checkpoint 0：文档与基线

- 修订 PRD、RFC、Runbook、Checklist
- 建立 baseline commit
- 创建 worktree

### Checkpoint 1：工程脚手架

- 初始化 Next.js
- 建立 App Router 路由骨架
- 接通双语结构
- 落地全局设计 token
- 建立 metadata / alternates / sitemap 规则
- 建立共享 locale 数据访问模式

### Checkpoint 2：首页与视觉系统

- Hero 主视觉
- 全局导航
- metadata panel / hairline 系统
- 轻量氛围动效与 reduced-motion 降级
- 根据 `vibe.jpg` 落地 hero 视觉基底
- 用代码实现 glitch / fault / scanline 效果

### Checkpoint 3：作品、About、Contact、Journal

- Work 页面列表与详情页逻辑
- Featured 独立详情页
- Secondary 独立详情页
- About 页面公开版履历
- Contact 页面直出联系信息
- Journal 占位页
- 项目 visibility / platform / CTA 呈现规则
- XMind 查看器封装与接入

### Checkpoint 4：内容接线与双语整理

- 接入真实简历与作品数据
- 英文文案派生与校对
- 精选项目排序与封面替换

### Checkpoint 5：细节打磨与部署准备

- 响应式细化
- SEO 与 metadata
- 构建验证
- 域名 / Vercel 接线准备
- 如需 Cloudflare 兼容，补充 Workers preview / deploy 验证

## 7. 验证计划

### 最低验证

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- 如果启用 Cloudflare 兼容路线，再增加 `npm run preview`

### 路由验证

- 中文首页与英文首页
- `/work`
- `/about`
- `/contact`
- `/journal`

### 内容验证

- 多媒介项目卡片可渲染
- `featured` 项目排序生效
- PDF 下载入口存在
- Contact 页字段可直接复制和阅读

### 体验验证

- 首页在桌面和移动端都保留“海报感 + 导流”
- 内页阅读效率高于首页
- 无素材时能正确显示高质量占位
- 降低动效设置下仍然可用

## 8. 当前建议

当前阶段最适合做的是：

1. 以当前文档为基线进入 U1。
2. 在 `personal_website_liuxin-dev` 中初始化 Next.js 工程。
3. 按 RFC 和 runbook 逐 unit 推进。

这样后续 Ralph loop 就不会一边写代码，一边返工产品定义。

---

文档版本：2.4  
更新日期：2026-04-08
