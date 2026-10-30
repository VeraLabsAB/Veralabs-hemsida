# GLAS-PLAN.md – från dagens kod till DESIGN-GLASS.md

Skriven: 2026-10-29. Underlag: DESIGN-GLASS.md (hela), `src/app/layout.tsx`,
`src/app/globals.css`, `next.config.ts`, `package.json`, alla filer i
`src/components/` och alla `page.tsx` i `src/app/`.
Inga kodändringar är gjorda i den här sessionen.

Om läsningen: `layout.tsx`, `globals.css`, alla komponenter, startsidan och
`privatpersoner` är lästa rad för rad. Bokföringsagentens sida (1 848 rader)
är läst i sina delar (hero, kort, arbetsflöde, integrationer, jämförelse,
kontroll-band, kundröster, FAQ, CTA-band). De sex övriga produktsidorna
(`agenter/*`, `privat/*`) är byggda från samma mall: samma sektioner på
nästan samma rader, samma antal knappar (5 primära + 5 sekundära) och samma
rad 42-/470-kort. Det är kontrollerat med sökningar, inte rad för rad.
`foretag`, `priser`, `kom-igang`, `om-oss`, `sa-fungerar-vera`, `sakerhet`
och `vanliga-fragor` är granskade med sökningar plus läsning av hero-delen.

---

## 1. Ramverk för styling, färger och typsnitt i dag

**Ramverk:** Tailwind CSS v4 (`tailwindcss` ^4 + `@tailwindcss/turbopack`,
kopplad som loader för `*.css` i `next.config.ts`). Next.js 16.4.3,
React 19.3. Ingen `tailwind.config.*` – v4 konfigureras i CSS.

- Tailwind laddas **utan preflight** (`globals.css` rad 1–4: bara
  `theme.css` och `utilities.css`). Sidan bygger på webbläsarens standard.
- Nästan all styling är **Tailwind-klasser direkt i JSX**, med många
  godtyckliga värden (`text-[13px]`, `rounded-[20px]`,
  `shadow-[0_30px_70px_rgba(33,37,41,0.12)]`).
- Egna komponentklasser finns i `@layer components` i `globals.css`:
  meny (`.site-nav`, `.nav-*`), switch (`.theme-*`), FAQ, `.field`,
  `.chip-link`, tabeller (`.data-table`, `.cmp-table`), scroll-reveal
  (`.reveal-*`), priser (`.pf-*`, `.pcards-*`, `.calc-*`) och startsidan
  (`.lv-*`).
- Inga CSS-moduler. Inga React-komponenter för knappar eller kort: varje
  knapp och kort är en `Link`/`a`/`div` med en lång, kopierad klasslista.

**Färger definieras i dag i** `src/app/globals.css`:

| Block | Rader | Innehåll |
|---|---|---|
| `:root` | 7–28 | Ljust läge: `--page`, `--surface`, `--surface-muted`, `--chip`, `--line*`, `--contrast*`, `--accent`, `--ink*`, `--logo-*` |
| `:root.dark` | 30–51 | Mörkt läge, samma namn |
| `:root:has(.lv-page)` | 54–66 | Startsidans egna färger (`--lv-*`) + **blå accent `#4a6a8a`** |
| `:root.dark:has(.lv-page)` | 68–80 | Samma i mörkt läge + **blå accent `#b0c4de`** |
| `@theme inline` | 82–118 | Mappar variablerna till Tailwind-färger (`bg-surface`, `text-ink`, `text-accent` …) och typsnitt |

Mörkt läge styrs med **klassen `.dark` på `<html>`**, inte `data-theme`.
Den sätts av `themeInitScript` (i `<head>`, före första målning) och
`ThemeToggle.tsx`, sparas i `localStorage` under `vera-theme`, och följer
systemet om inget är sparat.

**Typsnitt definieras i** `src/app/layout.tsx` (Google Fonts via
`next/font`) och mappas i `@theme inline` (`globals.css` rad 113–117):

| Tailwind-namn | Typsnitt | Används till |
|---|---|---|
| `font-sans` (standard) | Montserrat 400–700 | Brödtext på startsidan, meny, etiketter |
| `font-display` | League Spartan 700 | Rubriker |
| `font-brand` | Archivo Black | Definierad, ingen träff i koden |
| `font-serif` | "Times New Roman" (systemfont) | Brödtext i VERSALER på alla undersidor (≈700 ställen) |
| `font-mono` | systemets monospace | Belopp och konton i exempelkort |

---

## 2. Komponentlista

Sajten har bara fyra riktiga komponenter (`SiteHeader`, `ThemeToggle`,
`SiteFooter`, `SavingsCalculator`). Resten är mönster som upprepas i
sidfilerna. Listan tar med båda. "Glas" följer tabellen i DESIGN-GLASS.md §2.

### 2a. Globalt (alla sidor)

