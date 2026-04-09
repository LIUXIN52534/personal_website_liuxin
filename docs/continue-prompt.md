# Continue Prompt

将下面这段直接复制到新对话中使用：

```text
你现在是在继续开发个人网站 V1。

工作目录：
C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin-dev

先做这些事，不要跳过：
1. 先检查仓库状态
2. 先完整阅读这些文档，并以它们为唯一事实来源：
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\decisions.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\PRD.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\development-plan.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\development-rfc.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\ralph-loop-runbook.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\ralph-loop-execution-log.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\content-schema.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\content-source-map.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\design-tokens.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\hero-layout-spec.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\component-catalog.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\asset-spec.md
   - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\i18n-metadata-contract.md
3. 以 execution log 为最新进度基线
4. 按最新用户反馈继续做，不要重复已经完成的首页和作品页结构调整

当前已完成状态：
- 首页已按用户反馈调整：
  - 顶部身份线改为“玩法/AI策划 | 能工智人”
  - Hero 去掉说明性文字和公开邮箱条
  - 标题改为“正在编织游戏梦”
  - 首页个人总结/关注方向已改
- About 页里对应的个人总结/关注方向文本已同步
- /work 页面已重做：
  - 去掉页面顶部 intro 区块
  - “优先展示的主案例”改为“近期作品”
  - “其他公开作品”改为“其他作品”
  - 近期作品与其他作品卡片样式已统一
  - AI开发模拟错误的 Bilibili 按钮已删除
  - 新增两个简历外链作品：
    - 深圳奥拓盖母 AI 演示
    - Multi-Agent互动游戏实践——复刻斯坦福小镇
- Journal 已从当前 V1 的导航、路由和 sitemap 中移除
- 详情页通用结构已开始精简：
  - 顶部年份/媒介/可见性说明已删除
  - “关键点”和“媒体状态”区块已删除
- 第一个详情页 `AI开发模拟` 已按用户提供的新“项目说明”改好

当前明确下一步：
- 从详情页逐个继续改
- 先从用户刚确认后的详情页基线继续
- 每次只处理一个作品详情页，改完后停下确认，再继续下一个

严格执行要求：
- 保持首页 hero 既有方向，不要改回普通 landing page
- 保留 reduced-motion fallback
- 每做一块都同步更新：
  - C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\docs\ralph-loop-execution-log.md
- 验证至少包括：
  - npm run dev
  - npm run lint
  - npm run build
  - 本地浏览器验证
- 最终或阶段性汇报格式：
  - 当前处理到哪个页面/作品
  - 改了什么
  - 跑了哪些验证
  - 还有什么风险或 blocker
```

