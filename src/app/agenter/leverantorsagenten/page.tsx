import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leverantörsagenten",
  description:
    "Vera söker fram grossister, tillverkare och andra källor, jämför villkoren och sammanställer ett beslutsunderlag. Kontakten tar ni.",
};

export default function LeverantorsagentenPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-16 pb-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Leverantörs&shy;agenten
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,8.5vw,56px)] wrap-break-word leading-[1.02]">
              Rätt leverantör, utan veckor av sökande.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink uppercase tracking-[0.03em] font-bold">
              Vera söker fram grossister, tillverkare och andra källor, jämför villkoren och sammanställer ett
              beslutsunderlag. Kontakten tar ni.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link
                className="btn btn--primary"
                href="/#kontakt"
              >
                Boka en demo
              </Link>
              <a
                className="btn btn--secondary"
                href="#hur"
              >
                Så fungerar det
              </a>
            </div>
          </div>
          <div className="reveal-soft flex-[1_1_440px] min-w-0">
            <div className="px-7 py-6 rounded-card bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.12)] box-border w-full">
              <div className="mb-2 gap-3 flex justify-between items-center">
                <div>
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">Sökning</div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">
                    Nytt märke
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Grossist</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Grossist A, Danmark
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">
                    Säljer märket till butiker
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">Från 20 st</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Passar er
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Grossist</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Grossist B, Tyskland
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">
                    Säljer till butiker i EU
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">Från 50 st</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Passar er
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Parti</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Lagerutförsäljning, Sverige
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Blandade partier</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">Från 100 st</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Alternativ
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">Okänd</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Säljare på marknadsplats
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Kan inte bekräftas</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">?</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-ink-inverse bg-accent">
                    Varning
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
                    3 förslag
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
                    6 kontroller klara
                  </span>
                  <span>1 varning</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Se jämförelsen
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
              Söker parallellt
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Flera källor gås igenom samtidigt.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Utgår från era behov
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Volymer, prisnivå och leveranskrav styr sökningen.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Ni tar kontakten
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Ingen leverantör kontaktas utan ert godkännande.
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
            Mindre letande. Bättre inköp.
          </h2>
        </div>
        <div className="reveal-soft gap-4 flex-[1_1_440px] min-w-0 flex flex-col">
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            En ny leverantör kräver sökningar, mejl, väntan och jämförelser. Arbetet tar ofta veckor.
          </p>
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Leverantörsagenten gör förarbetet och presenterar alternativen sida vid sida, med det som är kontrollerat
            tydligt markerat.
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
              Tre steg till ett beslut.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Behov</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ange vad som är nytt, till exempel ett märke ni vill ta in. Vera räknar på mängder, pris och tidpunkt.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Sökning</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Tänkbara leverantörer jämförs på pris, minsta order, leveranstid och villkor. Det som inte kan bekräftas
                markeras.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Val</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Ni får en jämförelse med rekommendation. Vera kan förbereda förfrågan till de ni väljer.
              </p>
            </div>
          </div>
          <div className="mt-12 gap-3 flex justify-center flex-wrap">
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
              Från behov till leverantör
            </h2>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Ni bestämmer vem som kontaktas och vem ni gör affärer med.
            </p>
          </div>
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Uppdrag
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Ett märke
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Hitta en källa
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vera tar reda på var märket kan köpas in, via grossister eller märkets egna återförsäljare.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  En produkttyp
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Hitta alternativ
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vera tar fram flera leverantörer av en produkt eller ett material.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Källor
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Grossister</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Säljer vidare till butiker, ofta i mindre partier.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Tillverkare</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Producerar åt er, vanligen med högre minsta order.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Övriga</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Lagerutförsäljningar och partier när det passar.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Jämförelse
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Villkor</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Styckpris, minsta order, frakt och betalningsvillkor.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Leverans</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Leveranstid och avsändarland.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Kontroller</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Offentliga uppgifter, till exempel registrering, kontrolleras.
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
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Budget</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Alternativ över budget sorteras bort.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Krav</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Till exempel leverans inom EU, hållbarhetskrav eller minsta order.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Kontakt</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Ni avgör när och hur en leverantör kontaktas.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Historik
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Förslag, jämförelser och förfrågningar sparas. Ni ser vilka som har kontaktats och vad som valdes.
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
            Kontrollerat och okontrollerat, tydligt åtskilt.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Varje förslag visar vad som är kontrollerat, hur villkoren ser ut och varför alternativet passar er.
            </p>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Det som behöver frågas innan beslut markeras.
            </p>
          </div>
          <Link
            className="btn btn--primary"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
        <div className="reveal-soft flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-card bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.10)] box-border">
            <div className="gap-3 flex justify-between items-start flex-wrap">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                  Grossist A · Danmark
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">Passar er</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras jämförelse</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Pris</span>
              <span className="font-mono tracking-normal font-semibold">st</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Styckpris vid minsta order</span>
              <span className="font-mono tracking-normal font-semibold text-right">180 kr</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Order</span>
              <span className="font-mono tracking-normal font-semibold">min</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Minsta order</span>
              <span className="font-mono tracking-normal font-semibold text-right">20 st</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Frakt</span>
              <span className="font-mono tracking-normal font-semibold">dagar</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Leveranstid till Stockholm</span>
              <span className="font-mono tracking-normal font-semibold text-right">5–7</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                Grossist A säljer märket till butiker i Norden och har lägst minsta order av alternativen. Det passar
                er, eftersom ni vill testa märket i liten skala först. Förslag: be om en prislista och fråga om
                returrätt.
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
                <span>Företaget finns registrerat</span>
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
                <span>Säljer märket till butiker</span>
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
                <span>Minsta order inom er budget</span>
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
                <span>Fråga om: returrätt</span>
              </div>
            </div>
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap border-t border-t-line-faint items-center">
              <span className="mr-auto text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-soft">
                Väntar på ert beslut
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 border-[1.5px] border-line-strong text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Visa fler
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Förbered förfrågan
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
              Sökning och jämförelse av leverantörer.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Leverantörssökning
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Grossister, tillverkare och andra källor.
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
                  Villkorsjämförelse
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Pris, minsta order, leveranstid och villkor sida vid sida.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Kontroller</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Offentliga uppgifter verifieras.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Motiverade förslag
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Varför ett alternativ passar er.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Förfrågningar</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Förberedda, och skickas när ni vill.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Varningar</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Det som inte kan bekräftas markeras.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Leverantörslista
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Alla leverantörer ni har tittat på, kontaktat och valt.
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
                  Notiser när ett förslag är klart.
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
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Historik</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Ingen sökning börjar från noll.
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
              Känner er verksamhet
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Förslagen passar ert sortiment och era kunder, inte bara det lägsta priset.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Ni styr kontakten
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Ingen förfrågan skickas utan er.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              För mindre volymer
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Prioriterar leverantörer som säljer till mindre företag.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kopplad till trenderna
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Tillsammans med trendövervakaren föreslås källor till det som är på väg upp.
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
                    Inköpskonsult
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Vem söker?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Konsulten
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Tidsåtgång
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Dagar till veckor
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Enligt avtal
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Snabbt, med alternativ att jämföra
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Villkorsjämförelse
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Om tid finns
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ja
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Ja, sida vid sida
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Motivering
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Er egen
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    På begäran
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Till varje förslag
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kontakt
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Konsulten
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Ni
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kostnad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Er tid
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Arvode
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Fast månadspris
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
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-10">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Målgrupp
          </h2>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Butiker och återförsäljare</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Nya märken och produkter, och var de kan köpas in.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Tillverkande företag</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Material och produktionspartner.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-card bg-surface border border-line min-w-0 flex flex-col">
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
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Företag som vill byta</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Bättre villkor än hos nuvarande leverantör.
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
              Leverantörsagenten tar fram underlag. Avtal och inköp sköter ni.
            </p>
            <Link
              className="pb-1 gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-ink-inverse border-b-[1.5px] border-b-ink-inverse"
              href="/sakerhet"
            >
              Så skyddar vi er →
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
              <span>Ingen kontakt utan ert godkännande</span>
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
              <span>Kontrollerat och okontrollerat redovisas</span>
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
              <span>Bara delade uppgifter används</span>
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
              <span>Avtal och inköp görs av er</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-muted">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Kundröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Vi ville ta in ett nytt märke. Vera hittade tre grossister på en eftermiddag.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Emma Ström · Ägare, Exempelbutiken AB
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-card bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Jämförelsen sida vid sida sparade oss veckor av mejl.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                David Berg · Inköpsansvarig, Exempelhandel AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[900px] box-border">
        <div className="mb-10 text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
            Frågor om leverantörsagenten
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka leverantörer kan Vera hitta?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Grossister, tillverkare och andra källor som säljer till företag, i Sverige, Europa och Asien.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kontaktar Vera leverantörer?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Bara om ni godkänner det. Förfrågan förbereds, ni avgör om den skickas.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Hur bedöms seriositet?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Offentliga uppgifter kontrolleras och det som inte kunde bekräftas redovisas. Gör alltid en egen
              bedömning.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan Vera hitta en källa till ett visst märke?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Ange märket, så tar Vera reda på var det kan köpas in.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan vi ställa krav på leverantören?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Budget, leveransområde, hållbarhet och minsta order kan anges.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Förhandlar Vera priser?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Nej. Vera tar fram underlag och frågor att ställa. Förhandlingen sköter ni.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan vi jämföra med nuvarande leverantörer?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Lägg in dem, så jämförs nya alternativ mot era nuvarande villkor.
            </p>
          </details>
        </div>
      </div>
      <div className="mx-auto mt-0 mb-24 px-10 py-0 max-w-[1200px] box-border">
        <div className="reveal-soft px-10 py-18 rounded-[28px] bg-accent text-ink-inverse box-border text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,46px)] wrap-break-word leading-[1.05] text-ink-inverse">
            Se leverantörsagenten med ert sortiment
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] max-w-[540px] font-serif text-ink-inverse uppercase tracking-[0.03em]">
            Vi visar en jämförelse för en produkt ni vill köpa in.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="btn btn--primary theme-inverse"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="btn btn--secondary theme-inverse"
              href="/#kontakt"
            >
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
