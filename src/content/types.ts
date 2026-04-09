export type Locale = "zh" | "en";

export type CtaLink = {
  label: string;
  href: string;
};

export type SiteSeoConfig = {
  siteName: string;
  defaultTitleZh: string;
  defaultTitleEn: string;
  defaultDescriptionZh: string;
  defaultDescriptionEn: string;
  ogImageDefault?: string;
};

export type SiteConfig = {
  nameZh: string;
  nameEn: string;
  roleLineZh: string;
  roleLineEn: string;
  subtitleZh: string;
  subtitleEn: string;
  locationZh?: string;
  email: string;
  phone?: string;
  wechat?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  heroPrimaryCta: CtaLink;
  heroSecondaryCta?: CtaLink;
  seo: SiteSeoConfig;
};

export type ProjectEntry = {
  slug: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  medium: "video" | "document" | "web" | "archive" | "other";
  platform: "bilibili" | "quark" | "external" | "local-file" | "other";
  year: string;
  tags: string[];
  featured: boolean;
  featuredReason?: string;
  sortOrder?: number;
  visibility: "public" | "partial" | "private";
  thumbnail?: string;
  coverType: "image" | "video-still" | "generated-poster" | "placeholder";
  coverAsset?: string;
  externalUrl: string;
  linkLabel: string;
  ctaLabel?: string;
  sourceNote?: string;
};

export type ProjectDetailEntry = ProjectEntry & {
  detailIntroZh: string;
  detailIntroEn: string;
  highlightsZh: string[];
  highlightsEn: string[];
  localAssetPath?: string;
  sourceLinks?: Array<{
    label: string;
    href: string;
  }>;
};

export type ResumeExperience = {
  id: string;
  companyZh: string;
  companyEn?: string;
  roleZh: string;
  roleEn?: string;
  start: string;
  end: string;
  locationZh?: string;
  locationEn?: string;
  highlightsZh: string[];
  highlightsEn?: string[];
  detailItems?: ResumeExperienceDetail[];
  isFeatured?: boolean;
};

export type ResumeExperienceDetail = {
  id: string;
  labelZh: string;
  labelEn: string;
  detailZh: string;
  detailEn: string;
};

export type ResumeEducation = {
  id: string;
  schoolZh: string;
  schoolEn?: string;
  programZh: string;
  programEn?: string;
  start: string;
  end: string;
  detailsZh?: string[];
  detailsEn?: string[];
};

export type ResumeSkillGroup = {
  id: string;
  titleZh: string;
  titleEn: string;
  items: string[];
};

export type ResumeProfile = {
  introZh: string;
  introEn: string;
  focusZh: string;
  focusEn: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  interests: string[];
  interestsEn?: string[];
  certificates: string[];
  certificatesEn?: string[];
  resumePdfPath: string;
};

export type ContactConfig = {
  email: {
    value: string;
    extraValues?: string[];
    public: true;
  };
  phone?: {
    value: string;
    extraValues?: string[];
    public: boolean;
  };
  wechat?: {
    value: string;
    extraValues?: string[];
    public: boolean;
  };
  githubUrl?: string;
  linkedinUrl?: string;
};

export type LocalizedPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
};
