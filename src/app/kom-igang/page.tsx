import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så kommer ni igång",
  description: "Uppstarten tar ungefär en vecka. Så här går den till.",
};

export default function KomIgangPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
          <Link
            className="mb-5 inline-block text-[13px] font-semibold tracking-[0.14em] uppercase no-underline text-contrast"
            href="/foretag"
          >
            ← Alla agenter
          </Link>
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bokföringsagenten
          </div>
          <h1 className="mx-0 mt-0 mb-6 wrap-break-word font-display font-bold text-[clamp(30px,8vw,55px)] leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px]">
            Från första samtal till första godkända vecka.
          </h1>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] text-ink font-serif max-w-[520px] uppercase tracking-[0.03em] font-bold">
            Uppstarten tar ungefär en vecka. Så här går den till.
          </p>
          <a
            className="px-7 py-0 rounded-full inline-flex items-center min-h-13 bg-accent text-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
            href="#steg"
          >
            Följ stegen ↓
          </a>
        </div>
      </div>
      <div className="mx-auto my-0 p-10 max-w-[1000px] box-border" id="steg">
        <div className="px-0 pt-12 pb-6 relative flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Kartläggning
            </h2>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-6 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Genomgång</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Vi går igenom ert företag, era rutiner och ert bokförings&shy;program.
              </p>
            </div>
            <div className="reveal-up p-6 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Regelbok</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Kontoval, leverantörer, momssatser och beloppsgränser dokumenteras. Det blir Veras instruktioner.
              </p>
            </div>
            <div className="reveal-right p-6 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                Befintligt program
              </h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Kontoplan och historik ligger kvar i Fortnox, Bokio, Spiris eller Visma eEkonomi.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Anslutning
            </h2>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Bank</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Nya transaktioner hämtas automatiskt och visas i VeraAI-appen tillsammans med det som väntar på er.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Underlag</h3>
              <p className="mx-0 mt-0 mb-2.5 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Fakturor, kvitton och kontoutdrag laddas upp i appen. Ni väljer vad som delas.
              </p>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Varje steg loggas från första dagen.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Testmånad
            </h2>
          </div>
          <div className="reveal-left p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border wrap-break-word">
            <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
              Vera arbetar med er riktiga bokföring. Varje rättelse förbättrar regelboken, så träffsäkerheten ökar vecka
              för vecka.
            </p>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">4</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Arbetssätt
            </h2>
          </div>
          <div className="reveal-right p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border wrap-break-word">
            <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
              Efter testmånaden väljer ni nivå: granska varje post, eller godkänn hela veckan samlat. Nivån kan ändras
              när som helst.
            </p>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Veckorytm
            </h2>
          </div>
          <div className="reveal-left p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border wrap-break-word">
            <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
              I början av veckan samlas underlagen in, under veckan förbereds bokföringen och i slutet av veckan gör ni
              genomgången.
            </p>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">6</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Utbyggnad
            </h2>
          </div>
          <div className="reveal-right p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border wrap-break-word">
            <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
              Fakturering, moms, lön och bokslut kan läggas till när den löpande bokföringen är på plats.
            </p>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 pt-6 pb-12 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">7</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(26px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Ägna tiden åt det som växer
            </h2>
          </div>
          <div className="reveal-left p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border wrap-break-word">
            <p className="mx-0 mt-0 mb-4 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
              Varje förslag kommer med en förklaring, så att ni förstår bokföringen bättre för varje vecka.
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
                <span className="text-[14px] font-medium tracking-[0.04em] uppercase">Frågor vid osäkerhet</span>
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
                <span className="text-[14px] font-medium tracking-[0.04em] uppercase">Fullständig logg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="reveal-up mx-0 mt-0 mb-4 font-display font-bold text-[40px] tracking-[0.01em] uppercase">
            Redo att börja?
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Boka en demo så tar vi fram en plan för uppstarten hos er.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link
              className="px-8 py-0 rounded-full inline-flex items-center min-h-13 bg-page text-contrast no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/priser"
            >
              Se priser
            </Link>
            <Link
              className="px-8 py-0 rounded-full inline-flex items-center min-h-13 border-[1.5px] border-ink-inverse text-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
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
