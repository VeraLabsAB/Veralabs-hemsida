import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategikonsulten",
  description:
    "En AI-ekonomichef som alltid har tid. Vera analyserar din försäljning, dina kostnader och marginaler och räknar på alternativen inför varje större beslut. Ett pris per månad, ingen timdebitering.",
};

export default function StrategikonsultenPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet
          till höger, sedan en skärm per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Strategi&shy;konsulten
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Fatta beslut med siffrorna framför dig.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera analyserar försäljning, kostnader och marginaler och pekar ut vad som påverkar resultatet mest. Inför
              större beslut räknar hon på alternativen. Som en ekonomichef som alltid har tid.
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
                    Månadsöversikt
                  </div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">Oktober</div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Vecka 41</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Marginalen sjunker
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">
                    Inköpspriserna har ökat
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">−4 %</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Råd
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Vecka 41</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Bästa kategorin
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Jackor står för 32 %</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">+12 %</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Insikt
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Vecka 42</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Lager som står still
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Över 90 dagar</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">18 st</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Råd
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Vecka 42</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Öppna en butik till?
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">
                    Behöver fler uppgifter
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">?</div>
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
                    2 råd
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
                    1 insikt
                  </span>
                  <span>1 fråga</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Se översikten
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
              Finns när beslutet dyker upp
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Ingen bokad tid, ingen timdebitering.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Bygger på dina siffror
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Analysen utgår från din bokföring, inte från ett branschsnitt.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Visar underlaget
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Varje råd visar siffrorna det bygger på.
            </div>
          </div>
          </div>
          <div className="flex-[1_1_440px] min-w-0 reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Bättre beslut. Utan konsultarvode.
          </h2>
          <div className="mt-2 gap-4 flex flex-col">
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            I mindre företag fattas de stora besluten av en person, ofta ensam: priser, sortiment, anställningar. En
            konsult kostar mer än de flesta beslut är värda.
          </p>
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Strategikonsulten känner redan ditt företag. Vera pekar ut det som påverkar mest och lägger fram
            alternativen med för- och nackdelar.
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
              Varje månad, samma tre steg.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Lägesbild</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Försäljning, kostnader, marginaler och lager sammanställs. Har du Kassio Finance sker det av sig
                självt.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Analys</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Förändringar och avvikelser lyfts fram, störst påverkan först.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Rekommendation</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Månadsöversikten ger dig läget och konkreta förslag. Testa ett scenario, till exempel en prishöjning,
                innan du bestämmer dig.
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
              href="/sa-fungerar-vera"
            >
              Så fungerar Kassio
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
              Från siffror till beslut
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Du avgör hur ofta och i vilka frågor Vera ska bidra.
            </p>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Arbetsform
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Proaktivt
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Löpande bevakning
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera följer nyckeltalen och hör av sig när något ändras, till exempel när marginalen sjunker.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  På begäran
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Beslutsstöd</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Du tar upp ett beslut när det dyker upp, och Vera hjälper dig strukturera det.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">2</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Underlag
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Mål</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Dina mål för året och på längre sikt styr analysen.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Nyckeltal</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Försäljning, kostnader och lager. Mer data ger skarpare analys.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Förutsättningar
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Bemanning, tid och prioriteringar vägs in.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">3</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Resultat
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Nuläge</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vad som går bättre eller sämre, och varför.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Alternativ</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Flera vägar framåt, med för- och nackdelar.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Scenarier</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Effekten av en prisändring eller satsning, beräknad i förväg.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">4</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Inställningar
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Fokus</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Välj vilka delar av verksamheten analysen ska omfatta.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Frekvens</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Månadsöversikt, eller notis vid viktiga förändringar.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Justering</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Mål och fokus uppdateras när företaget förändras.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Uppföljning
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Efter varje beslut följer Vera upp utfallet. Resonemang och resultat sparas, så att du ser vad som
                  faktiskt fungerade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 gap-14 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center">
        <div className="reveal flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Exempel på råd
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Du ser samma siffror som Vera.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Varje råd visar vilka siffror det bygger på, vilka alternativ som finns och vad som talar för och emot.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Du bedömer rådet med exakt samma information som ligger bakom det.
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
                  Vecka 41 · Marginalen sjunker
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">−4 %</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras analys</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Före</span>
              <span className="font-mono tracking-normal font-semibold">Sep</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Bruttomarginal</span>
              <span className="font-mono tracking-normal font-semibold text-right">46 %</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Nu</span>
              <span className="font-mono tracking-normal font-semibold">Okt</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Bruttomarginal</span>
              <span className="font-mono tracking-normal font-semibold text-right">42 %</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Orsak</span>
              <span className="font-mono tracking-normal font-semibold">↑</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Inköpspriset på jackor</span>
              <span className="font-mono tracking-normal font-semibold text-right">+9 %</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Marginalen har sjunkit fyra procentenheter sedan september, främst för att inköpspriset på jackor har
                ökat. Förslag: höj priset på jackor med 50 kr eller jämför med en annan leverantör. Vill du att jag
                räknar på båda?
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
                <span>Bygger på bokföringen för september och oktober</span>
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
                <span>Engångsposter är borträknade</span>
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
                <span>Jämfört med samma månad i fjol</span>
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
                <span>Två alternativ att välja mellan</span>
              </div>
            </div>
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap border-t border-t-line-faint items-center">
              <span className="mr-auto text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-soft">
                Väntar på ditt beslut
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 border-[1.5px] border-line-strong text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Avvakta
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Räkna på det
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
              Beslutsunderlag, månad för månad.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Lägesöversikt</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Försäljning, kostnader och marginaler i klartext.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Målföljning</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hur du ligger till mot dina mål.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Tidiga varningar
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Signal när en siffra rör sig åt fel håll.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Motiverade råd</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Varje råd med sitt underlag.
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
                  Scenarioberäkning
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Testa idéer innan du bestämmer dig.
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
                  Kompletterande frågor
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Saknas data frågar Vera.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Månadsöversikt</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Läge, råd och beslut som väntar, i en rapport.
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
                  Notiser när ett beslut behöver tas.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Utfall</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Resultatet av tidigare beslut.
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
              Ingen inläsning
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Vera kan redan din försäljning, dina kostnader och dina mål.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Lär av utfallet
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Råden justeras efter vad tidigare beslut gav.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Utan timdebitering
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Fråga hur ofta du vill. Det kostar aldrig extra.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Helhetsbild
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Med bokföring och trendbevakning ser Vera både dina siffror och din marknad.
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
            <table className="data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Konsult
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Kassio Finance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Vem analyserar?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du, sent på kvällen
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Konsulten
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Frekvens
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    När tid finns
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Vid uppdrag
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Varje månad
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Kännedom om företaget
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Hög
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Efter inläsning, på din bekostnad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Från första dagen
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
                    I rapporten
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Till varje råd
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
                    Timarvode
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Ett pris per månad
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
              href="/#kontakt"
            >
              Köp nu
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Målgrupp
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Ägarledda företag</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ett bollplank för de beslut du annars fattar ensam.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Företag i tillväxt</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Underlag inför anställning, ny butik eller nytt sortiment.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Företag med rådgivare</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Bättre förberedda möten med revisor och rådgivare.
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
              Strategikonsulten ger dig underlaget. Besluten fattar du.
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
              <span>Råd, inga beslut</span>
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
              <span>Siffrorna bakom varje råd redovisas</span>
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
              <span>Bara delade uppgifter används</span>
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
              <span>Ersätter inte revisor, jurist eller finansiell rådgivare</span>
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
                ”Vi räknade på en andra butik innan vi skrev på hyresavtalet. Underlaget gjorde beslutet enkelt.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Maria Holm · VD, Exempelbolaget AB
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Som att ha en ekonomichef som alltid har tid.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Ali Nasser · Ägare, Exempelcaféet AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[900px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Frågor om strategikonsulten
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Behövs Kassio Finance?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Utan den kopplas Vera till ditt bokförings&shy;program eller får en rapport varje månad. Med den blir
              analysen skarpare.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Fattar Vera beslut åt mig?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Vera räknar och föreslår. Du bestämmer.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vad händer när data saknas?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Vera frågar i stället för att anta.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka frågor kan jag ta upp?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Prissättning, sortiment, kostnader, lager och investeringar.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag testa scenarier?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Beskriv idén, så räknar Vera på vad den gör med försäljning och marginal.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Ersätter Vera min revisor?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Skatt, juridik och revision hör hemma hos en expert. Vera gör dig bättre förberedd inför mötet.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Hur ofta kommer översikten?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              En gång i månaden, och direkt vid större förändringar.
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
            Se Strategikonsulten med dina siffror.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
            Vi visar en månadsöversikt med exempel från din bransch.
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
