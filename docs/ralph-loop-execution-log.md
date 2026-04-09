# Ralph Loop Execution Log

## Session Metadata

- Project: personal website v1
- Main repo: `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin`
- Worktree: `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin-dev`
- Active implementation branch: `feat/site-v1-foundation`
- Environment check: `omx doctor` passed 12/12 on `2026-04-03`
- Baseline docs commit: `48c2bfa`

## Current Status

- RFC status: U1-U8 implementation and the post-feedback redesign pass are complete in the worktree
- Current unit: U8 complete
- Last completed unit: U8
- Current blocker:
  - no code-level blocker remains for local launch readiness
  - conditional deployment blocker: the local `AI 实践作品` payload is `140,942,300` bytes total, so a Vercel CLI deploy on Hobby would likely hit the documented `100 MB` source/static upload limit; deployment should use a compatible plan/path or move/compress assets first

## Dependency Graph Snapshot

```text
U0 -> U1 -> U2 -> U3 -> U4 -> U8
                    |     |-> U5 -|
                    |     |-> U6 -|-> U8
                    |     |-> U7 -|
```

## Unit Queue

| Unit | Status | Depends On | Owner | Notes |
| --- | --- | --- | --- | --- |
| U0 | completed | none | completed | docs + repo hygiene baseline |
| U1 | completed | U0 | Codex | scaffolded Next.js App Router baseline with npm |
| U2 | completed | U1 | Codex | typed site data, project data, resume data, and i18n helpers landed |
| U3 | completed | U2 | Codex | app shell, bilingual routing, metadata, sitemap, and placeholder detail routes landed |
| U4 | completed | U3 | Codex | homepage hero and visual system landed with browser verification |
| U5 | completed | U3, U4 | Codex | work index, real detail pages, local video routing, XMind viewer wrapper |
| U6 | completed | U2, U3 | Codex | publish-ready about / public-resume page |
| U7 | completed | U3 | Codex | contact actions; journal deferred from visible V1 scope |
| U8 | completed | U4, U5, U6, U7 | Codex | polish, metadata image, validation, deploy-readiness pass |

## Unit Scorecards

### Template

#### Unit: U?

- Status:
- Branch or commit:
- Scope delivered:
- Validation run:
- Review result:
- Risks:
- Rollback plan:

#### Unit: U1

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - initialized Next.js App Router + TypeScript + Tailwind baseline in the implementation worktree
  - merged generated scaffold into the existing worktree without disturbing local assets or docs
  - normalized `.gitignore`, set package name to `personal-website-liuxin`, and added a `typecheck` script for later content-schema enforcement
  - removed the temporary scaffold directory after merge to restore clean lint boundaries