| Komponent | Fil | Glas | Vad som behöver ändras |
|---|---|---|---|
| Rotlayout | `src/app/layout.tsx` | NEJ | Lägg in ljusfältet (`.light-field`, §5) som första barn i `<body>`. |
| Header (toppmeny) | `src/components/site-header/SiteHeader.tsx` rad 77; `globals.css` `.site-nav` | **JA** | I dag kant-i-kant, `position: relative`, ej klistrad. Ska bli flytande pill: `sticky`/`fixed`, 12 px från toppen, 16 px från kanterna, höjd 56/48 px, `--r-pill`, klassen `glass glass--large`. Scroll-kant-effekt (24 px, `mask-image` + blur 8 px) under. |
| Logga | `SiteHeader.tsx` rad 49–63 | NEJ | Tre hex-färger → variabler (se §3). |
| Rullgardin, enkel (Info, Säkerhet, Priser, Om oss) | `SiteHeader.tsx` rad 101–121; `globals.css` `.nav-dropdown`, `.nav-panel` rad 170–196 | **JA** (`glass-strong`) | `.nav-panel` blir glaspanel med `--glass-fill-strong`, `--r-xl`, 8 px under headern. Öppnas i dag med `display:none/block` på hover/focus-within → måste bli opacitet/transform-övergång (200 ms, §8) och få tangentbordsstöd: Enter/Space öppnar, Esc stänger, pilar flyttar (§9.5). Kräver JS. |
| Rullgardin, mega (Produkter) | samma | **JA** (`glass-strong`) | Samma som ovan. I dag `left:40px; right:40px` (nästan hela bredden) – krockar med §7 "samma bredd som menyraden". Se fråga 9. |
| Menyrader i rullgardin | `.nav-link`, `.nav-heading`, `.nav-divider` | NEJ | Vanliga rader. Hover-bakgrund `var(--page)` byts mot en lätt tonad rad. Ikoner/etiketter → `--text-head` (§9.3). |
| Header-knapp "Boka en demo" | `SiteHeader.tsx` rad 125–130 | **JA, tonad** | I dag `rounded-xl` (12 px) → pill. Byt till primärknapp-klassen. |
| Hamburgarknapp (mobil) | `SiteHeader.tsx` rad 79–90; `globals.css` `.nav-burger` | NEJ (ligger i headerns glas) | `rounded 12px` → pill/cirkel, fokusring enligt §9.4. Egen glasyta behövs inte (Apple: gruppera). |
| Mobilmeny (öppen) | `globals.css` rad 314–389 | Oklart | I dag fälls listan ut inuti headern och panelerna blir genomskinliga. Se fråga 10. |
| Ljus/mörk-switch | `src/components/site-header/ThemeToggle.tsx`; `globals.css` `.theme-*` rad 257–312 | **JA** (knoppen vid tryck) | Knoppen får glas + `scale(1.1)` vid `:active`, 150 ms. Fokusring `--text-head`. Byt `.dark`-väljare om vi går över till `data-theme` (fråga 3). |
| Sidfot | `src/components/SiteFooter.tsx` | NEJ | I dag ljus (`bg-surface`). Spec: solid Shadow Grey i ljust läge. Se fråga 7. |

### 2b. Startsidan (`src/app/page.tsx`)

| Komponent | Rader | Glas | Vad som behöver ändras |
|---|---|---|---|
| Mörkt hero-band (`.lv-hero`, rutnät) | 13–106; `globals.css` 657–663 | NEJ | Mörk bakgrund `#212529` med linjemönster i båda lägena. Krockar med ljusfältet (§5). Se fråga 6. |
| Etikett-chip "AI-agenter för företag" | 16 | NEJ | Halvgenomskinlig rgba utan blur, hex-text. → variabler. |
| Primärknapp "Boka en demo" | 27–32 | **JA, tonad** | I dag blå `#B0C4DE`. → primärknapp-klass (Gunmetal-ton). |
| Sekundärknapp "Se Vera arbeta" | 33–41 | **JA, otonad** | Hex-färger → sekundärknapp-klass. |
| App-exempel "Veckans bokföring" (`.lv-mock`) | 45–103 | Fråga 5 | Ligger i hero, inte klickbart. Om det blir glas → läsbarhetslager + räknas mot taket. |
| Demo-video-platshållare | 123–133 | NEJ | Gradient från `--contrast` till `--accent` (blir blå på startsidan i dag). |
| Tre stegkort (`.lv-lift`) | 137–225 | NEJ | Hover lyfter 4 px → max 2 px (§8). |
| Fyra agentkort (länkar) | 250–337 | **JA, med måtta** (§2 "produktkort") | Ligger *under* hero, inte i den. Se fråga 5. Får glas + inre läsbarhetslager om svaret är ja. |
| Bild + bildplatshållare | 349–373 | NEJ | – |
| Trygghetslista "Kontroll som standard" | 375–468 | NEJ | Solid Bright Snow + Alabaster-kant (motsvarar §2 "förtroendekort"). |
| Integrationschips | 469–505 | NEJ | – |
| Jämförelsetabell | 506–596 | NEJ | Solid. Oförändrad utöver tokens. |
| Kundröster | 597–625 | NEJ | – |
| Grundarblock | 626–662 | NEJ | – |
| Kontaktformulär (demo-bokning) | 663–810 | NEJ (fält), **JA tonad** (skicka-knapp) | `.field:focus { outline: none }` bryter §9.4 – ge synlig fokusring. Skicka-knappen → primärknapp-klass. Formulärfält `rounded-xl` (12 px) → `--r-md` (14 px). |

### 2c. Produktmallen – `agenter/bokforing`, `agenter/trendovervakaren`, `agenter/strategikonsulten`, `agenter/leverantorsagenten`, `privat/kalender`, `privat/traning`, `privat/ekonomi`

| Komponent | Glas | Vad som behöver ändras |
|---|---|---|
| Hero-band (gradient `--page` → `--surface-muted`) | NEJ | Gradienten kan ersättas av ljusfältet eller ligga kvar som solid yta. |
| Hero primär + sekundär knapp | **JA** (tonad / otonad) | 5 primära + 5 sekundära per sida, kopierade klasslistor → knappklasser. |
| Hero-exempelkort ("Veckorapport", rad ≈42) | NEJ | Header + 2 knappar = 3 glasytor redan. Ska vara solid för att hålla taket. Skuggans rgba → token. |
| Statistikremsa under hero | NEJ | – |
| Omfattningskort (länkar), arbetsflödeskort, arbetssättskort, detaljsektioner | NEJ | Innehåll. Radier 16/20/24 px → `--r-lg`. |
| Integrationschips + "Lagring"-kort | NEJ | – |
| "Skillnaden" | NEJ | – |
| Jämförelsetabell (`.cmp-table .data-table`) | NEJ | Solid. |
| Branschchips | NEJ | – |
| Mörkt "Kontroll"-band (`bg-contrast`) | NEJ | – |
| Kundröster | NEJ | – |
| FAQ (`details.faq`) | NEJ | Solid. |
| CTA-band (`bg-accent`, `rounded-[28px]`) | NEJ (bandet) / **JA** (knapparna) | Knapparna ligger på mörk yta – kontrast måste mätas där. Ett av dem är `bg-page` (solid ljus), det andra kantknapp. |

### 2d. Övriga sidor

