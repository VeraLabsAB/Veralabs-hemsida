import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bokföringsagenten",
  description:
    "Vera läser kontoutdrag, kvitton och Z-rapporter, konterar enligt er regelbok och kontrollerar varje post. Ni granskar och godkänner.",
};

export default function BokforingPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-16 pb-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Bokförings&shy;agenten
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,8.5vw,56px)] wrap-break-word leading-[1.02]">
              Bokföringen klar varje vecka.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink uppercase tracking-[0.03em] font-bold">
              Vera läser kontoutdrag, kvitton och Z-rapporter, konterar enligt er regelbok och kontrollerar varje post.
              Ni granskar och godkänner.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link
                className="btn btn--primary"
                href="/#kontakt"
              >
                Boka en demo
              </Link>
              <a
                className="btn btn--secondary"
                href="#hur"
              >
                Så fungerar det
              </a>
            </div>
          </div>
          <div className="reveal-soft flex-[1_1_440px] min-w-0">
            <div className="px-7 py-6 rounded-card bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.12)] box-border w-full">
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
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">1930 → 3001 / 2611</div>
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
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">1580 → 3001 / 2611</div>
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
                    Kvitto: förbrukningsmaterial
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">5460 / 2641 → 1930</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">349,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Förslag
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">15 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Okänd inbetalning
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Saknar regel</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">5 000,00</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-ink-inverse bg-accent">
                    Fråga till er
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
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-12 gap-y-8 gap-x-14 max-w-[1200px] box-border flex flex-wrap">
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Hanterar varje transaktion
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Nya poster förbereds när de kommer in, inte när någon hinner.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Följer er regelbok
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Konton, momssatser och motparter enligt era beslut.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Spårbart
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Varje underlag och steg loggas.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 pt-20 pb-4 max-w-[1200px] box-border" id="uppgifter">
        <div className="reveal-soft mx-auto mt-0 mb-10 text-center max-w-[720px]">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Omfattning
          </div>
          <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Från verifikation till årsredovisning.
          </h2>
        </div>
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <a
            className="reveal-soft p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface border border-line no-underline text-ink wrap-break-word"
            href="#hur"
          >
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
            <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Varje transaktion konteras och stäms av mot banken.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="reveal-soft p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface border border-line no-underline text-ink wrap-break-word"
            href="#fakturering"
          >
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
              Fakturering
            </div>
            <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Fakturor skapas, skickas efter godkännande och följs upp till betalning.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="reveal-soft p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface border border-line no-underline text-ink wrap-break-word"
            href="#moms"
          >
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
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[18px] leading-[1.15]">Moms</div>
            <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Momsdeklaration för er period, klar före sista dag.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="reveal-soft p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface border border-line no-underline text-ink wrap-break-word"
            href="#lon"
          >
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
            <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Lönespecifikationer och underlag till arbetsgivardeklarationen.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="reveal-soft p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface border border-line no-underline text-ink wrap-break-word"
            href="#arsbokslut"
          >
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
              Bokslut och års&shy;redovisning
            </div>
            <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Avstämningar, bokslutsförslag och utkast till årsredovisning.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
        <div className="reveal-soft flex-[1_1_440px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Bokföring ska inte ta kvällarna.
          </h2>
        </div>
        <div className="reveal-soft gap-4 flex-[1_1_440px] min-w-0 flex flex-col">
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Underlag ska samlas in, varje post ska konteras och momsen ska stämma. I många småföretag görs det efter
            stängning.
          </p>
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Bokföringsagenten tar över det löpande arbetet och lämnar ett resultat som är lätt att granska. Ansvaret för
            bokföringen ligger kvar hos företaget.
          </p>
        </div>
      </div>
      <div className="bg-surface-muted" id="hur">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-12 text-center">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
              Arbetsflöde
            </h2>
            <p className="mx-auto my-0 text-center text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Tre steg per vecka.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Kontoutdrag, kvitton och Z-rapporter samlas på ett ställe, via uppladdning eller direkt från banken och
                e-posten. Vera kontrollerar att inget saknas.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Varje post får ett förslag på konto och moms med motivering. Oklarheter skickas som frågor till er.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                I slutet av veckan väntar ett komplett utkast. Efter ert godkännande förs det in i
                bokförings&shy;programmet, av Vera eller av er beroende på arbetssätt.
              </p>
            </div>
          </div>
          <div className="mt-12 gap-3 flex justify-center flex-wrap">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="btn btn--secondary"
              href="/kom-igang"
            >
              Så kommer ni igång
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-page border-b border-b-line" id="arbetssatt">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="reveal-up mx-auto mt-0 mb-6 text-center max-w-[720px]">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Arbetssätt
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,6.5vw,44px)] leading-[1.05]">
              Två nivåer av inblandning.
            </h2>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Ni väljer hur nära ni vill följa arbetet och kan byta när som helst.
            </p>
          </div>
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Välj nivå
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Granska varje post
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Granskat läge</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Varje förslag godkänns separat. Lämpligt under uppstarten eller när ni vill ha full insyn.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Godkänn veckan samlat
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Automatiskt läge
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vera förbereder löpande via bankkopplingen. Ni godkänner hela veckan i ett steg.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Granskat läge i detalj
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Förslag</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Underlagen läses in och varje post får konto, moms och motivering.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Granskning</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Veckans rapport finns i appen. Ändra, kommentera eller fråga Vera direkt.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Överföring</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Ni för själva över den granskade bokföringen till ert bokförings&shy;program.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Automatiskt läge i detalj
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Bankkoppling</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Transaktioner hämtas när de uppstår, tillsammans med tillhörande kvitton och Z-rapporter.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Löpande förberedelse
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Bokföringen förbereds i appen under veckan, utan avbrott för er.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Ett godkännande
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Ni går igenom utkastet och godkänner. Därefter förs allt in i bokförings&shy;programmet.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">4</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Gränser
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Beloppsgräns</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Poster över gränsen kräver separat godkännande, oavsett läge.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Avvikelser</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Ny motpart, oväntad moms eller en post utan regel stoppas och blir en fråga.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Flexibelt</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Byt läge när förtroendet eller behovet ändras.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Spårbarhet
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Varje steg loggas: underlag, regel och resultat. Det gör det enkelt att visa hur bokföringen har gått
                  till.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line" id="bokslut">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="reveal-soft mx-auto mt-0 mb-12 text-center max-w-[720px]">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Periodiskt arbete
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Fakturor, moms, lön och bokslut.
            </h2>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[600px] font-serif text-ink uppercase tracking-[0.03em]">
              Den löpande bokföringen är underlaget för allt som ska rapporteras under året.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div
              className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word"
              id="fakturering"
            >
              <div className="gap-3 flex justify-between items-center flex-wrap">
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
                <span className="px-3 py-1 rounded-full bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Löpande
                </span>
              </div>
              <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
                Fakturering
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ange kund, tjänst och belopp. Vera skapar fakturan med rätt moms och betaluppgifter och bevakar
                betalningen.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Faktura skapas från era uppgifter</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Skickas efter godkännande</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Påminnelse vid förfallen betalning</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Inbetalningen matchas automatiskt
              </div>
            </div>
            <div
              className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word"
              id="moms"
            >
              <div className="gap-3 flex justify-between items-center flex-wrap">
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
                <span className="px-3 py-1 rounded-full bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Månad, kvartal eller år
                </span>
              </div>
              <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
                Moms&shy;deklaration
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Utgående och ingående moms räknas fram ur bokföringen. Redovisningsperioden följer er omsättning.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Avstämning mot bokföringen</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Påminnelse före sista dag</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Avstämning av skattekontot</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Ni lämnar in via Skatteverkets e-tjänst
              </div>
            </div>
            <div
              className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word"
              id="lon"
            >
              <div className="gap-3 flex justify-between items-center flex-wrap">
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
                <span className="px-3 py-1 rounded-full bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Varje månad
                </span>
              </div>
              <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
                Lön och arbets&shy;givar&shy;deklaration
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Löner bokförs och underlag tas fram för arbetsgivardeklarationen, med skatteavdrag och
                arbetsgivaravgifter per anställd.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Bokföring av löner</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Lönespecifikationer</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Skatt och avgifter per anställd</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Bevakning av deklarationsdatum</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Underlaget klart för inlämning
              </div>
            </div>
            <div
              className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word"
              id="arsbokslut"
            >
              <div className="gap-3 flex justify-between items-center flex-wrap">
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
                <span className="px-3 py-1 rounded-full bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Varje år
                </span>
              </div>
              <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
                Bokslut och års&shy;redovisning
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Efter räkenskapsårets slut tas bokslutsförslag, utkast till årsredovisning och underlag till
                inkomstdeklarationen fram.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Avstämning av alla konton</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Förslag på avskrivningar och periodiseringar</span>
                </div>
                <div className="gap-2.5 flex items-start text-[14px] font-medium tracking-[0.04em] uppercase leading-[1.4]">
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
                  <span>Ingående balanser till nästa år</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Styrelsen undertecknar, efter revision om ni har revisor
              </div>
            </div>
          </div>
          <div className="reveal-soft mx-auto mt-8 mb-0 px-6 py-5 gap-3.5 rounded-2xl max-w-[760px] bg-page border border-line flex items-start">
            <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 7v5l3 2"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="m-0 text-[15px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Ett aktiebolag ska lämna in årsredovisningen till Bolagsverket senast sju månader efter räkenskapsårets
              slut. Vera bevakar datumet.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
        <div className="reveal-soft flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Transparens
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Varje förslag har en motivering.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Ni ser vilket konto som föreslås, vilken regel det bygger på och vilka kontroller som har körts.
            </p>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Det gör granskningen snabb och visar när en regel behöver justeras.
            </p>
          </div>
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
        <div className="reveal-soft flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-card bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.10)] box-border">
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
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras förslag</div>
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
              <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                Inbetalningen kommer via Swish till butiken. Enligt er regel ”Swish-försäljning i butik” bokförs den som
                försäljning med 25 % moms.
              </div>
            </div>
            <div className="mt-4 gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
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
                <span>Beloppet stämmer mot banken</span>
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
                <span>Ingen dubblett hittad</span>
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
                <span>Momsen är räknad på 25 %</span>
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
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap border-t border-t-line-faint items-center">
              <span className="mr-auto text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-soft">
                Väntar på ert godkännande
              </span>
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
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-12">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Ingår
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Funktioner i den löpande bokföringen.
            </p>
          </div>
          <div className="gap-y-10 gap-x-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6h18v12H3z M3 10h18 M7 15h4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Kontoutdrag</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Transaktioner läses in och matchas mot underlag.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 3h12v18l-3-2-3 2-3-2-3 2z M9 8h6 M9 12h6"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Kvitton och fakturor
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Belopp, datum och moms tolkas automatiskt.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 8h16v12H4z M7 4h10v4H7z M8 13h3 M13 13h3 M8 16h3 M13 16h3"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Z-rapporter</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Dagskassan bokförs med rätt moms.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 4h11l3 3v13H5z M9 10h6 M9 14h6"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Konteringsförslag
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Konto, moms och motivering för varje post.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
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
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Kontroller</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Dubbletter, saldon och moms kontrolleras innan rapporten.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
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
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Frågor vid osäkerhet
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Poster utan matchande regel lyfts till er.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V10 M10 20V4 M16 20v-7 M22 20H2"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Veckorapport</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Allt som väntar på godkännande, samlat på ett ställe.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 5h13v10H3z M1 18h17 M18 9h4v11h-4z M19.5 17.5h1"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">App och webb</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Tillgång för hela teamet, med notiser när något behöver er.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 7v5l3 2 M12 3a9 9 0 100 18 9 9 0 000-18z"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Loggning</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Fullständig historik för varje post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto my-0 px-10 py-18 gap-10 max-w-[1200px] box-border flex flex-wrap items-center"
        id="fungerar"
      >
        <div className="flex-[1_1_520px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Integrationer
          </div>
          <div className="gap-3.5 flex flex-col">
            <div className="gap-2.5 flex flex-wrap items-center">
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-contrast min-w-[110px]">
                Bokföring:
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Fortnox
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Bokio
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Spiris
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Visma eEkonomi
              </span>
            </div>
            <div className="gap-2.5 flex flex-wrap items-center">
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-contrast min-w-[110px]">
                Kassa:
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Zettle
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                SumUp
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-surface border border-line font-display font-bold text-[16px]">
                Trivec
              </span>
            </div>
          </div>
        </div>
        <div className="p-7 gap-4 rounded-card flex-[1_1_340px] min-w-0 bg-surface border border-line box-border flex items-start">
          <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 11h12v9H6z M8 11V8a4 4 0 018 0v3"
                fill="none"
                stroke="var(--contrast)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">Lagring</div>
            <p className="mx-0 mt-0 mb-3.5 text-[16px] leading-[1.55] font-serif text-ink">
              Underlagen används bara för ert företag.
            </p>
            <Link
              className="font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sakerhet#skydd"
            >
              Så skyddar vi er →
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-12">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Skillnaden
          </h2>
        </div>
        <div className="gap-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">01</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Arbetar på ert sätt
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Regelboken styr arbetet. Ändras en regel, ändras arbetet direkt.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Inbyggda gränser
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Beloppsgränser och stopp vid avvikelser är tekniska spärrar, inte rutiner.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kassa och bank tillsammans
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Z-rapporter stäms av mot bank och kvitton, så att dagskassan och kontot stämmer.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kontinuitet
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Ingen semester, ingen sjukfrånvaro. Kunskapen om er bokföring finns kvar.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Jämförelse
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="cmp-table data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Internt
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Redovisningsbyrå
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Insamling av underlag
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Görs för hand, ofta i efterhand.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni samlar in och skickar, byrån sorterar.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Hämtas automatiskt när transaktionen sker.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Deadlines
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Beror på tid och tillgänglighet.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Hålls, om underlaget har kommit in i tid.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Bevakas, med underlag klart i god tid.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kvalitet
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Beror på kunskap och tidspress.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Hög kompetens, men kontrollen sker ofta i efterhand.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Fast arbetsmall och kontroll av varje post. Oklarheter stoppas och lyfts till er.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Förståelse för bokföringen
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Kunskapen sitter hos en person.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Förklaringar på begäran, ibland mot avgift.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Motivering till varje post.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Granskning före bokföring
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ofta granskar samma person sitt eget arbete.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Resultatet syns ofta först i månadsrapporten.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Alltid, per post eller per vecka.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kostnad
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Arbetstid eller lön.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Månadsavgift plus timmar utöver avtal.
                  </td>
                  <td data-label="Vera" className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Fast månadspris per agent, inga extra timmar.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="btn btn--secondary"
              href="/priser#kalkylator"
            >
              Räkna på er besparing
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-10">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            För företag i alla storlekar
          </h2>
          <p className="m-0 text-[17px] leading-[1.6] max-w-[640px] font-serif text-ink uppercase tracking-[0.03em]">
            Regelboken gör att Vera arbetar på ert sätt, oavsett bransch och storlek.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Enmansföretag</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Bokföringen sköts löpande, och varje motivering gör er tryggare i ekonomin.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Växande företag</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Volymen kan öka utan att ni behöver anställa en ekonom.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 21V5l8-3 8 3v16 M9 21v-4h6v4 M8 8h2 M14 8h2 M8 12h2 M14 12h2"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Ekonomiavdelningar</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Det repetitiva automatiseras. Teamet fokuserar på analys och uppföljning.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col wrap-break-word">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 11l3 3 7-7 M4 12a8 8 0 1016 0 8 8 0 00-16 0"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Företag med redovisningsbyrå</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Byrån får ett komplett och ordnat underlag och kan fokusera på rådgivning.
            </p>
          </div>
        </div>
        <div className="reveal-soft mt-10 gap-3 flex flex-wrap items-center">
          <span className="mr-1 text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">Branscher:</span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            Butik och handel
          </span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            E-handel
          </span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            Restaurang och café
          </span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            Bygg och hantverk
          </span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            Konsult och tjänster
          </span>
          <span className="px-4 py-2 rounded-full bg-surface border border-line text-[13px] font-semibold tracking-[0.08em] uppercase">
            Och fler
          </span>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
          <div className="reveal-soft flex-[1_1_420px] min-w-0">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-ink-inverse">
              Kontroll
            </h2>
            <p className="mx-0 mt-0 mb-7 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink-inverse-soft uppercase tracking-[0.03em]">
              Vera föreslår och motiverar. Ansvaret och besluten ligger hos er.
            </p>
            <Link
              className="pb-1 gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-ink-inverse border-b-[1.5px] border-b-ink-inverse"
              href="/sakerhet"
            >
              Så skyddar vi er →
            </Link>
          </div>
          <div className="reveal-soft gap-4.5 flex-[1_1_420px] min-w-0 flex flex-col">
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Granskning innan något förs vidare</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Arbete enligt er regelbok</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Fullständig loggning</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Behörighetsstyrd åtkomst till era uppgifter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-muted">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Kundröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Momsen är klar innan jag har hunnit tänka på den.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Lina Åberg · Ägare, Exempelbutiken AB
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Jag ser varför varje post bokförs. Det har lärt mig mer än flera år av egen bokföring.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Erik Sund · VD, Exempelbolaget AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[900px] box-border">
        <div className="mb-10 text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
            Frågor om bokföringsagenten
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Fortnox, Bokio, Spiris och Visma eEkonomi.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vad händer med en post Vera inte känner igen?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Den markeras som fråga och väntar på ert svar. Svaret kan sparas som en ny regel.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan vi ändra regelboken?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Säg till vad som ska gälla, så följer Vera den nya regeln från nästa post.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka underlag kan läsas?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Kontoutdrag, kvitton, leverantörsfakturor och Z-rapporter.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ungefär en vecka, inklusive genomgången av regelboken.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Ersätter Vera revisorn?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Nej. Revisionen görs av en revisor, och företaget ansvarar för bokföringen.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Fungerar Vera ihop med vår redovisningsbyrå?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Vera förbereder underlaget, och byrån fortsätter med rådgivning och bokslut.
            </p>
          </details>
        </div>
      </div>
      <div className="mx-auto mt-0 mb-24 px-10 py-0 max-w-[1200px] box-border">
        <div className="reveal-soft px-10 py-18 rounded-[28px] bg-accent text-ink-inverse box-border text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,46px)] wrap-break-word leading-[1.05] text-ink-inverse">
            Se en vecka med exempel från er bransch
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] max-w-[540px] font-serif text-ink-inverse uppercase tracking-[0.03em]">
            Vi visar Vera med transaktioner som liknar era.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="btn btn--primary theme-inverse"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="btn btn--secondary theme-inverse"
              href="/#kontakt"
            >
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
