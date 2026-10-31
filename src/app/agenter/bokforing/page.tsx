import Link from "next/link";
import type { Metadata } from "next";
import { VideoBackground } from "@/components/VideoBackground";

export const metadata: Metadata = {
  title: "Kassio Finance",
  description:
    "AI-bokföring för aktiebolag. Vera läser kontoutdrag, kvitton och Z-rapporter, konterar enligt din regelbok och lämnar veckan klar för godkännande. Fungerar med Fortnox, Bokio, Spiris och Visma.",
};

export default function BokforingPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet
          till höger, sedan en skärm per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Kassio Finance
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Bokföringen klar. Varje vecka. Utan dig.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera läser kontoutdrag, kvitton och Z-rapporter, konterar enligt din regelbok och kontrollerar varje post.
              Du granskar och godkänner. Det är allt du behöver göra.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link className="btn btn--primary theme-dark" href="/#kontakt">
                Boka en demo
              </Link>
              <a className="btn btn--secondary theme-dark" href="#hur">
                Så fungerar det
              </a>
            </div>
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
      {/* Tre korta punkter och bakgrunden delar en skärm: punkterna som kort till vänster, texten till höger. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="gap-4 flex-[1_1_380px] min-w-0 flex flex-col reveal-stagger">
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Missar aldrig en post
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Varje transaktion hanteras när den kommer in. Inte när någon hinner.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Följer din regelbok
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Konton, momssatser och motparter precis som du bestämt.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Allt spårbart
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Varje underlag och varje steg loggas.
            </div>
          </div>
          </div>
          <div className="flex-[1_1_440px] min-w-0 reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Bakgrund
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Bokföringen ska inte äga dina kvällar.
            </h2>
            <div className="mt-2 gap-4 flex flex-col">
              <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
                Kvitton ska samlas in. Varje post ska konteras. Momsen ska stämma. I de flesta småföretag sker det efter
                stängning, av den som redan jobbat hela dagen.
              </p>
              <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
                Kassio Finance tar över allt det löpande och lämnar ett resultat du granskar på minuter. Ansvaret för
                bokföringen är fortfarande ditt. Arbetet är Veras.
              </p>
            </div>
          </div>
        </div>
      </div>
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
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] reveal-stagger">
          <a
            className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border no-underline text-ink wrap-break-word"
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
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Varje transaktion konteras och stäms av mot banken. Samma vecka.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border no-underline text-ink wrap-break-word"
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
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Fakturor skapas, skickas när du godkänt och bevakas tills pengarna är inne.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border no-underline text-ink wrap-break-word"
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
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Momsdeklarationen klar före sista dag. Varje period.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border no-underline text-ink wrap-break-word"
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
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Lönespecifikationer och färdigt underlag till arbetsgivardeklarationen.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
          <a
            className="p-6 gap-3.5 rounded-card flex flex-col min-w-0 bg-surface box-border no-underline text-ink wrap-break-word"
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
            <div className="text-[16px] leading-[1.55] text-ink font-sans">
              Avstämningar, bokslutsförslag och ett färdigt utkast till årsredovisning.
            </div>
            <div className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer ↓</div>
          </a>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="hur">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar det
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Arbetsflöde
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Tre steg. Varje vecka.
            </p>
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
                Kontoutdrag, kvitton och Z-rapporter hamnar på ett ställe, via uppladdning eller direkt från bank och
                e-post. Vera kontrollerar att inget saknas och säger till om något gör det.
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
                Varje post får konto, moms och en motivering i klartext. Är något oklart får du en fråga, aldrig en
                gissning.
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
                I slutet av veckan väntar ett komplett utkast. När du godkänt förs det in i bokförings&shy;programmet,
                av Vera eller av dig, beroende på vilket läge du valt.
              </p>
            </div>
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
              href="/kom-igang"
            >
              Så kommer du igång
            </Link>
          </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="arbetssatt">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-6 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Arbetssätt
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Du väljer hur nära du vill följa arbetet.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Granska varje post, eller godkänn hela veckan på en gång. Byt läge när du vill.
            </p>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Välj läge
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Granska varje post
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Granskat läge</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Du godkänner varje förslag för sig. Perfekt i början, eller när du vill se precis allt.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Godkänn veckan samlat
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Automatiskt läge
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera jobbar på egen hand via bankkopplingen. Du godkänner hela veckan med ett klick.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">2</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Granskat läge i detalj
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Förslag</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Underlagen läses in och varje post får konto, moms och motivering.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Granskning</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Veckans rapport ligger i appen. Ändra, kommentera eller fråga Vera direkt.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Överföring</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Du för själv över den granskade bokföringen till ditt bokförings&shy;program.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">3</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Automatiskt läge i detalj
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Bankkoppling</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Transaktioner hämtas i samma stund som de sker, tillsammans med kvitton och Z-rapporter.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Löpande förberedelse
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Bokföringen växer fram i appen under veckan. Du störs inte en enda gång.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Ett godkännande
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Du går igenom utkastet och godkänner. Därefter för Vera in allt i bokförings&shy;programmet.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">4</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Gränser
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Beloppsgräns</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Poster över din beloppsgräns kräver alltid ett eget godkännande. Oavsett läge.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Avvikelser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Ny motpart, oväntad moms eller en post utan regel stoppas och blir en fråga till dig.
                </p>
              </div>
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Flexibelt</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Byt läge när förtroendet växer eller behovet ändras.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Spårbarhet
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-surface box-border min-w-0 wrap-break-word">
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Varje steg loggas: underlag, regel och resultat. Du kan alltid visa exakt hur bokföringen gick till.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="bokslut">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Periodiskt arbete
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Fakturor, moms, lön och bokslut. Allt i tid.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              När den löpande bokföringen är rätt är allt annat redan halvklart. Vera gör resten.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div
              className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col wrap-break-word"
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
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Ange kund, tjänst och belopp. Vera skapar fakturan med rätt moms och betaluppgifter, skickar den när du
                godkänt och bevakar betalningen.
              </p>
              <div className="gap-2.5 flex flex-col">
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
                  <span>Fakturan skapas från dina uppgifter</span>
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
                  <span>Skickas efter ditt godkännande</span>
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
                  <span>Påminnelse när betalningen förfallit</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Inbetalningen matchas automatiskt
              </div>
            </div>
            <div
              className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col wrap-break-word"
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
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Utgående och ingående moms räknas fram direkt ur bokföringen. Perioden följer din omsättning.
              </p>
              <div className="gap-2.5 flex flex-col">
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
                  <span>Avstämd mot bokföringen</span>
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
                  <span>Påminnelse före sista dag</span>
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
                  <span>Skattekontot avstämt</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Du lämnar in via Skatteverkets e-tjänst
              </div>
            </div>
            <div
              className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col wrap-break-word"
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
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Lönerna bokförs och underlaget till arbetsgivardeklarationen tas fram, med skatteavdrag och
                arbetsgivaravgifter per anställd.
              </p>
              <div className="gap-2.5 flex flex-col">
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
                  <span>Bokföring av löner</span>
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
                  <span>Lönespecifikationer</span>
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
                  <span>Skatt och avgifter per anställd</span>
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
                  <span>Bevakning av deklarationsdatum</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Underlaget klart för inlämning
              </div>
            </div>
            <div
              className="p-7 gap-3.5 rounded-card bg-page border border-line box-border min-w-0 flex flex-col wrap-break-word"
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
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                När räkenskapsåret är slut ligger bokslutsförslag, utkast till årsredovisning och underlag till
                inkomstdeklarationen klara.
              </p>
              <div className="gap-2.5 flex flex-col">
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
                  <span>Alla konton avstämda</span>
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
                  <span>Förslag på avskrivningar och periodiseringar</span>
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
                  <span>Ingående balanser till nästa år</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-t-line-faint text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Styrelsen undertecknar, efter revision om du har revisor
              </div>
            </div>
          </div>
          <div className="mx-0 mt-8 mb-0 px-6 py-5 gap-3.5 rounded-card max-w-[760px] bg-page border border-line flex items-start reveal">
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ett aktiebolag ska lämna in årsredovisningen till Bolagsverket senast sju månader efter räkenskapsårets
              slut. Vera håller koll på datumet, så att du slipper.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 gap-14 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center">
        <div className="reveal flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Transparens
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Varje förslag förklarar sig självt.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Du ser vilket konto Vera föreslår, vilken regel hon lutar sig mot och vilka kontroller som körts.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Granskningen tar sekunder, och du ser direkt när en regel behöver justeras.
            </p>
          </div>
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
        <div className="reveal flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-card bg-surface border border-line box-border">
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
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Inbetalningen kommer via Swish till butiken. Enligt din regel ”Swish-försäljning i butik” bokförs den som
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
                Väntar på ditt godkännande
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
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Ingår
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Allt som ingår i den löpande bokföringen.
            </p>
          </div>
          <div className="gap-y-10 gap-x-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Varje transaktion läses in och matchas mot sitt underlag.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Belopp, datum och moms läses av automatiskt.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Dagskassan bokförs med rätt moms, varje dag.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Konto, moms och motivering för varje post.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Dubbletter, saldon och moms kontrolleras innan du ser rapporten.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Poster utan regel lyfts till dig. Vera gissar aldrig.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Allt som väntar på ditt ok, samlat på ett ställe.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hela teamet har tillgång, med en notis när något behöver dig.
                </p>
              </div>
            </div>
            <div className="reveal gap-4 flex items-start min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Fullständig historik för varje post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto my-0 px-10 py-20 gap-10 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center scroll-mt-20 reveal-stagger"
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
            <p className="mx-0 mt-0 mb-3.5 text-[16px] leading-[1.55] text-ink font-sans">
              Underlagen används bara för ditt företag. Aldrig för något annat.
            </p>
            <Link
              className="font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sakerhet#skydd"
            >
              Så skyddar vi dig →
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Skillnaden
          </h2>
        </div>
        <div className="gap-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">01</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Arbetar på ditt sätt
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Regelboken styr allt. Ändrar du en regel ändras arbetet från nästa post.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Inbyggda gränser
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Beloppsgränser och stopp vid avvikelser är tekniska spärrar, inte goda föresatser.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kassa och bank tillsammans
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Z-rapporter stäms av mot bank och kvitton. Dagskassan och kontot stämmer, varje dag.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kontinuitet
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ingen semester, ingen sjukfrånvaro, ingen uppsägning. Kunskapen om din bokföring stannar hos dig.
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
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
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
                    Kassio Finance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Insamling av underlag
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    För hand, ofta långt i efterhand.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du samlar in och skickar, byrån sorterar.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Hämtas automatiskt i samma stund som transaktionen sker.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Deadlines
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Beror på om du hinner.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Hålls, om du skickat in underlaget i tid.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Bevakas av Vera, med underlaget klart i god tid.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kvalitet
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Beror på kunskap och tidspress.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Hög kompetens, men kontrollen kommer ofta i efterhand.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Varje post kontrolleras innan du ser den. Oklarheter stoppas och lyfts till dig.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Förståelse för bokföringen
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Kunskapen sitter i ett huvud.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Förklaringar på begäran, ibland mot avgift.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    En motivering till varje post, alltid.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Granskning före bokföring
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Samma person granskar sitt eget arbete.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Resultatet syns först i månadsrapporten.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Alltid, per post eller per vecka.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kostnad
                  </td>
                  <td data-label="Internt" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Dina kvällar, eller en lön.
                  </td>
                  <td data-label="Redovisningsbyrå" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Månadsavgift plus timmar utöver avtalet.
                  </td>
                  <td data-label="Kassio Finance" className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Ett pris per månad. Inga extra timmar, någonsin.
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
              Räkna på din besparing
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            För företag i alla storlekar
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] max-w-[640px] text-ink font-sans">
            Regelboken gör att Vera jobbar på ditt sätt. Oavsett bransch, oavsett storlek.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col wrap-break-word">
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Bokföringen sköts löpande, och varje motivering gör dig tryggare i din egen ekonomi.
            </p>
          </div>
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col wrap-break-word">
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Volymen kan tiodubblas utan att du behöver anställa en ekonom.
            </p>
          </div>
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col wrap-break-word">
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Det repetitiva försvinner. Teamet lägger tiden på analys och uppföljning.
            </p>
          </div>
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col wrap-break-word">
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Byrån får ett komplett, ordnat underlag och kan lägga sin tid på rådgivning.
            </p>
          </div>
        </div>
        <div className="reveal mt-10 gap-3 flex flex-wrap items-center">
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
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_420px] min-w-0 reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Trygghet
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Du har kontrollen. Vera har jobbet.
            </h2>
            <p className="mx-0 mt-0 mb-7 text-[18px] leading-[1.6] max-w-[520px] text-ink font-sans">
              Vera föreslår och motiverar. Besluten och ansvaret är dina.
            </p>
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sakerhet"
            >
              Så skyddar vi dig →
            </Link>
          </div>
          <div className="gap-3.5 flex-[1_1_420px] min-w-0 flex flex-col reveal-stagger">
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line text-[16px] leading-[1.55] text-ink font-sans">
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
              <span>Inget förs vidare utan din granskning</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line text-[16px] leading-[1.55] text-ink font-sans">
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
              <span>Allt arbete följer din regelbok</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line text-[16px] leading-[1.55] text-ink font-sans">
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
              <span>Fullständig loggning</span>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line text-[16px] leading-[1.55] text-ink font-sans">
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
              <span>Bara behöriga kommer åt dina uppgifter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Kundröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] reveal-stagger">
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Momsen är klar innan jag har hunnit tänka på den.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Lina Åberg · Ägare, Exempelbutiken AB
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Jag ser varför varje post bokförs. Jag har lärt mig mer på tre månader än på fem år själv.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Erik Sund · VD, Exempelbolaget AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[900px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
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
              Fortnox, Bokio, Spiris och Visma eEkonomi. Använder du något annat? Säg till, så ser vi vad som går.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Den stannar som en fråga tills du svarat. Ditt svar kan sparas som en ny regel, så att Vera kan nästa gång.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag ändra regelboken?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja, när du vill. Säg vad som ska gälla, så följer Vera den nya regeln från nästa post.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Kontoutdrag, kvitton, leverantörsfakturor och Z-rapporter. Som fil, foto eller direkt från banken.
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
              Ungefär en vecka. Då ingår genomgången av din regelbok.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Revisionen gör en revisor, och ansvaret för bokföringen ligger alltid hos företaget. Vera gör arbetet
              däremellan.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Fungerar Vera ihop med min redovisningsbyrå?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Vera förbereder allt underlag, och byrån får mer tid över till rådgivning och bokslut.
            </p>
          </details>
        </div>
      </div>
      {/* Integrationer: flyttad hit från startsidan 2026-10-31, oförändrad. Loopad video som bakgrund
          (Hugos beslut 2026-10-30) med ett mörkt skikt ovanpå, och theme-dark så att text och chips får
          de mörka tokens oavsett läge. Videon pausas när sektionen inte syns och vid "minska rörelse";
          saknas filen visas stillbilden/bakgrunden. */}
      <div className="relative overflow-hidden theme-dark bg-page text-ink min-[900px]:min-h-dvh box-border flex items-center">
        <VideoBackground
          src="/video/integrationer.mp4"
          poster="/video/integrationer.jpg"
          speed={0.5}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-shadow/65" aria-hidden="true" />
        <div className="relative mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border text-center reveal-stagger">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Integrationer
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Fungerar med det du redan använder. Byt ingenting.
          </h2>
          <div className="mt-8 gap-4 flex flex-col">
            <div className="gap-3 flex flex-wrap items-center justify-center">
              <span className="mr-1 text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">Bokföring:</span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Fortnox
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Bokio
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Spiris
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Visma eEkonomi
              </span>
            </div>
            <div className="gap-3 flex flex-wrap items-center justify-center">
              <span className="mr-1 text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">Kassa:</span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Zettle
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                SumUp
              </span>
              <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
                Trivec
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Se en vecka med exempel från din bransch.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
            Vi visar Vera med transaktioner som ser ut som dina. Då ser du direkt vad hon kan ta över.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="btn btn--secondary"
              href="/#kontakt"
            >
              Köp nu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