| Komponent | Fil | Glas | Vad som behöver ändras |
|---|---|---|---|
| Hero-band + 1–2 knappar | `foretag`, `kom-igang`, `sa-fungerar-vera`, `privatpersoner`, `om-oss`, `sakerhet`, `vanliga-fragor` | NEJ (band) / **JA** (knappar) | Knappar → knappklasser. |
| Agent-/tjänstekort | `foretag/page.tsx`, `privatpersoner/page.tsx` | NEJ | Innehåll (lång text, punktlistor). |
| Mörkt avslutningsband (`bg-contrast`) | alla övriga sidor | NEJ | – |
| Pris-växeln Företag/Privatperson (`.pf-btn`) | `priser/page.tsx` rad 13–28; `globals.css` 552–593 | Fråga 11 | Segmenterad kontroll (radio + label). Kandidat för en gemensam glasgrupp. |
| Priskort (`.pcards-f`, `.pcards-p`) | `priser/page.tsx` | NEJ | Innehåll. Knapparna i korten → primärknapp-klass (de är `min-h-11.5`, inte samma storlek som övriga). |
| Besparingskalkylator | `src/components/SavingsCalculator.tsx` | NEJ (ytor, fält, resultatkort) / **JA tonad** (knappen) | `.calc-box` fokus = bara kantfärg → lägg till fokusring. |
| Ankarchips (`.chip-link`) | `vanliga-fragor/page.tsx` rad 24–39 | NEJ i v1 | Små länkchips. Radie → `--r-pill` (är redan 999 px). |
| FAQ-listor | `vanliga-fragor`, `priser`, produktmallen | NEJ | – |

### 2e. Finns inte i koden i dag

| Komponent | Glas | Kommentar |
|---|---|---|
| Modal / dialog (demo-bokning) | JA | Demo-bokningen är ett vanligt formulär på `/#kontakt`, ingen modal. Se fråga 12. |
| Cookie-/samtyckesruta | JA | Finns inte. Sajten sätter inga cookies som syns i koden (bara `localStorage` för tema). Se fråga 13. |

---

## 3. Hex-färger direkt i komponenter

DESIGN-GLASS.md §12.2 kräver noll hex i `components/` och `app/` utom
tokens-filen. I dag:

| Fil | Rad | Värde | Var | Föreslagen variabel |
|---|---|---|---|---|
| `src/app/page.tsx` | 13 | `#F8F9FA` | hero-text | `--text-on-dark` → `--c-snow` |
| `src/app/page.tsx` | 16 | `#E9ECEF` | chip-text | `--c-platinum` |
| `src/app/page.tsx` | 19 | `#F8F9FA` | h1 | `--c-snow` |
| `src/app/page.tsx` | 22 | `#CED4DA` | ingress | `--c-pale-1` |
| `src/app/page.tsx` | 28 | `#B0C4DE` | primärknapp bakgrund | **blå, finns inte i Light Steel** → primärknapp-klass |
| `src/app/page.tsx` | 28 | `#212529` | primärknapp text | `--btn-text` / `--c-shadow` |
| `src/app/page.tsx` | 34 | `#ADB5BD` | sekundärknapp kant | sekundärknapp-klass |
| `src/app/page.tsx` | 34 | `#F8F9FA` | sekundärknapp text | sekundärknapp-klass |
| `src/components/site-header/SiteHeader.tsx` | 54 | `#F8F9FA` | logga, vänster stapel | `--c-snow` |
| `src/components/site-header/SiteHeader.tsx` | 55 | `#6C757D` | logga, höger stapel | `--c-slate` |
| `src/components/site-header/SiteHeader.tsx` | 59 | `#6C757D` | "LABS" | `--c-slate` (via `text-slate`-token) |
| `src/app/icon.svg` | 1 | `#000000`, `#F8F9FA`, `#6C757D` | favicon | Undantag: SVG-fil som webbläsaren laddar fristående kan inte läsa CSS-variabler. Grep-testet ska utesluta `*.svg`. |

**`src/app/globals.css` har 60 hex-värden**, alla i token-blocken på rad
8–26, 31–49, 55–65 och 69–79 (listade i §1). Eftersom `globals.css` ligger
i `app/` slår §12.2-greppen till på den. Lösning: flytta alla hex-värden
till en ny tokens-fil utanför `app/` (förslag `src/styles/tokens.css`) och
låt `globals.css` bara referera variabler. Av de 60 är fyra inte Light
Steel: `#ffffff` (rad 9), `#000000` (rad 25, 26, 31), och de blå
`#4a6a8a` (rad 55, 61) och `#b0c4de` (rad 69, 75).

**rgba-färger i komponenter** (inte hex, men samma problem – siffror
utanför tokens):

| Fil | Rad | Värde |
|---|---|---|
| `src/app/page.tsx` | 16 | `bg-[rgba(248,249,250,0.08)]`, `border-[rgba(248,249,250,0.18)]` |
| `src/app/page.tsx` | 719 | `shadow-[0_30px_70px_rgba(33,37,41,0.08)]` (formulär) |
| 7 produktsidor | ≈42 och ≈470 | `shadow-[0_30px_70px_rgba(33,37,41,0.12)]` / `0.10` (hero-kort, kort längre ned) |
| `src/app/globals.css` | 193, 660–661, 666–667, 675–676, 679 | skuggor och rutnätslinjer |

Ingen Tailwind-standardpalett (`bg-white`, `text-gray-500` o.d.) används
någonstans – bra.

---

## 4. Där backdrop-filter, blur eller transparens används i dag

- **`backdrop-filter`: ingenstans.** Ingen `-webkit-backdrop-filter`
  heller.
- **`blur`: bara `document.activeElement.blur()`** i `SiteHeader.tsx` rad 73
  (JavaScript, tappar fokus efter navigering – inte en CSS-effekt). Inga
  `filter: blur()`.
- **Halvgenomskinliga ytor:**
  - `page.tsx` rad 16: hero-chippet, rgba 0.08 bakgrund + 0.18 kant. Det
    enda "glasliknande" elementet i dag, utan oskärpa.
  - `globals.css` rad 660–661: `.lv-hero` rutnät med rgba 0.05-linjer.
- **`transparent` som bakgrund:** `.nav-trigger` (156), `.theme-switch`
  (261), `.nav-burger` (334), mobilens `.nav-panel` (378), `.calc-in` (640).
- **`opacity`:**
  - `globals.css` 474: etiketter i mobil-jämförelsetabellen (0.65 –
    kontrastrisk).
  - `globals.css` 554: `.pf-in` gömmer radioknapparna (funktionellt).
  - Keyframes: `vera-in-*` (480–519), `lv-dot` (681–690), `lv-in`
    (718–727) tonar in innehåll.
- **Skuggor med rgba:** se tabellen i §3.
- **Rörelse som spec:en berör:** `.lv-lift:hover` lyfter 4 px (§8 tillåter
  max 2 px). `.reveal-*` glider in innehåll 48–90 px vid scroll – det är
  innehållsrörelse, inte under glas, men ska vara kvar avstängd vid
  `prefers-reduced-motion` (är redan det, rad 542–549).

