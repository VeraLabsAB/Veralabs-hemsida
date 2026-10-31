# Namnbyte Vera → Kassio på hemsidan (2026-10-31)

Endast kundsynliga texter. Inget är committat, pushat eller deployat.

## Hemsidans mapp

`/Users/hugolindholmer/VERA/veralabs-hemsida` – Next.js (App Router). Texterna ligger i
`src/app/**/page.tsx`, `src/app/layout.tsx` (title/meta), `src/components/SiteFooter.tsx`,
`src/components/site-header/SiteHeader.tsx` (logga) och `src/components/site-header/navigation.ts` (menyn).
Inga separata HTML-, CSS- eller textfiler med kundtext; `public/` innehåller bara bild och video.

`CLAUDE.md` och `PROGRESS.md` finns inte i projektmappen (bara `AGENTS.md`, `README.md`, `DESIGN-GLASS.md`,
`GLAS-PLAN.md`, `hemsida-att-gora.md` och `Veralabs – ny webbtext.md`).

## Regel jag följde

Webbtextdokumentet (`Veralabs – ny webbtext.md`, "Tonläge och regler") säger att **Vera skrivs som en
kollega: hon sköter, räknar, säger till**. Därför:

- **Bytt:** `VeraAI` → `Kassio Finance`, `Vera Labs (AB)` → `Kassio Labs (AB)`, samt `Vera` där ordet står
  som **etikett på produkten**: sidtitlar, menyrubriker, länktexter ("Så fungerar Vera"), inledning av
  meta-beskrivningar ("Priser för Vera: …"), sidfotens kolumnrubrik, kolumnrubriken "Vera" i
  jämförelsetabellerna (och tabellernas `data-label`, som visas som etikett i mobilvyn).
- **Inte bytt (listas nedan):** `Vera`/`Veras` som agentens personnamn i löpande text, rubriker och
  FAQ ("Vera gör resten", "Vera frågar", "Veras analys", "Ersätter Vera revisorn?"). Där hänger texten
  ihop med "hon", så ett byte till "Kassio Finance" kräver omskrivning, inte bara ersättning.

## Ändringar (50 rader i 19 filer)

