# VeraAI-hemsidan – att göra (version 2, 22 okt 2026)

**Utgångspunkt:** Sidan är en privat förhandsbild av slutprodukten. Alla agenter beskrivs som färdiga, och tomma rutor (till exempel kundcitat) visar hur den färdiga sidan ska se ut. Listan bedömer alltså sidan *som slutprodukt*. Det som måste göras före en riktig publicering ligger samlat längst ner.

**Viktigast:**
1. **Det finns inget sätt att kontakta er.** Det finns inget formulär, ingen e-post och ingen kalender. 31 knappar leder till startsidans #kontakt, och där finns bara en knapp som pekar på sig själv.
2. **Sidan säger emot sig själv** om godkännande ("inget bokförs utan ett ja" kontra "låt henne bokföra direkt") och om pris (engångspris kontra "per månad").
3. **Förhandsbilden är inte konsekvent.** Om allt ska se färdigt ut ska etiketterna "Kommer snart", knapparna "Anmäl intresse" och texten "Pris meddelas vid lansering" bort, och platshållarna ska fyllas med exempelinnehåll.

Märkning: **[Måste]** = viktigt för att förhandsbilden ska stämma · **[Bör]** = gör snart · **[Kan]** = när det finns tid

---

## Startsida

### Kontakt (#kontakt)
- **[Måste]** Lägg in ett bokningsformulär (namn, företag, e-post, bokföringsprogram, kassasystem) eller en bokningskalender, plus e-post. Knappen "Boka ett samtal" leder i dag till sig själv.

### Pris-delen
- **[Måste]** "Per månad", "två månader i skuggläge" och två [DITT PRIS] krockar med dina beslut: inget pris på sidan, inget abonnemang och en testmånad. Byt mot tre steg (gratis demo → testmånad → engångspris) med länk till Priser.

### "Skeptisk? Du har alltid sista ordet"
- **[Måste]** Bestäm en mening om godkännande och använd den överallt, till exempel: *"Inget förs in i ert bokföringsprogram förrän ni har tryckt på Godkänn, per post eller en gång i veckan."* I dag säger "kan du ställa in att varje beslut först måste godkännas" och steg 3 ("låter henne bokföra direkt … Du behöver inte lyfta ett finger") att godkännande är frivilligt, medan rutan bredvid säger "Inget bokförs utan ett ja".

### Toppen (hero)
- **[Bör]** Etiketten "Bokföringsagent för småföretag" passar inte ihop med rubriken om AI-kollegor för hela verksamheten. När alla agenter är färdiga passar en bredare etikett, till exempel "Digitala kollegor för småföretag".
- **[Bör]** "Se en demo" leder till #sa, där det bara finns tre textrutor. Lägg in en plats för en demovideo eller en klickbar veckorapport.

### Text och form
- **[Bör]** "Du" och "ni" blandas, ibland i samma mening.
- **[Bör]** Brödtexten är fet Times New Roman med bara versaler och svår att läsa. Behåll versalerna i rubrikerna och skriv brödtexten med vanliga bokstäver.

### Lägg till
- **[Bör]** En del som visar alla agenter, med länk till För företag. I dag nämner startsidan bara bokföringen.
- **[Bör]** "Fungerar med": vilka bokföringsprogram och kassasystem som stöds.
- **[Kan]** Kundcitat (exempel), en kort presentation av grundaren, en kort jämförelse och 3–4 vanliga frågor.

### Länkar
- Loggan och "Boka ett samtal" (menyn och toppen) → OK när formuläret finns.

---

## Produkter (menyn)

- **[Måste]** Ta bort etiketterna "Kommer snart" på sex ställen i menyn om förhandsbilden ska se färdig ut.
- **[Bör]** Det finns ingen länk till översiktssidan **För företag**. Lägg till "Alla agenter" överst.
- **[Bör]** **Eget paket** → leder till toppen av Priser. Peka på paketkortet (det behöver ett id).
- **[Bör]** Under **Privatpersoner** leder alla tre länkar till samma sida. De behöver egna sidor (se nedan).
- **[Måste]** Det finns ingen mobilmeny, och menyerna öppnas bara när muspekaren hålls över dem.

