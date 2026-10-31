import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatekonomi och sparande",
  description:
    "Vera sorterar dina utgifter, hittar pengarna som bara försvinner och gör en sparplan som håller. Du bestämmer vart varje krona går.",
};

export default function EkonomiPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen med exempelkortet
          till höger, sedan en skärm per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Privatekonomi och sparande
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Full koll på pengarna. Utan ett enda kalkylblad.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera sorterar dina utgifter, hittar pengarna som bara försvinner och gör en sparplan som håller. Du
              bestämmer vart varje krona går.
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
      {/* Tre korta punkter och bakgrunden delar en skärm: punkterna som kort till vänster, texten till höger. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="gap-4 flex-[1_1_380px] min-w-0 flex flex-col reveal-stagger">
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Uppdateras varje dag
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Nya köp sorteras in direkt.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Kan din ekonomi
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Inkomster, fasta kostnader och sparmål.
            </div>
          </div>
          <div className="px-6 py-5 rounded-card bg-page border border-line min-w-0 box-border">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
              Spårbart
            </div>
            <div className="mt-1.5 text-[16px] leading-[1.55] text-ink font-sans">
              Du ser vart varje krona tar vägen.
            </div>
          </div>
          </div>
          <div className="flex-[1_1_440px] min-w-0 reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
            Spara mer. Utan att tänka på det.
          </h2>
          <div className="mt-2 gap-4 flex flex-col">
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Prenumerationer, småköp och fasta kostnader gör det svårt att se helheten. Budgeten i kalkylbladet håller
            till den 10:e.
          </p>
          <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
            Vera ger dig överblicken av sig själv och pekar ut exakt var det finns pengar att frigöra.
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
              Tre steg, varje månad.
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
                Konton och kort kopplas med läsbehörighet, så att allt hamnar på ett ställe.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Sortera</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Varje köp kategoriseras och läckor markeras. Vid osäkerhet frågar Vera.
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Planera</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Månadsöversikten visar läget och hur sparmålet kan nås.
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
              Från lön till sparmål
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Du bestämmer vad pengarna ska gå till.
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
                  Buffert
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Trygghet först
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  En reserv för oväntade utgifter, till exempel tre månadslöner.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Sparmål
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Spara till något
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Resan, körkortet eller kontantinsatsen, med en månadssumma som går ihop.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Inkomster</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Lön och andra inbetalningar.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Fasta utgifter
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hyra, el, försäkringar och lån.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Rörliga utgifter
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Mat, nöjen och kläder.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Budget</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Byggd på hur du faktiskt lever.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sparplan</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  En realistisk summa varje månad.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Läckor</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Prenumerationer och kostnader som kan sänkas.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Gränser</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Per kategori, med notis när du närmar dig.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Frekvens</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Månadsöversikt, eller notis när något sticker ut.
                </p>
              </div>
              <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Ändra</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Byt mål när livet förändras.
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
                  Vera följer hur det går mot målet och justerar planen.
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
              Varje förslag visar vad det bygger på och vad det betyder för ditt sparmål.
            </p>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Säg nej till det du vill behålla.
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
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
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
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
              Ingår
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] max-w-[560px] text-ink font-sans">
              Ekonomin, månad för månad.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Samlade konton</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Inkomster och utgifter på ett ställe.
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
                  Automatisk budget
                </h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Köp sorteras in direkt.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sparmål</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hur nära du är.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Läckor</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Kostnader som kan sänkas.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Varningar</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Innan budgeten spricker.
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
                  Till exempel hur ett köp ska sorteras.
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
                  Hela månaden på en sida.
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
                  Ekonomin i telefonen och datorn.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Uppföljning</h3>
                <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Hur det gick med dina mål.
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
              Ser helheten
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Vad som är fast, vad som varierar och vad du sparar till.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Alltid aktuell
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Notis direkt när något avviker.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Inga kalkylblad
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Inget förs in för hand. Någonsin.
            </p>
          </div>
          <div className="reveal pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Med kalendern
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Påminnelser om räkningar innan de förfaller.
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
                    Budgetapp
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Kassio Finance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Vem sorterar?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Du, i ett kalkylblad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Appen, delvis
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Hittar läckor
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Om du letar
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Sällan
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Varje månad
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[13px] leading-[1.45] align-top font-sans font-bold tracking-[0.08em] uppercase">
                    Sparhjälp
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Om du orkar
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top text-ink font-sans">
                    Visar siffror
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[16px] leading-[1.45] align-top bg-chip font-sans font-bold text-contrast">
                    Plan för ditt mål
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
                    Sällan
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Studenter</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Pengar som räcker hela månaden.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Sparare</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              En plan för resan, körkortet eller bostaden.
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Hushåll</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Gemensam överblick utan kalkylblad.
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
              Vera ger förslag och överblick. Pengarna bestämmer du över.
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
              <span>Vera kan läsa. Aldrig flytta pengar.</span>
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
              <span>Inga råd om enskilda aktier eller fonder</span>
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
                ”Jag hittade 400 kronor i månaden som bara försvann.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Elin Wahl · Exempelanvändare
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-sans">
                ”Nu vet jag vart lönen tar vägen.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Adam Roos · Exempelanvändare
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[900px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] wrap-break-word leading-[1.05]">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              De används bara för dig, och Vera har bara läsbehörighet. Läs mer på säkerhetssidan.
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
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
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] text-ink font-sans">
              Du betalar per månad och kan säga upp när du vill, med XXX uppsägningstid.
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
            Se din första månadsöversikt.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] max-w-[540px] text-ink font-sans">
            Koppla kontona med BankID och se vart pengarna tar vägen.
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