- Validation run:
  - `npm install`
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`
  - `npm run dev` (server start verified on localhost, then stopped)
- Review result:
  - manual diff review passed for scaffold integration
  - `codex review --uncommitted` was attempted earlier in this environment but remained timing-out, so later units continued with manual review plus browser validation
- Risks:
  - root app was still the default starter page until U2/U3 landed
- Rollback plan:
  - remove generated Next.js files and restore the pre-U1 worktree state

#### Unit: U2

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - added stable TypeScript content schemas for site config, projects, resume, contact, locale copy, and detail-page placeholders
  - wired decisions-driven seed data for all confirmed V1 works, including featured ordering and slug stability
  - added locale helpers and page metadata helpers to support bilingual routing without chat-memory assumptions
  - copied the public resume PDF into `public/resume/liuxin-planning.pdf`
- Validation run:
  - `npm run typecheck`
  - `npm run lint`
- Review result:
  - manual self-review passed for schema completeness, locale-required fields, and project ordering
- Risks:
  - project summaries were structurally correct but still eligible for polish later
- Rollback plan:
  - revert `src/content/*`, `src/lib/i18n.ts`, `src/lib/metadata.ts`, and the copied resume asset

#### Unit: U3

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - implemented the shared site shell with sticky header, footer, locale-preserving switch, and token-backed global styling
  - added all required Chinese and English routes for home, work, about, contact, and journal
  - added placeholder project detail routes for every confirmed work slug
  - added localized metadata, canonical / alternate generation, `robots.txt`, and `sitemap.xml`
- Validation run:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
  - `npm run dev`
  - browser checks on `/`, `/work`, `/en/about`, `/work/ai-dev-simulation`, and locale switching on a detail route
- Review result:
  - manual browser/self-review passed for page load, navigation, and route preservation
- Risks:
  - detail pages were intentionally media-light until U5
- Rollback plan:
  - revert `src/app/*`, `src/components/site/*`, and related global styling changes while keeping content files if desired

#### Unit: U4

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - replaced the homepage shell with a poster-like hero derived from `vibe.jpg`, then refined it with `background.jpg`
  - added a code-driven visual stack for scanlines, noise, glitch text, fault slices, signal-drift bands, and pointer-reactive binary/code fragments
  - kept the hero intentionally offset, with a metadata rail, selected work preview rail, and email-only contact summary inside the first screen
  - preserved reduced-motion behavior by disabling decorative animation layers and hover translations when `prefers-reduced-motion` is enabled
- Validation run:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run dev`
  - browser checks on `/` desktop, `/` mobile, `/en`, and console checks
  - `npm run build`
- Review result:
  - manual browser/self-review passed for hero hierarchy, CTA readability, mobile stacking, and the requirement to keep homepage contact exposure at email-only
- Risks:
  - later homepage additions must not reintroduce card-heavy layout patterns
  - the root HTML `lang` issue remained outside the checkpoint scope
- Rollback plan:
  - revert homepage component and metadata changes while keeping the shared shell and content model

#### Unit: U5

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - upgraded `/work` from a flat text grid into grouped Featured / Secondary sections with generated poster-style covers
  - replaced placeholder detail pages with real project detail layouts
  - added `src/app/api/project-media/[slug]/route.ts` to serve local project files, including byte-range responses for MP4 playback
  - integrated the official `xmind-embed-viewer` inside a custom site wrapper for `hades-system-breakdown`
  - added graceful fallback poster rendering if a local asset is missing
- Validation run:
  - `npm run typecheck`
  - `npm run dev`
  - browser checks:
    - `/work`
    - `/work/ai-dev-simulation`
    - `/work/hades-system-breakdown`
    - `/en/work/hades-system-breakdown`
- Review result:
  - local video routes returned `200` and video detail pages rendered without app runtime errors
  - the XMind page rendered the embedded iframe inside the site shell
  - browser console showed a third-party warning (`allowfullscreen`) and vendor analytics/network noise from the official XMind embed; these did not break the app route itself
- Risks:
  - official XMind embed currently triggers third-party requests outside the local app surface
  - featured covers are still generated poster placeholders, not hand-picked stills
- Rollback plan:
  - revert the work-page, detail-page, media-route, and XMind wrapper files only

#### Unit: U6

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - upgraded the About page into a stronger public-resume layout with profile, focus, experience, education, skills, certificates, interests, and PDF download
  - highlighted featured experience entries without turning the page into a raw PDF dump
- Validation run:
  - `npm run typecheck`
  - browser checks:
    - `/about`
    - `/en/about`
- Review result:
  - manual browser/self-review passed for section hierarchy, scanability, and PDF link presence
- Risks:
  - English copy remains a first-pass derivative rather than a final editorial pass
- Rollback plan:
  - revert `ResumeOverview` and leave the rest of the site untouched

#### Unit: U7

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - upgraded the Contact page with direct action links and copy actions while keeping the page form-free
  - upgraded Journal from a plain paragraph placeholder into a more intentional queued-topic placeholder
- Validation run:
  - `npm run typecheck`
  - browser checks:
    - `/contact`
    - `/journal`
    - `/en/contact`
    - `/en/journal`
- Review result:
  - direct contact information remained plainly visible and the route stayed public in nav
  - copy-button visual feedback was not conclusively observable in Playwright snapshots, so this interaction still deserves one manual human click-check before launch
- Risks:
  - clipboard feedback behavior is a light interaction risk until manually confirmed outside automation
- Rollback plan:
  - revert the contact/journal component files without affecting work or home

#### Unit: U8

- Status: completed
- Branch or commit: `feat/site-v1-foundation`
- Scope delivered:
  - added a real `opengraph-image` route and wired metadata image references so OG/Twitter cards no longer point at a missing file
  - cleaned build warnings caused by broad asset tracing and invalid OG style values
  - reran lint/build and browser smoke checks after the U5-U7 changes
  - completed deploy-readiness assessment with explicit remaining risks and conditional blockers
- Validation run:
  - `npm run dev`
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
  - browser checks:
    - `/` mobile
    - `/work`
    - `/work/ai-dev-simulation`
    - `/work/hades-system-breakdown`
    - `/about`
    - `/contact`
    - `/journal`
    - `/en/work/hades-system-breakdown`
- Review result:
  - no app-build blocker remains
  - route generation, metadata generation, and media-serving code all passed the production build
- Risks:
  - deploy target choice still matters because of the local asset payload size
  - root document `lang` is still fixed to `zh-CN`; this is not blocking deploy-readiness but remains a semantic gap
- Rollback plan:
  - revert metadata/image/media polish files while keeping the stable routed content

## Current Implementation Simplifications

These remain intentional simplifications rather than silent product-direction changes:

1. Featured covers are still generated posters.
   - They now look intentional and are consistent across the work index, but they are not yet custom-picked still frames or bespoke project posters.

2. English copy is structurally complete but still first-pass.
   - It follows the approved derive-from-Chinese-first strategy and can still receive editorial polish later.

3. The root HTML `lang` is still fixed to `zh-CN`.
   - Route-level locale, metadata, and alternates are correct, but top-level document language is not yet switched per locale.

4. Official XMind embed behavior is accepted as-is for V1.
   - The wrapper works and the page is functional, but the vendor iframe still emits external requests and a benign `allowfullscreen` warning.

## Integration Risk Summary

- Highest current operational risk: the local work-asset payload is about `140.9 MB`, which is compatible with local development but may block a `Vercel CLI + Hobby` deployment path
- Secondary risk: the official XMind embed introduces third-party request noise outside the app's own code
- Secondary risk: generated poster covers are good enough for launch, but they are not as strong as hand-picked video stills
- Guardrail: preserve the current poster-first homepage composition and keep future changes subordinate to hiring clarity

## Launch Blockers And Deploy-Ready Assessment

### Remaining launch blockers

1. Conditional platform blocker:
   - If deployment will be done through the Vercel CLI on a Hobby plan, the current asset payload should be treated as blocking until assets are compressed, relocated, or the deployment path/plan changes.

### Remaining non-blocking risks

1. Clipboard feedback interaction should get one manual click-check in a real browser.
2. Root HTML `lang` is still not locale-specific.
3. Official XMind embed produces external analytics requests and one benign warning in the console.

### Deploy-ready assessment

- The site is deploy-ready at the application level:
  - routes are complete
  - lint/build/typecheck pass
  - local browser smoke tests pass
  - home, work, about, contact, bilingual pages, local media, and OG metadata are all wired
- Deployment is conditionally blocked only if the chosen Vercel path/plan cannot accept the current local-media payload

## Open Inputs From User

- Final domain decision
- Optional later poster / still-frame upgrades for featured work
- Optional English copy polish pass

## Notes Added On 2026-04-03

- Archived legacy `~/.agents/skills` to remove duplicate-skill overlap
- Installed Rust toolchain via `rustup`
- Built packaged explore harness binary for oh-my-codex
- Updated docs to reflect actual resume content source
- Added `docs/content-source-map.md` as a canonical reference for future content wiring

## Notes Added On 2026-04-08

- Captured product decisions in `docs/decisions.md`
- Confirmed public English name, hero copy, public contact scope, and work-page scope
- Confirmed V1 Featured set from `AI 实践作品`
- Confirmed all works will use dedicated detail pages
- Confirmed `哈迪斯系统拆解.xmind` uses `xmind-embed-viewer` with a custom site wrapper
- Confirmed Quark links are not used in V1
- Added design tokens, hero layout spec, and component catalog docs
- Created baseline docs commit on `main`
- Initialized worktree branch `feat/site-v1-foundation`
- Completed U4 homepage implementation with browser verification and reduced-motion fallback
- Synced `background.jpg` into the implementation worktree and sharpened the homepage hero base
- Upgraded the code-damage layer from mostly ambient effects to pointer-reactive binary/code fragments
- Completed U5-U8 implementation in the worktree
- Added local media serving, work-detail media integration, XMind embedding, richer About/Contact/Journal pages, and a valid OG image route
- Revalidated the site with `dev`, browser smoke tests, `lint`, and `build`
- Ran a follow-up frontend cleanup / redesign pass after user feedback
- Removed the homepage metadata placeholder rail and unified the hero/support composition
- Removed the work-page status table and toned down the work-page visual treatment
- Removed the `Journal` nav entry and public routes from current V1 scope
- Applied homepage content refinements from user feedback, including title wording, role-line replacement, summary copy rewrite, and featured-project summary updates
- Reworked the `/work` page after user feedback: removed the intro block, renamed the featured/archive sections, removed duplicated card text, removed the incorrect AI-development external button, and added two resume-linked external project cards
- Unified the `Other work` cards to use the same visual structure as `Recent work`, keeping titles and summaries inside the card frame instead of repeating them below
- Simplified the shared project-detail layout by removing the top metadata panel plus the old highlights/media-status blocks, and rewrote the `AI开发模拟` project note from user-provided copy
- Rewrote the `玩法流程 Demo 演示` project note to focus on rapid gameplay-flow landing and the `spec生成 -> MCP 协议映射资产` validation path
- Rewrote the `势力 AI Demo 演示` project note to focus on environment awareness, agent interaction, and dynamic diplomatic / military strategy feedback
- Added a shared Bilibili embed player for the two external-linked project pages
- Updated the three history-based project notes (`人物图鉴系统 Demo`, `势力地图演示`, `大事年表图鉴`) to emphasize historical adaptation, data construction, timeline interaction, and map / chronology support work
- Rewrote the `哈迪斯系统拆解` summary and project note into a fuller Roguelike systems analysis covering build logic, meta progression, boss mechanics, UI guidance, and design-methodology takeaways
- Removed the old About-page intro frame and reworked the page back toward its earlier two-column layout while adding hover/focus detail cards for resume experience bullets
- Refined the About-page experience interaction so detail content stays within a calmer two-column layout: desktop now uses in-card hover/focus previews and narrow layouts fall back to a single cleaner inline detail region instead of clipped side popups
- Fixed the remaining About-page overlap bug by raising the experience column above the right-side sidebar so hover detail cards no longer render underneath skills / extras panels
- Tuned the Contact-page vertical spacing so the header frame and the three contact cards no longer feel visually cramped against each other
- Added `docs/continue-prompt.md` as a reusable handoff prompt for future chats
- Built a portable development archive at `C:\Users\12067\Desktop\Vibe coding\personal_website_liuxin-dev-portable-2026-04-09.zip`, excluding `node_modules`, `.next`, dev logs, and `tsbuildinfo`

---

Document version: 2.4
Updated: 2026-04-08
