# VeraAI – hemsida

Marketing site for VeraAI (Vera Labs AB), built with Next.js (App Router), TypeScript and Tailwind CSS v4.
Implemented from the "VeraAI – hemsida" V3 design canvas ("light steel" with light and dark mode).

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. The npm scripts call `node node_modules/...` directly because the project
folder name contains a `:`, which breaks npm's `PATH` handling for `node_modules/.bin`.

## Structure

- `src/app/**/page.tsx` – one route per page (`/`, `/foretag`, `/agenter/*`, `/privat/*`, `/priser`, …).
- `src/app/layout.tsx` – fonts (Montserrat, League Spartan, Archivo Black), header, footer, theme bootstrap.
- `src/app/globals.css` – design tokens (`--page`, `--surface`, `--ink`, `--accent`, …) for light and
  `.dark` mode, exposed to Tailwind as colors (`bg-surface`, `text-ink`, `border-line`, …), plus the
  few component styles that need hover, `:checked` or animation rules.
  Tailwind's preflight is intentionally left out: the design relies on browser defaults.
- `src/components/site-header/` – navigation data, header with dropdowns and mobile menu, theme toggle.
- `src/components/SiteFooter.tsx`, `src/components/SavingsCalculator.tsx` (pricing page calculator).

The start page uses the "levande" variant: a steel-blue accent scoped with `:root:has(.lv-page)`.

## Placeholders still in the copy

`[ADRESS]`, `Org.nr [XXXXXX-XXXX]`, prices shown as `XXX kr`, image placeholders and the demo video slot.
The contact form posts via `mailto:` as in the design; connect it to a real endpoint before launch.
