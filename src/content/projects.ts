import type { ProjectDetailEntry } from "@/content/types";

export const projects = [
  {
    slug: "ai-dev-simulation",
    titleZh: "AI开发模拟",
    titleEn: "AI Development Simulation",
    summaryZh: "参与构建低代码UGC编辑器功能，实现玩法原型的快速落地。",
    summaryEn:
      "Built low-code UGC editor capabilities to speed up gameplay prototype production.",
    medium: "video",
    platform: "local-file",
    year: "2026",
    tags: ["UGC Editor", "OpenCode", "MCP"],
    featured: true,
    featuredReason: "Featured opener for homepage and work index",
    sortOrder: 1,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Featured asset confirmed in decisions.md",
    detailIntroZh:
      "参与编辑器界面交互逻辑设计实现，内置编辑器接入OpenCode与Aion UI，打通“spec生成 HTML → MCP 协议映射 UE·UMG 资产”的技术链路。实现玩法原型的快速落地。",
    detailIntroEn:
      "Designed and implemented editor interaction logic, connected the built-in editor to OpenCode and Aion UI, and linked spec-generated HTML to UE/UMG assets through MCP so gameplay prototypes could land much faster.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/AI开发模拟.mp4",
  },
  {
    slug: "gameplay-flow-demo",
    titleZh: "玩法流程 Demo 演示",
    titleEn: "Gameplay Flow Demo",
    summaryZh: "快速落地玩法流程，验证“spec生成→ MCP 协议映射资产”的技术链路。",
    summaryEn:
      "Rapidly assembled a gameplay flow to validate the chain from spec generation to MCP-based asset mapping.",
    medium: "video",
    platform: "local-file",
    year: "2025",
    tags: ["Gameplay Flow", "MCP", "Pipeline"],
    featured: true,
    featuredReason: "Featured gameplay structure case",
    sortOrder: 2,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Featured asset confirmed in decisions.md",
    detailIntroZh:
      "围绕玩法流程的快速落地展开，重点验证“spec生成 → MCP 协议映射资产”这条技术链路是否足够稳定，让策划描述可以更快转成可演示、可继续迭代的内容。",
    detailIntroEn:
      "This demo focuses on rapidly landing a gameplay flow while validating whether the chain from spec generation to MCP-based asset mapping is stable enough for iterative production.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/玩法流程demo演示.mp4",
  },
  {
    slug: "faction-ai-demo",
    titleZh: "势力 AI Demo 演示",
    titleEn: "Faction AI Demo",
    summaryZh: "能根据环境感知和agent交互动态调整外交与军事策略，提供了差异化的体验。",
    summaryEn:
      "Adjusts diplomatic and military strategy through environmental awareness and agent interaction to create differentiated play.",
    medium: "video",
    platform: "local-file",
    year: "2025",
    tags: ["Agent Systems", "Strategy", "AI Gameplay"],
    featured: true,
    featuredReason: "Featured because it connects AI behavior and game rules",
    sortOrder: 3,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Featured asset confirmed in decisions.md",
    detailIntroZh:
      "围绕势力 agent 在外交和军事层的动态决策展开，重点验证环境感知、agent 互动与策略反馈如何共同作用，让不同局势下的行为变化真正转化为差异化体验。",
    detailIntroEn:
      "This faction-agent demo focuses on dynamic diplomatic and military decision-making, testing how environmental awareness, agent interaction, and strategic feedback work together to turn changing situations into differentiated play.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/势力 AI demo 演示.mp4",
  },
  {
    slug: "hades-system-breakdown",
    titleZh: "哈迪斯系统拆解",
    titleEn: "Hades System Breakdown",
    summaryZh: "为深入研究优秀动作类 Roguelike 游戏的系统闭环与心流体验，采用自上而下的逆向拆解法，对《Hades》的系统架构进行结构化分析，产出涵盖核心战斗、局外养成及UI交互的完整Xmind系统脑图。",
    summaryEn:
      "A system breakdown of Hades that organizes loops, progression, rewards, and decision feedback into a document-oriented featured project.",
    medium: "document",
    platform: "local-file",
    year: "2025",
    tags: ["System Design", "Loop Analysis", "XMind"],
    featured: true,
    featuredReason: "Featured document case with dedicated XMind viewer plan",
    sortOrder: 4,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Will use official xmind-embed-viewer in U5",
    detailIntroZh:
      "1. Build系统与随机性控制：深度剖析神明祝福（Boons）、武器形态与代达罗斯之锤的组合逻辑。提炼其在 Buff 投放上的设计哲学，分析其如何平衡随机池（RNG）与玩家流派构筑（Build）的可控性。\n\n2. Roguelike循环与局外养成：拆解游戏中的各类资源产出与消耗模型，分析“镜子天赋”与“宫殿建设”等局外成长系统如何平滑玩家的挫败感，并提供长线的 Meta-progression 驱动力。\n\n3. Boss战机制与UI交互体验：梳理各阶层 Boss 行为树与阶段性机制难度阶梯；结合高烈度战斗场景，分析UI界面的信息层级排布与视觉引导机制，总结其在快节奏战斗中保持信息清晰的优良设计实践。\n\n分析沉淀：提炼出成熟的动作 Roguelike 游戏在难度动态调节、正向反馈链路及数值乘区构建上的核心设计范式，形成系统设计方法论库，并反哺于个人的 Game Jam 等独立开发项目中。",
    detailIntroEn:
      "This breakdown is embedded with the official xmind-embed-viewer and focuses on how loops, rewards, and decision feedback are organized as a coherent system.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/哈迪斯系统拆解.xmind",
  },
  {
    slug: "autogame-ai-demo",
    titleZh: "深圳奥拓盖母 AI 演示",
    titleEn: "Autogame AI Demo",
    summaryZh: "围绕实时 AI 角色生产、工具链与玩法落地的演示项目，来自深圳奥拓盖母阶段的公开案例。",
    summaryEn:
      "A public demo from the Autogame period, centered on real-time AI character production, tools, and gameplay implementation.",
    medium: "video",
    platform: "bilibili",
    year: "2024",
    tags: ["AI Production", "Toolchain", "Gameplay"],
    featured: false,
    sortOrder: 5,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "https://www.bilibili.com/video/BV1HjnozhELr",
    linkLabel: "Bilibili",
    ctaLabel: "Open project",
    sourceNote: "Resume-linked public case from the Shenzhen Autogame period",
    detailIntroZh:
      "这条公开链接对应深圳奥拓盖母阶段的 AI 演示案例，聚焦角色生产、工具链衔接和玩法方向的工程化落地。",
    detailIntroEn:
      "This public link maps to an AI demo from the Shenzhen Autogame period, focusing on character production, tooling, and engineering gameplay concepts into working output.",
    highlightsZh: [],
    highlightsEn: [],
  },
  {
    slug: "multi-agent-stanford-town",
    titleZh: "Multi-Agent互动游戏实践——复刻斯坦福小镇",
    titleEn: "Multi-Agent Interactive Game Practice — Stanford Town Recreation",
    summaryZh: "围绕多智能体互动、小镇空间感知与持续对话构建的公开演示案例，强调世界内行为与长期互动。",
    summaryEn:
      "A public demo around multi-agent interaction, town-scale spatial awareness, and sustained dialogue, emphasizing in-world behavior over time.",
    medium: "video",
    platform: "bilibili",
    year: "2025",
    tags: ["Multi-Agent", "Spatial Simulation", "Dialogue"],
    featured: false,
    sortOrder: 6,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "https://www.bilibili.com/video/BV1amTvzXE8q",
    linkLabel: "Bilibili",
    ctaLabel: "Open project",
    sourceNote: "Resume-linked public case for multi-agent interactive game practice",
    detailIntroZh:
      "这条公开链接对应 Multi-Agent 互动游戏实践案例，通过小镇式空间和持续对话来验证多智能体在游戏中的行为组织。",
    detailIntroEn:
      "This public link maps to a multi-agent interactive game practice case that uses a town-like space and ongoing dialogue to test agent behavior orchestration in games.",
    highlightsZh: [],
    highlightsEn: [],
  },
  {
    slug: "character-codex-demo",
    titleZh: "人物图鉴系统 Demo",
    titleEn: "Character Codex Demo",
    summaryZh: "以图鉴结构组织人物信息和系统入口，作为次级作品展示信息结构与世界观辅助设计能力。",
    summaryEn:
      "A codex-style demo that organizes character information and system entry points, showing information architecture and support for worldbuilding.",
    medium: "video",
    platform: "local-file",
    year: "2025",
    tags: ["Codex", "Information Design", "UX"],
    featured: false,
    sortOrder: 7,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Secondary work confirmed in decisions.md",
    detailIntroZh:
      "针对项目基于真实历史改编的特性，解决庞大历史文本与游戏性结合的难点，从数据构建开始实现图鉴系统 demo。设计可拖动交互的时间轴系统及历史地图映射功能；对全游戏的大事年表与三国历史风俗进行系统化整理与配置，为后续剧情系统提供数据支撑。",
    detailIntroEn:
      "Secondary projects still receive dedicated detail pages, but with a lighter structure focused on the primary media and concise framing.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/人物图鉴系统demo.mp4",
  },
  {
    slug: "faction-map-demo",
    titleZh: "势力地图演示",
    titleEn: "Faction Map Demo",
    summaryZh: "通过地图与势力关系的演示补充世界结构与系统关联的表达方式。",
    summaryEn:
      "A map-based piece that visualizes faction relationships and supplements the broader world structure behind the systems work.",
    medium: "video",
    platform: "local-file",
    year: "2025",
    tags: ["Map Design", "World Systems", "Visualization"],
    featured: false,
    sortOrder: 8,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Secondary work confirmed in decisions.md",
    detailIntroZh:
      "针对项目基于真实历史改编的特性，解决庞大历史文本与游戏性结合的难点，从数据构建开始实现图鉴系统 demo。设计可拖动交互的时间轴系统及历史地图映射功能；对全游戏的大事年表与三国历史风俗进行系统化整理与配置，为后续剧情系统提供数据支撑。",
    detailIntroEn:
      "This lighter project type still strengthens the portfolio's view of system worldbuilding and spatial communication.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/势力地图演示.mp4",
  },
  {
    slug: "timeline-codex",
    titleZh: "大事年表图鉴",
    titleEn: "Timeline Codex",
    summaryZh: "将时间线与图鉴组织方式结合，强化信息结构与叙事脉络整理能力。",
    summaryEn:
      "A timeline-oriented codex piece that emphasizes information structure and the ability to organize narrative progression.",
    medium: "video",
    platform: "local-file",
    year: "2025",
    tags: ["Timeline", "Narrative Structure", "Codex"],
    featured: false,
    sortOrder: 9,
    visibility: "public",
    coverType: "placeholder",
    externalUrl: "",
    linkLabel: "",
    ctaLabel: "Open project",
    sourceNote: "Secondary work confirmed in decisions.md",
    detailIntroZh:
      "针对项目基于真实历史改编的特性，解决庞大历史文本与游戏性结合的难点，从数据构建开始实现图鉴系统 demo。设计可拖动交互的时间轴系统及历史地图映射功能；对全游戏的大事年表与三国历史风俗进行系统化整理与配置，为后续剧情系统提供数据支撑。",
    detailIntroEn:
      "Timeline-oriented work keeps a concise detail structure that highlights information architecture and narrative organization without competing with the featured projects.",
    highlightsZh: [],
    highlightsEn: [],
    localAssetPath: "AI 实践作品/大事年表图鉴.mp4",
  },
] satisfies ProjectDetailEntry[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured).sort(sortProjects);
}

export function getAllProjects() {
  return [...projects].sort(sortProjects);
}

function sortProjects(a: ProjectDetailEntry, b: ProjectDetailEntry) {
  return (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER);
}
