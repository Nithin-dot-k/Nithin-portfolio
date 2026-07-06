# Routes

This directory uses TanStack Router file-based routing.

- `__root.tsx` — root layout, HTML shell, error/404 boundaries, global `<head>` tags.
- `index.tsx` — the `/` route, renders the `<Portfolio />` component.

Add new pages by creating additional files here (e.g. `about.tsx` for `/about`).
`src/routeTree.gen.ts` is auto-generated from this folder — do not edit it by hand.
