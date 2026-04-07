# 个人网站 V1 PRD

## 1. 产品摘要

这是一个面向 `个人展示 + 求职导向` 的双语个人网站。V1 的核心目标不是做成传统在线简历，也不是做成纯视觉实验页，而是用一个记忆点足够强的首页建立第一印象，再把招聘方和潜在合作方稳定导流到作品集、公开版履历和联系方式页面。

首发范围固定为：

- 首页 `/`
- 作品集 `/work`
- About / 简历 `/about`
- 联系方式 `/contact`
- Journal 占位页 `/journal`
- 英文镜像 `/en/*`

## 2. 产品定位

### 2.1 面向人群

- 游戏行业招聘方、面试官、用人经理
- 互动内容、AI 产品、技术策划相关团队的潜在合作方
- 对游戏策划、AI 工作流、互动系统设计感兴趣的同行访问者

### 2.2 个人公开定位

根据当前简历内容，网站公开定位先按以下方向组织：

- 主轴身份：`游戏策划 / 技术策划 / AI 应用与互动系统实践者`
- 内容气质：`视觉辨识度强，但表达清楚、结构化、可被招聘方快速理解`
- 求职场景：`偏个人展示与岗位匹配，不做纯艺术化自嗨页面`

## 3. 成功标准

- 首页在 5 到 8 秒内建立明确身份感和视觉记忆点。
- 招聘方在 1 分钟内能找到作品、履历、联系方式。
- 作品页支持视频、文档、XMind 查看器与独立详情页入口。
- About 页呈现的是“公开版网页履历”，不是原始 PDF 逐字搬运。
- 中文与英文页面结构一致，英文允许在 V1 由中文主稿派生。
- 后续内容维护以仓库文件为主，不依赖 CMS。

## 4. 已确认决策

### 4.1 技术与部署

- 框架：`Next.js App Router`
- 包管理：`npm`
- 主部署目标：`Vercel`
- 次级兼容目标：`Cloudflare Workers`
- `Cloudflare Pages` 仅作为纯静态输出备选，不作为 App Router 全功能部署默认路径
- 内容来源：仓库内静态文件和结构化数据

部署细则见 [deployment-matrix.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/deployment-matrix.md)。

### 4.2 页面策略

- 首页展示优先，不承载全部信息。
- 作品、About、Contact 都是独立页面。
- Journal 在 V1 只做占位入口，不接完整博客系统。
- Contact 在 V1 不做表单，直接公开 `邮箱 + 微信 + 手机`。
- 网站首发双语，中文为主版本，英文放在 `/en`。

### 4.3 风格方向

- 采用你已确认的方向：`C 为主，偏 A 一点`
- 不直接照抄参考图内容，只吸收其 `系统感、海报感、数字档案感`
- 首页偏视觉与氛围，内页偏信息效率与阅读体验
- 首页整体氛围与图案语言参考 `vibe.jpg`
- 画面中的 glitch / 故障 / scanline / signal drift 等动态效果以代码实现，而不是完全依赖静态图

## 5. 视觉系统定义

### 5.1 Visual Thesis

首页像一张带有系统注记的数字海报，介于作品集封面、未来感履历封套和交互档案页面之间；内页则回到更克制、更清晰的编辑式信息结构。

### 5.2 Content Plan

- Hero：姓名、定位、主视觉、首要导流
- Support：精选项目或关键能力切片
- Detail：接近完整公开版履历、方法论、技能与经历
- Final CTA：联系、下载 PDF、跳转作品详情

### 5.3 Interaction Thesis

- Hero 有一层轻量动态氛围：scanline / noise / grid / signal drift
- 作品入口在 hover 或 focus 时出现轻微失真、位移或 metadata reveal
- 页面切换与区块进入采用简洁但可感知的 reveal，而不是重型转场

### 5.4 Do / Don't

Do:

- 让首屏像一张“可操作的海报”，而不是组件拼接页
- 使用细线、编号、坐标、元数据标签来建立系统感
- 让视觉特征主要通过 `CSS / SVG / 轻量 Canvas` 完成
- 让首页和内页形成明显层次差：首页抓人，内页解释

Don't:

- 不做通用 SaaS 卡片首页
- 不做多主题切换器
- 不把全部内容塞进一个超长单页里
- 不把重型 WebGL 作为站点成立前提

## 6. 信息架构

### 6.1 路由结构

中文：

- `/`
- `/work`
- `/about`
- `/contact`
- `/journal`

英文：

- `/en`
- `/en/work`
- `/en/about`
- `/en/contact`
- `/en/journal`

### 6.2 导航结构

全站主导航固定为：

- Work
- About
- Contact
- Journal
- CN / EN 切换

首页首屏必须直接提供：

- 进入作品集的入口
- 打开 About / 简历的入口
- 联系方式快捷入口

## 7. 页面需求

### 7.1 首页

首页职责：

- 建立身份与风格识别
- 用一句明确定位说明“你是谁、你做什么”
- 把访问者导流到作品、履历、联系入口

首页建议结构：

1. Hero 主视觉区
2. 快捷导流区
3. 精选项目预览
4. 履历与联系摘要

首页已经确定的核心内容：

