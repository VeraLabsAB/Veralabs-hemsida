import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatekonomi och sparande",
  description:
    "Vera sorterar dina utgifter, hittar det som kan sänkas och gör en sparplan som håller. Du bestämmer vart pengarna går.",
};

export default function EkonomiPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-16 pb-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Privatekonomi och sparande
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,8.5vw,56px)] wrap-break-word leading-[1.02]">
              Full koll på pengarna, utan kalkylblad.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink uppercase tracking-[0.03em] font-bold">
              Vera sorterar dina utgifter, hittar det som kan sänkas och gör en sparplan som håller. Du bestämmer vart
              pengarna går.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link
                className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
                href="/#kontakt"
              >
                Kom igång
              </Link>
              <a
                className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
                href="#hur"
              >
                Så fungerar det
              </a>
            </div>
          </div>
          <div className="reveal-soft flex-[1_1_440px] min-w-0">
            <div className="px-7 py-6 rounded-3xl bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.12)] box-border w-full">
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
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">25 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Lön
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Inkomst</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">+28 400 kr</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Inkommit
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">1 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Hyra
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Fast utgift</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">−9 200 kr</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Betald
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Mat
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Budget 4 000 kr</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">3 100 kr</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    I fas
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Prenumerationer
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">3 används sällan</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">−387 kr</div>
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
                    2 förslag
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
                    1 sparmål i fas
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
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-12 gap-y-8 gap-x-14 max-w-[1200px] box-border flex flex-wrap">
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Uppdateras varje dag
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Nya köp sorteras in direkt.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Känner din ekonomi
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Inkomster, fasta kostnader och sparmål.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Spårbart
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Du ser vart varje krona tar vägen.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
        <div className="reveal-soft flex-[1_1_440px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Spara mer, utan att tänka på det.
          </h2>
        </div>
        <div className="reveal-soft gap-4 flex-[1_1_440px] min-w-0 flex flex-col">
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Prenumerationer, småköp och fasta kostnader gör det svårt att se helheten. Budgetar i kalkylblad håller
            sällan länge.
          </p>
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Vera ger dig överblicken automatiskt och visar var det finns pengar att frigöra.
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
              Tre steg, varje månad.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Konton och kort kopplas med läsbehörighet, så att allt hamnar på ett ställe.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Sortera</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Varje köp kategoriseras och läckor markeras. Vid osäkerhet frågar Vera.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Planera</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Månadsöversikten visar läget och hur sparmålet kan nås.
              </p>
            </div>
          </div>
          <div className="mt-12 gap-3 flex justify-center flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Kom igång
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/sa-fungerar-vera"
            >
              Så fungerar Vera
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-page border-b border-b-line" id="arbetssatt">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="reveal-up mx-auto mt-0 mb-6 text-center max-w-[720px]">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              I detalj
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,6.5vw,44px)] leading-[1.05]">
              Från lön till sparmål
            </h2>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Du bestämmer vad pengarna ska gå till.
            </p>
          </div>
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Mål
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Buffert
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Trygghet först
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  En reserv för oväntade utgifter, till exempel tre månadslöner.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Sparmål
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Spara till något
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Resan, körkortet eller kontantinsatsen, med en månadssumma som går ihop.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Utgångsläge
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Inkomster</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Lön och andra inbetalningar.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Fasta utgifter
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Hyra, el, försäkringar och lån.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Rörliga utgifter
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Mat, nöjen och kläder.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Planen
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Budget</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Byggd på hur du faktiskt lever.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Sparplan</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  En realistisk summa varje månad.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Läckor</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Prenumerationer och kostnader som kan sänkas.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">4</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Ramar
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Gränser</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Per kategori, med notis när du närmar dig.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Frekvens</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Månadsöversikt, eller notis när något sticker ut.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Ändra</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Byt mål när livet förändras.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Uppföljning
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vera följer hur det går mot målet och justerar planen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
        <div className="reveal-soft flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Exempel på förslag
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Du ser alltid varför.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Varje förslag visar vad det bygger på och vad det betyder för ditt sparmål.
            </p>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Säg nej till det du vill behålla.
            </p>
          </div>
          <Link
            className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
            href="/#kontakt"
          >
            Kom igång
          </Link>
        </div>
        <div className="reveal-soft flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-3xl bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.10)] box-border">
            <div className="gap-3 flex justify-between items-start flex-wrap">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                  Förslag · Säg upp prenumerationer
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">+387 kr/mån</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras analys</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Video</span>
              <span className="font-mono tracking-normal font-semibold">2</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Två tjänster med liknande utbud</span>
              <span className="font-mono tracking-normal font-semibold text-right">149 kr</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Gym</span>
              <span className="font-mono tracking-normal font-semibold">0</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Inga besök på tre månader</span>
              <span className="font-mono tracking-normal font-semibold text-right">199 kr</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">App</span>
              <span className="font-mono tracking-normal font-semibold">1</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Ingen inloggning sedan juli</span>
              <span className="font-mono tracking-normal font-semibold text-right">39 kr</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                Du betalar 387 kr i månaden för tjänster du knappt använder. Säger du upp dem och lägger pengarna på
                sparkontot har du 4 644 kr mer om ett år.
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
                <span>Bygger på dina tre senaste månader</span>
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
                <span>Inga avtal med bindningstid</span>
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
                <span>Pengarna kan gå till ditt sparmål</span>
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
                <span>Du kan alltid ångra</span>
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
                Behåll
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Lägg i sparplanen
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
              Ekonomin, månad för månad.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Samlade konton</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Inkomster och utgifter på ett ställe.
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
                  Automatisk budget
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Köp sorteras in direkt.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sparmål</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Hur nära du är.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Läckor</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Kostnader som kan sänkas.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Varningar</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Innan budgeten spricker.
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
                  Till exempel hur ett köp ska sorteras.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Månadsöversikt</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Hela månaden på en sida.
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
                  Ekonomin i telefonen och datorn.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Uppföljning</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Hur det gick med dina mål.
                </p>
              </div>
            </div>
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
              Känner din ekonomi
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Vad som är fast, vad som varierar och vad du sparar till.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Alltid aktuell
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Notis direkt när något avviker.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Inga kalkylblad
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Inget behöver föras in för hand.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Med kalendern
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Påminnelser om räkningar innan de förfaller.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
            href="/#kontakt"
          >
            Kom igång
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
            <table className="data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Budgetapp
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Vem sorterar?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Du, i ett kalkylblad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Appen, delvis
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Hittar läckor
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Om du letar
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Sällan
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Varje månad
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Sparhjälp
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Om du orkar
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Visar siffror
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Plan för ditt mål
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Motivering
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Din egen
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Sällan
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Till varje förslag
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Beslut
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Du
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Du
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kostnad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Din tid
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Gratis eller månadsavgift
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Engångspris, inkl. moms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Kom igång
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/priser"
            >
              Se priser
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-10">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Passar för
          </h2>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Studenter</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Pengar som räcker hela månaden.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Sparare</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              En plan för resan, körkortet eller bostaden.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Hushåll</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Gemensam överblick utan kalkylblad.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
          <div className="reveal-soft flex-[1_1_420px] min-w-0">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-ink-inverse">
              Kontroll
            </h2>
            <p className="mx-0 mt-0 mb-7 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink-inverse-soft uppercase tracking-[0.03em]">
              Vera ger förslag och överblick. Över pengarna bestämmer du.
            </p>
            <Link
              className="pb-1 gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-ink-inverse border-b-[1.5px] border-b-ink-inverse"
              href="/sakerhet"
            >
              Säkerhet →
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
              <span>Vera kan läsa, aldrig flytta pengar</span>
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
              <span>Varje förslag motiveras</span>
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
              <span>Bara det du delar används</span>
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
              <span>Inga råd om enskilda aktier eller fonder</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-muted">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Användarröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <figure className="m-0 p-7 gap-4.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Jag hittade 400 kronor i månaden som bara försvann.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Elin Wahl · Exempelanvändare
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Nu vet jag vart lönen tar vägen.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Adam Roos · Exempelanvändare
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[900px] box-border">
        <div className="mb-10 text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
            Frågor om privatekonomi
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Hur kopplar jag mina konton?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Via banken med BankID. Vera får bara läsbehörighet.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Ger Vera råd om aktier och fonder?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Nej. Vera hjälper till med budget, sparande och utgifter.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Vera frågar, till exempel hur ett köp ska sorteras.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Är uppgifterna säkra?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              De används bara för dig. Läs mer på säkerhetssidan.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag ha flera sparmål?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Vera fördelar sparandet efter dina prioriteringar.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan jag dela med min partner?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. En gemensam översikt och varsin privat del.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vad händer om jag ångrar mig?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Du har 30 dagars öppet köp.
            </p>
          </details>
        </div>
      </div>
      <div className="mx-auto mt-0 mb-24 px-10 py-0 max-w-[1200px] box-border">
        <div className="reveal-soft px-10 py-18 rounded-[28px] bg-accent text-ink-inverse box-border text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,46px)] wrap-break-word leading-[1.05] text-ink-inverse">
            Se din första månadsöversikt
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] max-w-[540px] font-serif text-ink-inverse uppercase tracking-[0.03em]">
            Kom igång och få överblick över din ekonomi.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-page text-contrast border-[1.5px] border-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Kom igång
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center min-h-13 border-[1.5px] border-surface text-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
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