### Bokföringsagent
- **[Bör]** Ordvalet "Vera bokför i VeraAI-appen" gör det otydligt vad som sker var. Skriv att Vera *förbereder* i appen och att bokföringen sker när posterna förs in i bokföringsprogrammet, som svaret i vanliga frågor redan säger.
- **[Bör]** Länkarna på korten Fakturering, Momsdeklaration och Lön går alla till #bokslut. Ge varje del ett eget id (#fakturering, #moms, #lon).
- **[Bör]** Fyll platshållarna med svar som de ska se ut i slutprodukten: vilka program som stöds (t.ex. Fortnox, Bokio, Spiris) och hur lång tid uppstarten tar.
- **[Bör]** Kundcitat: skriv två påhittade citat med påhittade företag i stället för texten "[KUNDCITAT …]". Då ser du hur delen faktiskt ser ut.
- **[Bör]** "Byggd för företag i alla storlekar" och "Byggd för butiker med kassa" drar åt olika håll. Välj vad som ska stå först.
- **[Bör]** Sista delen: "Få en prisuppskattning" leder till Priser, medan alla andra sådana knappar leder till #kontakt. Välj ett mål.
- **[Bör]** Kontrollera att inga exempelsiffror kommer från Shop and Go.
- **[Kan]** Lägg till "Fungerar med" och en kort ruta om var underlagen lagras, med länk till Säkerhet.
- Länkar: "Boka en demo" (×5) → #kontakt (kräver formuläret). "Så fungerar det", "Läs mer om säkerhet" och "Räkna ut er besparing" → OK. "Se alla steg i detalj" → 7-stegssidan (se nedan).

### Trendövervakaren, Strategikonsulten och Leverantörsagenten (gemensamt)
- **[Måste]** Ta bort "· Kommer snart" i etiketten högst upp.
- **[Måste]** Byt "Anmäl intresse" (fyra per sida) mot samma knappar som bokföringsagenten har ("Boka en demo" / "Få en prisuppskattning"). I dag leder de till #kontakt utan formulär.
- **[Måste]** Byt "Pris meddelas vid lansering" i jämförelsetabellen mot samma prisformulering som för bokföringsagenten (engångspris).
- **[Måste]** I vanliga frågor ska "När kan vi börja?" och "Vad kostar det?" besvaras som för en färdig produkt.
- **[Bör]** Fyll i platshållarna: branscher och källor (Trend), hur siffrorna delas (Strategi), länder och branscher (Leverantör). Skriv påhittade kundcitat.
- **[Bör]** Säkerhetssidan som alla tre länkar till handlar bara om bokföring (se Säkerhet).
- **[Bör]** Leverantörsagenten: steg 1 heter "Ni berättar vad ni behöver", men texten handlar om att Vera redan vet. Skriv om texten.
- **[Kan]** Trendövervakaren: kontrollera tidigt om sociala medier och marknadsplatser tillåter att data hämtas automatiskt. Det avgör om funktionen går att bygga som den beskrivs.

### Privatpersoner
- **[Måste]** Sidan består bara av en text och "Kommer snart". En förhandsbild av slutprodukten behöver en produktsida per tjänst (Kalender och vardag, Tränings- och kostråd, Privatekonomi och sparande), byggda som företagssidorna, och menyn ska länka till var och en.
- **[Bör]** Priser till privatpersoner ska visas inklusive moms.

---

## Info (menyn)

### Så fungerar Vera
- **[Måste]** Ta bort etiketterna "Finns nu" och "Kommer snart" (steg 2–5).
- **[Bör]** Sidan överlappar med För företag. Slå ihop dem eller gör skillnaden tydlig.
- **[Bör]** Förklara hur "desto bättre blir hon" går till (regelboken uppdateras när ni rättar något). Det kopplar ihop meningen med löftet att uppgifterna bara används för er.
- **[Bör]** "Boka ett samtal" leder till toppen av startsidan. Byt till #kontakt.

### Räkna ut din besparing → Priser#kalkylator
- Länken finns i menyn både under Info och under Priser. Behåll en.

### Vanliga frågor → Priser#faq
- **[Bör]** Där finns bara fyra frågor om pris. Gör en egen sida för vanliga frågor (data, program, ansvar, uppsägning, hur man kommer igång).

### Se en demo → startsidan #sa
- **[Bör]** Lägg in en plats för en demovideo, eller låt länken gå till produktsidans veckorapport.

---

## Säkerhet (filen heter V2-Trygghet)

- **[Bör]** Menyn säger "Säkerhet" medan filen och fliktiteln säger "Trygghet". Välj ett namn.
- **[Måste]** Inledningen har samma motsägelse om godkännande som startsidan.

### Du har alltid sista ordet → sidans topp
- OK.

### Så skyddar vi er (#skydd)
- **[Måste]** En färdig säkerhetssida behöver svara på det kunderna frågar om:
  - var underlagen lagras (inom EU)
  - vilken AI-tjänst som används, och att uppgifterna inte används för att träna AI
  - kryptering och åtkomst (inloggning, behörigheter, tvåstegsverifiering)
  - hur länge uppgifterna sparas och hur de raderas
  - personuppgiftsbiträdesavtal (avtalet som GDPR kräver när ni hanterar personuppgifter åt kunden)
