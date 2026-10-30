# Glas-tester (DESIGN-GLASS.md §12)

Ett kommando kör alla kontroller och skriver GRÖN eller RÖD per punkt.

## Förberedelser, en gång

```bash
npm i -D playwright
npx playwright install chromium
```

axe-core finns redan i `node_modules` (indirekt beroende).

## Köra

Stoppa dev-servern först (`Ctrl + C`), skriptet bygger och startar en egen
produktionsserver på port 3100.

```bash
npm run test:glas
```

Varianter:

```bash
npm run test:glas -- --skip-build
```

```bash
npm run test:glas -- --url http://localhost:3000
```

Den sista kör mot en server som redan är igång (t.ex. dev-servern) och
hoppar över bygget. Dev-läget kan ge andra resultat än produktion, så
den vanliga körningen är den som gäller.

## Vad som kontrolleras

| # | Kontroll | Källa |
|---|---|---|
| 1 | `next build` utan fel och utan nya varningar mot `build-baseline.txt` | §12.1 |
| 2 | Inga hex-färger i `src/app` och `src/components`; exakt nio i `tokens.css` | §12.2 |
| 3 | `backdrop-filter` bara i `glass.css`, prefixad tvilling utan `var()` | §12.3 |
| 4 | Max 3 glasytor ovanför vecket (start + produktsida), max 4 med öppen rullgardin | §12.4 |
| 5 | axe `color-contrast`: noll fel, 390 + 1280 px, start + produktsida (bara mörkt läge, sajtens enda sedan 2026-10-30) | §12.5 |
| 6 | Skärmdumpar i `docs/skarmdumpar/<datum>/`: desktop, mobil och minskad transparens | §12.6 |
| 7 | Emulerad `prefers-reduced-motion`: inga övergångar eller animationer kvar | §12.7 |
| 8 | Ingen `transition`/`animation` som nämner backdrop | §12.8 |
| 9 | Checklista för Hugos manuella Safari-test (skrivs ut) | §12.9 |

Första körningen sparar byggets varningsrader som baslinje i
`scripts/glas/build-baseline.txt`. Ta bort filen för att sätta en ny.

Glasräkningen använder samma väljare som GLAS-PLAN.md:
`.glass, .btn--primary:not(.btn--flat), .btn--secondary:not(.btn--flat)`.
