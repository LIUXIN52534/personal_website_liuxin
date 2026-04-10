import type {
  ContactConfig,
  LocalizedPageCopy,
  Locale,
  SiteConfig,
} from "@/content/types";

export const siteConfig = {
  nameZh: "刘鑫",
  nameEn: "Liu Xin",
  roleLineZh: "玩法 / 技术策划",
  roleLineEn: "Gameplay / Technical Design",
  subtitleZh: "Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、互动结构与游戏体验",
  subtitleEn:
    "Liu Xin | Gameplay / Technical Design, continuing to explore AI-driven content generation, interactive structures, and game experience.",
  locationZh: "上海",
  email: "liuxin52534@gmail.com",
  phone: "13162866856",
  wechat: "Sonambulo_0827",
  heroPrimaryCta: {
    label: "进入作品",
    href: "/work",
  },
  heroSecondaryCta: {
    label: "查看 About",
    href: "/about",
  },
  seo: {
    siteName: "Liu Xin",
    defaultTitleZh: "刘鑫｜游戏策划与 AI 互动系统实践",
    defaultTitleEn: "Liu Xin | Game Design and AI Systems Portfolio",
    defaultDescriptionZh:
      "刘鑫的双语个人网站，聚焦游戏策划、技术策划、AI 工作流与互动系统案例，面向招聘方与潜在合作方展示作品、履历与联系方式。",
    defaultDescriptionEn:
      "A bilingual portfolio for game design, technical design, AI workflows, and interactive systems, built to guide hiring teams and collaborators toward work, resume, and contact details.",
    ogImageDefault: "/opengraph-image",
  },
} satisfies SiteConfig;

export const contactConfig = {
  email: {
    value: siteConfig.email,
    extraValues: [],
    public: true,
  },
  phone: {
    value: siteConfig.phone ?? "",
    extraValues: ["13207033316"],
    public: true,
  },
  wechat: {
    value: siteConfig.wechat ?? "",
    extraValues: ["Nomeolvides_0827"],
    public: true,
  },
} satisfies ContactConfig;

export const navigation = [
  {
    key: "work",
    href: "/work",
    labelZh: "作品",
    labelEn: "Work",
  },
  {
    key: "about",
    href: "/about",
    labelZh: "About",
    labelEn: "About",
  },
  {
    key: "contact",
    href: "/contact",
    labelZh: "联系",
    labelEn: "Contact",
  },
] as const;

export const pageCopy = {
  home: {
    zh: {
      eyebrow: "首页 / Home",
      title: "正在编织游戏梦",
      description:
        "刘鑫的个人网站首页，用一个更像数字海报的首屏去建立身份、气质与作品入口。",
    },
    en: {
      eyebrow: "Home / Landing",
      title: "Building a game dream in progress",
      description:
        "A poster-led homepage that frames Liu Xin through gameplay design, AI design, and interactive systems thinking.",
    },
  },
  work: {
    zh: {
      eyebrow: "作品 / Work",
      title: "多媒介作品入口",
      description:
        "精选项目与补充案例都进入独立详情页，这里负责完整浏览与进入。",
    },
    en: {
      eyebrow: "Work / Projects",
      title: "A portfolio across media types",
      description:
        "Featured cases and supporting work both lead to dedicated detail pages for full browsing.",
    },
  },
  about: {
    zh: {
      eyebrow: "About / 简历",
      title: "公开版网页履历",
      description:
        "把经历、教育、技能与当前关注方向整理成更适合网页阅读的公开版履历。",
    },
    en: {
      eyebrow: "About / Resume",
      title: "A modular public resume",
      description:
        "A public-facing resume shaped for web reading, with experience, education, skills, and a PDF handoff.",
    },
  },
  contact: {
    zh: {
      eyebrow: "联系 / Contact",
      title: "联系方式",
      description: "",
    },
    en: {
      eyebrow: "Contact / Reach Out",
      title: "Direct contact information",
      description:
        "No contact form in between. Email, WeChat, and phone are published directly here.",
    },
  },
} satisfies Record<string, Record<Locale, LocalizedPageCopy>>;

export const uiCopy = {
  heroCtaPrimary: {
    zh: "进入作品",
    en: "Enter work",
  },
  heroCtaSecondary: {
    zh: "查看 About",
    en: "Open about",
  },
  heroContactLabel: {
    zh: "公开邮箱",
    en: "Public email",
  },
  detailCta: {
    zh: "查看详情",
    en: "View detail",
  },
  downloadResume: {
    zh: "下载 PDF 简历",
    en: "Download PDF resume",
  },
};
