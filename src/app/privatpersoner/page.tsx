import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För privatpersoner",
  description:
    "Kassio Finance för privatpersoner: en AI som håller ordning på din kalender, din träning och dina pengar. Du godkänner, Vera gör resten.",
};

export default function PrivatpersonerPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Privatpersoner
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Samma Vera. För ditt eget liv.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
              Tre tjänster som håller ordning på din tid, din hälsa och dina pengar. Välj en, eller alla tre.
            </p>
            <div className="gap-3 flex flex-wrap">
              <a className="btn btn--primary theme-dark" href="#tjanster">
                Se tjänsterna
              </a>
              <Link className="btn btn--secondary theme-dark" href="/priser">
                Se priser
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="tjanster">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Tjänster
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Tre tjänster. Du väljer.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Var och en fungerar för sig. Tillsammans ser de hela din vardag och hjälps åt.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] reveal-stagger">
          <Link
            className="p-7 gap-3.5 rounded-card bg-page border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
            href="/privat/kalender"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 5h14v15H5z M5 10h14 M9 3v4 M15 3v4"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Kalender och vardag
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Samlar dina kalendrar, löser krockarna och skyddar tiden som betyder mest.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
          <Link
            className="p-7 gap-3.5 rounded-card bg-page border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
            href="/privat/traning"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Tränings- och kostråd
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Pass och måltider som passar ditt mål, din nivå och din vecka.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
          <Link
            className="p-7 gap-3.5 rounded-card bg-page border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
            href="/privat/ekonomi"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z M9 12h6 M12 8v8"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Privatekonomi och sparande
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Koll på vart pengarna tar vägen, och en sparplan som faktiskt håller.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
        </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Undrar du något?
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            De vanligaste frågorna har redan svar. Resten svarar vi på inom en arbetsdag.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link className="btn btn--primary" href="/vanliga-fragor#privat">
              Vanliga frågor
            </Link>
            <Link className="btn btn--secondary" href="/#kontakt">
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
