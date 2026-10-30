import Link from "next/link";
import type { Metadata } from "next";
import { SavingsCalculator } from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Priser",
  description: "Hela den löpande ekonomin.",
};

export default function PriserPage() {
  return (
    <>
      <input className="pf-in" type="radio" name="pf" id="pf-f" defaultChecked aria-label="Företag" />
      <input className="pf-in" type="radio" name="pf" id="pf-p" aria-label="Privatperson" />
      <div className="pf-main">
        <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
          <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
            <h1 className="mx-0 mt-0 mb-8 font-display font-bold text-[clamp(32px,8vw,55px)] leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px] wrap-break-word">
              Priser och tjänster
            </h1>
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
        <div className="bg-surface border-t border-t-line border-b border-b-line">
          <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border">
            <div className="only-f pcards-f">
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border-2 border-accent flex flex-col">
                <span className="px-3 py-[5px] rounded-full self-start bg-chip text-contrast text-[12px] font-semibold tracking-[0.12em] uppercase">
                  Första agenten
                </span>
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Bokförings&shy;agenten
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Hela den löpande ekonomin.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Konteringsförslag enligt regelbok
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Godkännande före bokföring
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Få en prisuppskattning
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Trend&shy;övervakaren
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Marknadssignaler vägda mot ert sortiment.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Underlag för kampanjer
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Få en prisuppskattning
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Strategi&shy;konsulten
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Analys och scenarier från era egna siffror.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Uppföljning av beslut
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Få en prisuppskattning
                </Link>
              </div>
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Leverantörs&shy;agenten
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Sökning och jämförelse av leverantörer.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Förberedda förfrågningar
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX kr
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Per månad och agent, exkl. moms
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Få en prisuppskattning
                </Link>
              </div>
              <div
                className="wide p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col"
                id="paket"
              >
                <span className="px-3 py-[5px] rounded-full self-start bg-surface-muted text-ink text-[12px] font-semibold tracking-[0.12em] uppercase">
                  Paket
                </span>
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Eget paket
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Två eller fler agenter med rabatt.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Valfri kombination
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Gemensam regelbok
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
                      Rabatt på månadspriset
                    </span>
                  </div>
                </div>
                <div className="font-display font-bold text-[26px] tracking-[0.02em] uppercase leading-[1.1]">
                  XXX %
                  <span className="mt-1 block font-sans text-[12px] font-semibold tracking-[0.1em] text-ink-muted">
                    Rabatt på samlat månadspris
                  </span>
                </div>
                <Link
                  className="btn btn--primary mt-auto self-start"
                  href="/#kontakt"
                >
                  Få en prisuppskattning
                </Link>
              </div>
            </div>
            <div className="only-p pcards-p">
              <div className="p-8 gap-4 rounded-card box-border min-w-0 bg-page border border-line flex flex-col">
                <h3 className="m-0 font-display font-bold text-[28px] leading-[1.1] tracking-[0.01em] uppercase wrap-anywhere">
                  Kalender och vardag
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Samlad planering för jobb, familj och fritid.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Upplägg efter mål, nivå och schema.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                  Budget, sparplan och kostnadskoll.
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
                    <span className="text-[14px] font-medium leading-[1.45] tracking-[0.04em] uppercase min-w-0">
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
        <div className="only-f mx-auto my-0 px-10 py-22 max-w-[1200px] box-border">
          <h2
            className="mx-0 mt-0 mb-10 font-display font-bold text-[clamp(28px,6vw,42px)] wrap-break-word tracking-[0.01em] uppercase"
            id="sa-gar-det-till"
          >
            Så här går det till
          </h2>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <div className="p-7 rounded-2xl bg-page">
              <div className="font-display font-bold text-[44px] text-accent leading-none">1</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Demo</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ett kostnadsfritt möte där vi visar Vera med exempel från er verksamhet och föreslår vilka agenter som
                passar.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ni kan påverka upplägget direkt, tills det motsvarar era behov.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-page">
              <div className="font-display font-bold text-[44px] text-accent leading-none">2</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Testmånad</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Agenterna arbetar med er riktiga data i en månad, mot en handläggningsavgift på XXX kr.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Fungerar det inte som ni vill justerar vi. Räcker det inte betalas avgiften tillbaka.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-page">
              <div className="font-display font-bold text-[44px] text-accent leading-none">3</div>
              <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Månadspris</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                XXX kr per agent och månad. Väljer ni flera agenter får ni rabatt. Support och uppdateringar ingår.
              </p>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Räkna nedan på vad arbetet kostar i dag.
              </p>
            </div>
          </div>
        </div>
        <SavingsCalculator />
        <div className="only-p mx-auto my-0 px-10 py-22 max-w-[1200px] box-border flex justify-center">
          <div className="px-10 py-12 rounded-card w-full max-w-[720px] bg-contrast text-ink-inverse box-border text-center">
            <div className="mb-3 font-display font-bold text-[clamp(32px,7vw,48px)] leading-[1.05] tracking-[0.02em] uppercase">
              XXX kr per tjänst
            </div>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
              Månadspris inklusive moms. Support och uppdateringar ingår.
            </p>
          </div>
        </div>
        <div className="only-f mx-auto my-0 px-10 py-22 max-w-[1200px] box-border">
          <h2
            className="mx-0 mt-0 mb-8 font-display font-bold text-[clamp(28px,6vw,42px)] wrap-break-word tracking-[0.01em] uppercase"
            id="faq"
          >
            Frågor om pris
          </h2>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">
                Vad ingår i månadspriset?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Uppstart, regelbok, integrationer, agenten, support och uppdateringar.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">
                Hur fungerar rabatten?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Väljer ni flera agenter får ni XXX % rabatt på det samlade månadspriset.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">
                Kan vi lägga till agenter senare?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ja, när som helst.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">
                Hur säger vi upp?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ni betalar per månad och kan säga upp med XXX uppsägningstid.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">Ingår moms?</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Priser för företag anges exklusive moms. Priser för privatpersoner anges inklusive moms.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">
                Kostar demon något?
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Nej, demon är kostnadsfri.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-page">
              <h3 className="mx-0 mt-0 mb-2 text-[15px] font-semibold tracking-[0.08em] uppercase">Är priset fast?</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ja. Priset tas fram efter demon och gäller sedan som ett fast månadspris.
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
        <div className="only-f bg-contrast text-ink-inverse">
          <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,6vw,40px)] tracking-[0.01em] uppercase wrap-break-word">
              Få en prisuppskattning
            </h2>
            <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
              Vi tar fram ett pris utifrån ert företag och de agenter ni behöver.
            </p>
            <Link
              className="btn btn--primary theme-inverse"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
