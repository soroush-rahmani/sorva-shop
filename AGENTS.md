# AGENTS.md

## Project Overview

**SORVA SHOP** — فروشگاه اینترنتی لوازم آرایشی و بهداشتی (online cosmetics & hygiene products store).

The website is **Persian (Farsi)** with an **RTL** layout, prices in **تومان (Toman)**, and the Vazirmatn font.

## Tech Stack

- **Next.js 16** — App Router, Turbopack, Image Optimization
- **React 19** with **React Compiler** enabled (`reactCompiler: true` in `next.config.ts`) — do NOT add manual `useMemo`/`useCallback` unless profiling proves a real bottleneck
- **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config via `@theme` in `app/globals.css` (no `tailwind.config.js`)
- **npm** — package manager

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Code Conventions

- No `src/` directory — App Router files live directly in `app/`
- Reusable components go in `components/` (kebab-case file names, e.g. `product-card.tsx`)
- Import alias `@/*` maps to the project root (e.g. `import Header from "@/components/header"`)
- Product mock data lives in `lib/products.ts`
- Product images MUST use `next/image` (width/height/priority where appropriate)
- Global styles and theme tokens (brand colors, fonts) are defined in `app/globals.css` via `@theme`
- Keep the UI right-to-left: `dir="rtl"`, Persian digits, Toman prices