---

## 5. Byggordning – en uppgift per session

Gemensamt för alla uppgifter:
- Läs relevant guide i `node_modules/next/dist/docs/` innan kod skrivs
  (AGENTS.md: Next 16 har brytande ändringar).
- Arbeta på grenen `forbattra-utseende` (eller en gren per uppgift om Hugo
  vill).
- Varje uppgift slutar med slutrapportrutan.
- **Obs, kommandovakten:** i den här miljön tillåter vakten bara `git`,
  `ls`, `cat`, `head`, `tail`, `grep`, `diff`, `wc`, `sort`, `mkdir`,
  `cp -R`, `tar` och pytest. `npm run build` går alltså inte att köra
  härifrån. Testerna nedan är skrivna så att grep-delarna går att köra
  direkt, webbläsardelarna via dev-servern i förhandsvisningen
  (`.claude/launch.json`, konfig "dev") och `npm run build` av Hugo – tills
  fråga 15 är besvarad.
- **Obs, Lightning CSS (Turbopacks CSS-optimerare), verifierat 2026-10-29 i
  uppgift b:** skriv alltid `-webkit-backdrop-filter` FÖRE `backdrop-filter`.
  Står den prefixade raden sist tappas båda i den kompilerade CSS:en och
  glaset blir solid utan felmeddelande. Blanda inte heller `border-color`
  (shorthand) med `border-top-color` i samma regel – det ger tomma longhands
  (`border-right-color: ;`). Skriv kanten som en shorthand med tre värden.
- **Obs, grenbyte under dev-servern (2026-10-30):** byts gren medan
  `npm run dev` kör kan Turbopack fortsätta servera den gamla kompilerade
  CSS:en (startmallens globals.css syntes i Safari efter byte
  main → forbattra-utseende). Stoppa servern, kör `rm -rf .next`, starta om.
- **Obs, backdrop root:** ett element med oskärpefilter blir "backdrop
  root" för sina barn – de kan då bara sudda förälderns eget innehåll, inte
  sidan bakom. Därför ligger headerns glas på ett eget lager
  (`.site-header-glass`) bakom innehållet, och rullgardiner/mobilpanel är
  syskon till det lagret, inte barn till en glasyta.
- **Avvikelser från DESIGN-GLASS.md, beslutade i uppgift b–c (2026-10-29)
  efter test i Chrome, mörkt + ljust läge:**
  - `.glass--strong` suddar 20 px (spec:ens tak för stora ytor), inte 16.
  - `--glass-fill-strong` är 0.80 ljust / 0.85 mörkt (spec: 0.72 / 0.78).
    Vid spec-värdena avtecknade sig kanten på ett vitt kort tydligt genom
    rullgardinen.
  - Headern är `glass glass--large glass--strong`: med standardfyllningen
    föll menytexten under 4.5:1 när pillen låg över ett vitt kort i mörkt
    läge (§9.1 går före §4).
  - Fråga 9 och 10 är lösta enligt planens förslag: megamenyn har
    header-pillens bredd, mobilmenyn är en egen `glass--strong`-panel 8 px
    under den 48 px höga pillen. Hugo har sett båda i förhandsvisningen.
- **Knappar (uppgift d, 2026-10-29):** markup är `btn btn--primary` /
  `btn btn--secondary` (`src/styles/buttons.css` för form, `glass.css` tar
  med klasserna i sina glasväljare). Tillägg: `theme-dark` på band som är
  Shadow Grey i båda lägena (startsidans hero), `theme-inverse` på band som
  byter med temat (`bg-accent`, `bg-contrast`); båda är tema-scoper i
  `tokens.css` som sätter om semantiska namn och glas-tokens på elementet.
  `btn--flat` för knappar inuti en annan glasyta (headern), `btn--sm` (40 px)
  för headern. **Glasräkningen** måste därför räkna
  `.glass, .btn--primary:not(.btn--flat), .btn--secondary:not(.btn--flat)`,
  inte bara `.glass` (platta knappar är solida och räknas inte). Räkna med
  hela fönstret synligt: med DevTools dockad i sidan är `innerHeight` halv
  och hero-knapparna hamnar under kanten.
  Etiketter/chips inuti exempelkorten (`min-h-10`, `min-h-9.5`) är innehåll
  och har medvetet inte bytts.
- **Hugos beslut 2026-10-30 (efter d):**
  - Header-pillen linjerar med textkolumnen på desktop: max 1120 px och
    40 px från kanterna (spec §7 säger 16 px; det gäller nu bara ≤ 900 px).
  - Startsidans hero-band (`.lv-hero`) går ända upp bakom pillen och fyller
    minst första skärmen (`min-h-dvh`, innehållet lodrätt centrerat).
    Upplyftet (−68/68 px, −60/60 på mobil) ligger som Tailwind-klasser på
    elementet i `page.tsx`, inte i `.lv-hero`-regeln – se nästa punkt.
    Det svarar delvis på fråga 6: bandet är kvar och mörkt i båda lägena.
  - Startsidans övriga delar är var sin skärm på desktop
    (`min-[900px]:min-h-dvh`, innehållet lodrätt centrerat, `py-20`);
    på mobil vanligt flöde. Demo-sektionen är delad i "Demo" och "Tre steg.
    Ni bestämmer." (ny rubrik, får bytas). Ankare har `scroll-mt-20`.
  - Inga streck mellan sektionerna: de växlar sidbakgrund / kortyta
    (demo, agenter, kontroll, jämförelse, grundaren på `--page`; övriga på
    `--surface`). Kort byter till motsatt färg där de annars smälter in.
    Kontakt och sidfot har samma färg tills fråga 7 (sidfoten) är löst.
- **Fråga 5, beslutad 2026-10-30 (uppgift e):** glaset ligger på agentkorten
  under "En agent för varje område", som EN gemensam `glass glass--strong`-
  panel (radie 28 px) med fyra fält och bara luft emellan; fältet tonas
  (`--chip`) vid hover. Valt efter jämförelse av tre avgränsningar på
  `/glas-test` (linjer, tonade plattor, bara luft). Håller taket: två
  glasytor på skärmen med headern. Hero-exemplet förblir solidt.
  `.lv-lift:hover` sänkt till 2 px (§8).
