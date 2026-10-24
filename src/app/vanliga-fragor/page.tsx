import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanliga frågor",
  description: "Det vanligaste om uppstart, data, ansvar och pris. Hittar ni inte svaret, kontakta oss.",
};

export default function VanligaFragorPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-16 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Vanliga frågor
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold text-[clamp(32px,8vw,55px)] leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px] wrap-break-word">
            Frågor och svar.
          </h1>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] text-ink font-serif max-w-[560px] uppercase tracking-[0.03em] font-bold">
            Det vanligaste om uppstart, data, ansvar och pris. Hittar ni inte svaret, kontakta oss.
          </p>
          <div className="gap-2.5 flex flex-wrap justify-center max-w-[820px]">
            <a className="chip-link" href="#start">
              Uppstart
            </a>
            <a className="chip-link" href="#data">
              Data och säkerhet
            </a>
            <a className="chip-link" href="#program">
              Program och underlag
            </a>
            <a className="chip-link" href="#ansvar">
              Ansvar
            </a>
            <a className="chip-link" href="#pris">
              Pris
            </a>
            <a className="chip-link" href="#privat">
              Privatpersoner
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 pt-6 pb-22 max-w-[900px] box-border">
        <div className="pt-14 scroll-mt-6" id="start">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Uppstart
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Hur kommer vi igång?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Efter en demo väljer vi agenter tillsammans och kopplar Vera till era system. Uppstarten tar ungefär en
                vecka, sedan börjar testmånaden.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Kan vi börja med en agent?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Ja. Börja där det tar mest tid och bygg ut efter hand.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Måste vi byta program?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej. Vera arbetar i era befintliga system.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Hur lär sig Vera vårt företag?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Genom en regelbok som tas fram tillsammans med er. Varje rättelse sparas, så att Vera gör rätt nästa
                gång.
              </p>
            </details>
          </div>
        </div>
        <div className="pt-14 scroll-mt-6" id="data">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Data och säkerhet
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vem äger uppgifterna?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Ert företag. De används aldrig för andra kunder.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad får Vera se?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Bara det ni kopplar in.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Sparar Vera något?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Loggar sparas så länge ni använder tjänsten och raderas när kontot avslutas.
              </p>
            </details>
          </div>
        </div>
        <div className="pt-14 scroll-mt-6" id="program">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Program och underlag
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vilka bokförings&shy;program stöds?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Fortnox, Bokio, Spiris och Visma eEkonomi.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vilka underlag kan läsas?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Kontoutdrag, kvitton, fakturor och Z-rapporter.
              </p>
            </details>
          </div>
        </div>
        <div className="pt-14 scroll-mt-6" id="ansvar">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Ansvar
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Kan Vera bokföra utan oss?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej. Allt kräver ert godkännande innan det förs in i bokförings&shy;programmet.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad händer vid osäkerhet?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Det blir en fråga till er. Berörda poster väntar på svar.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vem fattar besluten?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">Ni.</p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Ersätter Vera revisorn?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej. Företaget ansvarar för bokföringen och revisionen görs av en revisor.
              </p>
            </details>
          </div>
        </div>
        <div className="pt-14 scroll-mt-6" id="pris">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Pris
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad kostar det?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Demon är kostnadsfri. Testmånaden kostar en handläggningsavgift, därefter betalas ett engångspris per
                agent.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Finns det något abonnemang att säga upp?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej. Vill ni sluta använda Vera avslutas kontot och uppgifterna raderas.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad händer om vi inte är nöjda?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Vi justerar agenten. Räcker inte det betalas handläggningsavgiften tillbaka.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Måste vi fortsätta efter testmånaden?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej. Vill ni inte fortsätta köper ni inte agenten.
              </p>
            </details>
          </div>
        </div>
        <div className="pt-14 scroll-mt-6" id="privat">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(26px,5.5vw,36px)] leading-[1.05] wrap-break-word">
            Privatpersoner
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vilka tjänster finns?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Kalender och vardag, tränings- och kostråd samt privatekonomi och sparande.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Hur kommer jag igång?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Skapa ett konto, ange dina mål och koppla dina appar.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad kostar det?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Ett engångspris per tjänst, inklusive moms.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Ger Vera investeringsråd?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-serif max-w-[760px]">
                Nej, inga råd om enskilda aktier eller fonder.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="reveal-up mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,6vw,40px)] tracking-[0.01em] uppercase wrap-break-word">
            Hittade ni inte svaret?
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Kontakta oss, så återkommer vi inom en arbetsdag.
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
