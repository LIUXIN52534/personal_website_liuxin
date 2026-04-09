# Personal Website V1

Liu Xin's bilingual portfolio built with `Next.js App Router + TypeScript`.

## Current App Scope

- Chinese root routes plus `/en` mirrors
- Homepage, work index, work detail pages, about, and contact
- Local dev can still read media from the ignored `AI 实践作品/` folder
- Production is prepared to use Vercel Blob public URLs instead of shipping large media in the repo

## Local Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Environment

Create `.env.local` from `.env.example`.

Required for deployment:

- `NEXT_PUBLIC_SITE_URL`

Required for Blob upload script:

- `BLOB_READ_WRITE_TOKEN`

## Media Workflow

The repo now supports two media sources for local-file projects:

1. `src/content/project-media-urls.json`
   - if a slug has a public Blob URL here, the site uses that remote URL directly
2. local fallback
   - if the JSON entry is empty, the site falls back to `/api/project-media/[slug]`
   - that route reads from the ignored local `AI 实践作品/` directory

### Upload Local Media To Vercel Blob

After the Vercel project is linked and `.env.local` contains `BLOB_READ_WRITE_TOKEN`:

```bash
npm run blob:upload
```

That script will:

- upload all local V1 media files from `AI 实践作品/`
- keep stable blob pathnames
- overwrite existing files when rerun
- update `src/content/project-media-urls.json` with the returned public URLs

Once that JSON file is populated, production no longer depends on bundling the local media directory.

## GitHub / Vercel Prep

Suggested upload flow:

1. Review locally with `npm run dev`
2. Link the project in Vercel and pull env vars into `.env.local`
3. Run `npm run blob:upload`
4. Recheck `src/content/project-media-urls.json`
5. Run `npm run lint` and `npm run build`
6. Commit and push to GitHub
7. Import the repo into Vercel

## Notes

- `background.jpg` is used by the homepage and should stay in the repo.
- `AI 实践作品/` and `刘鑫_策划.pdf` are local source assets and are intentionally ignored from git.
- `vibe.jpg` remains a local visual reference and is also ignored from git.
