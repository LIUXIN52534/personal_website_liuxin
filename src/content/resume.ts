import type { ResumeProfile } from "@/content/types";

export const resumeProfile = {
  introZh:
    "对游戏保持敏锐和兴趣，了解大语言模型技术的原理，并跟踪最新进展，对前沿新技术有好奇心，沟通能力和学习能力强。对独立游戏、内容向二次元和 AI Gameplay 感兴趣，有 Gamejam 和 AI 在游戏中工程化落地的经验，并对游戏制作抱有长期热情。",
  introEn:
    "I stay sensitive to games as a medium, keep up with large-model advances, and stay curious about emerging technology. I care about indie games, content-driven anime-style projects, and AI gameplay, with hands-on experience in game jams and engineering AI into game production.",
  focusZh:
    "关注方向包括：AI驱动的玩法设计，AI工作流落地，AI在各类游戏里的各类应用。",
  focusEn:
    "Focus areas include AI-driven gameplay design, production-ready AI workflows, and practical AI applications across different game genres.",
  experience: [
    {
      id: "netease",
      companyZh: "网易互娱《万民长歌》项目组",
      companyEn: "NetEase Games, Wanmin Changge",
      roleZh: "玩法策划",
      roleEn: "Gameplay Designer",
      start: "2025-12",
      end: "至今",
      locationZh: "上海",
      locationEn: "Shanghai",
      highlightsZh: [
        "图鉴系统设计和AI应用落地。",
        "参与构建低代码 UGC 编辑器功能。",
        "参与势力 AI 差异化设计与规则生成。",
      ],
      highlightsEn: [
        "Designed codex systems and shipped AI applications into production.",
        "Helped build features for a low-code UGC editor.",
        "Worked on differentiated faction AI and rule generation.",
      ],
      detailItems: [
        {
          id: "historical-codex",
          labelZh: "图鉴系统设计和AI应用落地",
          labelEn: "Codex systems and AI applications",
          detailZh:
            "针对项目基于真实历史改编的特性，解决庞大历史文本与游戏性结合的难点，从数据构建开始实现图鉴系统 demo。设计可拖动交互的时间轴系统及历史地图映射功能；对全游戏的大事年表与三国历史风俗进行系统化整理与配置，为后续剧情系统提供数据支撑。",
          detailEn:
            "For a project adapted from real history, this work addressed how large-scale historical text could remain playable. It started from data construction, then extended into a codex demo, a draggable timeline system, and historical map mapping, while organizing chronology and Three Kingdoms cultural data for later narrative systems.",
        },
        {
          id: "ugc-editor",
          labelZh: "UGC编辑器功能搭建",
          labelEn: "UGC editor feature buildout",
          detailZh:
            "为丰富游戏内容生态，参与构建低代码编辑器功能。参与编辑器界面交互逻辑设计，内置编辑器接入 OpenCode 与 Aion UI，打通“spec生成 HTML → MCP 协议映射 UE·UMG 资产”的技术链路，实现玩法原型的快速落地。建立结构化文档解析机制，利用 MCP 和 skill 工具链生成交互逻辑，将复杂蓝图节点固化为底层代码；引入自研 AI Skill 工具，按指标自动检测引擎内的美术资源与编译问题，实现自动化测试报告输出，支撑美术及时调优，并持续完善 MCP / CI 工具链的工程化验证。",
          detailEn:
            "To broaden the content ecosystem, this work helped build a low-code UGC editor. It covered interaction logic, OpenCode and Aion UI integration, and the path from spec-generated HTML to UE/UMG assets through MCP, while also building structured parsing, code generation, and AI-assisted QA for art and compilation issues.",
        },
        {
          id: "faction-ai",
          labelZh: "势力AI玩法设计",
          labelEn: "Faction AI gameplay design",
          detailZh:
            "为解决传统策略游戏 AI 逻辑单一、反馈匮乏的痛点，参与游戏内势力 AI 的差异化设计与实现。基于自迭代 Agent 框架设计生成代码级规则，使 AI 能根据局势动态调整外交与军事策略，提供差异化体验。",
          detailEn:
            "To address flat strategy-game AI, this work joined the design and implementation of differentiated faction AI. Built on a self-iterating agent framework, it generated rule-level logic so diplomatic and military strategies could shift with the situation and produce more varied play.",
        },
      ],
      isFeatured: true,
    },
    {
      id: "tencent-start",
      companyZh: "腾讯互动娱乐 START产品中心",
      companyEn: "Tencent START Product Center",
      roleZh: "平台产品运营",
      roleEn: "Platform Product Operations",
      start: "2025-08",
      end: "2025-12",
      locationZh: "深圳",
      locationEn: "Shenzhen",
      highlightsZh: [
        "外部建联和AI自动化提效。",
        "优化云游戏体验、兼容性与 Touch 适配。",
        "用 AI 自动化告警与流程工具提升协作效率。",
      ],
      highlightsEn: [
        "Handled external relationship building and AI automation efficiency work.",
        "Improved cloud gaming experience, compatibility, and touch adaptation.",
        "Used AI tooling to improve operational collaboration efficiency.",
      ],
      detailItems: [
        {
          id: "biz-dev",
          labelZh: "外部游戏厂商合作商业化落地",
          labelEn: "External partner and commercialization work",
          detailZh:
            "参与制定平台对外厂商合作策略，协同商务与技术团队完成从 0 到 1 的合作方案落地，成功引入《鸣潮》《二重螺旋》《迷离梦游》等头部产品上架 START 云游戏平台，并沉淀对外合作模式。",
          detailEn:
            "Helped shape external partnership strategy and worked with business and technical teams to land cooperation plans from zero to one, introducing major titles to the START cloud gaming platform and helping define repeatable partner-facing workflows.",
        },
        {
          id: "experience-optimization",
          labelZh: "体验优化与技术支持",
          labelEn: "Experience optimization and technical support",
          detailZh:
            "针对外部厂商关于云游戏体验、算力成本、兼容适配等问题提供支持，维护合作方关系；针对支付链路、跨端登录、移动端 Touch 适配等核心环节提出优化方案，有效提升云游戏用户的转化率与操作留存。",
          detailEn:
            "Supported partners around cloud gaming experience, compute cost, and compatibility issues, while proposing optimizations for payment flow, cross-device login, and mobile touch adaptation to improve conversion and retention.",
        },
        {
          id: "ai-ops",
          labelZh: "AI自动化运维提效",
          labelEn: "AI-driven operational automation",
          detailZh:
            "结合 AIGC 技术设计并落地“云服务器 CGS 自动化告警系统”，利用 Coze 搭建智能 Agent，实现服务器日志自动抓取与规则库匹配，自动化触发三级告警，使运维异常响应效率提升 40%，并降低监控成本。",
          detailEn:
            "Designed and shipped a cloud-server CGS automated alerting system with AIGC and Coze-based agents, matching logs against rule libraries and triggering tiered alerts automatically, which improved abnormal-response efficiency by 40 percent while lowering monitoring cost.",
        },
      ],
    },
    {
      id: "autogame",
      companyZh: "深圳奥拓盖母科技有限公司",
      companyEn: "Shenzhen Autogame Technology Co., Ltd.",
      roleZh: "技术策划",
      roleEn: "Technical Designer",
      start: "2023-11",
      end: "2025-02",
      locationZh: "深圳",
      locationEn: "Shenzhen",
      highlightsZh: [
        "搭建实时 AI 角色生产管线。",
        "推进 Diffuser TensorRT 推理加速与后端服务。",
        "探索 AI 驱动的实时生成剧情与 UGC 玩法。",
      ],
      highlightsEn: [
        "Built a real-time AI character production pipeline.",
        "Advanced Diffuser TensorRT inference acceleration and backend services.",
        "Explored AI-driven real-time storytelling and UGC gameplay.",
      ],
      detailItems: [
        {
          id: "pipeline",
          labelZh: "技术选型与管线搭建",
          labelEn: "Technical selection and pipeline buildout",
          detailZh:
            "负责实时 AI 角色生产管线的搭建。根据美术风格定制模型，基于迭代便利性与生成效果的考量，主导从底层模型到上层应用的技术选型，构建高扩展性的生成服务架构。",
          detailEn:
            "Led the buildout of a real-time AI character production pipeline, choosing technologies from model layer to application layer based on iteration speed, output quality, and extensibility.",
        },
        {
          id: "performance",
          labelZh: "性能优化与推理加速",
          labelEn: "Performance optimization and inference acceleration",
          detailZh:
            "优化自然语言到图片的生成流程，使用 Diffuser TensorRT 搭建图片生成后端服务，压缩时间成本约 15%；并为产品搭建节点式 GPT 多层调试到 SD 出图工具，使用 gradio 进行预览。",
          detailEn:
            "Optimized the text-to-image workflow with a Diffuser TensorRT backend, cutting time cost by about 15 percent, while also building a node-based GPT-to-SD debugging and preview tool with Gradio.",
        },
        {
          id: "ugc-play",
          labelZh: "AI玩法深度落地（UGC）",
          labelEn: "AI gameplay implementation for UGC",
          detailZh:
            "参与设计“AI 驱动实时生成剧情”玩法，实现基于用户 UGC 生成的个性化角色，并使 AI 任务流程与 AI 道具功能结合，打通从玩家输入到反馈链路。",
          detailEn:
            "Joined the design of AI-driven real-time story generation for UGC, enabling personalized characters and linking AI task flow with AI item features so the loop from player input to system feedback stayed coherent.",
        },
      ],
      isFeatured: true,
    },
    {
      id: "photon-h",
      companyZh: "腾讯 光子工作室群 H工作室",
      companyEn: "Tencent Photon Studio Group, H Studio",
      roleZh: "角色设计（AI 技术）",
      roleEn: "Character Design (AI Technology)",
      start: "2023-04",
      end: "2023-10",
      locationZh: "杭州",
      locationEn: "Hangzhou",
      highlightsZh: [
        "定制化 AI 美术工具和模型。",
        "推进 LoRa、checkpoint、controlnet 训练与流程标准化。",
        "探索 AI 小玩法原型。",
      ],
      highlightsEn: [
        "Built customized AI art tools and models.",
        "Standardized LoRa, checkpoint, and ControlNet training workflows.",
        "Explored AI-driven mini gameplay prototypes.",
      ],
      detailItems: [
        {
          id: "art-tools",
          labelZh: "管线前置与工具研发",
          labelEn: "Pipeline preparation and tool R&D",
          detailZh:
            "在预研期深入 2D 美术生产流程，针对项目风格研发定制化 AI 美术工具和模型，解决 NPC 风格匹配与产出效率问题，并对内部广告模型进行性能优化，在腾讯内部做多次分享。",
          detailEn:
            "During pre-production, went deep into 2D art workflows to build project-specific AI art tools and models, solving NPC style matching and output-efficiency issues while optimizing internal demo models and sharing the work internally.",
        },
        {
          id: "model-training",
          labelZh: "与美术和技术团队合作",
          labelEn: "Cross-team collaboration on model training",
          detailZh:
            "与美术和技术团队协同进行 LoRa、checkpoint、controlnet 等 AI 绘图主流模型的训练，建立标准化训练流程与验收体系，大幅缩短美术资源效果验证周期，实现“降本增效”。",
          detailEn:
            "Worked with art and technical teams on LoRa, checkpoint, and ControlNet training, establishing standardized training and acceptance workflows that shortened asset-validation cycles and improved efficiency.",
        },
        {
          id: "prototype",
          labelZh: "AI玩法原型探索",
          labelEn: "AI gameplay prototype exploration",
          detailZh:
            "结合策划需求探索 AI + 游戏的新玩法，利用本地时序小模型接入游戏内场景，搭建轻量化小玩法原型，辅助策划团队进行低成本创意验证与迭代。",
          detailEn:
            "Explored AI-plus-gameplay concepts with planning teams by connecting local sequence models to in-game scenes and building lightweight prototypes for low-cost creative validation and iteration.",
        },
      ],
    },
  ],
  education: [
    {
      id: "donghua",
      schoolZh: "东华大学",
      schoolEn: "Donghua University",
      programZh: "信息管理与信息系统",
      programEn: "Information Management and Information Systems",
      start: "2020-06",
      end: "2026-06",
      detailsZh: ["211 / 双一流", "旭日工商管理学院", "GPA 3.87 / 前 15%"],
      detailsEn: [
        "Project 211 / Double First-Class",
        "Glorious Sun School of Business and Management",
        "GPA 3.87 / Top 15%",
      ],
    },
  ],
  skills: [
    {
      id: "systems",
      titleZh: "系统与策划",
      titleEn: "Systems and design",
      items: ["Gameplay systems", "Technical design", "Interaction flow", "Information architecture"],
    },
    {
      id: "ai",
      titleZh: "AI 工作流",
      titleEn: "AI workflows",
      items: ["ComfyUI", "Coze", "AI workflow design", "AI engineering in games"],
    },
    {
      id: "tools",
      titleZh: "工具与分析",
      titleEn: "Tools and analysis",
      items: ["Python", "SQL", "Tableau", "UE awareness"],
    },
  ],
  interests: ["吉他", "摄影"],
  interestsEn: ["Guitar", "Photography"],
  certificates: ["英语 CET-6", "雅思 6.5"],
  certificatesEn: ["CET-6", "IELTS 6.5"],
  resumePdfPath: "/resume/liuxin-planning.pdf",
} satisfies ResumeProfile;
