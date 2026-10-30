import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanliga frågor",
  description:
    "Raka svar på det vanligaste om Vera: uppstart, data, ansvar och pris. Saknas din fråga svarar vi inom en arbetsdag.",
};

export default function VanligaFragorPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan frågorna
          på kortyta och en kontaktsektion sist. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
            Vanliga frågor
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
            Raka svar.
          </h1>
          <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
            Det folk oftast undrar om uppstart, data, ansvar och pris. Saknas din fråga? Skriv till oss, så svarar vi
            inom en arbetsdag.
          </p>
          <div className="gap-2.5 flex flex-wrap max-w-[820px]">
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
      </div>
      <div className="bg-surface box-border">
        <div className="mx-auto my-0 px-10 py-10 w-full max-w-[900px] box-border">
        <div className="py-10 scroll-mt-20 reveal" id="start">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Uppstart
          </h2>
          <div className="border-t border-t-line">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Boka en demo. Sedan väljer vi agenter tillsammans och kopplar Vera till dina system. Uppstarten tar
                ungefär en vecka, sedan börjar testmånaden.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Kan jag börja med en agent?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Ja, de flesta gör det. Börja där det svider mest och lägg till fler när du vill.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Måste jag byta program?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Vera jobbar i de program du redan har.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Hur lär sig Vera mitt företag?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Genom en regelbok vi skriver tillsammans. Varje rättelse du gör sparas, så att Vera gör rätt nästa
                gång.
              </p>
            </details>
          </div>
        </div>
        <div className="py-10 scroll-mt-20 reveal" id="data">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Du. Dina uppgifter används aldrig för andra kunder och tränar inga AI-modeller.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Bara det du kopplar in. Inget annat.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Loggar sparas så länge du använder tjänsten och raderas när du avslutar kontot.
              </p>
            </details>
          </div>
        </div>
        <div className="py-10 scroll-mt-20 reveal" id="program">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Kontoutdrag, kvitton, fakturor och Z-rapporter. Som fil, foto eller direkt från banken.
              </p>
            </details>
          </div>
        </div>
        <div className="py-10 scroll-mt-20 reveal" id="ansvar">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Ansvar
          </h2>
          <div className="border-t border-t-line">
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Kan Vera bokföra utan mig?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Inget förs in i bokförings&shy;programmet utan ditt godkännande. Oavsett läge.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Det blir en fråga till dig. Posten väntar tills du svarat. Vera gissar aldrig.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">Du. Alltid.</p>
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Revisionen gör en revisor, och ansvaret för bokföringen ligger hos företaget. Vera gör allt arbete
                däremellan.
              </p>
            </details>
          </div>
        </div>
        <div className="py-10 scroll-mt-20 reveal" id="pris">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Demon är gratis. Testmånaden kostar en handläggningsavgift som du får tillbaka om du inte är nöjd.
                Därefter ett fast månadspris per agent.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Sitter jag fast i ett avtal?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Du betalar per månad och säger upp med XXX uppsägningstid. När kontot avslutas raderas dina
                uppgifter.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Vad händer om jag inte är nöjd?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Vi justerar agenten tills den gör som du vill. Räcker inte det får du handläggningsavgiften tillbaka.
              </p>
            </details>
            <details className="faq border-b border-b-line">
              <summary className="px-0 py-5.5 gap-4 flex justify-between items-center text-[15px] font-bold tracking-[0.08em] uppercase">
                Måste jag fortsätta efter testmånaden?
                <span
                  className="faq-plus text-[24px] leading-none text-accent [transition:transform_.2s]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Vill du inte fortsätta börjar inget månadspris. Inga frågor.
              </p>
            </details>
          </div>
        </div>
        <div className="py-10 scroll-mt-20 reveal" id="privat">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Skapa ett konto, ange dina mål och koppla dina appar. Tio minuter, sedan är du igång.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Ett månadspris per tjänst, inklusive moms. Säg upp när du vill.
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
              <p className="mx-0 mt-0 mb-5.5 text-[18px] leading-[1.6] text-ink font-sans max-w-[760px]">
                Nej. Vera hjälper dig med budget och sparande, aldrig med enskilda aktier eller fonder.
              </p>
            </details>
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
            Hittade du inte svaret?
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Skriv till oss, så svarar vi inom en arbetsdag.
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
