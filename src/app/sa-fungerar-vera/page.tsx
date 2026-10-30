import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så fungerar Vera",
  description:
    "Så fungerar Vera: ett team av AI-agenter som delar samma regelbok och samma data om ditt företag. Sju steg från uppstart till full kontroll.",
};

export default function SaFungerarVeraPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. De sju stegen ligger
          i en gemensam sektion med en rad per steg. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar Vera
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Ett team som kan ditt företag utan och innan.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
              Varje agent har sitt område. Alla utgår från samma regelbok och samma data, och blir träffsäkrare för
              varje vecka de jobbar med dig.
            </p>
            <div className="gap-3 flex flex-wrap">
              <a className="btn btn--primary theme-dark" href="#steg">
                Följ stegen
              </a>
              <Link className="btn btn--secondary theme-dark" href="/foretag">
                Alla agenter
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
            Från första mötet till full kontroll.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Sju steg som visar hur agenterna jobbar tillsammans med dig.
          </p>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">1</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Uppstart
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Verksamheten</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Vad du säljer, till vem och vart du är på väg. Det är utgångspunkten för varje agent.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Systemen</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Bank, bokförings&shy;program och kassa kopplas in. Du byter ingenting.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Behörigheter</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Du bestämmer exakt vilka uppgifter som delas.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">2</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Löpande arbete
            </h2>
            <Link
              className="ml-auto inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/bokforing"
            >
              Bokföringsagenten →
            </Link>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Rutinuppgifter</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Det som återkommer varje vecka, som bokföringen, sköts av sig självt.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                Grad av automation
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Granska varje steg, eller låt agenterna jobba fritt inom gränser du satt.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">3</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Beslutsstöd
            </h2>
            <Link
              className="ml-auto inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/strategikonsulten"
            >
              Strategikonsulten →
            </Link>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Inför prisändringar, inköp eller nya satsningar räknar Vera på alternativen med dina egna siffror.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">4</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Omvärldsbevakning
            </h2>
            <Link
              className="ml-auto inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/trendovervakaren"
            >
              Trendövervakaren →
            </Link>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Förändringar i efterfrågan fångas tidigt och vägs mot ditt sortiment.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">5</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Inköp
            </h2>
            <Link
              className="ml-auto inline-block text-[13px] font-bold tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/leverantorsagenten"
            >
              Leverantörsagenten →
            </Link>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sökning</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Grossister, tillverkare och andra källor letas fram och jämförs sida vid sida.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Exempel</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                En klädbutik vill ta in ett nytt märke. Vera hittar var det kan köpas in och visar villkoren sida vid
                sida, samma eftermiddag.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">6</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Samverkan
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Agenterna pratar med varandra. Bokföringen vet vad som säljer, trendbevakningen vad som efterfrågas, och
                strategin väger ihop båda.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Lärande</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Ändrar du ett förslag sparas ändringen i regelboken. Du behöver aldrig svara på samma fråga två gånger.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Ägarskap</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Regelboken är din. Nya instruktioner gäller från nästa uppgift.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 reveal">
          <div className="mb-6 gap-x-4 gap-y-2 flex flex-wrap items-baseline">
            <div className="font-display font-bold text-[clamp(28px,5vw,40px)] text-accent leading-none">7</div>
            <h2 className="m-0 font-display font-bold text-[clamp(22px,4vw,30px)] tracking-[0.01em] uppercase wrap-break-word">
              Kontroll
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Beslut</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Agenterna föreslår och motiverar. Besluten fattar du.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Insyn</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Varje steg loggas och kan granskas när du vill.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line box-border min-w-0 wrap-break-word">
              <h3 className="mx-0 mt-0 mb-2.5 text-[15px] font-bold tracking-[0.1em] uppercase">Integritet</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Det Vera lär sig om dig används bara för dig.
              </p>
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
            Se hur det skulle fungera hos dig.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Vi visar vilka agenter som ger dig mest tid tillbaka.
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
