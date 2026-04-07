# Asset Spec

## 1. Purpose

This document defines the visual asset rules for V1 so design quality does not depend on ad hoc decisions during implementation.

## 2. Asset Categories

V1 may use:

- Hero visual base
- Featured project covers
- General project thumbnails
- Resume PDF
- Optional avatar
- Optional favicon / wordmark

## 3. Hero Asset Rules

The homepage hero does not require a literal photograph.

Allowed directions:

- Pure code-generated visual system
- Generated poster with typography and texture
- Strong still image with overlayed metadata

Requirements:

- Must preserve a calm text area for the name and role line
- Must still work on mobile without hiding the primary CTA
- Must not rely on heavy runtime rendering to be legible

## 4. Featured Project Cover Rules

Recommended ratio:

- `16:10` for featured covers

Acceptable fallbacks:

- `4:3`
- `1:1` if the composition is intentionally poster-like

Each featured item should have:

- one strong cover
- one short summary
- one clear CTA destination

## 5. General Project Thumbnail Rules

Recommended ratio:

- `4:3`

Fallback strategy:

- If no image exists, generate a clean project poster placeholder using title, year, medium, and a restrained visual token system

Do not use:

- random stock images
- noisy screenshots with unreadable UI
- placeholder art that looks unrelated to the project

## 6. Video Cover Rules

If the project is primarily a video:

- Prefer a selected still frame with good silhouette and contrast
- Add a small media label rather than a fake player chrome
- Keep the cover readable even without hover motion

## 7. Document Cover Rules

If the project is primarily a document or system拆解:

- Prefer a posterized first-page fragment or custom title treatment
- Avoid tiny unreadable full-page previews
- Emphasize title, document type, and year

## 8. Favicon And Mark

V1 does not require a full logo system.

Allowed favicon choices:

- simple initials
- single glyph
- abstract system mark

Rule:

- If no strong favicon exists, use a clean text-based fallback instead of inventing a weak brand mark

## 9. Avatar Rule

Avatar is optional for V1.

Use it only if:

- it supports the intended tone
- it does not reduce the poster-like homepage hierarchy

## 10. Delivery Checklist

For each featured project, ideally provide:

- cover image
- title in Chinese
- title in English
- one-line summary in Chinese
- one-line summary in English
- external destination URL
- medium label

## 11. Placeholder Quality Standard

If placeholders are used, they must still feel intentional:

- consistent typography
- consistent grid and spacing
- aligned with the site palette
- clearly distinguishable by medium type

---

Document version: 1.0  
Updated: 2026-04-06