- **[Bör]** Skriv ut er grundprincip: Vera kan tekniskt inte föra in något utan godkännande, och hon får bara utföra en fast lista med åtgärder.

### Vad Vera är, och inte är (#avgransning)
- **[Bör]** Skriv "företaget (styrelsen eller ägaren)" i stället för bara "styrelsen". Lägg till vad som händer om Vera gör fel.

### Övrigt
- **[Bör]** Sidan handlar bara om bokföring, men alla agentsidor länkar hit. Gör den allmän eller lägg till en del per agent.
- **[Bör]** "Boka ett samtal" leder till toppen av startsidan. Byt till #kontakt.

---

## Priser

### Våra tjänster
- **[Måste]** Ta bort "Kommer snart" på sex kort. Korten för privatpersoner behöver en knapp.
- **[Måste]** Under fliken Privatperson står "Priser för privatpersoner släpps när tjänsterna är klara". Byt mot hur de prissätts.
- **[Bör]** Ge kortet Eget paket ett id så att menylänken kan peka dit.

### Så går det till (#sa-gar-det-till)
- **[Måste]** Bestäm summan i [500–1 000 KR], och skriv om avgiften dras av från slutpriset.
- **[Bör]** "En av våra programmerare" och "en av våra grundare" stämmer bara om ni är flera.
- **[Måste, affärsbeslut]** Ett engångspris med "tillgång utan tidsgräns" betyder att varje kund kostar dig pengar varje månad (AI-anrop, server, support och uppdateringar) utan att något kommer in. Överväg ett engångspris plus en årlig serviceavgift, eller en tydlig gräns för vad som ingår. Det besvarar också frågan om vad som gäller efter första året.

### Räkna ut din besparing (#kalkylator)
- **[Måste]** Kalkylatorn räknar besparingen som 80 % av det kunden betalar i dag, utan att dra av Veras pris, så siffran blir för hög. Visa "tid ni får tillbaka" och "kostnad i dag per år", eller hur många månader det tar innan Vera har betalat sig.
- **[Bör]** Den som gör bokföringen själv får 0 kr i besparing. Lägg till en fråga om vad en timme av kundens tid är värd.
- **[Bör]** Motivera antagandet om 80 %.

### Få en prisuppskattning → #kontakt
- **[Måste]** Kräver formuläret.

### Vanliga frågor (#faq)
- **[Bör]** Fyll i de två platshållarna. Lägg till frågor om vad som ingår, om man kan avbryta testmånaden och vilka program som stöds.

### Sista delen
- **[Bör]** "Boka ett samtal" leder till toppen av startsidan. Byt till #kontakt.

---

## Om oss

### Vår idé (#ide)
- **[Måste]** Texten blandar versaler och gemener ("Vi HAR TAGIT FRAM", "LITEn"). Skriv allt med vanliga bokstäver.
- **[Måste]** Rätta stavfelen:

  | Står nu | Ska vara |
  |---|---|
  | AUTOMATISTERAR | automatiserar |
  | LITEn | liten |
  | mitt egna företag | mitt eget företag |
  | pga | på grund av |
  | dem tre problemen | de tre problemen |
  | 16h | 16 timmar |
  | "…mellan alla kunder, vi åkte hem" | punkt i stället för komma |
  | "jag har testat" efter punkt | stor bokstav |
  | "saker som Bokföring ska inte äta upp…" | meningen behöver skrivas om |

### Vår historia
- **[Bör]** Fyll de två bildplatserna (porträtt av dig och en neutral miljöbild).

### Idag
- **[Bör]** Fyll i [X] månader och [DITT NAMN].

### Teamet (#teamet)
- **[Bör]** Fyll de två korten. Om det bara är du, döp om delen till "Grundaren".

### Kontakta oss → #kontakt
- **[Måste]** Kräver formuläret.

### Länkar
- "Boka en demo" → #kontakt (kräver formuläret). "Läs om bokföringsagenten" → OK.

---

## Sidor som inte finns i menyn

### För företag / Alla agenter (V2-Foretag)
- **[Måste]** Ta bort "Kommer snart" på tre kort.
- **[Bör]** Sidan nås bara via "← Alla agenter". Lägg in den i menyn.
- **[Bör]** "Du människan har alltid sista ordet" → "Ni har alltid sista ordet".
- **[Bör]** "Boka ett samtal" leder till toppen av startsidan. Byt till #kontakt.

