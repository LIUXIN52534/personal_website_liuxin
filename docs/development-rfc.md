# Personal Website V1 Development RFC

## 1. RFC Intake

### Objective

Build a bilingual personal portfolio site that is visually distinctive, hiring-oriented, and maintainable through repo-managed content files.

### Current Repo State

- Repo exists but still has no baseline commit
- Current `docs/` directory is the source of truth for product and execution decisions
- Node available locally: `v25.3.0`
- npm available locally: `11.7.0`
- `omx doctor` passed with `12/12` checks on `2026-04-03`
- Explore harness binary is ready locally
- Legacy `~/.agents/skills` overlap has been archived
- No Git remote configured yet

### Chosen Defaults

- Framework: `Next.js App Router`
- Package manager: `npm`
- Deployment target: `Vercel`
- Secondary compatibility target: `Cloudflare Workers`
- `Cloudflare Pages` is not treated as the default full-featured App Router target
- Content source: local repo files
- Loop mode: `Ralph RFC pipeline + checkpointed Codex exec`
- Product decisions source: `docs/decisions.md`

## 2. Architecture Decisions

### App Shape

- Multi-page marketing / portfolio site
- Static-first rendering where practical
- Route-local content loading from repo files
- No CMS and no auth
- Homepage-first composition with separate detail pages

### Content Boundaries

- Structured content lives in `src/content` or `src/data`
- UI composition lives in `src/app` and `src/components`
- Visual utilities live in `src/lib/visual` or equivalent
- Shared bilingual copy lives in one stable typed layer
- Resume PDF remains a downloadable asset, not the primary reading surface
- Contact exposure must respect the final publish decision for phone / WeChat

### Implementation Priorities

1. Stable app shell and route scaffold
2. Typed content model
3. Home hero and art direction
4. Work / About / Contact / Journal pages
5. Content replacement, polish, validation, deployment

## 3. Target File Layout

Suggested target shape for implementation:

```text
src/
  app/
    (site)/
      page.tsx
      work/page.tsx
      work/[slug]/page.tsx
      about/page.tsx
      contact/page.tsx
      journal/page.tsx
    en/
      page.tsx
      work/page.tsx
      work/[slug]/page.tsx
      about/page.tsx
      contact/page.tsx
      journal/page.tsx
    globals.css
    layout.tsx
  components/
    site/
    visual/
    content/
    media/
  content/
    site.ts
    projects.ts
    resume.ts
  lib/
    i18n/
    utils/
public/
  resume/
  images/
docs/
```

This structure is a default, not a required exact tree, but the loop should preserve the same separation of concerns.

## 4. DAG Decomposition

### U0 - Repo Hygiene Baseline

- `id`: U0
- `depends_on`: none
- `scope`: finalize docs, ensure `.gitignore` covers local state, create first clean baseline commit, rename branch to `main`
- `acceptance_tests`:
  - `git status` is clean after commit
  - `.claude`, `.superpowers`, and `.omx` are ignored
- `risk_level`: low
- `rollback_plan`: revert the baseline commit

### U1 - Scaffold Next App

- `id`: U1
- `depends_on`: U0
- `scope`: initialize Next.js App Router project with TypeScript and npm, verify dev/build/lint commands
- `acceptance_tests`:
  - `npm install`
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
- `risk_level`: low
- `rollback_plan`: reset to U0 baseline in worktree

### U2 - Content And Data Foundation

- `id`: U2
- `depends_on`: U1
- `scope`: create typed site config, project entries, resume data, contact config, bilingual data access layer using the approved decisions and schema docs
- `acceptance_tests`:
  - app builds with placeholder content
  - missing required content fields fail typecheck
- `risk_level`: medium
- `rollback_plan`: keep scaffold, revert content model files only

### U3 - Global Shell And Routing

- `id`: U3
- `depends_on`: U2
- `scope`: implement layout, navigation, footer, bilingual routing, page chrome, shared design tokens, page-level metadata contract, and route-preserving locale switch
- `acceptance_tests`:
  - `/`, `/work`, `/about`, `/contact`, `/journal`
  - `/en`, `/en/work`, `/en/about`, `/en/contact`, `/en/journal`
  - language switch preserves destination intent
  - canonical and alternates are present for both locales
