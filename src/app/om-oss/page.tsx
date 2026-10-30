import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Vera Labs AB är ett AI-bolag från Stockholm som bygger VeraAI. Idén föddes i en tunnelbanekiosk, en natt när ett bokslut tog sexton timmar.",
};

export default function OmOssPage() {
  return (
    <>
      {/* Samma layout som startsidan (2026-10-30): mörkt helskärms-hero bakom header-pillen, sedan en skärm
          per sektion som växlar mellan sidbakgrund och kortyta utan streck emellan. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 w-full max-w-[1200px] box-border">
          <div className="max-w-[760px]">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              Om oss
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,5.5vw,56px)] leading-[1.05] wrap-break-word text-snow">
              Pappers&shy;arbetet ska aldrig få stoppa ett bra företag.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[560px]">
              Vera Labs AB är ett AI-bolag från Stockholm. Vi bygger VeraAI: agenter som tar hand om allt det
              administrativa, så att den som driver företaget kan göra just det.
            </p>
            <div className="gap-3 flex flex-wrap">
              <a className="btn btn--primary theme-dark" href="#historia">
                Läs historien
              </a>
              <Link className="btn btn--secondary theme-dark" href="/#kontakt">
                Boka en demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="ide">
        <div className="mx-auto my-0 px-10 py-20 gap-12 w-full max-w-[1200px] box-border flex flex-wrap items-start reveal-stagger">
          <div className="flex-[1_1_400px] min-w-0">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Vår idé
            </div>
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Varför Vera finns.
            </h2>
          </div>
          <div className="gap-4.5 flex-[1_1_480px] min-w-0 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Småföretag har haft två val: sköta bokföringen själva, på kvällar och helger, eller anlita en
              redovisningskonsult för uppemot 1 000 kr i timmen.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Vi byggde <b>Vera</b> som det tredje valet. Hon tar bokföringen från första transaktionen till färdigt
              bokslut och visar varför varje post hamnar där den gör. Är du ny som företagare får du en kollega som
              också lär dig.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20"
        id="historia"
      >
        <div className="max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Vår historia
          </div>
          <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Sexton timmar i en tunnelbanekiosk
          </h2>
        </div>
        <div className="mt-14 gap-14 flex flex-wrap items-center reveal-stagger">
          <div className="flex-[1_1_420px] min-w-0">
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Klockan var ett på natten när vi till slut låste dörren. Min vän hade suttit med årets bokslut sedan nio
              på morgonen, med tolv pärmar uppslagna bredvid kassan, och tagit emot kunder mellan varven.
            </p>
          </div>
          <div className="p-7 gap-3 rounded-card flex-[1_1_380px] min-w-0 min-h-[340px] aspect-[4/3] border-2 border-dashed border-line-soft bg-surface-muted flex flex-col items-center justify-center box-border text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 5h16v14H4z M4 15l4-4 4 4 3-3 5 5 M15.5 9.5h.01"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-contrast">Plats för bild</div>
            <div className="text-[14px] leading-[1.5] text-ink-soft max-w-[300px]">
              Ett porträtt av dig, gärna i en arbetsmiljö. Kunden vill se vem som står bakom Vera.
            </div>
          </div>
        </div>
        <div className="mt-16 gap-14 flex flex-wrap items-start reveal-stagger">
          <div className="p-7 gap-3 rounded-card flex-[1_1_380px] min-w-0 min-h-[340px] aspect-[4/5] border-2 border-dashed border-line-soft bg-surface-muted flex flex-col items-center justify-center box-border text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 5h16v14H4z M4 15l4-4 4 4 3-3 5 5 M15.5 9.5h.01"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-contrast">Plats för bild</div>
            <div className="text-[14px] leading-[1.5] text-ink-soft max-w-[300px]">
              Pärmar, en kassa eller en kiosk i tunnelbanan. Undvik något som visar vilket företag det är.
            </div>
          </div>
          <div className="gap-5.5 flex-[1_1_420px] min-w-0 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Hans familj driver kiosker i tunnelbanan, och under gymnasiet jobbade jag där. Den sommarkvällen hade jag
              kommit för att skjutsa hem honom. I stället blev jag sittande och såg honom knappa in rad efter rad från
              skattekontot.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Jag kände igen det. Jag har alltid velat driva företag, och varje gång jag har försökt har jag fastnat på
              samma ställe: bokföring, moms och deklarationer. Det var aldrig idéerna som tog stopp, utan allt runt
              omkring dem.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
              Det här borde en AI kunna göra, sa jag. Han var inte övertygad, och han hade tre skäl:
            </p>
            <ul className="m-0 py-0 pr-0 pl-5 gap-3.5 list-none flex flex-col border-l-[3px] border-l-accent">
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] text-ink font-sans">
                <span
                  className="font-display font-bold uppercase tracking-[0.01em] text-accent text-[22px] leading-[1.2]"
                  aria-hidden="true"
                >
                  ”
                </span>
                <span>
                  Den vet inte hur just <b>vi</b> bokför.
                </span>
              </li>
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] text-ink font-sans">
                <span
                  className="font-display font-bold uppercase tracking-[0.01em] text-accent text-[22px] leading-[1.2]"
                  aria-hidden="true"
                >
                  ”
                </span>
                <span>Någon måste ändå granska allt den gör.</span>
              </li>
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] text-ink font-sans">
                <span
                  className="font-display font-bold uppercase tracking-[0.01em] text-accent text-[22px] leading-[1.2]"
                  aria-hidden="true"
                >
                  ”
                </span>
                <span>Och sedan ska allt ändå skrivas in i bokföringsprogrammet för hand.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 gap-6 flex flex-wrap reveal-stagger">
          <div className="p-7 rounded-card flex-[1_1_200px] min-w-0 bg-surface box-border text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">12</div>
            <div className="mt-2.5 text-[16px] leading-[1.5] text-ink font-sans">
              pärmar
            </div>
          </div>
          <div className="p-7 rounded-card flex-[1_1_200px] min-w-0 bg-surface box-border text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">16 h</div>
            <div className="mt-2.5 text-[16px] leading-[1.5] text-ink font-sans">
              vid datorn
            </div>
          </div>
          <div className="p-7 rounded-card flex-[1_1_200px] min-w-0 bg-surface box-border text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">01:00</div>
            <div className="mt-2.5 text-[16px] leading-[1.5] text-ink font-sans">
              när dörren låstes
            </div>
          </div>
        </div>
        <div className="mx-0 mt-16 mb-0 gap-5.5 max-w-[760px] flex flex-col reveal">
          <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
            Tre rimliga invändningar. Alla tre gick att lösa. De blev ritningen till Vera.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
            Målet är enkelt: ett litet företag ska ha samma ordning i ekonomin som ett stort, utan att någon behöver
            sitta kvar till ett på natten.
          </p>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Svaren
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Tre invändningar. Tre svar.
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] reveal-stagger">
            <div className="p-7 rounded-card bg-page border border-line min-w-0 box-border">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">01</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Egen regelbok
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Vera lär sig hur just ditt företag bokför, och följer det till punkt och pricka.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line min-w-0 box-border">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Granskning
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Inget förs in utan ditt godkännande, och varje steg loggas.
              </p>
            </div>
            <div className="p-7 rounded-card bg-page border border-line min-w-0 box-border">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Direkt till programmet
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                I automatiskt läge för Vera in den godkända bokföringen åt dig. Inget skrivs in för hand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center scroll-mt-20"
        id="grundaren"
      >
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Idag
          </div>
          <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Där vi är nu.
          </h2>
        </div>
        <div className="gap-5.5 flex flex-col max-w-[760px] reveal-stagger">
          <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
            Efter [X] månaders utveckling lanserar vi Vera med den första agenten, Bokföringsagenten. Fler agenter är
            på väg.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
            Jag är ingen utbildad ekonom, och det är en del av poängen. Vera är byggd för att förklara, inte bara
            utföra, och för att du ska bestämma hur mycket hon sköter själv.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] text-ink font-sans">
            För företagare som hellre lägger tiden på kunderna än på blanketterna.
          </p>
        </div>
        <div className="mt-9 pt-6 gap-4 max-w-[760px] border-t border-t-line flex items-center reveal">
          <div className="rounded-full w-14 h-14 bg-chip flex-none" />
          <div>
            <div className="text-[15px] font-bold tracking-[0.1em] uppercase">Hugo Lindholmer</div>
            <div className="mt-0.5 text-[14px] text-ink-soft tracking-[0.06em] uppercase">Medgrundare, Vera Labs AB</div>
            <div className="mt-1.5 text-[14px] text-ink-soft font-sans">Tillsammans med Casper Engström, medgrundare.</div>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border flex flex-col items-center text-center reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Låt oss visa hur Vera skulle jobba hos dig.
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
            Vi går igenom en vecka med exempel från din verksamhet.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link className="btn btn--primary" href="/#kontakt">
              Boka en demo
            </Link>
            <Link className="btn btn--secondary" href="/agenter/bokforing">
              Läs om bokföringsagenten
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
