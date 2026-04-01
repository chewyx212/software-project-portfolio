# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run check     # Run Astro TypeScript type checking
```

No test runner or linter is configured.

## Architecture

**Single-page Astro portfolio site.** All visible content is in one page (`src/pages/index.astro`) with anchor-based navigation (`#top`, `#work`, `#about`, `#contact`).

### Content

- **Projects** — Managed as Markdown files in `src/content/projects/`. Schema is defined in `src/content.config.ts`. The `featured` boolean and `order` number fields control what appears in the main work section vs. the supporting projects grid.
- **Site copy/metadata** — All other text (hero, about, contact, social links, CTAs) lives in `src/data/site.ts` as a single exported `siteMetadata` object.

### Styling

Pure CSS with no framework — single global stylesheet at `src/styles/global.css` using CSS custom properties as design tokens. Typography uses Manrope (body) and Cormorant Garamond (display) from `@fontsource`.

### Animation

GSAP v3 with ScrollTrigger handles all animations. Logic is centralized in `src/components/MotionController.astro`, which is included once at the bottom of the page.

### Layout

`src/layouts/Layout.astro` wraps every page with the HTML shell, imports global CSS, and accepts `title`/`description` props for SEO/OpenGraph meta tags.

### Responsive Behaviour

- **Header:** At `≤720px`, the header collapses to a compact pill showing only the avatar + CTA button (`.brand-copy` is hidden via `display: none`). At larger breakpoints the full brand name and role are visible.
- **Typography:** All heading sizes use `clamp()`. Mobile overrides (inside `@media (max-width: 720px)`) tighten the bounds: H1 `clamp(2.4rem, 10vw, 3.2rem)`, H2 `clamp(1.9rem, 8vw, 2.6rem)`.
- **Supporting projects grid:** 3 columns on desktop, collapses to 1 column at `≤980px`.
