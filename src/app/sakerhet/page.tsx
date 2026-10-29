import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Säkerhet",
  description:
    "Vera förbereder och motiverar. Inget förs in i ert bokförings­program förrän ni har godkänt, per post eller en gång i veckan, oavsett arbetssätt.",
};

export default function SakerhetPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-22 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Säkerhet
          </div>
          <h1 className="mx-0 mt-0 mb-6 font-display font-bold text-[clamp(32px,8vw,55px)] leading-[1.04] tracking-[0.01em] uppercase w-full max-w-[1000px] wrap-break-word">
            Ni har sista ordet.
          </h1>
          <p className="mx-auto my-0 text-[17px] leading-[1.6] text-ink font-serif max-w-[600px] uppercase tracking-[0.03em] font-bold">
            Vera förbereder och motiverar. Inget förs in i ert bokförings&shy;program förrän ni har godkänt, per post
            eller en gång i veckan, oavsett arbetssätt.
          </p>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border">
          <h2
            className="mx-0 mt-0 mb-10 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word"
            id="skydd"
          >
            Så här skyddar vi er
          </h2>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]">
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Godkännande</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Inget förs in i era system och inget skickas iväg utan ert klartecken.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Tekniska spärrar</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Vera kan bara utföra en fast uppsättning åtgärder. Kontrollerna som stoppar fel ligger utanför det
                  Vera själv kan ändra.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Regelbok</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Varje företag har en egen regelbok. Det som inte täcks av en regel blir en fråga.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Loggning</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Vad som gjordes, när och på vilket underlag.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Behörighet</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Vera ser bara de konton och system ni kopplar in.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-page min-w-0 wrap-break-word">
              <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0">
                <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Befintliga system</div>
                <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                  Vera arbetar i era nuvarande program.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 pt-20 pb-0 max-w-[1200px] box-border">
        <h2 className="mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
          Per agent
        </h2>
        <p className="mx-0 mt-0 mb-10 max-w-[640px] font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
          Principen är densamma. Tillämpningen skiljer sig.
        </p>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-surface min-w-0 wrap-break-word">
            <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="min-w-0">
              <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Bokföring</div>
              <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                Införs i bokförings&shy;programmet först efter godkännande.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-surface min-w-0 wrap-break-word">
            <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="min-w-0">
              <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Trender och strategi</div>
              <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                Förslag och råd med underlag, aldrig egna åtgärder.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-surface min-w-0 wrap-break-word">
            <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="min-w-0">
              <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Leverantörer</div>
              <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                Ingen kontakt utan godkännande. Avtal och inköp sköter ni.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-2xl flex items-start bg-surface min-w-0 wrap-break-word">
            <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="min-w-0">
              <div className="mb-1.5 font-semibold text-[14px] tracking-[0.08em] uppercase">Privatpersoner</div>
              <div className="font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
                Läsbehörighet till konton. Inget flyttas eller bokas utan ditt ja.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border">
        <h2
          className="mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word"
          id="data"
        >
          Era uppgifter
        </h2>
        <p className="mx-0 mt-0 mb-6 max-w-[640px] font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
          Ägande, lagring och skydd.
        </p>
        <div className="border-t border-t-line">
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Ägande
            </div>
            <div className="flex-[2_1_360px] min-w-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Uppgifterna och regelboken tillhör ert företag och används bara för er.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              AI-träning
            </div>
            <div className="flex-[2_1_360px] min-w-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Vera bygger på Claude från Anthropic och används via Anthropics tjänst för företag. Enligt villkoren
              används uppgifterna inte för att träna AI-modeller.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Skydd
            </div>
            <div className="flex-[2_1_360px] min-w-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Kryptering vid överföring och lagring. Egna konton med tvåstegs&shy;verifiering och behörigheter per
              person.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Lagringstid
            </div>
            <div className="flex-[2_1_360px] min-w-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Loggar sparas så länge tjänsten används och raderas när kontot avslutas. Bokföringens underlag finns kvar
              i ert bokförings&shy;program, där de enligt bokföringslagen ska sparas i sju år.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              GDPR
            </div>
            <div className="flex-[2_1_360px] min-w-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Ett personuppgifts&shy;biträdes&shy;avtal tecknas när Vera hanterar personuppgifter åt er.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-22 gap-12 max-w-[1200px] box-border flex flex-wrap items-start">
          <div className="flex-[1_1_300px] min-w-0">
            <h2
              className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word"
              id="avgransning"
            >
              Vera är
            </h2>
            <p className="m-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Ett stöd som förbereder, kontrollerar och förklarar.
            </p>
          </div>
          <div className="flex-[1_1_300px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
              Vera är inte
            </h2>
            <p className="m-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Revisor eller juridiskt ansvarig. Företaget, genom styrelsen eller ägaren, ansvarar för bokföringen och
              besluten. Vera ger inga råd om enskilda värdepapper.
            </p>
          </div>
          <div className="flex-[1_1_300px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
              Vid fel
            </h2>
            <p className="m-0 font-serif text-[17px] leading-[1.6] text-ink uppercase tracking-[0.03em]">
              Rättelsen sparas i regelboken. Har en post redan bokförts görs en rättelsepost som godkänns som vanligt,
              och allt syns i loggen.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold text-[clamp(28px,6vw,40px)] tracking-[0.01em] uppercase wrap-break-word">
            Frågor om säkerhet?
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Vi går igenom hur era uppgifter hanteras.
          </p>
          <Link
            className="btn btn--primary theme-inverse"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
      </div>
    </>
  );
}
