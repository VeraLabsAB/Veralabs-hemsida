# DESIGN-GLASS.md – Veras utseende: Light Steel + Liquid Glass

Senast uppdaterad: 2026-10-29
Gäller: veralabs-hemsida (Next.js) nu, VeraAI-appen senare.
Den här filen är facit för utseendet. Kod som bryter mot reglerna här är fel,
även om den ser snygg ut.

---

## 0. Sammanfattning på tio rader

1. Färgerna är Light Steel (grå skala, se §3). Inga nya färger.
2. Glas används bara på "kontroll-lagret": meny, rullgardiner, knappar,
   modaler, flytande paneler. Aldrig på brödtext, tabeller eller sidfot.
3. Glas = genomskinlig bakgrund + bakgrundsoskärpa (`backdrop-filter`) +
   ljus kant upptill + mjuk skugga. Siffrorna står i §4.
4. Bakgrunden måste ha mjuka toner att sudda. Platt grå under glas blir
   smutsigt grått. Därför ligger ett lugnt "ljusfält" bakom sidan (§5).
5. Läsbart först, glas sedan: en läsbar, nästan ogenomskinlig variant är
   grundläget. Glaset läggs på bara när webbläsaren klarar det och
   användaren inte valt minskad transparens (§6).
6. Max 3–4 glasytor synliga samtidigt. Oskärpa högst 20 px på stora ytor.
   Oskärpan animeras aldrig (§8).
7. Text på glas ska klara WCAG-kontrast 4.5:1 mot den sämsta bakgrund den
   kan hamna över, inte den snyggaste (§9).
8. Rundade hörn är koncentriska: inre radie = yttre radie − avstånd (§7).
9. Rubriker fortsätter vara versaler. Ett enda typsnittsystem. Ljust och
   mörkt läge finns kvar, glaset anpassar sig till båda (§3, §10).
10. Inga SVG-refraktionsfilter i version 1. Det är ett valfritt steg
    senare, bara för Chromium, och får aldrig vara det enda som ritar
    ytan (§11).

---

## 1. Vad vi menar med "Glassmorphism" och "Liquid Glass"

**Glassmorphism** är stilen där paneler ser ut som frostat glas: man ser
bakgrunden genom dem, men suddig. Den byggs av fyra saker: delvis
genomskinlig fyllning, bakgrundsoskärpa, en tunn ljus kant och en mjuk
skugga. Stilen har funnits på webben sedan ca 2020.

**Liquid Glass** är Apples material från 2025 (iOS 26, macOS Tahoe m.fl.).
Det är glassmorphism plus tre saker:

| Egenskap | Vad det betyder | Går det på webben? |
|---|---|---|
| Lins-/refraktionseffekt | Kanten "böjer" bakgrunden som en glaskant | Bara i Chromium via SVG-filter. Inte i Safari/Firefox. Hoppas över i v1. |
| Anpassar sig till bakgrunden | Glaset blir ljusare över ljust, mörkare över mörkt | Delvis: vi styr det själva med ljust/mörkt läge. |
| Flytande rörelse | Knappar "smälter" ihop till menyer, kontroller studsar lätt | Delvis: enkla övergångar på opacitet, position och skala. |

Apples egna regler för materialet (källa: Apple HIG, Materials + Adopting
Liquid Glass):

- Glaset är ett **eget funktionslager** för kontroller och navigation som
  flyter ovanpå innehållet. Det skapar hierarki: det som går att trycka på
  ser annorlunda ut än det man läser.
- **Använd inte glas i innehållslagret.** Innehåll (text, bilder, tabeller)
  ligger på vanliga ytor.
- **Använd glas sparsamt.** Glaset ska dra blicken mot innehållet, inte
  konkurrera med det. För många glasytor blir rörigt.
- Två varianter: **regular** (suddar och justerar ljusstyrka så text blir
  läsbar, används nästan överallt) och **clear** (mycket genomskinlig,
  bara över foton/video, kräver ofta ett mörkt dämpningslager på ca 35 %).
  Vi använder bara regular-logiken.
- Färg (tint) bara på **primära handlingar**. Inte på alla knappar.
- **Gruppera** kontroller som hör ihop i en gemensam glasyta i stället för
  många små.