| Fil | Rad | Nuvarande text | Ny text |
| --- | --- | --- | --- |
| src/app/layout.tsx | 27 | `VeraAI – AI-agenter för företag` (title) | `Kassio Finance – AI-agenter för företag` |
| src/app/layout.tsx | 28 | `%s – VeraAI` (title-mall) | `%s – Kassio Finance` |
| src/app/layout.tsx | 31 | …Från Vera Labs i Stockholm. (meta) | …Från Kassio Labs i Stockholm. |
| src/app/page.tsx | 7 | …Från Vera Labs i Stockholm. (meta) | …Från Kassio Labs i Stockholm. |
| src/app/page.tsx | 45 | aria-label "Exempel på VeraAI-appen: …" | "Exempel på Kassio Finance-appen: …" |
| src/app/page.tsx | 247 | Så fungerar Vera → (länk) | Så fungerar Kassio Finance → |
| src/app/page.tsx | 525 | Vera (tabellrubrik) | Kassio Finance |
| src/app/page.tsx | 540, 554, 568, 582 | data-label="Vera" | data-label="Kassio Finance" |
| src/app/page.tsx | 652 | VeraAI började i en tunnelbanekiosk… | Kassio Finance började i en tunnelbanekiosk… |
| src/app/page.tsx | 655 | Hugo · Grundare, Vera Labs AB | Hugo · Grundare, Kassio Labs AB |
| src/app/agenter/bokforing/page.tsx | 1396 | Vera (tabellrubrik) | Kassio Finance |
| src/app/agenter/bokforing/page.tsx | 1411, 1425, 1439, 1453, 1467, 1481 | data-label="Vera" | data-label="Kassio Finance" |
| src/app/agenter/leverantorsagenten/page.tsx | 300 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/agenter/leverantorsagenten/page.tsx | 862 | Vera (tabellrubrik) | Kassio Finance |
| src/app/agenter/strategikonsulten/page.tsx | 301 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/agenter/strategikonsulten/page.tsx | 862 | Vera (tabellrubrik) | Kassio Finance |
| src/app/agenter/trendovervakaren/page.tsx | 295 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/agenter/trendovervakaren/page.tsx | 861 | Vera (tabellrubrik) | Kassio Finance |
| src/app/privat/ekonomi/page.tsx | 294 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/privat/ekonomi/page.tsx | 855 | Vera (tabellrubrik) | Kassio Finance |
| src/app/privat/kalender/page.tsx | 295 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/privat/kalender/page.tsx | 853 | Vera (tabellrubrik) | Kassio Finance |
| src/app/privat/traning/page.tsx | 293 | Så fungerar Vera (knapp) | Så fungerar Kassio Finance |
| src/app/privat/traning/page.tsx | 846 | Vera (tabellrubrik) | Kassio Finance |
| src/app/privatpersoner/page.tsx | 7 | Vera för privatpersoner: … (meta) | Kassio Finance för privatpersoner: … |
| src/app/kom-igang/page.tsx | 102 | …visas i VeraAI-appen… | …visas i Kassio Finance-appen… |
| src/app/om-oss/page.tsx | 7 | Vera Labs AB är ett AI-bolag … som bygger VeraAI. (meta) | Kassio Labs AB … som bygger Kassio Finance. |
| src/app/om-oss/page.tsx | 25 | Vera Labs AB är ett AI-bolag från Stockholm. Vi bygger VeraAI: … | Kassio Labs AB … Vi bygger Kassio Finance: … |
| src/app/om-oss/page.tsx | 262 | Medgrundare, Vera Labs AB | Medgrundare, Kassio Labs AB |
| src/app/sa-fungerar-vera/page.tsx | 5 | Så fungerar Vera (sidtitel) | Så fungerar Kassio Finance |
| src/app/sa-fungerar-vera/page.tsx | 7 | Så fungerar Vera: ett team av AI-agenter… (meta) | Så fungerar Kassio Finance: … |
| src/app/sa-fungerar-vera/page.tsx | 20 | Så fungerar Vera (etikett över rubriken) | Så fungerar Kassio Finance |
| src/app/sakerhet/page.tsx | 7 | Säkerhet hos Vera: … (meta) | Säkerhet hos Kassio Finance: … |
| src/app/priser/page.tsx | 8 | Priser för Vera: … (meta) | Priser för Kassio Finance: … |
| src/app/vanliga-fragor/page.tsx | 7 | Raka svar på det vanligaste om Vera: … (meta) | …om Kassio Finance: … |
| src/components/SiteFooter.tsx | 15 | Vera (kolumnrubrik i sidfoten) | Kassio Finance |
| src/components/SiteFooter.tsx | 17 | Så fungerar Vera (länk) | Så fungerar Kassio Finance |
| src/components/SiteFooter.tsx | 80 | © 2026 Vera Labs AB · Org.nr … | © 2026 Kassio Labs AB · Org.nr … |
| src/components/SiteFooter.tsx | 85 | VeraAI är ett varumärke från Vera Labs AB, Stockholm. | Kassio Finance är ett varumärke från Kassio Labs AB, Stockholm. |
| src/components/site-header/SiteHeader.tsx | 71 | aria-label "Vera Labs, till startsidan" | "Kassio Labs, till startsidan" |
| src/components/site-header/navigation.ts | 93 | Vera för dig som privatperson. (menybeskrivning) | Kassio Finance för dig som privatperson. |
| src/components/site-header/navigation.ts | 127 | Så fungerar Vera (menyrubrik) | Så fungerar Kassio Finance |

Kontroll efteråt: `grep` hittar inget `VeraAI` eller `Vera Labs` kvar i `src/`.

