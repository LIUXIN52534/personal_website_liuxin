# Product Decisions

## Purpose

This file is the single source of truth for decisions that would otherwise be duplicated across PRD, plan, RFC, and checklist documents.

Format:

- question
- decision
- date
- impact

## 2026-04-08

### D01 - Public English Name

- Question: What public English name should the site use?
- Decision: `Liu Xin`
- Date: `2026-04-08`
- Impact:
  - English hero copy
  - SEO metadata
  - `/en` pages

### D02 - Public Contact Scope

- Question: Which contact fields should be public on the website?
- Decision: `email + WeChat + phone`
- Date: `2026-04-08`
- Impact:
  - `/contact`
  - homepage summary
  - footer / quick contact entry

### D03 - Social Links

- Question: Should GitHub / LinkedIn be shown in V1?
- Decision: `do not include GitHub or LinkedIn in V1`
- Date: `2026-04-08`
- Impact:
  - `/contact`
  - footer

### D04 - Hero Copy

- Question: What is the homepage hero copy?
- Decision:
  - Title: `正在编制游戏梦`
  - Subtitle: `Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、互动结构与游戏体验`
- Date: `2026-04-08`
- Impact:
  - homepage hero
  - metadata defaults

### D05 - HADES Scope

- Question: Should `哈迪斯系统拆解` enter V1?
- Decision: `enter V1 and mark as Featured`
- Date: `2026-04-08`
- Impact:
  - `/work`
  - homepage featured area
  - XMind viewer integration

### D06 - Featured Source Directory

- Question: Where do the V1 featured assets come from?
- Decision: `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin\AI 实践作品`
- Date: `2026-04-08`
- Impact:
  - content ingest
  - asset mapping

### D07 - Featured Set

- Question: Which items are the final V1 Featured works?
- Decision:
  1. `AI开发模拟.mp4`
  2. `玩法流程demo演示.mp4`
  3. `势力 AI demo 演示.mp4`
  4. `哈迪斯系统拆解.xmind`
- Date: `2026-04-08`
- Impact:
  - homepage featured area
  - work ordering
  - detail routes

### D08 - Featured Slugs

- Question: What are the final slugs for the Featured detail pages?
- Decision:
  - `ai-dev-simulation`
  - `gameplay-flow-demo`
  - `faction-ai-demo`
  - `hades-system-breakdown`
- Date: `2026-04-08`
- Impact:
  - route generation
  - internal links
  - SEO

### D09 - Work Scope

- Question: Should `/work` include only Featured or also secondary works?
- Decision: `include all current AI 实践作品 items in V1`
- Date: `2026-04-08`
- Impact:
  - `/work`
  - content schema usage

### D10 - Secondary Works

- Question: Which remaining AI 实践作品 files should go online as non-featured works?
- Decision:
  - `人物图鉴系统demo.mp4`
  - `势力地图演示.mp4`
  - `大事年表图鉴.mp4`
- Date: `2026-04-08`
- Impact:
  - `/work`
  - secondary detail pages

### D11 - Work Page Interaction Model

- Question: How should works be presented?
- Decision:
  - homepage shows preview only
  - all works open dedicated detail pages
  - Featured pages contain richer content
  - secondary pages are shorter but still get dedicated routes
- Date: `2026-04-08`
- Impact:
  - route design
  - component catalog
  - layout scope

### D12 - XMind Strategy

- Question: How should `哈迪斯系统拆解.xmind` be displayed?
- Decision: `use official xmind-embed-viewer with a custom site wrapper UI`
- Date: `2026-04-08`
- Impact:
  - dependency choice
  - detail page implementation

### D13 - External Quark Links

- Question: Should Quark links be used in V1?
- Decision: `do not integrate Quark links in V1 because local media files are already available`
- Date: `2026-04-08`
- Impact:
  - content model
  - work detail page CTA rules

### D14 - Homepage Contact Summary

- Question: What contact info should appear in the homepage summary area?
- Decision: `email only`
- Date: `2026-04-08`
- Impact:
  - homepage hero / resume strip

### D15 - About Page Density

- Question: Should the About page be compact or close to a full public resume?
- Decision: `close to a full public resume`
- Date: `2026-04-08`
- Impact:
  - about page structure
  - copy length

### D16 - English Content Strategy

- Question: How should English content be produced?
- Decision: `derive full English copy from Chinese first, then refine later`
- Date: `2026-04-08`
- Impact:
  - bilingual data layer
  - content writing workflow

### D17 - Featured Detail Structure

- Question: What structure should Featured detail pages use?
- Decision: `title + intro, then primary media, then project explanation; visual styling may adapt to design system rather than locking one rigid layout`
- Date: `2026-04-08`
- Impact:
  - detail page layout
  - component contract

### D18 - Secondary Detail Structure

- Question: What structure should secondary work detail pages use?
- Decision: `dedicated page with primary media + short description`
- Date: `2026-04-08`
- Impact:
  - route scope
  - component simplification

### D19 - Hero Visual Base

- Question: What should the hero visual base be?
- Decision: `overall atmosphere references vibe.jpg; visible glitch / fault effects are implemented in code; the image vibe and pattern language should be preserved rather than replaced by generic abstract visuals`
- Date: `2026-04-08`
- Impact:
  - homepage art direction
  - hero implementation

### D20 - Hero Layout

- Question: What layout tendency should the hero use?
- Decision: `experimental, not fully symmetrical`
- Date: `2026-04-08`
- Impact:
  - hero composition
  - motion design

### D21 - Domain

- Question: Should the domain be decided now?
- Decision: `defer until after implementation`
- Date: `2026-04-08`
- Impact:
  - launch checklist
  - metadata finalization

### D22 - Journal Scope

- Question: Should `Journal` remain in the visible V1 navigation before any real content exists?
- Decision: `defer Journal from V1 navigation and public routes for now`
- Date: `2026-04-08`
- Impact:
  - navigation
  - sitemap
  - launch scope

## Still Open

No remaining P0 product decisions are blocking development.  
Remaining open items are execution-level details such as per-project summary copy, poster frames, and final domain selection.

---

Document version: 1.0  
Updated: 2026-04-08
