# TRD – Masoom Studio

## Recommended stack
Next.js App Router + TypeScript + Tailwind CSS, optimized local images, Vercel and GitHub. Preserve a sound existing stack rather than migrating without a reason. Keep dependencies minimal.

## Architecture
Static-first pages and server-rendered metadata. Store services, portfolio entries and social URLs in typed local data/MDX initially. No database is required unless client galleries or lead management are requested. Any enquiry form needs server-side validation, rate limiting, anti-spam controls and a verified recipient.

## Routes
`/`, `/about`, `/weddings`, `/pre-wedding`, `/films`, `/portfolio`, `/contact`, `/privacy`. Add other-function pages only when confirmed.

## Components
Header, mobile navigation, hero, portfolio grid/lightbox, film showcase, service cards, process section, enquiry form, social links, contact block and footer.

## Data
Studio identity/contact; confirmed services; portfolio assets with category/alt text/permission status; film links/posters; social links; map; SEO metadata.

## Performance
Create WebP/AVIF derivatives, use responsive sizes, explicit dimensions, lazy-load below-fold assets and preload only the true hero media. Prefer poster-first or click-to-play video. Respect `prefers-reduced-motion`.

## SEO/deployment
Unique metadata, canonical URL, sitemap, robots, Open Graph and structured data with verified fields only. Preview for owner approval. Run lint, typecheck, build, link validation and secret scanning. Never commit `.env` or credentials.