- Kontroller får **rundare former** som är koncentriska med sin behållare.
- Innehåll som scrollar under en glasyta får en **scroll-kant-effekt**: en
  mjuk övergång som suddar innehållet närmast kanten så kontrollerna
  förblir läsbara.
- Materialet **respekterar tillgänglighetsinställningar**: minska
  transparens, öka kontrast, minska rörelse. Då blir glaset i princip en
  solid yta.
- Apple har själva tonat ner transparensen efter kritik om läsbarhet, och
  gett användaren ett reglage från klart till tonat. Lärdomen: ha hellre
  lite för mycket oskärpa och lite för lite genomskinlighet än tvärtom.

---

## 2. Var glas får och inte får användas på Vera

Regeln: **glas är kontroll, aldrig innehåll.**

| Komponent | Glas? | Anmärkning |
|---|---|---|
| Toppmeny (header) | JA | Flytande "pill" en bit in från kanten, inte kant-i-kant. Scroll-kant-effekt under. |
| Rullgardiner (Produkter, Info, Säkerhet, Priser, Om oss) | JA | En gemensam glaspanel per rullgardin. Menyraderna inuti är vanliga, inte egna glas. |
| Ljus/mörk-switchen | JA | Knoppen blir glas vid interaktion (Apple-mönstret för toggles). |
| Primär knapp (t.ex. "Boka demo", "Få en prisuppskattning") | JA, tonad | Den enda knapptypen med tint. Vi tonar med Gunmetal/Shadow Grey, inte med ny färg. |
| Sekundär knapp | JA, otonad | Klart glas med ljus kant. |
| Modal / dialog (t.ex. demo-bokning) | JA | Bakgrunden bakom modalen dämpas (mörkt lager 35 %). Själva formulärfälten är solida. |
| Cookie-/samtyckesruta | JA | Liten, nederkant, max en. |
| Hero-sektionens "produktkort" (bokföringsagent, trendövervakare, strategikonsult, leverantörsagent) | JA, med måtta | Korten får vara glas eftersom de är klickbara och ligger över ljusfältet. Texten inuti får ett eget läsbarhetslager (§9). |
| Statistik-/förtroendekort ("24/7", "Godkänns av människa") | NEJ | Innehåll. Solid Bright Snow-yta med Alabaster-kant. |
| Jämförelsetabellen Vera / Internt / Byrå | NEJ | Innehåll. Solid. Det är det viktigaste på sidan att kunna läsa. |
| Kundcitat/testimonials | NEJ | Solid. |
| FAQ | NEJ | Solid. |
| Formulärfält (input, textarea) | NEJ | Solida fält. Fokusringen får vara glas-liknande. |
| Sidfot | NEJ | Solid Shadow Grey (ljust läge) / Shadow Grey mörkare (mörkt läge). |
| Brödtext överallt | NEJ | Aldrig text direkt på glas utan läsbarhetslager. |

Räkna: på startsidan ovanför vecket ska det finnas högst **3 glasytor**
samtidigt (header, en primär knapp, ev. ett produktkort i vy). Öppnas en
rullgardin blir det 4. Det är taket.

---

## 3. Färger: Light Steel (oförändrade)

Light Steel är den enda färgskalan. Inga blåa, lila eller "AI-gradienter".
Glaset får sin karaktär från ljus och skugga, inte från färg.

| Namn | Hex | Ljust läge | Mörkt läge |
|---|---|---|---|
| Bright Snow | `#F8F9FA` | Kort, solida ytor | Rubriker, knapptext på mörk knapp |
| Platinum | `#E9ECEF` | Sidbakgrund | Framhävd yta |
| Alabaster Grey | `#DEE2E6` | Kanter | – |
| Pale Slate (ljus) | `#CED4DA` | Etiketter | Brödtext |
| Pale Slate (mörk) | `#ADB5BD` | Avdelare | Små rubriker |
| Slate Grey | `#6C757D` | Små rubriker | Avdelare |
| Iron Grey | `#495057` | Brödtext | Kanter, etiketter |
| Gunmetal | `#343A40` | Knappar, logga | Kort |
| Shadow Grey | `#212529` | Rubriker, mörka ytor, sidfot | Sidbakgrund |

CSS-variabler (namnen ska användas i koden, aldrig hex direkt i komponenter):