- **Fråga 7–17, beslutade 2026-10-30 (Hugo sa ja till förslagen):**
  - 7: sidfoten är solid Shadow Grey i båda lägena med Iron Grey-kant
    upptill. Gjort med `theme-dark` på `<footer>`; alias-blocket i
    globals.css följer nu också `.theme-dark`/`.theme-inverse`, så scoperna
    täcker alla tokens.
  - 11: pris-växeln är en segmenterad kontroll: EN `glass glass--strong`-
    pill (`.pf-switch`) med två segment, det valda tonat som primärknappen.
  - 12 och 13: ingen modal och ingen cookie-ruta i v1. **Uppgift f) utgår.**
  - 14: `/glas-test` behålls bakom `noindex` (varianterna 6a-1–6b ligger
    kvar som referens).
  - 15: Hugo kör `npm run build` och testskriptet; Playwright installeras
    av Hugo när g) är skrivet.
  - 17: den lösa mappen `veralabs-hemsida:public:images:` tas bort av Hugo
    (vakten tillåter inga raderingar). Bilden startsidan använder ligger i
    `public/images/`.
- **Header följer scrollen (Hugos beslut 2026-10-30):** pillen förskjuts
  pixel för pixel uppåt när sidan scrollas ned tills den är utanför bild,
  och tillbaka i scrollens takt uppåt. Ingen animation (därför ingen
  konflikt med §8). Står still högst upp och när en meny är öppen.
  Implementerat i `SiteHeader.tsx` med `requestAnimationFrame` och
  `transform: translateY`. Stegen på startsidan är tre solida rutor i
  agentpanelens färg och radie (innehåll, inte glas).
- **Intoning vid scroll (Hugos beslut 2026-10-30):** `.reveal` och
  `.reveal-stagger` i globals.css tonar in innehåll och lyfter det 20 px
  medan det scrollas in, styrt av `animation-timeline: view()` med
  `animation-range: entry 0% cover 28%` och stegvis förskjutning för barn.
  Ingen JavaScript; av vid `prefers-reduced-motion`. Används på startsidans
  sektioner utom hero. Obs: `entry X% entry Y%` blev för kort för små
  element (≈30 px scroll); `cover` ger samma längd oavsett elementets höjd.
  Avstått från: parallax (rörelse under glas, §8) och scroll snap (test
  möjligt senare).
- **Startsidan, 2026-10-30 (Hugos beslut):** bildsektionen (foto +
  platshållare) är borttagen; `public/images/butik-kassa.jpg` används inte
  längre. Integrationssektionen har en loopad bakgrundsvideo
  (`public/video/integrationer.mp4`, 5,6 MB, 720p, 20 s, komprimerad i
  HandBrake) via `src/components/VideoBackground.tsx`: halvfart, pausas
  utanför bild och vid `prefers-reduced-motion`, döljs om filen saknas.
  Mörkt skikt 65 % och `theme-dark` ovanpå för kontrasten. Avvikelse från
  §8 ("rörliga bakgrunder under glas"): header-pillen passerar videon vid
  scroll uppåt; accepterat eftersom pillen är dold vid scroll nedåt.
  Stillbilden `integrationer.jpg` saknas ännu (valfri).
- **Bara mörkt läge (Hugos beslut 2026-10-30, avvikelse från DESIGN-GLASS
  §0.9 och §3):** `data-theme="dark"` sätts fast på `<html>` i
  `layout.tsx`; init-skriptet och switchen är borttagna ur layout och
  header. `ThemeToggle.tsx` och de ljusa tokens ligger kvar (ljusa tokens
  används av `theme-inverse` på de ljusa banden), så ljust läge kan
  återinföras med en attributändring och switchen tillbaka i headern.
  Testskriptet kör därför bara mörkt (`MODES` i `scripts/glas/run.mjs`).
  Systemets ljus/mörk-inställning påverkar inte längre sajten.
- **Kortradie 28 px (Hugos beslut 2026-10-30, avvikelse från §7):** alla
  rutor har samma rundning som header-pillen (28 px = halva pillens höjd).
  `--r-lg` är 28 px i tokens.css och alla `rounded-[20px]`/`rounded-3xl`
  i sidorna är bytta till `rounded-card`, så framtida ändringar görs på ett
  ställe. Inre rutor (14 px) och chips är oförändrade.
- **Obs, Lightning CSS igen:** deklarationer som läggs i en regel som också
  har `background-*`-rader kan försvinna i kompileringen (`margin-top` och
  `padding-top` i `.lv-hero` försvann, både som `var()`/`calc()` och som
  rena pixlar, medan samma rader i en regel utan bakgrund blev kvar).
  Lägg layoutmått i en egen regel eller som Tailwind-klasser, och verifiera
  alltid nya regler med `getComputedStyle` i förhandsvisningen.

### a) Tokens-fil + ljusfältet (§3, §4, §5)

**Rör:**
- Ny `src/styles/tokens.css`: `--c-*` (9 st), semantiska namn (`--bg-page`,
  `--bg-surface`, `--border`, `--text-body`, `--text-head`, `--text-muted`,
  `--btn-bg`, `--btn-text`), glas-tokens (`--glass-*`), radier (`--r-*`),
  rörelse (`--ease-glass: cubic-bezier(.2,.8,.2,1)`, tider). Ljust + mörkt.
- `src/app/globals.css`: ta bort hex-blocken (rad 7–80). Behåll de gamla
  namnen (`--page`, `--surface`, `--ink` …) som **alias** till de nya i
  tokens-filen, så att de ≈2 000 Tailwind-klasserna i sidorna fortsätter
  fungera utan att röras. `@theme inline` utökas med `--color-snow` …
  `--color-shadow` och `--radius-*`. Ta bort/ersätt de blå `lv`-accenterna
  enligt fråga 1.
- Ny `.light-field` i `globals.css` (eller `tokens.css`), ljust och mörkt.
- `src/app/layout.tsx`: `<div className="light-field" aria-hidden="true" />`.
- `SiteHeader.tsx` rad 54, 55, 59 och `page.tsx` rad 13–34: hex → variabler
  (bara färgbyte, knapparna byggs om i d).
- Om fråga 3 = `data-theme`: `ThemeToggle.tsx`, `themeInitScript` och alla
  `.dark`-väljare i `globals.css`.