### Tillägg (Hugos beslut senare 2026-10-31): Bokföringsagenten → Kassio Finance

| Fil | Rad | Nuvarande text | Ny text |
| --- | --- | --- | --- |
| src/app/page.tsx | 283 | Bokförings­agenten (kortrubrik) | Kassio Finance |
| src/app/foretag/page.tsx | 49 | Det Bokföringsagenten vet om dina siffror… | Det Kassio Finance vet om dina siffror… |
| src/app/foretag/page.tsx | 57 | Bokförings­agenten (kortrubrik) | Kassio Finance |
| src/app/agenter/bokforing/page.tsx | 5 | Bokföringsagenten (sidtitel) | Kassio Finance |
| src/app/agenter/bokforing/page.tsx | 19 | Bokförings­agenten (etikett över rubriken) | Kassio Finance |
| src/app/agenter/bokforing/page.tsx | 193 | Bokföringsagenten tar över allt det löpande… | Kassio Finance tar över… |
| src/app/agenter/bokforing/page.tsx | 1720 | Frågor om bokföringsagenten | Frågor om Kassio Finance |
| src/app/agenter/trendovervakaren/page.tsx | 829 | Med Bokföringsagenten vägs… | Med Kassio Finance vägs… |
| src/app/agenter/strategikonsulten/page.tsx | 238 | Har du Bokföringsagenten sker det… | Har du Kassio Finance sker det… |
| src/app/agenter/strategikonsulten/page.tsx | 1150 | Behövs bokföringsagenten? | Behövs Kassio Finance? |
| src/app/kom-igang/page.tsx | 7 | Kom igång med Bokföringsagenten… (meta) | Kom igång med Kassio Finance… |
| src/app/kom-igang/page.tsx | 27 | Bokföringsagenten (etikett) | Kassio Finance |
| src/app/om-oss/page.tsx | 247 | …den första agenten, Bokföringsagenten. | …den första agenten, Kassio Finance. |
| src/app/om-oss/page.tsx | 283 | Läs om bokföringsagenten (knapp) | Läs om Kassio Finance |
| src/app/sa-fungerar-vera/page.tsx | 91 | Bokföringsagenten → (länk) | Kassio Finance → |
| src/app/priser/page.tsx | 63 | Bokförings­agenten (prisrubrik) | Kassio Finance |
| src/components/SiteFooter.tsx | 9 | Bokföringsagenten (sidfotslänk) | Kassio Finance |
| src/components/site-header/navigation.ts | 57 | Bokföringsagenten (menyrubrik) | Kassio Finance |

Orört: `src/app/glas-test/page.tsx:16` (intern testsida, inte länkad från menyn) och sidadressen
`/agenter/bokforing`.

### Tillägg: Produkter-menyn (Hugos beslut 2026-10-31)

