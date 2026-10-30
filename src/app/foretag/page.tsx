import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För företag",
  description:
    "Varje agent är specialiserad på ett område och anpassas efter ert företag. Välj de som avlastar er mest.",
};

export default function ForetagPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Företag
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold text-[clamp(30px,8vw,55px)] wrap-break-word leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px]">
            Fyra agenter. Ett team.
          </h1>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] text-ink font-serif max-w-[520px] uppercase tracking-[0.03em] font-bold">
            Varje agent är specialiserad på ett område och anpassas efter ert företag. Välj de som avlastar er mest.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link
              className="btn btn--primary"
              href="/priser"
            >
              Se priser
            </Link>
            <Link
              className="btn btn--secondary"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border">
          <h2 className="mx-0 mt-0 mb-3 font-display font-bold text-[clamp(28px,7vw,42px)] wrap-break-word tracking-[0.01em] uppercase">
            Agenterna
          </h2>
          <p className="mx-0 mt-0 mb-10 text-[17px] leading-[1.6] text-ink font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Specialister som delar samma bild av ert företag.
          </p>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))]">
            <div className="p-8 gap-4 rounded-card bg-page border border-line flex flex-col">
              <div className="gap-3 flex flex-wrap justify-between items-center">
                <h3 className="m-0 font-display font-bold text-[clamp(22px,6vw,30px)] wrap-break-word tracking-[0.01em] uppercase">
                  Bokförings&shy;agenten
                </h3>
                <span className="px-3 py-[5px] rounded-full bg-chip text-contrast text-[12px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
                  Första agenten
                </span>
              </div>
              <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
                Tar hand om den löpande bokföringen, vecka för vecka.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Läser kontoutdrag, kvitton och Z-rapporter
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Konterar enligt er regelbok
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Stämmer av och sammanfattar veckan
                  </span>
                </div>
              </div>
              <Link
                className="mt-auto gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-contrast"
                href="/agenter/bokforing"
              >
                Läs mer{" "}
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 gap-4 rounded-card bg-page border border-line flex flex-col">
              <div className="gap-3 flex flex-wrap justify-between items-center">
                <h3 className="m-0 font-display font-bold text-[clamp(22px,6vw,30px)] wrap-break-word tracking-[0.01em] uppercase">
                  Trend&shy;övervakaren
                </h3>
              </div>
              <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
                Följer marknaden och säger till när något rör sig i er riktning.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Sökningar, sociala medier och marknadsplatser
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Inköpsförslag med motivering
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Underlag för säsonger och kampanjer
                  </span>
                </div>
              </div>
              <Link
                className="mt-auto gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-contrast"
                href="/agenter/trendovervakaren"
              >
                Läs mer{" "}
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 gap-4 rounded-card bg-page border border-line flex flex-col">
              <div className="gap-3 flex flex-wrap justify-between items-center">
                <h3 className="m-0 font-display font-bold text-[clamp(22px,6vw,30px)] wrap-break-word tracking-[0.01em] uppercase">
                  Strategi&shy;konsulten
                </h3>
              </div>
              <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
                Räknar på era beslut innan ni fattar dem.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Nulägesanalys utifrån bokföringen
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">Prioriterade åtgärder</span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">Uppföljning mot era mål</span>
                </div>
              </div>
              <Link
                className="mt-auto gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-contrast"
                href="/agenter/strategikonsulten"
              >
                Läs mer{" "}
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="p-8 gap-4 rounded-card bg-page border border-line flex flex-col">
              <div className="gap-3 flex flex-wrap justify-between items-center">
                <h3 className="m-0 font-display font-bold text-[clamp(22px,6vw,30px)] wrap-break-word tracking-[0.01em] uppercase">
                  Leverantörs&shy;agenten
                </h3>
              </div>
              <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
                Hittar och utvärderar leverantörer, så att ni slipper börja från noll.
              </p>
              <div className="gap-2.5 flex flex-col">
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">Sökning och jämförelse</span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Bevakning av nya alternativ
                  </span>
                </div>
                <div className="gap-2.5 flex items-start">
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
                  <span className="text-[14px] font-medium tracking-[0.04em] uppercase">
                    Sammanställning inför beslut
                  </span>
                </div>
              </div>
              <Link
                className="mt-auto gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-contrast"
                href="/agenter/leverantorsagenten"
              >
                Läs mer{" "}
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-22 max-w-[1200px] box-border">
        <h2 className="mx-0 mt-0 mb-3 font-display font-bold text-[clamp(28px,7vw,42px)] wrap-break-word tracking-[0.01em] uppercase">
          Anpassad efter er
        </h2>
        <p className="mx-0 mt-0 mb-10 text-[17px] leading-[1.6] text-ink font-serif max-w-[520px] uppercase tracking-[0.03em]">
          Agenterna konfigureras utifrån er verksamhet, inte tvärtom.
        </p>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          <div className="p-7 rounded-2xl bg-surface border border-line">
            <div className="font-display font-bold text-[44px] text-accent leading-none">1</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Kartläggning</h3>
            <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
              Vi går igenom mål, rutiner och system tillsammans.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-surface border border-line">
            <div className="font-display font-bold text-[44px] text-accent leading-none">2</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Konfiguration</h3>
            <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
              Varje agent får regler och gränser som passar er.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-surface border border-line">
            <div className="font-display font-bold text-[44px] text-accent leading-none">3</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Drift</h3>
            <p className="m-0 text-[17px] leading-[1.6] text-ink font-serif uppercase tracking-[0.03em]">
              Agenterna arbetar löpande och blir mer träffsäkra över tid.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,7vw,40px)] wrap-break-word tracking-[0.01em] uppercase">
            Prissättning
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Månadspris per agent, med rabatt när ni väljer flera.
          </p>
          <Link
            className="btn btn--primary theme-inverse"
            href="/priser"
          >
            Se priser
          </Link>
        </div>
      </div>
    </>
  );
}