**Klar när:**
1. `grep -rnE -e "#[0-9A-Fa-f]{6}" -e "#[0-9A-Fa-f]{3}[^0-9A-Fa-f]" src/app src/components --include=*.tsx --include=*.ts --include=*.css` ger noll träffar (`icon.svg` utanför).
2. `grep -c -e "--c-" src/styles/tokens.css` visar alla nio färger, och
   inga andra hex än de nio finns i filen.
3. I förhandsvisningen: `getComputedStyle(document.body).backgroundColor`
   = `rgb(233, 236, 239)` i ljust läge och `rgb(33, 37, 41)` i mörkt.
4. `.light-field` finns, har `position: fixed`, `z-index: -1`,
   `pointer-events: none`, ingen `animation`/`transition`.
5. Skärmdump ljus + mörk, startsida + en produktsida, före/efter.
6. `npm run build` utan fel (Hugo, tills vidare).

### b) Glass-komponentklassen med fallback-trappan (§6)

**Rör:**
- Ny `src/styles/glass.css`, importerad i `globals.css` i `@layer components`:
  - `.glass` steg 1 (solid grundläge) → steg 2 inom `@supports` +
    `@media (prefers-reduced-transparency: no-preference)`, siffrorna
    direkt i `-webkit-backdrop-filter` (Safari-fällan).
  - Varianter: `.glass--strong` (fyllning `--glass-fill-strong`),
    `.glass--large` (blur 12 px, skrivet ut, inte variabel), `.glass--tint`
    (primär), `.glass-readable` (inre läsbarhetslager, §9.2).
  - `@media (prefers-contrast: more)` och `(prefers-reduced-motion: reduce)`.
  - `.scroll-edge` (header-effekten, §8) – den enda andra platsen med
    `backdrop-filter`, i samma fil.
- En liten testsida, t.ex. `src/app/glas-test/page.tsx` med `noindex`,
  som visar varje variant över ljusfältet (tas bort i g eller behålls
  bakom `noindex` – fråga 14).

**Klar när:**
1. `grep -rn "backdrop-filter" src` ger träffar bara i `src/styles/glass.css`.
2. Varje `backdrop-filter`-rad har en `-webkit-backdrop-filter`-rad bredvid
   med samma siffror och utan `var(` (grep).
3. `grep -rnE "transition[^;]*backdrop" src` och samma för `animation` ger
   noll träffar.
4. I förhandsvisningen: `.glass` har `backdrop-filter: blur(16px) saturate(1.4)`.
   Via `document.styleSheets` verifieras att den regeln ligger inuti
   `@media (prefers-reduced-transparency: no-preference)`.
5. Skärmdumpar av testsidan ljus/mörk + emulerad reduced transparency
   (kräver CDP-emulering, se g).

### c) Header + rullgardiner

**Rör:** `SiteHeader.tsx`, `navigation.ts` (bara om strukturen ändras),
`globals.css` (`.site-nav`, `.nav-*`, `.nav-burger`, mobilregler 314–389).

- Header: flytande pill (`sticky`, `top: 12px`, 16 px in, höjd 56/48 px),
  `glass glass--large`, `.scroll-edge` under.
- Rullgardiner: en `glass glass--strong`-panel var, `--r-xl`, 8 px under
  headern, öppna/stäng med opacitet + `translateY(-6px)` + `scale(.98)`,
  200 ms. Ingen animerad blur.
- Tangentbord: knapparna får `aria-expanded`/`aria-controls`,
  Enter/Space öppnar, Esc stänger och lämnar fokus på knappen, pil
  upp/ned flyttar mellan rader. Hover-öppning behålls för mus.
- Menyrader: ikoner och text `--text-head`.
- Mobilmenyn enligt svaret på fråga 10.

**Klar när:**
1. Header: `getComputedStyle(header)` → `top: 12px`, `border-radius` ≥ 999px,
   höjd 56 px vid 1280 bredd och 48 px vid 390.
2. Rullgardin öppnad via tangentbord i förhandsvisningen: Tab till
   "Produkter", Enter → panel synlig, ↓ flyttar fokus, Esc stänger och
   fokus står kvar på knappen. Skärmdump av öppen panel ljus + mörk.
3. Antal synliga `.glass` i viewporten på startsidan med öppen rullgardin
   ≤ 4 (skript i `javascript_tool`).
4. Grep från b) fortfarande grön (ingen ny `backdrop-filter` i
   `SiteHeader.tsx`).
5. axe `color-contrast` på startsidan med öppen rullgardin: 0 fel.

### d) Knappar + switch

**Rör:**
- `src/styles/glass.css` eller ny `src/styles/buttons.css`: `.btn`,
  `.btn--primary` (glas, tonad Gunmetal/Shadow Grey), `.btn--secondary`
  (otonat glas), pill, min-höjd 52 px, hover/active enligt §8, fokusring
  §9.4.
- Byt de kopierade klasslistorna i alla sidor (runt 40 primära och lika
  många sekundära; exakt antal räknas i uppgiften eftersom priskortens
  knappar har en annan höjd, `min-h-11.5`; sju produktsidor à 10,
  startsidan, `foretag`, `kom-igang`,
  `sa-fungerar-vera`, `priser`, `sakerhet`, `vanliga-fragor`,
  `SavingsCalculator.tsx`, `SiteHeader.tsx`).
- `ThemeToggle.tsx` + `.theme-*`: glasknopp vid `:active`, `scale(1.1)`,
  150 ms.
- Eventuellt `.pf-btn` (fråga 11).

**Klar när:**
1. `grep -rc "rounded-full inline-flex items-center" src` ger bara
   träffar som inte är knappar (chips/etiketter), och `grep -rn "bg-accent text-ink-inverse" src/app`
   ger inga länkar eller knappar kvar. (Obs: `min-h-13 border-` matchar
   även formulärfälten och duger inte som test.)
2. Alla `a`/`button` med `btn--primary` har pill-radie och
   `outline: 2px solid` vid `:focus-visible` (skript i förhandsvisningen).
3. Hover: `transform` = `translateY(-1px)`, ingen `backdrop-filter` i
   `transition-property` (skript).
4. Glas-räkning ovanför vecket på startsidan och en produktsida ≤ 3.
5. axe `color-contrast` 0 fel, ljust + mörkt, 390 + 1280 px – inklusive
   knapparna på mörka band (`bg-contrast`, `bg-accent`, `.lv-hero`).

### e) Hero-kort

