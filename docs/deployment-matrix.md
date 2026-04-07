# Deployment Matrix

## 1. Purpose

This document turns the current deployment choice into an execution rule instead of a vague preference.

As of `2026-04-06`, the project should be treated as:

- Primary deployment path: `Vercel`
- Secondary compatibility path: `Cloudflare Workers`
- Static-only fallback path: `Cloudflare Pages`

## 2. Decision Matrix

| Target | Status | Use When | Do Not Assume |
| --- | --- | --- | --- |
| Vercel | Primary | Default production and preview environment for the site | That Cloudflare behavior is identical |
| Cloudflare Workers | Secondary | When we explicitly need Cloudflare hosting or edge bindings | That a plain `npm run dev` pass proves runtime parity |
| Cloudflare Pages | Fallback | Only if the site stays pure static output | That it is equivalent to full App Router SSR support |

## 3. Primary Path: Vercel

Why it is primary:

- Next.js App Router has zero-configuration deployment support on Vercel
- Preview URLs and production flow are straightforward
- The current project goals do not require a custom runtime

Expected workflow:

1. Develop locally with `npm run dev`
2. Validate with `npm run build` and `npm run lint`
3. Deploy through Git integration or `vercel`

## 4. Secondary Path: Cloudflare Workers

Cloudflare currently supports Next.js through the Workers full-stack path, not through a generic "same as Vercel" assumption.

Rules:

- If we target Cloudflare compatibility, we must treat `workerd` as a separate runtime
- `npm run dev` is not enough evidence for compatibility
- A runtime-accurate `preview` step is required before claiming support
- Any Node-only behavior must be checked against the Workers runtime

When to enable this path:

- The user explicitly chooses Cloudflare as the main deployment target
- We need Cloudflare-specific bindings or networking
- We want to verify host portability as a release goal

## 5. Fallback Path: Cloudflare Pages

Cloudflare Pages is not the default target for a full App Router feature set.

Allowed usage:

- Pure static export
- Minimal static landing page fallback

Not safe to assume:

- Middleware parity
- SSR parity
- Route handler parity

If the site introduces dynamic server behavior, Pages should not remain the documented fallback target.

## 6. Verification Rules

### Vercel-first baseline

Required evidence:

- `npm run dev`
- `npm run build`
- `npm run lint`

### Cloudflare compatibility claim

Required evidence:

- Local development pass
- Production-like preview pass in the Cloudflare runtime
- Confirmed build/deploy command path

If this evidence is missing, documentation must say `not yet verified`.

## 7. Current Recommendation

For V1:

- Build for `Vercel` first
- Keep code `static-first`
- Avoid runtime-specific middleware unless needed
- Only enable Cloudflare compatibility as an explicit validation goal

## 8. Sources

- Vercel Next.js docs: https://vercel.com/docs/frameworks/full-stack/nextjs
- Cloudflare Workers Next.js docs: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- Cloudflare Pages Next.js docs: https://developers.cloudflare.com/pages/framework-guides/nextjs/

---

Document version: 1.0  
Updated: 2026-04-06