```css
:root {
  --c-snow:      #F8F9FA;
  --c-platinum:  #E9ECEF;
  --c-alabaster: #DEE2E6;
  --c-pale-1:    #CED4DA;
  --c-pale-2:    #ADB5BD;
  --c-slate:     #6C757D;
  --c-iron:      #495057;
  --c-gunmetal:  #343A40;
  --c-shadow:    #212529;

  /* Semantiska namn, ljust läge */
  --bg-page:     var(--c-platinum);
  --bg-surface:  var(--c-snow);
  --border:      var(--c-alabaster);
  --text-body:   var(--c-iron);
  --text-head:   var(--c-shadow);
  --text-muted:  var(--c-slate);
  --btn-bg:      var(--c-gunmetal);
  --btn-text:    var(--c-snow);
}

:root[data-theme="dark"] {
  --bg-page:     var(--c-shadow);
  --bg-surface:  var(--c-gunmetal);
  --border:      var(--c-iron);
  --text-body:   var(--c-pale-1);
  --text-head:   var(--c-snow);
  --text-muted:  var(--c-pale-2);
  --btn-bg:      var(--c-snow);
  --btn-text:    var(--c-shadow);
}
```

Befintlig ljus/mörk-switch (sparad i localStorage, följer systemet som
standard) behålls. Den sätter `data-theme` på `<html>`.

---

## 4. Glas-tokens (siffrorna)

Alla glasytor byggs av samma uppsättning värden. Ändra tokens, inte
komponenter.

```css
:root {
  /* Fyllning */
  --glass-fill:        rgba(255, 255, 255, 0.55);   /* ljust läge */
  --glass-fill-strong: rgba(255, 255, 255, 0.72);   /* ytor med mycket text, t.ex. rullgardin */
  /* Kant */
  --glass-border:      rgba(255, 255, 255, 0.60);
  --glass-border-top:  rgba(255, 255, 255, 0.90);   /* ljusare upptill = "rim light" */
  --glass-border-dark: rgba(33, 37, 41, 0.08);      /* yttre tunn mörk kant så glaset syns mot vitt */
  /* Oskärpa och mättnad */
  --glass-blur:        16px;
  --glass-blur-large:  12px;    /* header, stora paneler */
  --glass-saturate:    140%;
  /* Skugga */
  --glass-shadow:      0 1px 0 rgba(255,255,255,0.6) inset,
                       0 8px 24px rgba(33, 37, 41, 0.10),
                       0 1px 2px rgba(33, 37, 41, 0.06);
  --glass-shadow-float: 0 1px 0 rgba(255,255,255,0.6) inset,
                       0 16px 48px rgba(33, 37, 41, 0.16);
  /* Radier (se §7) */
  --r-pill:   999px;
  --r-xl:     28px;   /* paneler, modaler, rullgardiner */
  --r-lg:     20px;   /* kort */
  --r-md:     14px;   /* knappar som inte är pills, fält */
  --r-sm:     10px;   /* små chips */
}

:root[data-theme="dark"] {
  --glass-fill:        rgba(52, 58, 64, 0.55);      /* Gunmetal-grund */
  --glass-fill-strong: rgba(52, 58, 64, 0.78);
  --glass-border:      rgba(255, 255, 255, 0.14);
  --glass-border-top:  rgba(255, 255, 255, 0.28);
  --glass-border-dark: rgba(0, 0, 0, 0.35);
  --glass-saturate:    120%;
  --glass-shadow:      0 1px 0 rgba(255,255,255,0.10) inset,
                       0 8px 24px rgba(0, 0, 0, 0.45),
                       0 1px 2px rgba(0, 0, 0, 0.30);
  --glass-shadow-float: 0 1px 0 rgba(255,255,255,0.10) inset,
                       0 16px 48px rgba(0, 0, 0, 0.55);
}
```

Varför de här siffrorna:
- Fyllning 0.55 (inte 0.12 som i många tutorials): vår bakgrund är ljusgrå,
  inte en färgstark bild. Lägre opacitet ger "smutsigt grått". Högre ger
  läsbarhet och ser fortfarande ut som glas tack vare kanten.
- Oskärpa 12–16 px: tillräckligt för att bakgrunden ska bli oidentifierbar
  (NN/g: mer oskärpa är bättre), men under 20 px på stora ytor för
  prestanda.
- Mättnad 140 %: lyfter de grå tonerna lite så de inte blir platta. Inte
  180–200 % som på färgglada sidor, det gör ingenting på grått.
