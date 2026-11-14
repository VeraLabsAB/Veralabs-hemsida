import Link from "next/link";
import type { Metadata } from "next";
import { SavingsCalculator } from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Priser: ett fast pris per månad och agent, 15 % rabatt när du väljer två eller fler, och pengarna tillbaka om du avslutar första månaden.",
};

export default function PriserPage() {
  return (
    <>
      <input className="pf-in" type="radio" name="pf" id="pf-f" defaultChecked aria-label="Företag" />
      <input className="pf-in" type="radio" name="pf" id="pf-p" aria-label="Privatperson" />
      <div className="pf-main">
        {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
            per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
        <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
          <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
            <div className="max-w-[760px]">
              <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
                Priser
              </div>
              <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
                Ett pris per månad. Inga timmar att räkna.
              </h1>
              <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
                Varje agent har ett pris per månad. Väljer du två eller fler agenter blir totalpriset 15 % billigare.
                Avslutar du under första månaden får du pengarna tillbaka.
              </p>
              {/* Fråga 11: växeln är EN glasyta med två segment; det valda segmentet tonas som en primärknapp. */}
              <div className="pf-switch glass glass--strong" role="group" aria-label="Visa priser för">
                <label className="pf-btn" htmlFor="pf-f">
                  Företag
                </label>
                <label className="pf-btn" htmlFor="pf-p">
                  Privatperson
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="tjanster">
          <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
            <div className="mb-10 max-w-[720px] reveal">
              <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
                Våra tjänster
              </div>
              <h2 className="only-f m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
                Välj de agenter som ger dig mest tid tillbaka.
              </h2>
              <h2 className="only-p m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
                Tre tjänster för ditt eget liv.
              </h2>
            </div>
            <div className="only-f pcards-f reveal-stagger">
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border-2 border-accent flex flex-col">
                <span className="px-3 py-[5px] rounded-full self-start bg-chip text-contrast text-[12px] font-semibold tracking-[0.12em] uppercase">
                  Första agenten
                </span>
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Kassio Finance
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hela den löpande ekonomin, varje vecka.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Kontering enligt din regelbok
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Avstämningar och veckorapport
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Inget bokförs utan ditt ok
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  999 kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms. Allt ingår.
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Köp nu
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Trend&shy;övervakaren
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Marknaden bevakad, vägd mot ditt sortiment.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Bevakning av sökningar och marknadsplatser
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Inköpsförslag
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Underlag för kampanjer
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms. Allt ingår.
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Köp nu
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Strategi&shy;konsulten
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Analys och scenarier från dina egna siffror.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Månadsöversikt
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Prioriterade åtgärder
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Uppföljning av beslut
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms. Allt ingår.
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Köp nu
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Leverantörs&shy;agenten
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Rätt leverantör, hittad och jämförd.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Grossister och tillverkare
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Villkor sida vid sida
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Förberedda förfrågningar
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms. Allt ingår.
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Köp nu
                </Link>
              </div>
            </div>
            <div className="only-p pcards-p reveal-stagger">
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Kalender och vardag
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Jobb, familj och fritid i en plan som går ihop.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Alla kalendrar på ett ställe
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Krockhantering och påminnelser
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Låst tid som aldrig flyttas
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad, inkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/privat/kalender"
                >
                  Läs mer
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Tränings- och kostråd
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Pass och måltider efter ditt mål, din nivå och din vecka.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Veckovis träningsplan
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Måltider och inköpslista
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Löpande justering
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad, inkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/privat/traning"
                >
                  Läs mer
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Privatekonomi och sparande
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Budget, sparplan och koll på vart pengarna går.
                </p>
                <div className="px-0 pt-4 pb-2 gap-2.5 flex flex-col border-t border-t-line">
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Automatisk kategorisering
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Sparplan per mål
                    </span>
                  </div>
                  <div className="gap-2.5 flex items-start">
                    <span className="contents">
                      <svg className="mt-[3px] flex-none" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.5] text-ink font-sans min-w-0">
                      Läsbehörighet, aldrig överföringar
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad, inkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/privat/ekonomi"
                >
                  Läs mer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="only-f mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20"
          id="sa-gar-det-till"
        >
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så går det till
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Kom igång direkt. Ångra dig inom en månad.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Du riskerar ingenting: avslutar du under första månaden får du pengarna tillbaka.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] reveal-stagger">
            <div className="p-7 rounded-card bg-surface box-border">
              <div className="font-display font-bold text-[44px] text-accent leading-none">1</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Välj agent</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Köp den agent du behöver och kom igång direkt.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Osäker på vad du behöver? Boka ett kostnadsfritt möte, så föreslår vi vilka agenter som passar dig.
              </p>
            </div>
            <div className="p-7 rounded-card bg-surface box-border">
              <div className="font-display font-bold text-[44px] text-accent leading-none">2</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Första månaden</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Agenterna jobbar med din riktiga data från första dagen.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Fungerar det inte som du vill justerar vi. Avslutar du under första månaden får du pengarna tillbaka.
              </p>
            </div>
            <div className="p-7 rounded-card bg-surface box-border">
              <div className="font-display font-bold text-[44px] text-accent leading-none">3</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Månadspris</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Ett fast pris per agent och månad, för Kassio Finance 999 kr. Väljer du två eller fler agenter blir
                totalpriset 15 % billigare. Support och uppdateringar ingår, alltid. Därefter 30 dagars uppsägning.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Räkna nedan på vad samma arbete kostar dig i dag.
              </p>
            </div>
          </div>
        </div>
        <SavingsCalculator />
        <div className="only-p mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col items-center justify-center">
          <div className="px-10 py-12 rounded-card w-full max-w-[720px] bg-surface box-border text-center reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Pris
            </div>
            <div className="mb-3 font-display font-bold text-[clamp(32px,7vw,48px)] leading-[1.05] tracking-[0.02em] uppercase">
              XXX kr per tjänst och månad
            </div>
            <p className="mx-auto my-0 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
              Inklusive moms. Support och uppdateringar ingår. Säg upp när du vill.
            </p>
          </div>
        </div>
        <div
          className="only-f mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20"
          id="faq"
        >
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Vanliga frågor
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Frågor om pris
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] reveal-stagger">
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">
                Vad ingår i månadspriset?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Allt: uppstart, regelbok, integrationer, agenten, support och uppdateringar. Inga tillägg, inga timmar.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">
                Hur fungerar rabatten?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Väljer du två eller fler agenter får du 15 % rabatt på det samlade månadspriset.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">
                Kan jag lägga till agenter senare?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Ja, när som helst. De delar redan din regelbok, så uppstarten går fort.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">
                Hur säger jag upp?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Du betalar per månad och säger upp med 30 dagars varsel. Ingen bindningstid. Avslutar du under första månaden får du pengarna tillbaka.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">Ingår moms?</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Priser för företag anges exklusive moms, priser för privatpersoner inklusive moms.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">
                Kostar demon något?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Nej. Demon är gratis och utan förpliktelser.
              </p>
            </div>
            <div className="p-6 rounded-card bg-surface box-border">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-bold tracking-[0.1em] uppercase">Ändras priset?</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Nej. Varje agent har ett fast pris per månad. Det ändras inte för att du får fler transaktioner.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/vanliga-fragor"
            >
              Fler frågor och svar →
            </Link>
          </div>
        </div>
        <div className="only-f bg-surface min-[900px]:min-h-dvh box-border flex items-center">
          <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Kontakt
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Osäker på vad du behöver?
            </h2>
            <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
              Boka ett gratis möte, så går vi igenom vilka agenter som ger dig mest tid tillbaka.
            </p>
            <div className="gap-3 flex flex-wrap justify-center">
              <Link className="btn btn--primary" href="/#kontakt">
                Boka en demo
              </Link>
              <Link className="btn btn--secondary" href="/vanliga-fragor">
                Vanliga frågor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
