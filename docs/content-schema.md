# Content Schema

## 1. Purpose

This document defines the minimum stable schema for V1 so implementation does not keep changing the data shape mid-build.

## 2. SiteConfig

```ts
type SiteConfig = {
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
```

Notes:

- `phone` and `wechat` are optional because publication is still pending.
- `seo` should include site-wide defaults, not page-local overrides only.

## 3. ProjectEntry

```ts
type ProjectEntry = {
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
```

Rules:

- `slug` must stay stable across languages.
- `visibility` exists so partial-public works can still be represented safely.
- `platform` exists because the current source already includes Bilibili and Quark links.
- `coverType` avoids guessing how a thumbnail was produced.

## 4. ResumeProfile

```ts
type ResumeProfile = {
  introZh: string;
  introEn: string;
  focusZh: string;
  focusEn: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  interests: string[];
  certificates: string[];
  resumePdfPath: string;
};
```

```ts
type ResumeExperience = {
  id: string;
  companyZh: string;
  companyEn?: string;
  roleZh: string;
  roleEn?: string;
  start: string;
  end: string;
  locationZh?: string;
  highlightsZh: string[];
  highlightsEn?: string[];
  isFeatured?: boolean;
};
```

```ts
type ResumeEducation = {
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
```

```ts
type ResumeSkillGroup = {
  id: string;
  titleZh: string;
  titleEn: string;
  items: string[];
};
```

## 5. ContactConfig

```ts
type ContactConfig = {
  email: {
    value: string;
    public: true;
  };
  phone?: {
    value: string;
    public: boolean;
  };
  wechat?: {
    value: string;
    public: boolean;
  };
  githubUrl?: string;
  linkedinUrl?: string;
};
```

Rule:

- Publication permission should be encoded in data, not only remembered in chat.

## 6. SEO Types

```ts
type SiteSeoConfig = {
  siteName: string;
  defaultTitleZh: string;
  defaultTitleEn: string;
  defaultDescriptionZh: string;
  defaultDescriptionEn: string;
  ogImageDefault?: string;
};
```

```ts
type CtaLink = {
  label: string;
  href: string;
};
```

## 7. Implementation Constraints

- V1 does not need a CMS-style flexible block system.
- Types should prefer stability over abstraction.
- Missing required locale fields should fail typecheck.
- Missing optional fields should degrade gracefully in UI.

## 8. Seed Data Needed Before Real Content Wiring

- Final public English name
- Hero role line in both languages
- Featured project order
- Final contact exposure choices
- Cover assets or confirmed placeholder strategy

---

Document version: 1.0  
Updated: 2026-04-06
