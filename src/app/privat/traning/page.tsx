import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tränings- och kostråd",
  description:
    "Vera bygger en plan efter ditt mål, din nivå och den tid du faktiskt har. När du blir starkare blir planen tyngre. När livet kommer emellan planeras veckan om.",
};

export default function TraningPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet
          till höger, sedan en skärm per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Tränings- och kostråd
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Träning och mat som passar ditt liv. Inte tvärtom.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera bygger en plan efter ditt mål, din nivå och den tid du faktiskt har. När du blir starkare blir planen
              tyngre. När livet kommer emellan planeras veckan om.
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
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                    Veckans plan
                  </div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">Vecka 42</div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Mån</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Styrka, ben
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Gymmet, 45 min</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">Klar</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Klar
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Ons</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Löpning
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Lugnt tempo, 5 km</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">30 min</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Idag
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Fre</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Styrka, överkropp
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Gymmet, 45 min</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">45 min</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Planerad
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Sön</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Långpass
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Väder osäkert</div>
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
                    3 pass
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
                    1 klart
                  </span>
                  <span>1 fråga</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Se planen
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
              Svar när du behöver
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Fråga om träning och mat när det passar dig, även klockan elva på kvällen.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Utgår från dig
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Mål, nivå och vardag styr upplägget.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Växer med dig
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Planen ökar i exakt din takt.
            </div>
          </div>
          </div>
          <div className="flex-[1_1_440px] min-w-0 reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Rätt upplägg från första passet.
          </h2>
          <div className="mt-2 gap-4 flex flex-col">
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Det finns tusentals program och kostråd. Nästan inget av dem passar just din vecka.
          </p>
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Vera gör ett upplägg du hinner med, och ändrar det efter hur det faktiskt går.
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
              Tre steg, varje vecka.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Kartlägg</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Mål, nivå, schema och matpreferenser.
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
                Pass och måltider läggs upp efter ditt mål. Vid osäkerhet frågar Vera.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Följ upp</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Bocka av passen. Planen justeras när du gör framsteg.
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
              Så fungerar Kassio Finance
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
              Från mål till vana
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Du bestämmer takten. Vera håller den.
            </p>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Mål
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Styrka
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Bygg muskler</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Styrketräning med kost som stöder återhämtning och muskeltillväxt.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Kondition
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Mer energi</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Uthållighet och sundare vanor i en hållbar takt.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Nivå</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Så att planen varken blir för lätt eller för tung.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Tid</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hur mycket tid du har och var du tränar.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Mat</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vad du gillar, vad du inte äter och hur mycket du vill laga.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Pass</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Övningar, vikter och tider.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Måltider</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Enkla rätter efter mål och smak.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Inköpslista</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Allt du behöver handla, samlat.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Takt</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Antal pass per vecka som är realistiskt.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Påminnelser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Notis före passet, eller bara en veckoplan.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Ändra</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Byt mål eller upplägg när livet förändras.
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 reveal">
            <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
              <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
              <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
                Framsteg
              </h2>
            </div>
            <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Vera följer vikter, pass och hur du mår, och justerar planen därefter.
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
            Du ser alltid varför.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Varje råd visar vad det bygger på och hur det tar dig närmare målet.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Säg till om något inte passar, så ändras planen.
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
                  Förslag · Mer protein
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">Mål: styrka</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras analys</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Nu</span>
              <span className="font-mono tracking-normal font-semibold">g</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Protein per dag i snitt</span>
              <span className="font-mono tracking-normal font-semibold text-right">85 g</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Mål</span>
              <span className="font-mono tracking-normal font-semibold">g</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Rekommenderat för ditt mål</span>
              <span className="font-mono tracking-normal font-semibold text-right">120 g</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Tips</span>
              <span className="font-mono tracking-normal font-semibold">+</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Kvarg till frukost</span>
              <span className="font-mono tracking-normal font-semibold text-right">+20 g</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Du tränar styrka tre gånger i veckan men äter mindre protein än vad som brukar rekommenderas för ditt
                mål. Förslag: kvarg till frukost och kyckling eller bönor till lunch.
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
                <span>Utgår från din vikt och ditt mål</span>
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
                <span>Passar det du tycker om</span>
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
                <span>Enkelt att laga</span>
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
                <span>Inga allergener du har angett</span>
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
                Inte nu
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Lägg till i planen
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
              Träning och kost, vecka för vecka.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Träningsplan</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Pass med övningar och vikter.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Kostråd</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Måltider efter mål och smak.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Inköpslista</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Samlad för veckan.
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
                  Personligt upplägg
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Efter nivå och vardag.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Framsteg</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Utvecklingen vecka för vecka.
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
                  Till exempel om smärta eller skador.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Veckoplan</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Pass och mat på en sida.
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
                  Planen alltid med dig.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Påminnelser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  När det är dags att träna.
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
              Gjord för dig
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              En plan du orkar följa, eftersom den är byggd runt din vardag.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Alltid tillgänglig
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Svar även sent på kvällen, utan att boka tid.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Växer med dig
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Tyngre när du blir starkare, lättare när du behöver vila.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Med kalendern
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Passen hamnar där de passar i veckan.
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
                    Personlig tränare
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Kassio Finance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Vem gör planen?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Tränaren
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Stöd
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    När du letar själv
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Vid bokade pass
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    När du behöver
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Anpassning
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Om du vet hur
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Ja
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Ja, och löpande
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
                    Om du frågar
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
                    Du och tränaren
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
                    Per pass eller månad
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Nybörjare</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              En tydlig start utan gissningar.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Van tränande</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Nästa nivå, med bättre struktur.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Ont om tid</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Träning och mat i en full vardag.
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
              Vera ger råd och planer. Hur du tränar och vad du äter bestämmer du. Alltid.
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
              <span>Råd, inga krav</span>
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
              <span>Varje råd motiveras</span>
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
              <span>Ersätter inte läkare eller dietist</span>
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
                ”Första gången jag hållit i träningen längre än tre veckor. Planen passar min vecka.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Nora Ali · Exempelanvändare
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Inköpslistan gör att jag vet vad jag ska laga.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Viktor Sand · Exempelanvändare
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[900px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Frågor om tränings- och kostråd
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Passar det nybörjare?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Planen börjar där du är och ökar i lagom takt.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Ersätter Vera läkare eller dietist?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Vid sjukdom, skador eller besvär ska du kontakta vården.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vad händer om något gör ont?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Säg till, så pausas eller anpassas passet. Kontakta vården vid besvär.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag träna hemma?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Ange utrustning och plats, så anpassas passen.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag byta mål?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja, när som helst. Planen räknas om direkt.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Tar Vera hänsyn till allergier?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Ja. Det du inte äter kommer aldrig med i förslagen.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Måste jag följa planen exakt?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Nej. Missar du ett pass planeras resten av veckan om. Inget dåligt samvete, bara en ny plan.
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
            Se din första vecka.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
            Kom igång och få en plan efter ditt mål, redan i dag.
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
