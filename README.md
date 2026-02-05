# Author Site — E.A. Schmaltz

Production-ready Next.js (App Router, TypeScript, Tailwind, MDX) site for essays, books, and media. Content is fully data-driven—add files, commit, and Vercel will redeploy.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind v4
- MDX via `next-mdx-remote`
- File-based content: `/content/writing`, `/content/books`, `/content/media`

## Local development
```bash
npm install
npm run dev
# visit http://localhost:3000
```

Quality gates:
```bash
npm run lint
npm run typecheck
npm run build
```

## Content model

### Writing (MDX)
Create `content/writing/YYYY-MM-DD-slug.mdx` with frontmatter:
```md
---
title: "Title of the piece"
summary: "One or two sentences."
type: "essay" | "explainer" | "commentary" | "newsletter"
topics: ["topic-a", "topic-b"]
date: "2026-02-04"
updatedAt: "2026-02-04"
---

MDX content here. Use `<!-- more -->` to mark the excerpt if desired.
```
Auto-generates `/writing`, `/writing/[slug]`, RSS (`/rss.xml`), sitemap, and filters by type/topic/year.

### Books (JSON)
Create `content/books/book-slug.json`:
```json
{
  "title": "Book Title",
  "subtitle": "Optional",
  "description": "What the book covers.",
  "releaseDate": "2026-11-12",
  "status": "available" | "coming-soon",
  "formats": [{ "label": "Hardcover", "url": "#" }],
  "retailers": [{ "label": "Bookshop", "url": "https://draft2digital.com/book/4109629" }],
  "coverImage": "/images/books/book-slug/cover.jpg"
}
```
Add the cover under `public/images/books/book-slug/`.
Pages: `/books`, `/books/[slug]` with JSON-LD.

### Media (JSON)
Create `content/media/YYYY-MM-DD-slug.json`:
```json
{
  "title": "Conversation title",
  "outlet": "Outlet name",
  "date": "2026-02-04",
  "type": "podcast" | "interview" | "speaking" | "article",
  "link": "https://example.com",
  "summary": "Optional blurb."
}
```
Page: `/media` with filter pills.

## Adding new items (quick workflows)
1. **New article** — add the MDX file (pattern above) to `content/writing/`; commit + push.
2. **New book** — add `content/books/book-slug.json` + cover image in `public/images/books/book-slug/`; commit + push.
3. **New media** — add JSON to `content/media/`; commit + push.

## Deployment (Vercel)
- Push to GitHub; connect the repo in Vercel. Defaults work (Next.js + npm).
- Set `NEXT_PUBLIC_SITE_URL` to your production domain for accurate metadata/RSS/sitemap.

## Project structure (high level)
- `app/(site)/*` — pages
- `components/*` — layout + cards + filters
- `content/*` — author-provided content
- `lib/content/*` — loaders for writing/books/media + MDX rendering
- `public/images/books/*` — book covers
- `.github/workflows/ci.yml` — lint + typecheck CI

## Maintenance tips
- Keep file names slugged (`YYYY-MM-DD-title.mdx`) to preserve URLs.
- Use `topics` consistently to make filters useful.
- Replace the placeholder social image at `public/images/social-card.png` if you add one.