- **Borttaget ur rullgardinen:** "Alla agenter" (→ /foretag) och "Eget paket" (→ /priser#paket)
  i `src/components/site-header/navigation.ts`.
- **"Eget paket"-kortet** på prissidan (`src/app/priser/page.tsx`, tidigare `id="paket"`) är raderat,
  liksom CSS-regeln `.pcards-f .wide` som bara det kortet använde. Prissidan visar nu de fyra agentkorten
  i två kolumner. Kvar på prissidan finns rabattformuleringarna "lägre när du väljer flera" (hero, rad 29),
  "Väljer du flera agenter sjunker priset" (rad ~617) och FAQ-frågan "Hur fungerar rabatten?" – säg till
  om de också ska bort.
- **Rubriken "Produkter"** är på desktop en länk till `/foretag` (`href` på menysektionen i
  `navigation.ts`, renderad som `<Link>` i `SiteHeader.tsx`). Hovra öppnar rullgardinen som förut; klick
  går till sidan. På mobil är rubriken fortfarande en knapp som fäller ut dragspelet – annars gick det inte
  att öppna listan. `/foretag` nås på mobil via sidfoten ("Alla agenter") och "← Alla agenter" på
  agentsidorna.
- Tangentbord: pil ned/upp på länken öppnar rullgardinen och flyttar fokus till raderna; Enter följer länken.

### Tillägg: prismodell (Hugos beslut 2026-10-31)

Varje agent har ett pris per månad; vid två eller fler agenter blir totalpriset 15 % billigare. Ordet
"fast" är borta överallt och platshållaren "XXX %" är ersatt med 15 %.

| Fil | Rad | Nuvarande text | Ny text |
| --- | --- | --- | --- |
| src/app/foretag/page.tsx | 388 | Ett fast pris. Inga timmar att räkna. | Ett pris per månad. Inga timmar att räkna. |
| src/app/foretag/page.tsx | 391 | Månadspris per agent. Väljer du flera sjunker priset. | Varje agent har ett pris per månad. Väljer du två eller fler blir totalpriset 15 % billigare. |
| src/app/priser/page.tsx | 8 | …fast månadspris per agent, rabatt när du väljer flera… (meta) | …ett pris per månad och agent, 15 % rabatt när du väljer två eller fler… |
| src/app/priser/page.tsx | 26 | Ett fast pris. Inga timmar att räkna. | Ett pris per månad. Inga timmar att räkna. |
| src/app/priser/page.tsx | 29 | Ett fast månadspris per agent, lägre när du väljer flera. | Varje agent har ett pris per månad. Väljer du två eller fler agenter blir totalpriset 15 % billigare. |
| src/app/priser/page.tsx | 586 | Gratis demo. En testmånad. Sedan ett fast pris. | …Sedan ett pris per månad. |
| src/app/priser/page.tsx | 618 | Väljer du flera agenter sjunker priset. | Väljer du två eller fler agenter blir totalpriset 15 % billigare. |
| src/app/priser/page.tsx | 667 | …får du XXX % rabatt… | …två eller fler agenter får du 15 % rabatt… |
| src/app/priser/page.tsx | 701–704 | Är priset fast? / Ja. …gäller sedan som ett fast månadspris. Det ändras inte… | Ändras priset? / Nej. Varje agent har ett pris per månad som sätts efter demon. Det ändras inte för att du får fler transaktioner. |
| src/app/vanliga-fragor/page.tsx | 281 | Därefter ett fast månadspris per agent. | Därefter ett pris per månad och agent. Väljer du två eller fler agenter blir totalpriset 15 % billigare. |
| src/app/page.tsx | 583 | Fast månadspris per agent (tabell) | Ett pris per månad och agent |
| src/app/agenter/bokforing/page.tsx | 1482 | Fast månadspris. Inga extra timmar, någonsin. | Ett pris per månad. Inga extra timmar, någonsin. |
| src/app/agenter/leverantorsagenten/page.tsx | 948 | Fast månadspris (tabell) | Ett pris per månad |
| src/app/agenter/trendovervakaren/page.tsx | 947 | Fast månadspris (tabell) | Ett pris per månad |
| src/app/agenter/strategikonsulten/page.tsx | 948 | Fast månadspris (tabell) | Ett pris per månad |
| src/app/agenter/strategikonsulten/page.tsx | 7 | Fast månadspris, ingen timdebitering. (meta) | Ett pris per månad, ingen timdebitering. |

Kvar: själva beloppen är fortfarande platshållare (`XXX kr`), liksom handläggningsavgiften och
uppsägningstiden (`XXX`).

### Tillägg: knappen "Få en prisuppskattning" → "Köp nu" (Hugos beslut 2026-10-31)

14 ställen: prissidans fyra agentkort och FAQ-knappen, agentsidornas priskort och avslutande CTA
(bokforing, trendovervakaren, strategikonsulten, leverantorsagenten), sparkalkylatorn samt
menyn Priser. Alla länkar går fortfarande till kontaktformuläret `/#kontakt` – det finns ingen
köpsida eller kassa än.

## Kräver ditt beslut (inte ändrat)

### 1. Domäner, webbadresser och e-post

| Fil | Rad | Text |
| --- | --- | --- |
| src/app/page.tsx | 696–697 | `mailto:hej@veralabs.se` och visad adress `hej@veralabs.se` |
| src/app/page.tsx | 723 | formulärets `action="mailto:hej@veralabs.se?subject=Boka%20ett%20samtal"` |
| src/components/SiteFooter.tsx | 50–51 | `mailto:hej@veralabs.se` och visad adress |
| src/components/SiteFooter.tsx | 30 | Kundinloggning → `https://app-vera.ai` |
| src/components/SiteFooter.tsx | 81–82 | länk och visad text `veralabs.se` |
| src/app/sa-fungerar-vera/ | mapp | sidans webbadress är `/sa-fungerar-vera`; länkas från page.tsx:245, sex undersidor, navigation.ts:120/126 och SiteFooter.tsx:17. Byte av adress kräver ny mapp plus omdirigering. |

### 2. Logotyp och ikoner (bara visade, inte ändrade)

| Fil | Vad |
| --- | --- |
| src/components/site-header/SiteHeader.tsx:69–82 | `Logo()`: inline-SVG med V-formen (två `path`) på rundad kvadrat, följt av texten **VERA** (rad 78) och **LABS** (rad 81). Används i sidhuvudet (rad 265) och sidfoten (SiteFooter.tsx:45). |
| src/app/icon.svg | favicon (SVG) |
| src/app/favicon.ico | favicon (ICO) |
| src/app/apple-icon.png | ikon för iOS-hemskärm |
| src/app/globals.css:34–35, 64, 127–128 | färgtokens `--logo-sq`, `--logo-ink` för loggan |

### 3. "Vera" som agentens personnamn i löpande text (ca 175 rader)

Alla står kvar. De flesta hör ihop med "hon" och behöver skrivas om om produkten ska heta Kassio Finance
även i brödtext. Radnummer per fil:

| Fil | Rader |
| --- | --- |
| src/app/layout.tsx | 31 ("Vera är ett team av AI-agenter…", "Vera gör resten") |
| src/app/page.tsx | 7, 22 (hero: "Du driver företaget. Vera gör resten."), 25, 37 (knapp "Se Vera arbeta"), 53, 87, 118, 166, 192, 194, 200, 202, 372, 416, 621 (citat), 674, 678 |
| src/app/privat/ekonomi/page.tsx | 7, 25, 193, 256, 442, 485 ("Veras analys"), 871 (tabellcell), 1036, 1057, 1152, 1157, 1166, 1180, 1194, 1208 |
| src/app/privat/kalender/page.tsx | 7, 25, 193, 257, 327, 338, 437, 455, 481 ("Veras förslag"), 869 (tabellcell), 1034, 1155, 1178, 1211 |
| src/app/privat/traning/page.tsx | 7, 25, 192, 255, 308, 433, 476 ("Veras analys"), 862 (tabellcell), 1027, 1148, 1204 |
| src/app/privatpersoner/page.tsx | 7 ("Du godkänner, Vera gör resten."), 22 (hero "Samma Vera. För ditt eget liv.") |
| src/app/vanliga-fragor/page.tsx | 69, 98, 103, 112, 139, 153, 209, 232, 249, 258, 378, 387 |
| src/app/agenter/bokforing/page.tsx | 7, 25, 194 ("Arbetet är Veras."), 366, 414, 472, 494, 532, 592, 621, 914, 929, 955 ("Veras förslag"), 1188, 1426 (tabellcell "Bevakas av Vera"), 1510, 1616, 1619, 1740, 1749, 1763, 1796, 1805, 1811, 1820, 1834 |
| src/app/agenter/trendovervakaren/page.tsx | 7, 25, 234, 442, 487 ("Veras bedömning"), 877 (tabellcell "Vera, dygnet runt"), 1063, 1163, 1172, 1186, 1219, 1228 |
| src/app/agenter/strategikonsulten/page.tsx | 7, 25, 197, 316, 335, 344, 445, 459, 489 ("Veras analys"), 723, 803, 830, 878 (tabellcell), 1159, 1165, 1174, 1188, 1216, 1221, 1230 |
| src/app/agenter/leverantorsagenten/page.tsx | 7, 25, 238, 285, 334, 345, 487 ("Veras jämförelse"), 878 (tabellcell), 1121 (citat), 1150, 1164, 1193, 1202, 1216, 1221, 1230 |
| src/app/foretag/page.tsx | 7 ("Du godkänner, Vera gör jobbet.") |
| src/app/priser/page.tsx | 668 ("förrän du sett Vera jobba"), 676 ("vi visar Vera med exempel") |
| src/app/om-oss/page.tsx | 46 ("Varför Vera finns."), 55 ("Vi byggde **Vera** som det tredje valet. Hon…"), 94, 184, 209, 227, 247, 251, 273 |
| src/app/kom-igang/page.tsx | 77 ("Veras instruktioner"), 125 |
| src/app/sa-fungerar-vera/page.tsx | 127, 176, 233 |
| src/app/sakerhet/page.tsx | 25, 82, 138, 156, 277 ("Vera bygger på Claude från Anthropic"), 304, 314 (rubrik "Vera är"), 322 (rubrik "Vera är inte"), 326 |
| src/components/SavingsCalculator.tsx | 135 ("Arbete Vera kan ta över… Veras månadspris"), 139 |
| src/components/site-header/navigation.ts | 137 ("Två minuter med Vera."), 169 ("Vad Vera är, och inte är"), 170 ("Vad Vera tar ansvar för."), 214 ("Varför vi bygger Vera.") |

Observera: i tabellerna heter kolumnen nu "Kassio Finance" medan cellerna på raderna ovan fortfarande
säger "Vera" / "Bevakas av Vera" / "Vera, dygnet runt".

### 4. Inte kundsynligt – lämnat orört

| Fil | Rad | Text |
| --- | --- | --- |
| README.md | 1, 3, 4 | "VeraAI – hemsida", "VeraAI (Vera Labs AB)" |
| package.json | 2 | `"name": "veraai-hemsida"` |
| src/styles/tokens.css | 1 | kommentar "Design tokens för VeraAI" |
| src/app/globals.css | 581 | kommentar "Vera först, sedan övriga" |
| src/components/SavingsCalculator.tsx | 6 | kodkommentar |
| src/components/site-header/ThemeToggle.tsx | 5 | `localStorage`-nyckel `"vera-theme"` (byte nollställer besökarnas sparade ljus/mörkt-val) |
| src/app/sa-fungerar-vera/page.tsx | 10 | funktionsnamnet `SaFungerarVeraPage` |
| Veralabs – ny webbtext.md, hemsida-att-gora.md, GLAS-PLAN.md, DESIGN-GLASS.md | – | interna arbetsdokument (186 + 19 + 13 + 9 träffar) |
| Projektmappen | – | heter `veralabs-hemsida` |

### 5. Övriga agenter

Trendövervakaren, Strategikonsulten och Leverantörsagenten står kvar med sina namn, enligt uppdraget.

## Verifiering

- `git diff --stat`: 19 filer, 50 rader ändrade, 50 borttagna – inga strukturändringar.
- Alla `data-label`-attribut kontrollerade: `data-label="Kassio Finance" className=` har mellanslag (en första
  version saknade det; rättat).
- **Inte kört:** `next build`/`next dev` och förhandsvisning i webbläsaren – kommandovakten
  (`kommandosparr.py`, SPEC 7.1) tillåter inte `node`/`npm` eller webbläsarverktyget i den här sessionen.
  Ändringarna är rena textbyten inom strängar och JSX-text, så inget bör påverka bygget, men kör
  `npm run dev` och titta på start, sidfot, en agentsida och tabellen i mobilbredd innan deploy.