- Kanten upptill ljusare än runt om: det är detta som gör att ögat läser
  "glas" i stället för "halvgenomskinlig ruta".

---

## 5. Bakgrunden: ljusfältet

Glas över en platt färg suddar ingenting. Därför ligger ett stillsamt
"ljusfält" bakom varje sida: två–tre mycket mjuka, stora ljusa/mörka
fläckar i Light Steel-toner som ger glaset något att sudda.

Regler:
- Bara Light Steel-toner: Bright Snow, Platinum, Alabaster i ljust läge;
  Gunmetal, Iron Grey, Shadow Grey i mörkt läge. Inga färgade orbs.
- Fläckarna är stora (40–70 % av viewportens bredd), har mycket mjuk kant
  (`filter: blur(80px)` eller radial-gradient med lång övergång) och låg
  kontrast mot sidbakgrunden (max ~8 % luminansskillnad).
- De ligger i ett eget lager (`position: fixed; inset: 0; z-index: -1;
  pointer-events: none`) så de inte påverkar layouten.
- De rör sig inte. Ingen parallax, ingen animation. (Lugn = premium. Och
  rörelse under glas kostar prestanda.)
- Eventuella fotografier (t.ex. Adobe Stock-bilden) får ligga i
  innehållslagret under hero-kortet, men då ska kortets fyllning gå upp
  till `--glass-fill-strong`.

Exempel (ljust läge):

```css
.light-field {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(60vw 40vh at 15% 10%, var(--c-snow) 0%, transparent 70%),
    radial-gradient(50vw 50vh at 85% 30%, var(--c-alabaster) 0%, transparent 70%),
    radial-gradient(70vw 40vh at 50% 95%, var(--c-snow) 0%, transparent 70%),
    var(--bg-page);
}
```

---

## 6. Den tekniska stegen (fallback-trappan)

Varje glasyta byggs i tre steg, nerifrån och upp. Det nedersta steget är
färdig produkt för dem som inte får mer.

```css
/* Steg 1: läsbar överallt, inga filter. Det här är GRUNDLÄGET. */
.glass {
  background: var(--bg-surface);              /* nästan ogenomskinlig */
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  box-shadow: 0 8px 24px rgba(33,37,41,0.10);
}

/* Steg 2: frostat glas, när webbläsaren kan OCH användaren inte bett om mindre transparens. */
@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  @media (prefers-reduced-transparency: no-preference) {
    .glass {
      background: var(--glass-fill);
      border-color: var(--glass-border);
      border-top-color: var(--glass-border-top);
      box-shadow: var(--glass-shadow), 0 0 0 1px var(--glass-border-dark);
      backdrop-filter: blur(16px) saturate(140%);
      -webkit-backdrop-filter: blur(16px) saturate(140%);
    }
  }
}

/* Steg 3: refraktion. INTE i v1. Se §11. */

/* Mer kontrast om användaren bett om det */
@media (prefers-contrast: more) {
  .glass { border: 2px solid var(--text-head); background: var(--bg-surface); backdrop-filter: none; -webkit-backdrop-filter: none; }
}

/* Mindre rörelse om användaren bett om det */
@media (prefers-reduced-motion: reduce) {
  .glass, .glass * { transition: none !important; animation: none !important; }
}
```

Två Safari-fällor som är verifierade 2026:
1. `-webkit-backdrop-filter` måste alltid stå bredvid den oprefixade.
2. CSS-variabler fungerar **inte** inuti `-webkit-backdrop-filter`. Skriv
   siffrorna direkt i den raden (därför står `16px` och `140%` ovan, inte
   `var(--glass-blur)`).

Varför "no-preference" och inte "reduce": Safari stödjer inte
`prefers-reduced-transparency` alls, Firefox har den avstängd. Om vi skrev
"om reduce → solid" skulle just iPhone-användare som slagit på Minska
transparens få glas ändå. Genom att göra solid till grundläget och glas till
tillägget blir det rätt åt alla håll.

Tailwind: om projektet använder Tailwind, lägg tokens i `@theme` och bygg
en `glass`-komponentklass i `@layer components` enligt ovan. Använd inte
`backdrop-blur-*`-utilities direkt i JSX, då sprids siffrorna.

---

## 7. Form: koncentriska hörn och "pill"-geometri

