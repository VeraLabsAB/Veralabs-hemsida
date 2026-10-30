import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalender och vardag",
  description:
    "Vera samlar dina kalendrar, löser krockarna innan de uppstår och ser till att det som är viktigt för dig inte stryks först. Du godkänner varje ändring.",
};

export default function KalenderPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet
          till höger, sedan en skärm per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Kalender och vardag
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              En vecka som faktiskt går ihop.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera samlar dina kalendrar, löser krockarna innan de uppstår och ser till att det som är viktigt för dig
              inte stryks först. Du godkänner varje ändring.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link className="btn btn--primary theme-dark" href="/#kontakt">
                Kom igång
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
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">Din dag</div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">
                    Tisdag 14 okt
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">07:30</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Träning
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Gymmet, 45 min</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">Planerad</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Klar
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">09:00</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Fokustid
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Skyddad från möten</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">2 h</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Skyddad
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">12:00</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Lunch med Sara
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Bokad via mejl</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">1 h</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Bokad
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">17:30</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Hämta paketet
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Ombudet stänger 18</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">!</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-ink-inverse bg-accent">
                    Påminnelse
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
                    4 händelser
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
                    2 krockar lösta
                  </span>
                  <span>1 påminnelse</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Se veckan
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
              Alltid uppdaterad
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Nya möten och ändringar sorteras in medan du gör annat.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Kan dina rutiner
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              När du jobbar, när du tränar och när du vill vara ifred.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              En samlad bild
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Jobb, privat och familj i samma vy.
            </div>
          </div>
          </div>
          <div className="flex-[1_1_440px] min-w-0 reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Mindre pussel. Mer liv.
          </h2>
          <div className="mt-2 gap-4 flex flex-col">
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Möten, hämtningar, träning och födelsedagar. Att få ihop vardagen är ett jobb i sig. Och det som är
            viktigt för dig själv är alltid det som stryks först.
          </p>
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Vera tar över pusslet, ser krockarna innan de uppstår och påminner i tid. Du bestämmer vad som får flyttas
            och vad som aldrig rörs.
          </p>
          </div>
          </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="hur">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar det
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Arbetsflöde
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Tre steg, varje dag.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] reveal-stagger">
            <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Samla</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Jobbkalender, privat kalender, bokningsmejl och familjens schema på ett ställe.
              </p>
            </div>
            <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Planera</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Dagen läggs upp efter dina mål och rutiner. Vid osäkerhet frågar Vera.
              </p>
            </div>
            <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Godkänn</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Du ser dagens plan och alla förslag. Inget flyttas eller bokas utan ditt ja.
              </p>
            </div>
          </div>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Kom igång
            </Link>
            <Link
              className="btn btn--secondary"
              href="/sa-fungerar-vera"
            >
              Så fungerar Vera
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="arbetssatt">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-6 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              I detalj
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Från kaos till plan.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Du bestämmer vad som får flyttas och vad som är låst.
            </p>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Nivå
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Förslag
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Du godkänner</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera föreslår ändringar och du godkänner var och en.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Automatiskt
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Inom dina ramar
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera flyttar och bokar själv inom gränser du har satt, aldrig i låst tid.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">2</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Utgångsläge
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Rutiner</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  När du jobbar, tränar, äter och sover.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Mål</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Mer träning, mer tid med familjen eller mer fokus.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Måsten</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Räkningar, födelsedagar och hämtningar.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">3</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Planen
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Dagens plan</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Varje morgon, med det viktigaste först.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Krockar</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Upptäcks i förväg, med förslag på lösning.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Påminnelser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  När det är dags att gå, inte när det är för sent.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">4</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Ramar
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Låst tid</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Middagar, hämtningar och annat som aldrig får flyttas.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Frekvens</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Plan varje morgon, eller notis bara vid ändringar.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Byt nivå</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Växla mellan förslag och automatiskt när du vill.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Bättre för varje vecka
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera märker vilka tider som fungerar för dig och planerar därefter. Ju längre ni jobbar ihop, desto
                  bättre blir veckan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 gap-14 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center">
        <div className="reveal flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Exempel på förslag
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Du ser alltid varför.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Varje förslag visar vad som krockar, vad Vera föreslår och varför.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Säg ja med ett tryck, eller behåll det som det är.
            </p>
          </div>
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Kom igång
          </Link>
        </div>
        <div className="reveal flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-card bg-surface border border-line box-border">
            <div className="gap-3 flex justify-between items-start flex-wrap">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                  Torsdag · Krock hittad
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">Förslag</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras förslag</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Nu</span>
              <span className="font-mono tracking-normal font-semibold">17:00</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Träningen krockar med middagen</span>
              <span className="font-mono tracking-normal font-semibold text-right">–</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Nytt</span>
              <span className="font-mono tracking-normal font-semibold">07:00</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Träningen flyttas till morgonen</span>
              <span className="font-mono tracking-normal font-semibold text-right">45 min</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Vinst</span>
              <span className="font-mono tracking-normal font-semibold">+</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Kvällen blir ledig</span>
              <span className="font-mono tracking-normal font-semibold text-right">2 h</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Träningen klockan 17 krockar med middagen hos dina föräldrar. Morgonen är ledig och du har tränat på
                morgonen förut. Förslag: flytta passet till 07:00.
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
                <span>Inga andra krockar</span>
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
                <span>Gymmet har öppet</span>
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
                <span>Du har tränat på morgonen förut</span>
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
                <span>Middagen är låst tid</span>
              </div>
            </div>
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap border-t border-t-line-faint items-center">
              <span className="mr-auto text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-soft">
                Väntar på ditt svar
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 border-[1.5px] border-line-strong text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Behåll
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Flytta
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
              Planering, dag för dag.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Samlade kalendrar
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Jobb, privat och familj.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Smart planering</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Efter dina mål och rutiner.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Krockhantering</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Lösning innan krocken uppstår.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Påminnelser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  I rätt tid.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Bokningar från mejlen
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Tider i bekräftelsemejl hamnar i kalendern.
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
                  Vera frågar i stället för att anta.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Veckoöversikt</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hela veckan på en sida.
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
                  Kalendern i telefonen och datorn.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Familjeläge</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Dela utvalda delar med familjen.
                </p>
              </div>
            </div>
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
              Kan din rytm
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              När du är som piggast, och när du behöver vila.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Reagerar direkt
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ändringar sorteras in medan du gör annat.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Dina kalendrar
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Google Kalender, Apple Kalender och Outlook.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Med träningsplanen
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Pass och måltider hamnar där de passar i veckan.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Kom igång
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
            <table className="data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Kalenderapp
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Vem planerar?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Krockar
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Om du upptäcker dem
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Visas, men löses inte
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Löses i förväg
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Utgår från dina mål
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Om du hinner
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Nej
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Varje dag
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Motivering
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Din egen
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Saknas
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Till varje förslag
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Beslut
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Du
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kostnad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Din tid
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Gratis eller månadsavgift
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Månadspris, inkl. moms
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
              Kom igång
            </Link>
            <Link
              className="btn btn--secondary"
              href="/priser"
            >
              Se priser
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Passar för
          </h2>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 9l2-5h12l2 5 M4 9v11h16V9 M4 9h16 M9 20v-6h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Föräldrar</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Jobb, hämtningar och aktiviteter i samma plan.
            </p>
          </div>
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 11a4 4 0 100-8 4 4 0 000 8z M4 21c0-4 4-7 8-7s8 3 8 7"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Studenter</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Plugg, extrajobb och fritid.
            </p>
          </div>
          <div className="p-7 gap-3.5 rounded-card bg-surface box-border min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 21h18 M5 21V8l7-5 7 5v13 M9 21v-6h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Den som vill hinna mer</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Tid för det som annars stryks.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_420px] min-w-0 reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Trygghet
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Kontroll
            </h2>
            <p className="mx-0 mt-0 mb-7 text-[18px] leading-[1.6] max-w-[520px] text-ink font-sans">
              Vera planerar och föreslår. Din tid är din.
            </p>
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sakerhet"
            >
              Säkerhet →
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
              <span>Inget flyttas utan ditt ja</span>
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
              <span>Varje förslag motiveras</span>
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
              <span>Bara det du delar används</span>
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
              <span>Låst tid rörs aldrig</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Användarröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] reveal-stagger">
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Jag har slutat glömma saker. Påminnelsen kommer innan jag hunnit tänka på det.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Klara Nyström · Exempelanvändare
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Träningen hamnar i kalendern. Och blir av.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Oskar Lund · Exempelanvändare
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[900px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Frågor om kalender och vardag
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka kalendrar fungerar?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Google Kalender, Apple Kalender och Outlook, flera samtidigt.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Flyttar Vera saker utan att fråga?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Bara i automatiskt läge, och aldrig i låst tid.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vad händer vid osäkerhet?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Vera frågar dig. Hon gissar aldrig med din tid.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag dela med familjen?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Du väljer vad som delas och med vem.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Hur lång tid tar det att komma igång?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ungefär tio minuter: skapa konto, ange mål och koppla kalendrarna.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Läser Vera mina mejl?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Bara med din tillåtelse, och bara för att hitta bokningar.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag välja vilka kalendrar som syns?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Varje kalender kan visas eller döljas.
            </p>
          </details>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Se hur din vecka kan se ut.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
            Kom igång på tio minuter och få din första veckoplan.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Kom igång
            </Link>
            <Link
              className="btn btn--secondary"
              href="/priser"
            >
              Se priser
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