**Rör (beror på fråga 5):** `src/app/page.tsx` – antingen agentkorten
(rad 250–337) eller app-exemplet `.lv-mock` (rad 45–103), `globals.css`
`.lv-mock`/`.lv-lift`.

- Korten får `glass` + inre `.glass-readable` bakom texten, `--r-lg`.
- Om fotot ligger under: `--glass-fill-strong` (§5).
- `.lv-lift:hover` max 2 px.
- Produktsidornas hero-kort förblir solida (taket).

**Klar när:**
1. Glas-räkning: ≤ 3 i första vyn, ≤ 4 med öppen rullgardin.
2. axe `color-contrast` 0 fel på startsidan, båda lägena, båda bredderna,
   även med sidan scrollad så att korten ligger under headern (sämsta
   bakgrund, §9.1).
3. Skärmdump ljus/mörk, desktop/mobil.

### f) Modal + cookie-ruta

**Rör (beror på fråga 12 och 13):** nya komponenter, t.ex.
`src/components/Modal.tsx` (gärna på `<dialog>`) och
`src/components/CookieNotice.tsx`, plus `layout.tsx` och de länkar som ska
öppna modalen.

- Modal: `glass glass--strong`, `--r-xl`, max 560 px, 24 px från kanten
  på mobil, dämpning 35 %, öppning 220 ms (opacitet + `scale(.96)`),
  fokusfångst, Esc stänger, fokus tillbaka till knappen. Fälten solida.
- Cookie-ruta: liten, nederkant, en enda, `glass`.

**Klar när:**
1. Tangentbord: öppna modal med Enter, Tab stannar i modalen, Esc stänger,
   fokus tillbaka på utlösaren.
2. Dämpningslagrets beräknade bakgrund = rgba(…, 0.35).
3. Glas-räkning med modal öppen ≤ 4.
4. axe 0 fel med modal öppen och med cookie-rutan synlig.
5. Skärmdumpar ljust/mörkt.

### g) Testskript enligt §12

**Rör:** ny mapp `tests/` eller `scripts/glas/` + ev. `package.json`-script,
`docs/skarmdumpar/<datum>/`.

Innehåll (punkt för punkt mot §12):
1. Build (`npm run build`, inga nya varningar mot en sparad baslinje).
2. Hex-grep i `src/app` + `src/components` utom tokens-filen och `*.svg`.
3. `backdrop-filter`-grep bara i `glass.css`.
4. Glas-räkning i headless Chromium på startsidan med öppen rullgardin.
5. axe-core `color-contrast`: ljust + mörkt × 390 + 1280 px.
   (`axe-core` finns redan i `node_modules` som indirekt beroende,
   **Playwright finns inte**.)
6. Skärmdumpar: ljus/mörk × desktop/mobil + emulerad
   `prefers-reduced-transparency: reduce`.
7. Emulerad `prefers-reduced-motion: reduce`: inga `transition`/`animation`
   kvar på `.glass`.
8. Grep: ingen `transition`/`animation` som nämner `backdrop`.
9. Checklista för Hugos manuella Safari-test.

**Klar när:** skriptet körs från ett kommando, skriver ut grönt/rött per
punkt och sparar skärmdumpar på rätt plats. Hur det körs beror på fråga 15.

**Status 2026-10-30:** skrivet som `scripts/glas/run.mjs` med
`npm run test:glas` (se `scripts/glas/README.md`). Täcker §12.1–12.9:
build med varningsbaslinje, hex-grep, filter-grep, glasräkning (start +
produktsida, öppen rullgardin), axe color-contrast (ljus/mörk × 390/1280 ×
två sidor), skärmdumpar inkl. emulerad minskad transparens, reduced
motion, backdrop-grep och Safari-checklista. Startar egen produktionsserver
på port 3100. **Kört 2026-10-30 av Hugo: allt grönt** (Playwright
installerat, `npm run test:glas`). Första körningen gav ett äkta
kontrastfel, loggans "LABS" i Slate Grey på Shadow Grey (3,3:1), rättat
till Pale Slate; övriga axe-träffar var blandfärger mitt i intoningar,
så axe mäter nu med "minska rörelse". Byggbaslinjen är tom (inga
varningar). Skärmdumpar i `docs/skarmdumpar/2026-10-30/`. Kvar: Hugos
manuella Safari-kontroll (§12.9, checklistan skrivs ut av skriptet).

> Förslag på ordning: g) kan med fördel dras fram till direkt efter b),
> så att c–f mäts med samma skript i stället för för hand. Jag följer
> ordningen ovan om Hugo inte säger annat.

---

## 6. Frågor till Hugo

**Färger och tema (behövs före uppgift a):**

1. **Blå accent på startsidan.** `globals.css` rad 55, 61, 69, 75 ger
   startsidan en stålblå accent (`#4a6a8a` / `#b0c4de`), och primärknappen
   i hero är `#B0C4DE`. DESIGN-GLASS.md §3 säger "Inga blåa". Ska den bort
   helt och ersättas med Gunmetal/Shadow Grey? 
- Ja det ska den
2. **Bakgrund och kortyta byter plats.** I dag är sidbakgrunden Bright Snow
   (`#f8f9fa`) och korten vita (`#ffffff`, inte i paletten). Spec:en vill
   ha Platinum som sidbakgrund och Bright Snow på korten. Mörkt läge har i
   dag svart `#000000` som bakgrund (inte i paletten), spec:en Shadow
   Grey. Det ändrar känslan på hela sajten – ok att följa spec:en rakt av?
- Ja
3. **`.dark` eller `data-theme`.** Koden sätter klassen `.dark` på
   `<html>`, spec:en skriver att switchen sätter `data-theme`. Ska vi byta
   koden till `data-theme="dark"` (tre filer, min rekommendation, så att
   spec:ens CSS går att använda rakt av och appen kan dela tokens), eller
   ändra spec:en till `.dark`?
- Gör det som passar temat bäst
- **Beslut (Claude):** `data-theme="dark"` på `<html>`. Då gäller
  spec:ens CSS (`:root[data-theme="dark"]`) som den står, och appen kan
  dela samma tokens senare. Byte i `ThemeToggle.tsx` (switch +
  `themeInitScript`, samma `localStorage`-nyckel `vera-theme`) och alla
  `.dark`-väljare i `globals.css`. Inget märks för besökaren.
