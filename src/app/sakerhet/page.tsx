import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Säkerhet",
  description:
    "Säkerhet hos Vera: inget bokförs utan ditt godkännande, tekniska spärrar, full loggning och uppgifter som aldrig tränar AI-modeller.",
};

export default function SakerhetPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Säkerhet
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Du har sista ordet.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[600px]">
              Vera förbereder och motiverar. Inget förs in i ditt bokförings&shy;program förrän du godkänt, per post
              eller en gång i veckan. Oavsett läge, utan undantag.
            </p>
            <div className="gap-3 flex flex-wrap">
              <a className="btn btn--primary theme-dark" href="#skydd">
                Så skyddar vi dig
              </a>
              <Link className="btn btn--secondary theme-dark" href="/#kontakt">
                Boka en demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="skydd">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Skydd
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Så här skyddar vi dig.
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] reveal-stagger">
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Godkännande</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Inget förs in i dina system och inget skickas iväg utan ditt klartecken.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Tekniska spärrar</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Vera kan bara utföra en fast lista med åtgärder. Spärrarna som stoppar fel ligger utanför det Vera
                  själv kan ändra. Det är teknik, inte en rutin.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Regelbok</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Varje företag har sin egen regelbok. Det som ingen regel täcker blir en fråga till dig, aldrig en
                  gissning.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Loggning</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Vad som gjordes, när, och på vilket underlag. Alltid.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Behörighet</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Vera ser bara de konton och system du kopplar in.
                </div>
              </div>
            </div>
            <div className="p-7 gap-3.5 rounded-card flex items-start bg-page border border-line min-w-0 wrap-break-word">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Befintliga system</div>
                <div className="text-[16px] leading-[1.55] text-ink font-sans">
                  Vera jobbar i dina nuvarande program. Du byter ingenting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Per agent
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Per agent
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Samma princip för alla agenter. Så här ser den ut i praktiken.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] reveal-stagger">
          <div className="p-7 gap-3.5 rounded-card flex items-start bg-surface min-w-0 wrap-break-word">
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
              <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Bokföring</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Förs in i bokförings&shy;programmet först när du godkänt.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-card flex items-start bg-surface min-w-0 wrap-break-word">
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
              <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Trender och strategi</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Förslag och råd med underlag. Aldrig egna åtgärder.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-card flex items-start bg-surface min-w-0 wrap-break-word">
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
              <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Leverantörer</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Ingen kontakt utan ditt godkännande. Avtal och inköp sköter du.
              </div>
            </div>
          </div>
          <div className="p-7 gap-3.5 rounded-card flex items-start bg-surface min-w-0 wrap-break-word">
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
              <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Privatpersoner</div>
              <div className="text-[16px] leading-[1.55] text-ink font-sans">
                Läsbehörighet till konton, aldrig mer. Inget flyttas eller bokas utan ditt ja.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="data">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Uppgifter
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Dina uppgifter
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Vem som äger dem, var de ligger och hur de skyddas.
          </p>
        </div>
        <div className="border-t border-t-line reveal-stagger">
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Ägande
            </div>
            <div className="flex-[2_1_360px] min-w-0 text-[16px] leading-[1.55] text-ink font-sans">
              Uppgifterna och regelboken tillhör ditt företag och används bara för dig.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              AI-träning
            </div>
            <div className="flex-[2_1_360px] min-w-0 text-[16px] leading-[1.55] text-ink font-sans">
              Vera bygger på Claude från Anthropic och används via Anthropics tjänst för företag. Enligt villkoren
              används dina uppgifter inte för att träna AI-modeller.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Skydd
            </div>
            <div className="flex-[2_1_360px] min-w-0 text-[16px] leading-[1.55] text-ink font-sans">
              Kryptering vid överföring och lagring. Egna konton med tvåstegs&shy;verifiering, och behörigheter per
              person så att var och en bara ser det hen ska.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              Lagringstid
            </div>
            <div className="flex-[2_1_360px] min-w-0 text-[16px] leading-[1.55] text-ink font-sans">
              Loggar sparas så länge du använder tjänsten och raderas när du avslutar kontot. Bokföringens underlag
              finns kvar i ditt bokförings&shy;program, där bokföringslagen kräver att de sparas i sju år.
            </div>
          </div>
          <div className="px-0 py-6 gap-y-2 gap-x-8 flex flex-wrap border-b border-b-line">
            <div className="flex-[1_1_240px] max-w-[320px] font-bold text-[14px] tracking-[0.08em] uppercase leading-[1.5]">
              GDPR
            </div>
            <div className="flex-[2_1_360px] min-w-0 text-[16px] leading-[1.55] text-ink font-sans">
              Ett personuppgifts&shy;biträdes&shy;avtal tecknas när Vera hanterar personuppgifter åt dig.
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="avgransning">
        <div className="mx-auto my-0 px-10 py-20 gap-12 w-full max-w-[1200px] box-border flex flex-wrap items-start reveal-stagger">
          <div className="flex-[1_1_300px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
              Vera är
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              En kollega som förbereder, kontrollerar och förklarar.
            </p>
          </div>
          <div className="flex-[1_1_300px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
              Vera är inte
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Revisor eller juridiskt ansvarig. Företaget, genom styrelsen eller ägaren, ansvarar för bokföringen och
              besluten. Vera ger inga råd om enskilda värdepapper.
            </p>
          </div>
          <div className="flex-[1_1_300px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold text-[clamp(28px,6vw,42px)] leading-[1.05] tracking-[0.01em] uppercase wrap-break-word">
              Vid fel
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Rättelsen sparas i regelboken, så att samma fel inte uppstår igen. Är posten redan bokförd görs en
              rättelsepost som du godkänner som vanligt. Allt syns i loggen.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Frågor om säkerhet?
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Vi går igenom exakt hur dina uppgifter hanteras. Fråga vad du vill.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link className="btn btn--primary" href="/#kontakt">
              Boka en demo
            </Link>
            <Link className="btn btn--secondary" href="/vanliga-fragor">
              Vanliga frågor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