Apple låter hårdvarans rundning styra kontrollernas rundning, och allt som
ligger i något annat följer samma centrum. Vi gör samma sak:

- **Inre radie = yttre radie − avståndet mellan dem.** En knapp med radie
  14 px inuti ett kort med 12 px padding ger kortet radie 26 px (→ `--r-xl`
  28 px är nära nog).
- Header: pill (`--r-pill`), höjd 56 px desktop / 48 px mobil, 16 px in
  från sidans kanter, 12 px ner från toppen. Den är **inte** kant-i-kant.
- Primära knappar: pill. Sekundära: pill. Formulärfält: `--r-md`.
- Rullgardin: `--r-xl`, öppnas 8 px under headern, samma bredd som
  menyraden den hör till (inte hela skärmen).
- Modal: `--r-xl`, max 560 px bred, 24 px från kanterna på mobil.
- Kort: `--r-lg`.

---

## 8. Rörelse

Lite, mjukt, snabbt. Apples "flytande" känsla på webben = kontroller som
reagerar direkt och mjukt, inte som flyger.

| Händelse | Vad händer | Tid / kurva |
|---|---|---|
| Hover på glasknapp | fyllning +8 % opacitet, lyft 1 px (`translateY(-1px)`), skuggan växer | 180 ms, `cubic-bezier(.2,.8,.2,1)` |
| Tryck (active) | `scale(0.98)` | 90 ms |
| Rullgardin öppnas | opacitet 0→1, `translateY(-6px)`→0, `scale(0.98)`→1 | 200 ms, samma kurva |
| Modal öppnas | bakgrundsdämpning 0→35 %, panel opacitet 0→1 + `scale(0.96)`→1 | 220 ms |
| Header vid scroll | ingen storleksändring. Scroll-kant-effekt: ett 24 px högt gradientfält under headern (`mask-image` + `backdrop-filter: blur(8px)`) som suddar innehållet närmast kanten | statisk |
| Ljus/mörk-switch | knoppen får glas + `scale(1.1)` medan den trycks | 150 ms |

Förbjudet:
- Animera `backdrop-filter`/oskärperadien. Det tvingar om-rendering varje
  bildruta och ger ~30 fps på mobil. Tona glaset in med `opacity`.
- Parallax eller rörliga bakgrunder under glas.
- Hover-effekter som flyttar innehållet mer än 2 px.
- Allt ovan stängs av vid `prefers-reduced-motion: reduce`.

---

## 9. Läsbarhet och tillgänglighet (hårda krav)

1. **Kontrast:** all text uppfyller WCAG AA: 4.5:1 för normal text, 3:1
   för stor text (≥ 24 px, eller ≥ 19 px fet). Mät mot den **sämsta**
   bakgrund texten kan hamna över (t.ex. headern när ett vitt kort
   scrollat upp under den), inte mot den snyggaste.
2. **Läsbarhetslager under text på glas:** text som ligger på en glasyta
   får ett eget, nästan ogenomskinligt lager bakom sig (t.ex. en inre div
   med `background: var(--glass-fill-strong)`), eller så höjs hela ytans
   fyllning till `--glass-fill-strong`. Glaset bär aldrig ensamt ansvaret
   för läsbarheten.
3. **Ikoner och etiketter på glas** använder `--text-head`, inte
   `--text-muted`. (Apple: använd "vibrant", alltså kontrastrika, färger
   på material, aldrig gråa mellantoner.)
4. **Fokus:** alla interaktiva element har synlig fokusring
   (`outline: 2px solid var(--text-head); outline-offset: 3px`).
5. **Tangentbord:** rullgardiner öppnas med Enter/Space, stängs med Esc,
   pilar flyttar mellan raderna. Modal fångar fokus.
6. **Reduce transparency / increase contrast / reduce motion** respekteras
   enligt §6 och §8.
7. **Tester** (se §12) ska visa kontrastvärden, inte bara "ser bra ut".

---

## 10. Typografi

- Rubriker och underrubriker i **versaler** (Hugos regel, behålls).
  Observera att Apple i Liquid Glass gått bort från versaler i
  sektionsrubriker för läsbarhet. Vi behåller versaler men kompenserar:
  `letter-spacing: 0.04em` och aldrig mindre än 13 px i versaler.
- Ett typsnittsystem för hela sajten: samma rubrikfont och samma brödtext
  på alla sidor. Befintliga val behålls om inget annat beslutas.