4. **Gamla variabelnamn.** Okej att behålla `--page`, `--surface`, `--ink`
   osv. som alias till de nya namnen, i stället för att skriva om ≈2 000
   klasser i sidorna? (Rekommenderas: mindre risk, samma resultat.)
- Ja
-
**Hero och glasytor:**

5. **Vilka är "hero-sektionens produktkort"?** På startsidan finns inga fyra
   agentkort i hero. Hero har ett app-exempel ("Veckans bokföring"). De fyra
   agentkorten ligger i sektionen "En agent för varje område" längre ned.
   Ska glaset på (a) agentkorten där de står, (b) app-exemplet i hero, eller
   (c) ska agentkorten flyttas upp i hero? Med header + två knappar är vi
   redan på 3 glasytor i första vyn, så (b) bryter taket om inte
   sekundärknappen blir solid.
6. **Det mörka hero-bandet på startsidan.** `.lv-hero` är mörkt
   (`#212529` med rutnät) även i ljust läge. Glas över det blir mörkgrått,
   och ljusfältet syns inte där. Ska bandet bort till förmån för ljusfältet,
   eller vara kvar (då behöver knapparna och ev. kort en egen mörk
   glasvariant)?
7. **Sidfoten.** Spec:en vill ha solid Shadow Grey i ljust läge (i dag ljus)
   och "Shadow Grey mörkare" i mörkt läge. Shadow Grey är redan den mörkaste
   färgen i paletten – vilken färg menas i mörkt läge? (Förslag: samma
   Shadow Grey med en Iron Grey-kant upptill.)
8. **Typsnitt.** I dag finns två system: startsidan har Montserrat i
   brödtext, alla undersidor har Times New Roman i VERSALER (≈700 ställen),
   och flera brödtexter är 13–15 px. §10 kräver ett typsnittsystem och minst
   16 px brödtext. Vilket system är "befintligt val" – och ska
   typsnittsstädningen ingå i glasarbetet eller bli en egen uppgift efteråt?
   (Rekommendation: egen uppgift, den rör varje sida.)

**Meny:**

9. **Megamenyns bredd.** "Produkter" öppnar i dag en bred panel (40 px från
   båda kanterna) med Företag och Privatpersoner i två kolumner. §7 säger
   "samma bredd som menyraden, inte hela skärmen". Ska den bli smalare
   (t.ex. bredden på den flytande headern), eller får megamenyn vara ett
   undantag?
10. **Mobilmenyn.** Under 900 px fälls menyn ut inuti headern som en lång
    lista med alla undermenyer öppna. Spec:en säger inget om den. Förslag:
    headerpillen stannar 48 px hög och menyn öppnas som en egen
    `glass--strong`-panel under den (räknas som rullgardinen = 4:e ytan).
    Okej?
11. **Pris-växeln Företag/Privatperson** (`/priser`). Är den en "switch"
    enligt §2/d och ska bli en gemensam glasgrupp, eller vara solid?

**Saker som inte finns:**

12. **Modal.** Det finns ingen demo-bokningsmodal; bokningen är formuläret
    på `/#kontakt`. Ska vi bygga en modal (och vilka knappar ska öppna den),
    eller hoppa över modaldelen av uppgift f?
13. **Cookie-ruta.** Sajten sätter inga cookies som syns i koden, bara
    `localStorage` för temat (räknas normalt som nödvändigt och kräver inget
    samtycke). Ska en cookie-ruta byggas ändå (t.ex. inför analys), eller
    hoppar vi över den?

**Arbetssätt och test:**

14. **Testsidan för glasvarianter** (uppgift b). Får den ligga kvar på
    `/glas-test` bakom `noindex`, eller ska den tas bort när g) är klar?
15. **Build och testverktyg.** Kommandovakten tillåter inte `npm`/`node`,
    så `npm run build` och ett Playwright-skript kan inte köras härifrån.
    Alternativ: (a) Hugo kör build och testskriptet själv och klistrar in
    resultatet, (b) vakten får tillåta just `npm run build` och
    `npm run test:glas`, (c) testerna skrivs i Python/pytest (det enda
    vakten tillåter) – men de behöver ändå starta Node för build och
    webbläsare, och det vill jag inte göra utan ditt uttryckliga ok
    eftersom det kringgår vakten. Playwright måste installeras som
    dev-beroende i fall (a) och (b). Vilket väljer du?
16. **Hex-greppens omfattning.** §12.2 säger `components/` och `app/`, men
    koden ligger i `src/`. Jag tolkar det som `src/components/` och
    `src/app/`, med `icon.svg` undantagen (SVG-filer kan inte läsa
    CSS-variabler). Stämmer det?
17. **Lös mapp med bilder.** `veralabs-hemsida:public:images:/` i projektroten
    (ej incheckad) innehåller två Adobe Stock-förhandsbilder
    (`240_F_…jpg`). Ser ut som en felkopiering. Är det bilden §5 nämner, och
    ska den flyttas till `public/images/` eller tas bort? (Jag rör den inte
    utan ditt svar.)

**Kontrastrisker att känna till (inga frågor, bara noterat):**
- Stegnumren "1, 2, 3" på produktsidorna är `text-ink-inverse-soft`
  (`#dee2e6`) på vit yta, ≈1.3:1. axe kommer att flagga dem i g).
- Mobil-jämförelsetabellens etiketter har `opacity: 0.65` (rad 474).
- `.lv-lift:hover` flyttar 4 px (§8: max 2 px).

---

## Slutrapport

| | |
|---|---|
| **STATUS** | 🟡 GULT – frågorna 1–4 är besvarade (2026-10-29), uppgift a) kan börja. Frågorna 5–17 är öppna, och build/test kan inte köras med nuvarande kommandovakt. |
| **KAN JAG GÅ VIDARE** | Ja, med uppgift a). b) kan börja direkt efter a). c)–f) väntar på frågorna 5–13. g) väntar på fråga 15. |
| **Beslut som behövs** | 15 (hur build och tester körs) behövs innan a) kan visas bygga felfritt. Sedan 5–6 (hero), 7 (sidfot), 9–10 (meny), 12–13 (modal, cookie-ruta). Övriga kan tas när respektive uppgift börjar. |
| **Nästa steg** | En ny session för uppgift a): tokens-fil, alias för gamla namn, `data-theme`, blått bort, Platinum/Snow/Shadow Grey enligt spec, ljusfältet, hex bort ur `src/app` och `src/components`. |
