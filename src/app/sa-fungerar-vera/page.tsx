import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så fungerar Vera",
  description:
    "Varje agent har ett eget område. Alla utgår från samma regelbok och samma data, och blir mer träffsäkra ju längre de arbetar med er.",
};

export default function SaFungerarVeraPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Så fungerar Vera
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold text-[clamp(32px,8vw,55px)] leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px] wrap-break-word">
            Ett team av agenter med en gemensam bild av ert företag.
          </h1>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] text-ink font-serif max-w-[560px] uppercase tracking-[0.03em] font-bold">
            Varje agent har ett eget område. Alla utgår från samma regelbok och samma data, och blir mer träffsäkra ju
            längre de arbetar med er.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <a
              className="btn btn--primary"
              href="#steg"
            >
              Följ stegen
            </a>
            <Link
              className="btn btn--secondary"
              href="/foretag"
            >
              Alla agenter
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 p-10 max-w-[1000px] box-border" id="steg">
        <div className="px-0 pt-12 pb-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Uppstart
            </h2>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Verksamheten</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Vad ni säljer, till vem och vart ni är på väg. Det är utgångspunkten för varje agent.
              </p>
            </div>
            <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Systemen</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Bank, bokförings&shy;program och kassa kopplas in. Inget behöver bytas ut.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Behörigheter</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Ni bestämmer vilka uppgifter som delas.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Löpande arbete
            </h2>
            <Link
              className="mt-3 inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/bokforing"
            >
              Bokföringsagenten →
            </Link>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Rutinuppgifter</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Det som återkommer varje vecka, som bokföringen, hanteras automatiskt.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                Grad av automation
              </h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Granska varje steg, eller låt agenterna arbeta inom gränser som ni har satt.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Beslutsstöd
            </h2>
            <Link
              className="mt-3 inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/strategikonsulten"
            >
              Strategikonsulten →
            </Link>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Inför prisändringar, inköp eller nya satsningar tar Vera fram underlag från era egna siffror.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">4</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Omvärldsbevakning
            </h2>
            <Link
              className="mt-3 inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/trendovervakaren"
            >
              Trendövervakaren →
            </Link>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Förändringar i efterfrågan fångas tidigt och vägs mot ert sortiment.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Inköp
            </h2>
            <Link
              className="mt-3 inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/leverantorsagenten"
            >
              Leverantörsagenten →
            </Link>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Sökning</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Grossister, tillverkare och andra källor letas fram och jämförs.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Exempel</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                En klädbutik vill ta in ett nytt märke. Vera hittar var märket kan köpas in och visar villkoren sida vid
                sida.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 py-6 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">6</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Samverkan
            </h2>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Agenterna delar information. Bokföringen visar vad som säljer, trendbevakningen vad som efterfrågas, och
                strategin väger ihop båda.
              </p>
            </div>
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Lärande</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                När ni ändrar ett förslag sparas ändringen i regelboken. Samma fråga behöver aldrig besvaras två gånger.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Ägarskap</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Regelboken tillhör er. Nya instruktioner gäller från nästa uppgift.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
        <div className="px-0 pt-6 pb-12 flex flex-col items-center">
          <div className="reveal-up mb-7 text-center">
            <div className="font-display font-bold text-[64px] text-accent leading-none">7</div>
            <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase wrap-break-word">
              Kontroll
            </h2>
          </div>
          <div className="gap-5 flex flex-wrap justify-center w-full">
            <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Beslut</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Agenterna föreslår och motiverar. Besluten fattar ni.
              </p>
            </div>
            <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Insyn</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Varje steg loggas och kan granskas.
              </p>
            </div>
            <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Integritet</h3>
              <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                Det Vera lär sig om er används bara för er.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="reveal-up mx-0 mt-0 mb-4 font-display font-bold text-[40px] tracking-[0.01em] uppercase">
            Se hur det skulle fungera hos er.
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Vi visar vilka agenter som avlastar er mest.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link
              className="btn btn--primary theme-inverse"
              href="/priser"
            >
              Se priser
            </Link>
            <Link
              className="btn btn--secondary theme-inverse"
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
