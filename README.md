# Nithin K — 3D Portfolio (source export from Lovable)

TanStack Start + React 19 + Vite + Tailwind v4 + react-three-fiber. This is the
full custom source for the site (hero 3D network graph, matrix rain, tilt
cards, animated terminal logs, all sections/content).

## 1. What's included vs. what needs one extra step

Everything **custom** is here:
- `src/components/*.tsx` — Hero 3D scene, matrix rain, nav, tilt cards, terminal
  log animation, and the full `Portfolio.tsx` (all sections + your content)
- `src/routes/*` — TanStack Router pages
- `src/lib/*`, `src/hooks/*` — utilities
- `src/styles.css` — the whole neon/terminal theme (colors, glow, scanlines,
  glitch/flicker animations)
- All config files (`package.json`, `vite.config.ts`, `tsconfig.json`,
  `eslint.config.js`, etc.)

**Not included:** `src/components/ui/*` — the ~40 shadcn/ui primitives
(button, input, textarea, dialog, etc.). These are 100% stock, auto-generated
files — identical whether Lovable, you, or I generate them. Rather than paste
40 boilerplate files, restore them in one command (step 3 below) using the
`components.json` already included, which pins the exact style ("new-york")
Lovable used.

## 2. Prerequisites

- Node.js 20+ (or Bun 1.1+) — https://nodejs.org
- A package manager: `npm` (comes with Node) or `bun`

## 3. Setup

```bash
# 1. Unzip, then move into the folder
cd nithin-portfolio

# 2. Install dependencies
npm install
# (or: bun install)

# 3. Restore the shadcn/ui primitives used by this project
npx shadcn@latest add button input textarea sonner card dialog dropdown-menu \
  accordion alert alert-dialog aspect-ratio avatar badge breadcrumb calendar \
  carousel chart checkbox collapsible command context-menu drawer form \
  hover-card input-otp label menubar navigation-menu pagination popover \
  progress radio-group resizable scroll-area select separator sheet sidebar \
  skeleton slider switch table tabs toggle toggle-group tooltip
# Answer "yes" to any overwrite prompts — it will match components.json exactly.
```

If you'd rather skip that and only need what the portfolio itself uses, the
minimum set is just:

```bash
npx shadcn@latest add button input textarea sonner
```

(`Portfolio.tsx` only imports `Button`, `Input`, `Textarea`, and the `sonner`
`Toaster`/`toast`. The full list above just keeps the `ui/` folder identical to
the original in case you build on it later.)

## 4. Run it

```bash
npm run dev
```

Open the URL it prints (default **http://localhost:3000** or a similar Vite
port — check your terminal output). Hot reload is on; edit any file in `src/`
and the browser updates instantly.

## 5. Other useful commands

```bash
npm run build     # production build
npm run preview    # preview the production build locally
npm run lint       # eslint
npm run format     # prettier --write .
```

## 6. Project structure

```
nithin-portfolio/
├── package.json            # deps + scripts
├── vite.config.ts          # Vite config (wraps @lovable.dev/vite-tanstack-config)
├── tsconfig.json
├── eslint.config.js
├── components.json         # shadcn/ui config (style: new-york)
├── .prettierrc / .prettierignore
├── bunfig.toml              # bun install settings (safe to ignore if using npm)
├── public/
│   └── favicon.ico
└── src/
    ├── styles.css                    # theme tokens, neon/glow/scanline/glitch utilities
    ├── router.tsx                    # TanStack Router instance
    ├── routeTree.gen.ts              # AUTO-GENERATED — don't hand-edit
    ├── server.ts                     # SSR entry + error-safety wrapper
    ├── start.ts                      # TanStack Start middleware
    ├── routes/
    │   ├── __root.tsx                # HTML shell, <head> tags, 404/error boundaries
    │   └── index.tsx                 # "/" route → renders <Portfolio />
    ├── components/
    │   ├── Portfolio.tsx              # ALL sections: Hero, About, TechSpecs,
    │   │                              # Projects, Experience, Contact, Footer
    │   ├── HeroScene.tsx              # react-three-fiber 3D network graph
    │   ├── MatrixRain.tsx             # canvas matrix-rain background
    │   ├── Nav.tsx                    # sticky CLI-style nav w/ scroll-spy
    │   ├── TiltCard.tsx               # mouse-based 3D tilt wrapper
    │   ├── TerminalLog.tsx            # typewriter-animated log window
    │   └── ui/                        # ← restore via shadcn CLI (step 3)
    ├── hooks/use-mobile.tsx
    └── lib/
        ├── utils.ts                   # cn() class-merge helper
        ├── error-capture.ts           # SSR error capture (Lovable dev tooling)
        ├── error-page.ts              # static fallback error HTML
        └── lovable-error-reporting.ts # no-op outside Lovable's editor
```

## 7. Editing the content

All your text (bio, skills, project descriptions, terminal logs, timeline,
socials) lives in plain arrays/objects near the top of
`src/components/Portfolio.tsx` — `SOCIALS`, `SKILLS`, `PROJECTS`, `TIMELINE`.
Edit those directly; no other file needs to change for content updates.

## 8. Note on `@lovable.dev/vite-tanstack-config`

`vite.config.ts` depends on the public npm package `@lovable.dev/vite-tanstack-config`,
which just bundles the standard TanStack Start + React + Tailwind v4 Vite
plugins with sane defaults. It's a normal published package, so `npm install`
resolves it like any other dependency — no Lovable account or connection
needed to run this locally.

## 9. Deploying

Since this is TanStack Start (SSR), deploy to any Node-friendly host — Netlify,
Vercel, Railway, Cloudflare Workers, or a plain VPS with `npm run build && node .output/server/index.mjs`.
The `nitro`/Vite build produces a standard `.output/` folder. If you'd rather
keep editing visually and let Lovable keep deploying it, just use the editor
link from before.