### Bokföringsagenten, 7 steg (V2-Bokforing)
- **[Måste]** Ta bort etiketterna "Planerad funktion".
- **[Måste]** Texten "Öppna ert konto", "Vera tar fram ett förslag på kontoplan" och "Läs in tidigare bokföring" låter som ett eget bokföringsprogram. Det krockar med "Ni behåller ert system". Skriv om sidan till "Så kommer ni igång".
- **[Bör]** Steg 7 heter "Ägna tiden åt det som växer", men texten handlar om bokslut.
- **[Bör]** Sidan överlappar mycket med produktsidan. Slå ihop dem eller gör tydligt att den här sidan handlar om att komma igång.
- **[Bör]** "Boka ett samtal" leder till toppen av startsidan. Byt till #kontakt.

### Typsnitt: tre förslag
- **[Måste]** Det här är ett arbetsblad. Välj typsnitt och ta bort sidan.
- **[Bör]** I dag används fyra typsnitt (Archivo Black, League Spartan, Montserrat och Times New Roman). Använd högst två. Times New Roman ser ut som ett standardtypsnitt.
- **[Bör]** Här står "Vera AI" i två ord, men varumärket heter VeraAI.

---

## Sidfoten (alla sidor)

- **[Bör]** Byt [KONTAKTUPPGIFTER] mot e-post, organisationsnummer och adress (påhittade är OK i förhandsbilden).
- **[Bör]** Lägg till länkar till integritetspolicy, cookies och villkor, de viktigaste menylänkarna och sociala medier.

---

## Genomgående (alla sidor)

- **[Måste]** Kontakt: 31 länkar → #kontakt utan formulär. "Boka ett samtal" leder till toppen av startsidan på fem sidor: För företag, 7-stegssidan, Priser, Säkerhet och Så fungerar Vera.
- **[Måste]** Ta bort alla "Kommer snart", "Planerad funktion", "Finns nu" och "Anmäl intresse" om förhandsbilden ska se färdig ut.
- **[Måste]** Mobil: sidorna saknar viewport-raden (koden som får mobilen att visa sidan i rätt storlek), och det finns ingen mobilmeny.
- **[Måste]** Löftet om godkännande ska stå med samma mening överallt.
- **[Bör]** Det finns fyra knapptexter för samma sak. Använd två, till exempel "Boka ett samtal" och "Få en prisuppskattning".
- **[Bör]** Fyll alla [PLATSHÅLLARE] med exempelinnehåll, så att du kan bedöma hur slutprodukten ser ut.
- **[Bör]** Webbadresser och titlar: "V2-Priser.dc.html" → /priser. Ta bort "V2 –" ur fliktitlarna.
- **[Bör]** Välj "ni" eller "du" och använd det överallt.
- **[Bör]** Använd vanliga bokstäver i brödtexten.
- **[Kan]** Lägg till en beskrivning för Google, en delningsbild och en favicon.

---

## Före publicering (spara tills sidan ska bli offentlig)

Det här spelar ingen roll så länge sidan är privat, men allt måste vara klart innan den blir offentlig. Marknadsföringslagen förbjuder vilseledande reklam. Jag är inte jurist, så låt gärna någon som kan juridik läsa igenom sidan.

- [ ] Märk, eller ta bort, funktioner och agenter som inte är färdiga ("Kommer snart" kan då komma tillbaka).
- [ ] Byt påhittade kundcitat mot riktiga, godkända citat, eller dölj delen.
- [ ] Stryk påståenden som inte stämmer än: "tränats på ett stort antal realistiska scenarier", "Finns nu", "Byggd efter bokföringslagen" och liknande.
- [ ] Gör jämförelsetabellerna mot byråer och konsulter korrekta och rättvisa.
- [ ] Fråga din vän om lov för historien i Om oss. Ta bort att bröderna jobbar utan lön och nämn inte stationen.
- [ ] Bolaget Vera Labs AB ska vara registrerat innan "AB" och "©" används.
- [ ] Riktiga kontaktuppgifter och organisationsnummer i sidfoten.
- [ ] Integritetspolicy (GDPR), och en cookiebanner om du använder besöksstatistik.
- [ ] Pengarna-tillbaka-garantin ska stå i villkoren eller i avtalet.
- [ ] Länken till app-vera.ai ska bara finnas kvar om appen finns och domänen är köpt.
- [ ] Kontrollera råden för privatpersoner: personliga investeringsråd kräver tillstånd från Finansinspektionen.
- [ ] Inga exempel eller siffror från Shop and Go.

---

**Nästa steg:** Lägg in ett bokningsformulär i startsidans #kontakt. Det gör 31 knappar användbara på en gång, och samtidigt ser du hur kontaktdelen kommer att se ut.
