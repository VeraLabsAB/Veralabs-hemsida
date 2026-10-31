import Link from "next/link";
import type { Metadata } from "next";
import { AGENTER, AgentCard } from "@/components/AgentCards";
import { DemoVideo } from "@/components/DemoVideo";

export const metadata: Metadata = {
  description:
    "Kassios AI-agenter sköter bokföringen, bevakar marknaden och hittar leverantörer åt ert företag. Ni godkänner, Kassio gör resten. Fast pris per månad. Från Kassio Labs i Stockholm.",
};

/** Kundrösterna är dolda tills det finns riktiga citat (2026-10-31). Sätt true för att visa dem igen. */
const VISA_KUNDROSTER = false;

/** Demofilmens längd i sekunder. Okänd (null) tills filmen finns; vid högst 90 visas raden under filmen. */
const DEMO_LANGD_SEKUNDER: number | null = null;

export default function HomePage() {
  return (
    <div className="lv-page">
      {/* Drar upp bandet bakom header-pillen (12 + 56 px, 12 + 48 på mobil) så att rutnätet går ända upp,
          och fyller minst hela första skärmen med innehållet lodrätt centrerat. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Ett team av AI-agenter för ert företag
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Ni driver företaget. Kassio gör resten.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Kassios AI-agenter sköter bokföringen, bevakar marknaden och hittar leverantörer åt ert företag. Ni
              betalar ett fast pris per månad i stället för en byrås timarvode.
            </p>
            <div className="gap-3 flex flex-wrap">
              {/* The hero band is Shadow Grey in both modes, so the buttons always use the dark token set. */}
              <Link className="btn btn--primary theme-dark" href="/#kontakt">
                Boka ett gratis möte
              </Link>
              <Link className="btn btn--secondary theme-dark" href="/foretag">
                Se våra agenter
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_400px] min-w-0 max-w-[520px]">
            <div
              className="lv-mock p-6 rounded-card bg-lv-card text-lv-ink box-border text-left font-sans"
              role="img"
              aria-label="Exempel på Kassio Finance-appen: veckans bokföring med tolv poster, varav elva klara och en fråga, och knappen Godkänn veckan."
            >
              <div className="gap-3 flex justify-between items-center">
                <div className="text-[13px] font-bold tracking-[0.12em] uppercase">Veckans bokföring</div>
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-lv-muted">Exempel</span>
              </div>
              <div className="mt-4 flex justify-between items-center text-[13px] text-lv-muted">
                <span>
                  Kassio arbetar
                  <span className="lv-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </span>
                <span>11 av 12 klara</span>
              </div>
              <div className="mx-0 mt-2 mb-1.5 rounded-full h-2 bg-lv-soft overflow-hidden">
                <div className="lv-bar rounded-full h-full bg-lv-acc" />
              </div>
              <div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Kontoutdrag · Leverantör AB</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Inköp av varor, 25 % moms</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-lv-acc text-lv-acc-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Klar
                  </span>
                </div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Kvitto · Kontorsmaterial</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Förbrukningsmaterial</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-lv-acc text-lv-acc-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Klar
                  </span>
                </div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Swish · 450 kr</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Kassio frågar: privat eller företaget?</div>
                  </div>
                  <span className="px-[9px] py-[3px] rounded-full border-[1.5px] border-lv-muted text-lv-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Fråga
                  </span>
                </div>
              </div>
              <div className="mt-4 gap-3 flex flex-wrap justify-between items-center">
                <span className="text-[13px] text-lv-muted">Väntar på ert godkännande</span>
                <span className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-lv-acc text-lv-acc-ink text-[12px] font-bold tracking-[0.1em] uppercase">
                  Godkänn veckan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Programraden direkt under heron (2026-10-31). Chipsen är samma som i integrationssektionen,
          som nu ligger på Kassio Finances produktsida. */}
      <div className="mx-auto my-0 px-10 py-7 w-full max-w-[1200px] box-border gap-x-5 gap-y-3 flex flex-wrap items-center justify-center">
        <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">
          Fungerar med Fortnox, Bokio och Spiris.
        </span>
        <div className="gap-3 flex flex-wrap items-center justify-center">
          <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px] tracking-[0.02em]">
            Fortnox
          </span>
          <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px] tracking-[0.02em]">
            Bokio
          </span>
          <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px] tracking-[0.02em]">
            Spiris
          </span>
        </div>
      </div>
      {/* Demo (2026-10-31): filmen täcker hela sektionen och startar utan ljud när den rullas in.
          Etikett, rubrik och text är borttagna. Menyn länkar hit med /#sa. */}
      <div className="bg-surface scroll-mt-20" id="sa">
        <DemoVideo
          src="/video/demo.mp4"
          className="relative w-full aspect-video min-[900px]:aspect-auto min-[900px]:min-h-dvh overflow-hidden"
        />
        {DEMO_LANGD_SEKUNDER !== null && DEMO_LANGD_SEKUNDER <= 90 && (
          <div className="mx-auto my-0 px-10 py-6 max-w-[1200px] box-border text-center text-[16px] leading-[1.5] text-ink font-sans">
            Se Kassio bokföra en hel vecka på 90 sekunder.
          </div>
        )}
      </div>
      {/* De tre stegen fick en egen skärm när demo-sektionen delades. Tre solida rutor i samma färg
          och radie som agentpanelen; stegen är innehåll, inte kontroller, och får inte glas (§2). */}
      <div className="min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="hur">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar det
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Tre steg. Ni har sista ordet i alla.
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] reveal-stagger">
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">1 · Välj era agenter</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Välj de agenter ni behöver. Osäkra? Boka ett möte och få personlig rådgivning, så att ert företag får
                ut så mycket som möjligt av Kassio.
              </p>
            </div>
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9 7H6a2 2 0 00-2 2v6a2 2 0 002 2h3 M15 7h3a2 2 0 012 2v6a2 2 0 01-2 2h-3 M8 12h8"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">2 · Koppla in era program</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Skapa ett konto, bjud in kollegorna och koppla in Fortnox och era andra program. Allt styrs från en
                portal, i mobilen eller datorn.
              </p>
            </div>
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">3 · Låt Kassio sköta resten</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Ge agenterna era regler och dela ut uppgifter. Ni godkänner innan något bokförs eller skickas vidare.
                Kassio lär sig av er feedback.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sa-fungerar-vera"
            >
              Så fungerar Kassio Finance →
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Agenter
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            En specialist för varje område.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Börja där det svider mest. Lägg till fler när ni vill.
          </p>
        </div>
        {/* Uppgift e), fråga 5: agentkorten är EN gemensam glaspanel (Apple: gruppera) med bara luft
            mellan fälten; fältet tonas vid hover. Två glasytor på skärmen med headern. */}
        <div className="glass glass--strong box-border rounded-panel p-2 gap-1 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] reveal-stagger">
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/bokforing"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Kassio Finance</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Sköter löpande bokföring, fakturering, moms, lön och bokslut. Varje vecka, utan att tappa en enda post.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/trendovervakaren"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 17l6-6 4 4 8-8 M15 7h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Trend&shy;övervakaren</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ser efterfrågan växa i er bransch innan konkurrenterna gör det.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/strategikonsulten"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 8a4 4 0 100 8 4 4 0 000-8z M12 12h.01"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Strategi&shy;konsulten</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Räknar på pris, sortiment och investeringar. Med era egna siffror som grund.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/leverantorsagenten"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 8l9-5 9 5v8l-9 5-9-5z M3 8l9 5 9-5 M12 13v8"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Leverantörs&shy;agenten</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Hittar, jämför och sammanställer leverantörer efter era krav. Ni får beslutsunderlaget serverat.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
        </div>
        <div className="mt-8">
          <Link
            className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
            href="/foretag"
          >
            Alla agenter →
          </Link>
        </div>
      </div>
      {/* Jämförelsen (2026-10-31): nya kolumner och rader, knapp under tabellen. Under 720 px blir
          tabellen kort via .cmp-table i globals.css, så inget scrollar i sidled på mobil. */}
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border reveal-stagger">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Tre sätt att sköta det. Ett som håller.
          </h2>
          <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Jämför tre sätt att få arbetet gjort.
          </p>
          <div className="overflow-x-auto">
            <table className="cmp-table w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Ni eller era anställda
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Byrå eller konsult
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Kassio
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Vem gör jobbet?
                  </td>
                  <td data-label="Ni eller era anställda" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Ni själva eller en anställd
                  </td>
                  <td data-label="Byrå eller konsult" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    En inhyrd expert
                  </td>
                  <td data-label="Kassio" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    En specialist som aldrig blir sjuk eller tar semester
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Tillgänglighet
                  </td>
                  <td data-label="Ni eller era anställda" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Kontorstid, eller kvällar om ni gör det själva
                  </td>
                  <td data-label="Byrå eller konsult" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Kontorstid, i kö med andra kunder
                  </td>
                  <td data-label="Kassio" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Dygnet runt, med resultat redan nästa morgon
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Kompetens
                  </td>
                  <td data-label="Ni eller era anställda" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Lärs in efter hand
                  </td>
                  <td data-label="Byrå eller konsult" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Hög, men delad mellan många kunder
                  </td>
                  <td data-label="Kassio" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Följer era regler varje gång och frågar hellre än gissar
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Kännedom om er verksamhet
                  </td>
                  <td data-label="Ni eller era anställda" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Byggs upp med tiden
                  </td>
                  <td data-label="Byrå eller konsult" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Byggs upp genom intervjuer
                  </td>
                  <td data-label="Kassio" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Ni berättar en gång, Kassio glömmer aldrig
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Kostnad
                  </td>
                  <td data-label="Ni eller era anställda" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Lön eller er egen tid
                  </td>
                  <td data-label="Byrå eller konsult" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Timarvode
                  </td>
                  <td data-label="Kassio" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Fast pris per månad, inga överraskningar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Link className="btn btn--primary" href="/#kontakt">
              Boka ett gratis möte
            </Link>
          </div>
        </div>
      </div>
      {VISA_KUNDROSTER && (
        <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
          <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
            <h2 className="mx-0 mt-0 mb-8 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word reveal">
              Kundröster
            </h2>
            <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] reveal-stagger">
              <figure className="m-0 p-7 gap-4.5 rounded-card bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col">
                <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                  Exempelcitat (platshållare)
                </span>
                <blockquote className="m-0 leading-[1.6] text-ink font-sans text-[20px]">
                  ”Tre kvällar i månaden blev en kvart i veckan.”
                </blockquote>
                <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                  Anna Berg · Ägare, Exempelbutiken AB
                </figcaption>
              </figure>
              <figure className="m-0 p-7 gap-4.5 rounded-card bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col">
                <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                  Exempelcitat (platshållare)
                </span>
                <blockquote className="m-0 leading-[1.6] text-ink font-sans text-[20px]">
                  ”Kassio såg att marginalen på jackorna sjönk. Två veckor innan vi gjorde det.”
                </blockquote>
                <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                  Erik Sund · VD, Exempelbolaget AB
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      )}
      {/* Avslutet (2026-10-31): rubrik, text, de fyra agenterna i mindre rutor (samma källa som /foretag),
          prisraden och sedan kontaktformuläret. Alla "Boka ett gratis möte" och menyns knapp pekar hit. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="kontakt">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Vilket jobb vill ni lämna över först?
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Välj en agent, eller boka ett möte och få personlig rådgivning, så att ert företag får ut så mycket som
              möjligt av Kassio.
            </p>
          </div>
          <div className="mt-10 gap-4 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] reveal-stagger">
            {AGENTER.map((agent) => (
              <AgentCard key={agent.href} agent={agent} size="small" />
            ))}
          </div>
          <p className="mx-0 mt-8 mb-0 text-[16px] leading-[1.6] text-ink font-sans max-w-[720px] reveal">
            Fast pris per månad. På mötet får ni en prisuppskattning och råd om vilka agenter som ger ert företag
            mest.
          </p>
          <form
            className="mt-10 p-8 gap-4.5 rounded-card w-full max-w-[760px] bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col shadow-[0_30px_70px_rgba(33,37,41,0.08)] reveal"
            action="mailto:hej@veralabs.se?subject=Boka%20ett%20samtal"
            method="post"
            encType="text/plain"
          >
            <div className="gap-4.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Namn
                <input
                  className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                  type="text"
                  name="namn"
                  required
                />
              </label>
              <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Företag
                <input
                  className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                  type="text"
                  name="foretag"
                  required
                />
              </label>
            </div>
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              E-post
              <input
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                type="email"
                name="epost"
                required
              />
            </label>
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Vad vill ni automatisera?
              <select
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                name="behov"
              >
                <option>Bokföring</option>
                <option>Trendbevakning</option>
                <option>Strategi och beslut</option>
                <option>Inköp och leverantörer</option>
                <option>Flera områden</option>
                <option>Vet inte än</option>
              </select>
            </label>
            <div className="gap-4.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Bokförings&shy;program
                <select
                  className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                  name="bokforingsprogram"
                >
                  <option>Fortnox</option>
                  <option>Bokio</option>
                  <option>Spiris</option>
                  <option>Visma eEkonomi</option>
                  <option>Annat</option>
                  <option>Vet inte</option>
                </select>
              </label>
              <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Kassasystem <span className="font-medium tracking-[0.04em] normal-case">(valfritt)</span>
                <input
                  className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                  type="text"
                  name="kassasystem"
                  placeholder="T.ex. Zettle"
                />
              </label>
            </div>
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Meddelande <span className="font-medium tracking-[0.04em] normal-case">(valfritt)</span>
              <textarea
                className="field px-4 py-3 rounded-xl w-full box-border border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink min-h-24 resize-y"
                name="meddelande"
                rows={3}
              />
            </label>
            <button className="btn btn--primary w-full" type="submit">
              Boka mitt möte
            </button>
            <div className="text-[14px] leading-[1.5] text-ink text-center font-sans">30 minuter, utan förpliktelser.</div>
            <div className="text-[13px] leading-[1.5] text-ink-muted text-center">
              Uppgifterna används bara för att kontakta er om mötet.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
