import Link from "next/link";
import type { Metadata } from "next";
import { AGENTER, AgentCard } from "@/components/AgentCards";

export const metadata: Metadata = {
  title: "För företag",
  description:
    "Fyra AI-agenter som sköter bokföring, marknadsbevakning, strategi och leverantörer för ditt företag. Du godkänner, Vera gör jobbet.",
};

export default function ForetagPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              För företag
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Fyra specialister. Ett team. Ditt företag.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
              Varje agent är expert på sitt område och lär sig exakt hur ditt företag fungerar. Börja med den som ger
              dig mest tid tillbaka.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link className="btn btn--primary theme-dark" href="/priser">
                Se priser
              </Link>
              <Link className="btn btn--secondary theme-dark" href="/#kontakt">
                Boka en demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="agenter">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Teamet
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Specialister som delar samma bild av ditt företag.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
              Det Kassio Finance vet om dina siffror använder Strategikonsulten i sina råd. Ingen behöver förklara
              företaget två gånger.
            </p>
          </div>
          {/* Korten och deras texter ligger i components/AgentCards.tsx, som startsidans avslut också använder. */}
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] reveal-stagger">
            {AGENTER.map((agent) => (
              <AgentCard key={agent.href} agent={agent} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Så går det till
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Byggd runt ditt företag.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Agenterna anpassas efter hur du jobbar. Du anpassar dig inte efter dem.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] reveal-stagger">
          <div className="p-7 rounded-card bg-surface box-border">
            <div className="font-display font-bold text-[44px] text-accent leading-none">1</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Kartläggning</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Vi går igenom dina mål, rutiner och system tillsammans.
            </p>
          </div>
          <div className="p-7 rounded-card bg-surface box-border">
            <div className="font-display font-bold text-[44px] text-accent leading-none">2</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Konfiguration</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Varje agent får regler och gränser som passar dig. Inget mer, inget mindre.
            </p>
          </div>
          <div className="p-7 rounded-card bg-surface box-border">
            <div className="font-display font-bold text-[44px] text-accent leading-none">3</div>
            <h3 className="mx-0 mt-3 mb-2.5 text-[16px] font-semibold tracking-[0.1em] uppercase">Drift</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Agenterna arbetar varje dag och blir träffsäkrare för varje vecka.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Priser
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Ett pris per månad. Inga timmar att räkna.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Varje agent har ett pris per månad. Väljer du två eller fler blir totalpriset 15 % billigare.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link className="btn btn--primary" href="/priser">
              Se priser
            </Link>
            <Link className="btn btn--secondary" href="/#kontakt">
              Boka en demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
