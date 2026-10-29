import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För privatpersoner",
  description: "Tre tjänster som håller ordning på tid, hälsa och pengar. Du väljer vilka du behöver.",
};

export default function PrivatpersonerPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Privatpersoner
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold text-[clamp(30px,8vw,55px)] wrap-break-word leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px]">
            Samma teknik, för vardagen.
          </h1>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] text-ink font-serif max-w-[520px] uppercase tracking-[0.03em] font-bold">
            Tre tjänster som håller ordning på tid, hälsa och pengar. Du väljer vilka du behöver.
          </p>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-22 max-w-[1200px] box-border">
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <Link
            className="p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-serif">
              Samlar dina kalendrar, löser krockar och skyddar tiden som betyder mest.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
          <Link
            className="p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-serif">
              Träningspass och måltider anpassade efter ditt mål och ditt schema.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
          <Link
            className="p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col no-underline text-ink wrap-break-word"
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
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-serif">
              Överblick över utgifterna och en realistisk plan för ditt sparande.
            </p>
            <div className="mt-auto pt-4 gap-3 flex justify-between items-center border-t border-t-line-faint">
              <span className="text-[13px] font-semibold text-ink-soft">Per månad, inkl. moms</span>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
