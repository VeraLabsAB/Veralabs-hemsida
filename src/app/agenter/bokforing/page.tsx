import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kassio Finance",
  description:
    "Kassio bokför, fakturerar, räknar lön och förbereder moms och bokslut enligt din regelbok. Du godkänner veckans utkast, sedan för Kassio in allt i Fortnox.",
};

export default function BokforingPage() {
  return (
    <>
      {/* Åtta sektioner enligt docs/kassio-finance-webbtext-2026-10-31.md (2026-10-31). Samma layout som startsidan
          (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet till höger, sedan en skärm per
          sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      {/* 1. Hero */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Kassio Finance
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Hela ekonomin klar. Varje vecka. Utan dig.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Kassio bokför, fakturerar, räknar lön och förbereder moms och bokslut enligt din regelbok. Du godkänner
              veckans utkast, sedan för Kassio in allt i Fortnox.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link className="btn btn--primary theme-dark" href="/kom-igang">
                Kom igång
              </Link>
              <Link className="btn btn--secondary theme-dark" href="/#kontakt">
                Boka ett möte
              </Link>
            </div>
            <p className="mx-0 mt-5 mb-0 text-[15px] leading-[1.6] text-pale-1 font-sans max-w-[520px]">
              999 kr/mån · Pengarna tillbaka om du avslutar första månaden
            </p>
          </div>
          <div className="flex-[1_1_440px] min-w-0">
            <div className="lv-mock px-7 py-6 rounded-card bg-lv-card text-lv-ink box-border w-full">
              <div className="mb-2 gap-3 flex justify-between items-center">
                <div>
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                    Veckorapport
                  </div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">Vecka 42</div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">13 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Swish-inbetalning
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">1 250,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Förslag
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">13 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Kassans Z-rapport
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">8 420,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Förslag
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">14 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Kortköp: förbrukningsmaterial
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">349,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase border border-line-soft text-ink-soft">
                    Kvitto saknas
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">15 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Faktura 2026-014
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">12 500,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Betald
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">15 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Okänd inbetalning
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">5 000,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-ink-inverse bg-accent">
                    Fråga till dig
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 gap-3 flex justify-between items-center flex-wrap border-t border-t-line-faint">
                <div className="gap-4 flex flex-wrap text-[12px] font-semibold tracking-[0.06em] uppercase text-ink-soft">
                  <span>
                    <svg className="mt-0.5 flex-none" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    3 förslag
                  </span>
                  <span>
                    <svg className="mt-0.5 flex-none" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    6 kontroller klara
                  </span>
                  <span>1 fråga</span>
                  <span>Lön oktober klar för granskning</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Granska och godkänn
                </span>
              </div>
            </div>
          </div>
          <div className="w-full text-[13px] font-semibold tracking-[0.12em] uppercase text-pale-1">
            Fungerar med Fortnox · För aktiebolag i alla branscher
          </div>
        </div>
      </div>
      {/* 2. Problem: bara text, centrerad, sidans enda sektion utan bild. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[760px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Ekonomin ska inte äga dina kvällar.
          </h2>
          <div className="mt-2 gap-4 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Kvitton ska samlas in, fakturor ska ut och lönen ska stämma den 25:e. I de flesta småföretag görs jobbet
              efter stängning, av den som redan jobbat hela dagen.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Kassio tar över arbetet. Ansvaret är fortfarande ditt.
            </p>
          </div>
        </div>
      </div>
      {/* 3. Vad Kassio gör: sex kort, tre i bredd på datorn. */}
      <div
        className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20"
        id="uppgifter"
      >
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Omfattning
          </div>
          <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Från första kvittot till årsredovisningen.
          </h2>
        </div>
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] reveal-stagger">
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
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
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">
              Löpande bokföring
            </div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Bank och kassa läses varje dag. Varje post konteras och stäms av samma vecka.
            </div>
          </div>
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 3h12v18l-3-2-3 2-3-2-3 2z M9 8h6 M9 12h6 M9 16h3"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">
              Kvitton och utlägg
            </div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Kvitton hämtas från mejlen eller fotas i appen. Utlägg förbereds för återbetalning.
            </div>
          </div>
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 3h12v18H6z M9 7h6 M9 11h6 M9 15h3"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">Fakturor</div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Dina fakturor skapas och bevakas till betalning. Leverantörernas kontrolleras innan du betalar.
            </div>
          </div>
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 11a3 3 0 100-6 3 3 0 000 6z M3 20c0-3.5 3-6 6-6s6 2.5 6 6 M17 8v8 M14.5 10.5h4 M14.5 13.5h4"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">Lön</div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Lön, lönespecifikationer, semester och frånvaro. Underlaget till arbetsgivardeklarationen ingår.
            </div>
          </div>
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 5h14v15H5z M5 10h14 M9 3v4 M15 3v4 M9 14l2 2 4-4"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">
              Moms och bokslut
            </div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Momsdeklaration före sista dag. Bokslut och årsredovisning klara för din underskrift.
            </div>
          </div>
          <div className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border text-ink wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z M9.5 9.5a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 4 M12 17h.01"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">Chatt</div>
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Fråga hur mycket moms du ska betala eller be Kassio göra en faktura, när som helst.
            </div>
          </div>
        </div>
        <div className="mt-8 reveal">
          <Link
            className="font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
            href="/sa-fungerar-vera"
          >
            Se allt Kassio gör →
          </Link>
        </div>
      </div>
      {/* 4. Så fungerar det: tre steg, sedan de två lägena. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="hur">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar det
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Tre steg. Varje vecka.
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] reveal-stagger">
            <div className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
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
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  1
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Insamling</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Kontoutdrag, kvitton, fakturor och Z-rapporter hämtas från bank, kassa och mejl. Saknas något säger
                Kassio till.
              </p>
            </div>
            <div className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M8.5 12l2.5 2.5L16 9.5"
                      fill="none"
                      stroke="var(--contrast)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  2
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Förberedelse</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Varje post får konto och moms. Är något oklart får du en fråga, aldrig en gissning.
              </p>
            </div>
            <div className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
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
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  3
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Godkännande</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                I slutet av veckan väntar ett komplett utkast. När du godkänt för Kassio in allt i Fortnox.
              </p>
            </div>
          </div>
          {/* Skärmbild av appen när pilotappen finns */}
          <div className="mt-10 gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] reveal-stagger">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Granskat läge</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Du godkänner varje förslag för sig, ett i taget. Bra i början.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Automatiskt läge</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Kassio arbetar på egen hand. Du godkänner hela veckan i ett utkast.
              </p>
            </div>
          </div>
          <p className="mx-0 mt-6 mb-0 text-[16px] leading-[1.55] text-ink font-sans reveal">
            Byt läge när du vill. Poster över din beloppsgräns kräver alltid ett eget godkännande.
          </p>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link className="btn btn--primary" href="/kom-igang">
              Kom igång
            </Link>
            <Link className="btn btn--secondary" href="/kom-igang">
              Så kommer du igång →
            </Link>
          </div>
        </div>
      </div>
      {/* 5. Du har kontrollen: text och bockar till vänster, godkännandekortet till höger. */}
      <div className="mx-auto my-0 px-10 py-20 gap-14 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center">
        <div className="reveal flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Trygghet
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Du har kontrollen. Kassio har jobbet.
          </h2>
          <p className="mx-0 mt-0 mb-7 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Varje förslag visar underlaget, kontot, regeln bakom och kontrollerna som körts. Besluten och ansvaret är
            dina.
          </p>
          <div className="mb-7 gap-3.5 flex flex-col reveal-stagger">
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-surface text-[16px] leading-[1.55] text-ink font-sans">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Inget förs in i Fortnox utan ditt godkännande</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-surface text-[16px] leading-[1.55] text-ink font-sans">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Kassio flyttar aldrig pengar</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-surface text-[16px] leading-[1.55] text-ink font-sans">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Inget raderas. Fel rättas med en ny post</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-surface text-[16px] leading-[1.55] text-ink font-sans">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Nya regler bara när du sagt ja</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-surface text-[16px] leading-[1.55] text-ink font-sans">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Allt sparas i ett arkiv bara behöriga kommer åt</span>
            </div>
          </div>
          <Link
            className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
            href="/sakerhet"
          >
            Så skyddar vi dig →
          </Link>
        </div>
        <div className="reveal flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-card bg-surface box-border">
            <div className="gap-3 flex justify-between items-start flex-wrap">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                  13 okt · Swish-inbetalning
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">1 250,00 kr</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            {/* Miniatyrbild av Swish-notisen när den finns */}
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Underlag</div>
            <div className="px-0 py-2.5 border-t border-t-line-faint text-[13px] uppercase tracking-[0.04em] text-[12px]">
              Swish-notis 13 okt
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Debet</span>
              <span className="font-mono tracking-normal font-semibold">1930</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Företagskonto</span>
              <span className="font-mono tracking-normal font-semibold text-right">1 250,00</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Kredit</span>
              <span className="font-mono tracking-normal font-semibold">3001</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Försäljning 25 % moms</span>
              <span className="font-mono tracking-normal font-semibold text-right">1 000,00</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Kredit</span>
              <span className="font-mono tracking-normal font-semibold">2611</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Utgående moms 25 %</span>
              <span className="font-mono tracking-normal font-semibold text-right">250,00</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Enligt din regel ”Swish-försäljning i butik” bokförs inbetalningen som försäljning med 25 % moms.
              </div>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Kontroller</div>
            <div className="mt-2 gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Stämmer mot banken</span>
              </div>
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Ingen dubblett</span>
              </div>
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Debet och kredit går jämnt ut</span>
              </div>
            </div>
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap justify-end border-t border-t-line-faint items-center">
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 border-[1.5px] border-line-strong text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Ändra
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Godkänn
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 6. Varför Kassio: jämförelsetabellen. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Skillnaden
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              En kollega, inget nytt program.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Kassio arbetar i Fortnox, banken och kassan du redan har.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="cmp-table data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Göra själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Redovisningsbyrå
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Kassio Finance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Underlag
                  </td>
                  <td data-label="Göra själv" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    För hand, ofta långt i efterhand.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du samlar in och skickar.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Hämtas från bank, kassa och mejl.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kvalitet
                  </td>
                  <td data-label="Göra själv" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Beror på kunskap och tidspress.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Hög, men kontrollen kommer i efterhand.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Varje post kontrolleras innan du ser den.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Lön och fakturor
                  </td>
                  <td data-label="Göra själv" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Ett eget program eller ett kalkylark.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    {/* BEHÖVS: kontroll mot 3–5 byråers prislistor */}
                    Ofta en tilläggstjänst.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Ingår.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    När någon är borta
                  </td>
                  <td data-label="Göra själv" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Arbetet står still.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Beror på vem som har ditt bolag.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Kassio har ingen semester. Kunskapen stannar hos dig.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kostnad
                  </td>
                  <td data-label="Göra själv" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Dina kvällar, eller en lön.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Månadsavgift plus timmar utöver avtalet.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    999 kr i månaden.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link className="btn btn--primary" href="/kom-igang">
              Kom igång
            </Link>
            <Link className="btn btn--secondary" href="/priser#kalkylator">
              Räkna på din besparing
            </Link>
          </div>
        </div>
      </div>
      {/* 7. Pris: två prisrutor i lägeskortens stil. */}
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20" id="pris">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Pris
          </div>
          <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            999 kr i månaden. Allt ingår.
          </h2>
        </div>
        {/* BEHÖVS: pilotsiffror och skriftligt ok från Shop and Go. Tre siffror från piloten ska stå här, ovanför
            prisrutorna: bara siffror, inget företagsnamn och inga citat. */}
        <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-w-[760px] reveal-stagger">
          <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word flex flex-col">
            <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Månad</h3>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px]">999 kr/mån</div>
            <div className="mt-6">
              <Link className="btn btn--primary" href="/kom-igang">
                Kom igång
              </Link>
            </div>
          </div>
          <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word flex flex-col">
            <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Kvartal</h3>
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px]">2 997 kr/kvartal</div>
            <div className="mt-6">
              <Link className="btn btn--primary" href="/kom-igang">
                Kom igång
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 gap-2.5 flex flex-col max-w-[760px] reveal">
          <div className="gap-2.5 flex items-start text-[16px] leading-[1.5] text-ink font-sans">
            <svg className="mt-0.5 flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Avsluta under första månaden och få pengarna tillbaka. Därefter 30 dagars uppsägning.</span>
          </div>
          <div className="gap-2.5 flex items-start text-[16px] leading-[1.5] text-ink font-sans">
            <svg className="mt-0.5 flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Fortnox betalar du direkt till Fortnox.</span>
          </div>
          <div className="gap-2.5 flex items-start text-[16px] leading-[1.5] text-ink font-sans">
            <svg className="mt-0.5 flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>15 % rabatt när du köper fler agenter från Kassio Labs.</span>
          </div>
        </div>
        <p className="mx-0 mt-8 mb-0 text-[16px] leading-[1.55] text-ink font-sans reveal">
          Osäker på vad du behöver?{" "}
          <Link className="font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent" href="/#kontakt">
            Boka ett möte →
          </Link>
        </p>
      </div>
      {/* 8. Vanliga frågor och slutknapp. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="faq">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[900px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Frågor om Kassio Finance
            </h2>
          </div>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Vilka program stöds?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                Fortnox. Har du inget bokföringsprogram hjälper Kassio dig att komma igång med Fortnox. Programmet
                betalar du själv.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Vad händer med en post Kassio inte känner igen?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                Kassio stannar och frågar dig, och frågar sedan om det ska göras likadant varje gång. Svarar du ja blir
                det en regel.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Kan Kassio betala mina fakturor och löner?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                Nej. Kassio förbereder betalningen. Du betalar själv i banken och Kassio bokför.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Vad händer om jag inte hinner godkänna?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                Kassio påminner dig i appen, sedan via mejl och sms. Inget förs in i Fortnox utan ditt godkännande, inte
                ens om en deadline passerar.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Hur lång är uppstarten?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                {/* BEHÖVS: uppmätt tid */}
                Du svarar på några frågor, kopplar Fortnox och kopplar bank och mejl i appen. Regelboken byggs av dina
                svar.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Behöver jag fortfarande en byrå eller revisor?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                Kassio gör det löpande arbetet en byrå gör. En revisor granskar bolaget utifrån och ersätts inte. Har du
                revisor får hen ett ordnat underlag.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Lämnar Kassio in deklarationerna?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                I dag förbereder Kassio moms, arbetsgivardeklaration och årsredovisning, och du lämnar in. Vi arbetar på
                att du ska kunna lämna in från appen med BankID.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
                Vem ansvarar om något blir fel?
                <span
                  className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
                {/* BEHÖVS: vad avtalet lovar */}
                Bokföringen är alltid företagets ansvar enligt lag, och du godkänner innan något förs in. Hittas ett fel
                föreslår Kassio en rättelse med förklaring.
              </p>
            </details>
          </div>
          <div className="mt-8 reveal">
            <Link
              className="font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/vanliga-fragor"
            >
              Alla frågor →
            </Link>
          </div>
          <div className="mt-20 flex flex-col items-center text-center reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Starta i dag. Ångra dig inom en månad.
            </h2>
            <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
              Avslutar du under första månaden får du pengarna tillbaka.
            </p>
            <div className="gap-3 flex justify-center flex-wrap">
              <Link className="btn btn--primary" href="/kom-igang">
                Kom igång
              </Link>
              <Link className="btn btn--secondary" href="/#kontakt">
                Boka ett möte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