- Hero 标题：`正在编制游戏梦`
- Hero 副标题：`Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、互动结构与游戏体验`
- 首页联系方式摘要：仅展示邮箱
- Hero 布局倾向：实验性、不完全对称
- 详细布局见 [hero-layout-spec.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/hero-layout-spec.md)

首页文案原则：

- 可以有氛围感，但不能牺牲可理解性
- 必须保留一条清晰的职业定位句
- 不能出现只对设计同行有意义、对招聘方无帮助的空泛文案

### 7.2 作品集页

作品集页职责：

- 展示多媒介作品与案例入口
- 区分精选项目与普通项目
- 支持站内媒体展示与独立详情页

V1 支持的作品形态：

- 站内视频作品
- 站内 XMind 查看页
- 文档 / 方案 / 拆解稿
- 其他网页型作品入口

V1 已确认：

- 首页只做 Featured 预览
- 所有作品都有独立详情页
- Featured 详情页使用“标题 + 简介 + 主媒体 + 项目说明”结构
- 次级作品详情页使用“主媒体 + 短说明”结构
- `哈迪斯系统拆解.xmind` 使用官方 `xmind-embed-viewer` 加站内包装 UI
- Quark 网盘链接不接入 V1，因为本地媒体已齐

### 7.3 About / 简历页

About 页职责：

- 以网页形式呈现公开版模块化履历
- 提供正式 PDF 下载

V1 建议模块：

- 简短自我介绍
- 当前关注方向
- 经历模块
- 教育模块
- 技能 / 工具模块
- 简历 PDF 下载入口

说明：

- About 页按“接近完整公开简历”密度处理
- 仍然会做网页化整理，而不是直接把 PDF 内容平铺到页面上

### 7.4 Contact 页

Contact 页职责：

- 提供高意图联系入口
- 支持直接复制或保存联系方式

V1 候选公开字段：

- 邮箱
- 微信号
- 手机号

说明：

- GitHub / LinkedIn 不进入 V1
- 默认不做表单，不做复杂反抓取逻辑

### 7.5 Journal 占位页

Journal 页职责：

- 作为后续文章入口的公开占位
- 保持导航结构完整

V1 只需要：

- 页面标题
- 一段简短说明
- “后续会更新文章”提示

## 8. 内容模型

### 8.1 SiteConfig

至少包含：

- 中文名
- 英文名
- 中英文定位语
- 中英文副标题
- 联系方式
- 社交链接
- 站点级 metadata
- alternates / canonical 规则

### 8.2 ProjectEntry

至少包含：

- `slug`
- `title_zh`
- `title_en`
- `summary_zh`
- `summary_en`
- `medium`
- `platform`
- `year`
- `tags`
- `featured`
- `featured_reason`
- `thumbnail`
- `external_url`
- `link_label`
- `visibility`
- `cover_type`
- `cover_asset`
- `cta_label`
- `sort_order`
- `source_note`

### 8.3 ResumeProfile

至少包含：

- `intro_zh`
- `intro_en`
- `focus_zh`
- `focus_en`
- `experience`
- `education`
- `skills`
- `interests`
- `certificates`
- `resume_pdf_path`

详细字段见 [content-schema.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/content-schema.md)。

### 8.4 i18n And Metadata Contract

产品级默认约定：

- 中文为主版本，英文为镜像版本
- `/en` 页面保留结构一致性，允许文案先使用中文主稿派生
- 语言切换尽量保持“同一信息目的地”而不是跳回首页
- 站点需要为中英文页面生成明确的 canonical 与 alternates

详细约定见 [i18n-metadata-contract.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/i18n-metadata-contract.md)。

## 9. 已掌握的内容来源

当前已从简历 `刘鑫_策划.pdf` 中确认：

- 中文名：`刘鑫`
- 英文名：`Liu Xin`
- 联系方式：邮箱、微信、手机、城市
- 教育背景：东华大学，信息管理与信息系统，GPA 3.87，前 15%
- 经历方向：网易互娱、腾讯 START、奥拓盖母、腾讯光子 H 工作室
- 项目方向：Multi-Agent 互动游戏实践、腾讯游戏策划公开课、CIGA Game Jam
- 作品来源：简历中的 Bilibili / Quark 线索 + 本地 `AI 实践作品` 目录
- 本地作品目录：`AI 实践作品/`

详细整理见 [content-source-map.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/content-source-map.md)。
最终决策见 [decisions.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/decisions.md)。

## 10. 仍需确认的输入

- 域名名称与最终部署目标
- 每个项目页的中英文简介精修
- 站内视频封面帧与 poster 图最终选择

素材与封面规范见 [asset-spec.md](/c:/Users/12067/Desktop/Vibe%20coding/personal_website_liuxin/docs/asset-spec.md)。

## 11. 非目标

V1 明确不包含：

- CMS
- 评论系统
- 完整博客系统
- 多主题切换
- 后台管理
- 联系表单
- 重度 3D 场景作为首发依赖

## 12. 验收标准

- 中英文页面都能独立访问
- 首页能在 10 秒内说明身份与去向
- Work 页支持多媒介项目卡片与站内详情页跳转
- About 页支持网页履历模块和 PDF 下载
- Contact 页支持公开联系方式直出
- Journal 占位页可从导航访问
- 页面在桌面端和移动端都保持统一气质与清晰层次

---

文档版本：2.3  
更新日期：2026-04-08
