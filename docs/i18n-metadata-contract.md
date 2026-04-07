# i18n And Metadata Contract

## 1. Purpose

This document defines how bilingual routing and metadata should behave so U2 and U3 do not make conflicting assumptions.

## 2. Locale Model

- Primary locale: `zh`
- Secondary locale: `en`
- Default visible root: Chinese root path
- English root: `/en`

## 3. Routing Rules

Current V1 routes:

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

Contract:

- Language switching should preserve the same route intent whenever possible.
- The language switch on `/work` should go to `/en/work`, not `/en`.
- No locale detection redirect is required for V1.

## 4. Content Fallback Rules

- Chinese is the source version.
- English may be derived from Chinese during V1.
- If an English field is missing during development, the build should fail only for fields marked required in `content-schema.md`.
- Optional English supporting copy may temporarily fall back to concise placeholders during development.

## 5. Canonical Rules

- Chinese pages use their own canonical URLs.
- English pages use their own canonical URLs.
- No page should canonicalize to a different locale page.

Examples:

- `/about` canonical -> `/about`
- `/en/about` canonical -> `/en/about`

## 6. Alternates / hreflang Rules

Each page should define:

- `zh-CN` or `zh`
- `en`
- `x-default`

Recommended `x-default`:

- Chinese root pages, because Chinese is the source version.

## 7. Metadata Rules

Each locale page should provide:

- localized title
- localized description
- localized Open Graph title
- localized Open Graph description
- shared or localized OG image depending on asset readiness

V1 recommendation:

- start with shared OG image system
- localize text metadata first
- only localize OG art if it materially improves presentation

## 8. Sitemap Rules

- Include both Chinese and English routes.
- Do not include draft or unresolved private work entries.
- If a project is partial-public, only include its public-facing route if one exists.

## 9. Robots Rules

V1 recommendation:

- allow indexing for the main site
- do not block `/en`
- do not expose any asset URL that is meant to stay private

## 10. Non-Goals

- No automatic browser-language redirect
- No locale negotiation middleware
- No per-locale custom slug system for V1

## 11. Implementation Reminder

This contract is intentionally simple because the current site is a small hiring-oriented portfolio, not a content-heavy multilingual platform.

---

Document version: 1.0  
Updated: 2026-04-06
