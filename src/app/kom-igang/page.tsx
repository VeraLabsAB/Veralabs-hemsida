import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så kommer du igång",
  description:
    "Kom igång med Kassio Finance på en vecka: genomgång, regelbok, bankkoppling och testmånad. Det mesta gör vi.",
};

export default function KomIgangPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. De sju stegen ligger
          i en gemensam sektion med en rad per steg. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <Link
              className="mb-5 inline-block text-[13px] font-semibold tracking-[0.14em] uppercase no-underline text-pale-1"
              href="/foretag"
            >
              ← Alla agenter
            </Link>
            <div className="mb-6 block">
              <span className="px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
                Kassio Finance
              </span>
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Från första samtalet till första godkända veckan.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
              Uppstarten tar ungefär en vecka. Det mesta gör vi. Så här går det till.
            </p>
            <div className="gap-3 flex flex-wrap">
              <a className="btn btn--primary theme-dark" href="#steg">
                Följ stegen
              </a>
              <Link className="btn btn--secondary theme-dark" href="/#kontakt">
                Boka en demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="steg">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
        <div className="mb-6 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Steg för steg
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Så kommer du igång.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Sju steg från första genomgången till en bokföring som sköter sig själv.
          </p>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Kartläggning
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Genomgång</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Vi går igenom ditt företag, dina rutiner och ditt bokförings&shy;program.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Regelbok</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Kontoval, leverantörer, momssatser och beloppsgränser skrivs ner. Det blir Veras instruktioner, och de
                är dina.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                Befintligt program
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Kontoplan och historik ligger kvar i Fortnox, Bokio, Spiris eller Visma eEkonomi. Inget flyttas.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">2</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Anslutning
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Bank</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Nya transaktioner hämtas automatiskt och visas i Kassio Finance-appen tillsammans med det som väntar på dig.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Underlag</h3>
              <p className="mx-0 mt-0 mb-2.5 text-[16px] leading-[1.55] text-ink font-sans">
                Fakturor, kvitton och kontoutdrag laddas upp i appen. Du väljer vad som delas.
              </p>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Varje steg loggas från första dagen.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">3</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Testmånad
            </h2>
          </div>
          <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Vera jobbar med din riktiga bokföring. Varje rättelse du gör hamnar i regelboken, så träffsäkerheten ökar
              för varje vecka.
            </p>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">4</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Arbetssätt
            </h2>
          </div>
          <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Efter testmånaden väljer du läge: granska varje post, eller godkänn hela veckan på en gång. Byt när du
              vill.
            </p>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Veckorytm
            </h2>
          </div>
          <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              I början av veckan samlas underlagen in, under veckan förbereds bokföringen, och i slutet av veckan gör
              du genomgången. På en kvart.
            </p>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">6</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Utbyggnad
            </h2>
          </div>
          <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Fakturering, moms, lön och bokslut läggs till när den löpande bokföringen sitter.
            </p>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">7</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Ägna tiden åt det som växer
            </h2>
          </div>
          <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
            <p className="mx-0 mt-0 mb-4 text-[16px] leading-[1.55] text-ink font-sans">
              Varje förslag kommer med en förklaring, så att du förstår din bokföring bättre för varje vecka. Utan att
              lägga en kväll på den.
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
                <span className="text-[16px] leading-[1.5] text-ink font-sans">
                  Förklaring till varje förslag
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
                <span className="text-[16px] leading-[1.5] text-ink font-sans">Frågor vid osäkerhet</span>
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
                <span className="text-[16px] leading-[1.5] text-ink font-sans">Fullständig logg</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Redo att börja?
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Boka en demo, så tar vi fram en plan för uppstarten hos dig.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link className="btn btn--primary" href="/#kontakt">
              Boka en demo
            </Link>
            <Link className="btn btn--secondary" href="/priser">
              Se priser
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