- `risk_level`: medium
- `rollback_plan`: revert shell layer without touching content model

### U4 - Home Hero And Visual System

- `id`: U4
- `depends_on`: U3
- `scope`: implement homepage hero, metadata panel, selected work preview, signature visual layer derived from vibe.jpg, and reduced-motion fallback
- `acceptance_tests`:
  - homepage loads without runtime errors
  - hero keeps hierarchy on desktop and mobile
  - reduced-motion fallback is present
- `risk_level`: medium
- `rollback_plan`: revert visual layer, keep layout and content intact

### U5 - Work Page

- `id`: U5
- `depends_on`: U3, U4
- `scope`: build multi-media work grid, featured ordering, dedicated detail pages for all works, local video playback, XMind viewer integration, and graceful placeholders
- `acceptance_tests`:
  - at least one placeholder video item renders
  - at least one document / archive style item renders
  - featured items sort first
  - visibility rules are respected
  - XMind detail page loads with the chosen viewer integration
- `risk_level`: medium
- `rollback_plan`: revert work-page-specific files

### U6 - About Page

- `id`: U6
- `depends_on`: U3, U2
- `scope`: render modular public-resume page and PDF download entry
- `acceptance_tests`:
  - placeholder resume modules render in both languages
  - PDF link exists and resolves when file is present
- `risk_level`: medium
- `rollback_plan`: revert about-page-specific files

### U7 - Contact And Journal

- `id`: U7
- `depends_on`: U3
- `scope`: implement direct contact page and public journal placeholder page
- `acceptance_tests`:
  - contact info displays as plain text
  - journal page is publicly routable from nav
- `risk_level`: low
- `rollback_plan`: revert page files only

### U8 - Polish, Validation, Deployment Prep

- `id`: U8
- `depends_on`: U4, U5, U6, U7
- `scope`: responsive polish, metadata, asset pass, Vercel prep, final verification
- `acceptance_tests`:
  - `npm run build`
  - `npm run lint`
  - manual route smoke test
  - if Cloudflare compatibility is enabled, run runtime-accurate preview before merge-ready state
- `risk_level`: medium
- `rollback_plan`: revert polish-only changes, keep stable content and routing

## 5. Merge Queue And Quality Gates

### Merge Order

`U0 -> U1 -> U2 -> U3 -> U4 -> (U5, U6, U7 in parallel if desired) -> U8`

### Required Per-Unit Gates

Every unit must produce:

1. brief research note if scope changed
2. bounded implementation diff
3. validation output
4. review summary
5. merge-ready note

### Required Validation

- narrowest relevant command first
- broaden validation only after the narrow check passes
- run `codex review --uncommitted` before merge-ready state
- do not claim Cloudflare compatibility from a Vercel-only dev/build pass

### Stop Conditions

Stop the loop and wait for human input when:

- content model can no longer be decided from docs
- a unit requires a new dependency not already justified in this RFC
- app shell direction conflicts with PRD
- deployment target changes from `Vercel-first` to `Cloudflare-first`
- a media-hosting decision changes away from local in-repo assets

## 6. Worktree And Loop Setup

### Baseline Setup In Main Repo

Run after docs are accepted:

```powershell
git branch -m main
git add .gitignore docs
git commit -m "docs: establish personal site v1 rfc baseline"
git worktree add ..\personal_website_liuxin-dev -b feat/site-v1-foundation
```

### Ralph Loop Working Pattern

Use the main repo for review and notes. Use the worktree for implementation.

Recommended loop:

```powershell
codex exec -C ..\personal_website_liuxin-dev --full-auto "Read docs/development-rfc.md and execute U1 only. Stop after validation and summarize."
codex review -C ..\personal_website_liuxin-dev --uncommitted "Focus on regressions, missing tests, route mistakes, and unnecessary complexity."
```

Repeat per unit. Do not mix multiple units in one unattended run unless they are explicitly independent.

## 7. Recovery

If a unit stalls:

1. record status in `docs/ralph-loop-execution-log.md`
2. snapshot failure cause
3. reduce scope to the smallest blocked sub-problem
4. rerun with a narrower prompt

If a later unit reveals a missing earlier decision, update PRD and RFC first, then resume implementation.

---

Document version: 2.2  
Updated: 2026-04-08
