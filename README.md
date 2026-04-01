# Paul Chew — Software Portfolio

Personal portfolio site for Paul Chew, a frontend-focused full stack engineer based in Malaysia. Built with Astro, pure CSS, and GSAP animations.

## Tech Stack

- **[Astro](https://astro.build)** v6 — static site generator, file-based routing
- **Pure CSS** — custom properties as design tokens, no CSS framework
- **GSAP** v3 + ScrollTrigger — scroll-based and load animations
- **Astro Content Collections** — Markdown-driven project data with Zod schema validation
- **TypeScript** (strict mode)

## Getting Started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview production build
npm run check     # TypeScript / Astro type checking
```

## Content

### Adding or editing a project

Create or edit a Markdown file in `src/content/projects/`. Required front matter fields:

```yaml
---
title: Project Name
tagline: One-line description
summary: Short paragraph for the supporting projects grid
year: "2024"
role: Your role on the project
stack: [React, Node.js, PostgreSQL]
outcome: What was delivered or achieved
coverImage: /project-covers/your-image.svg
featured: true          # true = featured work section, false = other work grid
order: 1                # sort order within featured/supporting groups
visibility: public-case-study   # or private-summary
---
```

Optional fields: `screens` (array of image URLs), `liveUrl`, `repoUrl`.

### Editing site copy

All hero text, about section, contact details, social links, and CTAs are in `src/data/site.ts` — one exported `siteMetadata` object.

## Project Structure

```
src/
├── pages/index.astro          # Single page — all sections
├── layouts/Layout.astro       # HTML shell, SEO meta tags
├── components/
│   ├── MotionController.astro # GSAP animation orchestration
│   └── SocialIcon.astro       # SVG social icons
├── content/projects/          # Markdown project files
├── data/site.ts               # All site copy and metadata
└── styles/global.css          # Single global stylesheet
public/
├── project-covers/            # Cover images (SVG)
├── project-screens/           # Detail screenshots
└── documents/                 # Resume PDF
```