- Brödtext aldrig under 16 px. Radavstånd 1.5–1.6.
- Ingen text får ligga direkt på ljusfältet utan en solid eller
  glass-strong yta bakom.

---

## 11. Refraktion (SVG-lins) – valfritt, INTE i v1

Apples "böjda kant" går att efterlikna på webben med ett SVG-filter
(`feDisplacementMap` via `backdrop-filter: url(#lens)`). Det fungerar
**bara i Chromium** (Chrome, Edge, Arc, Brave). Safari har en öppen bugg,
och Firefox säger "ja" i `@supports` men ritar ingenting – ytan blir
osynlig. Därför:

- Inte i version 1.
- Om det byggs senare: gatas i JavaScript på webbläsare (Chromium), aldrig
  med `@supports`. Det får bara läggas **ovanpå** steg 2, aldrig ersätta
  det. Max på header och primär knapp. Oskärpa i filtret ≤ 2 px.
- Referens: kube.io "Liquid Glass CSS/SVG" och LogRocket "How to create
  liquid glass effects with CSS and SVG" (länkar i §13).

---

## 12. Definition av klart (det Claude Code ska bevisa)

En uppgift som rör utseendet är klar när allt detta är sant och visat i
slutrapporten:

1. `npm run build` går igenom utan fel och utan nya varningar.
2. Inga hex-färger i komponentfiler (grep `#[0-9A-Fa-f]{6}` i `components/`
   och `app/` ger bara träffar i tokens-filen).
3. Alla glasytor använder klassen/komponenten `glass` (ingen egen
   `backdrop-filter` någon annanstans): `grep -r backdrop-filter` ger
   träffar bara i tokens-/glass-filen.
4. Max 4 element med `.glass` synliga i viewporten på startsidan med öppen
   rullgardin (räknas med ett litet skript i headless Chromium).
5. Kontrast: ett skript (t.ex. Playwright + `axe-core`) kör startsidan i
   ljust och mörkt läge, 390 px och 1280 px bredd, och rapporterar noll
   `color-contrast`-fel.
6. Skärmdumpar sparas i `docs/skarmdumpar/<datum>/` för: ljus desktop,
   mörk desktop, ljus mobil, mörk mobil, och emulerad
   `prefers-reduced-transparency: reduce` (ska visa solida ytor).
7. `prefers-reduced-motion: reduce` emulerad: inga transitions kvar.
8. Ingen `backdrop-filter`-animation finns (grep på `transition` och
   `animation` som nämner `backdrop`).
9. Safari-testad manuellt av Hugo (prefix-fällan går inte att testa i
   headless Chromium).

Slutrapportrutan som vanligt: STATUS (grönt/gult/rött), KAN JAG GÅ VIDARE,
beslut som behövs, nästa steg.

---

## 13. Källor

- Apple HIG, Materials (Liquid Glass regular/clear, "inte i innehållslagret",
  "sparsamt", dämpningslager 35 %):
  https://developer.apple.com/design/human-interface-guidelines/materials
- Apple, Adopting Liquid Glass (scroll-kant-effekt, koncentriska hörn,
  gruppering, tint bara på primära handlingar, tillgänglighetsinställningar):
  https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- Apple WWDC25, "Meet Liquid Glass" (session 219):
  https://developer.apple.com/videos/play/wwdc2025/219/
- Nielsen Norman Group, Glassmorphism: Definition and Best Practices
  (kontrast, mer oskärpa, låt användaren minska transparens):
  https://www.nngroup.com/articles/glassmorphism/
- BuildMVPFast, Liquid Glass on the Web: backdrop-filter recipes (recept,
  fallback-trappan, Safari-fällor, prestandabudget, varför solid är
  grundläget):
  https://www.buildmvpfast.com/blog/liquid-glass-css-backdrop-filter-recipes-2026
- kube.io, Liquid Glass in CSS and SVG (refraktion, Chromium-only):
  https://kube.io/blog/liquid-glass-css-svg/
- LogRocket, How to create liquid glass effects with CSS and SVG:
  https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/
- TechCrunch, Apple redesigns its operating systems with Liquid Glass
  (WWDC 9 juni 2025):
  https://techcrunch.com/2025/06/09/apple-redesigns-its-operating-systems-with-liquid-glass/
