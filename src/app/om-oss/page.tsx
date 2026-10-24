import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Vera Labs AB är ett AI-bolag från Stockholm. Vi utvecklar VeraAI, agenter som tar hand om det administrativa i mindre företag.",
};

export default function OmOssPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-18 pb-24 max-w-[1200px] box-border flex flex-col items-center text-center">
          <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Om oss
          </div>
          <h1 className="mx-0 mt-0 mb-6 wrap-break-word font-display font-bold uppercase tracking-[0.01em] text-[clamp(32px,8vw,56px)] leading-[1.04] w-full max-w-[1000px]">
            Pappers&shy;arbetet ska inte stoppa bra företag.
          </h1>
          <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em] font-bold">
            Vera Labs AB är ett AI-bolag från Stockholm. Vi utvecklar VeraAI, agenter som tar hand om det administrativa
            i mindre företag.
          </p>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line" id="ide">
        <div className="mx-auto my-0 px-10 py-22 gap-12 max-w-[1200px] box-border flex flex-wrap items-start">
          <div className="flex-[1_1_400px] min-w-0">
            <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6vw,42px)] leading-[1.05] wrap-break-word">
              Varför Vera finns
            </h2>
          </div>
          <div className="gap-4.5 flex-[1_1_480px] min-w-0 flex flex-col">
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Småföretag har i dag två val: att sköta bokföringen själva, ofta på kvällar och helger, eller att anlita
              en redovisningskonsult som kan kosta uppemot 1 000 kr i timmen.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Vi byggde <b>Vera</b> som ett tredje val. Hon tar redovisningen från första transaktion till färdig
              bokföring och visar varför varje post hamnar där den gör. Den som är ny som företagare får ett stöd som
              också lär ut.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 pt-24 pb-20 max-w-[1200px] box-border">
        <div className="mx-auto my-0 max-w-[760px] text-center">
          <div className="mx-auto mt-0 mb-5 px-3.5 py-1.5 rounded-full table bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Vår historia
          </div>
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,_7.5vw,_42px)] leading-[1.05] text-center wrap-break-word">
            Sexton timmar i en tunnelbanekiosk
          </h2>
        </div>
        <div className="mt-20 gap-14 flex flex-wrap items-center">
          <div className="flex-[1_1_420px] min-w-0">
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Klockan var ett på natten när vi till slut låste dörren. Min vän hade suttit med årets bokslut sedan nio
              på morgonen, med tolv pärmar uppslagna bredvid kassan, och tagit emot kunder mellan varven.
            </p>
          </div>
          <div className="p-7 gap-3 rounded-[20px] flex-[1_1_380px] min-w-0 min-h-[340px] aspect-[4/3] border-2 border-dashed border-line-soft bg-surface-muted flex flex-col items-center justify-center box-border text-center">
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
        <div className="mt-20 gap-14 flex flex-wrap items-start">
          <div className="p-7 gap-3 rounded-[20px] flex-[1_1_380px] min-w-0 min-h-[340px] aspect-[4/5] border-2 border-dashed border-line-soft bg-surface-muted flex flex-col items-center justify-center box-border text-center">
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
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Hans familj driver kiosker i tunnelbanan, och under gymnasiet jobbade jag där. Den sommarkvällen hade jag
              kommit för att skjutsa hem honom. I stället blev jag sittande och såg honom knappa in rad efter rad från
              skattekontot.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Jag kände igen det. Jag har alltid velat driva företag, och varje gång jag har försökt har jag fastnat på
              samma ställe: bokföring, moms och deklarationer. Det var aldrig idéerna som tog stopp, utan allt runt
              omkring dem.
            </p>
            <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
              Det här borde en AI kunna göra, sa jag. Han var inte övertygad, och han hade tre skäl:
            </p>
            <ul className="m-0 py-0 pr-0 pl-5 gap-3.5 list-none flex flex-col border-l-[3px] border-l-accent">
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
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
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                <span
                  className="font-display font-bold uppercase tracking-[0.01em] text-accent text-[22px] leading-[1.2]"
                  aria-hidden="true"
                >
                  ”
                </span>
                <span>Någon måste ändå granska allt den gör.</span>
              </li>
              <li className="gap-3.5 flex items-start text-[18px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
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
        <div className="mt-20 gap-6 flex flex-wrap">
          <div className="p-7 rounded-[20px] flex-[1_1_200px] min-w-0 bg-surface border border-line text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">12</div>
            <div className="mt-2.5 font-serif text-[16px] leading-[1.4] uppercase tracking-[0.03em] text-ink">
              pärmar
            </div>
          </div>
          <div className="p-7 rounded-[20px] flex-[1_1_200px] min-w-0 bg-surface border border-line text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">16 h</div>
            <div className="mt-2.5 font-serif text-[16px] leading-[1.4] uppercase tracking-[0.03em] text-ink">
              vid datorn
            </div>
          </div>
          <div className="p-7 rounded-[20px] flex-[1_1_200px] min-w-0 bg-surface border border-line text-center">
            <div className="font-display font-bold text-[56px] leading-none text-accent">01:00</div>
            <div className="mt-2.5 font-serif text-[16px] leading-[1.4] uppercase tracking-[0.03em] text-ink">
              när dörren låstes
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 mb-0 gap-5.5 max-w-[760px] text-center flex flex-col">
          <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em] text-center">
            Tre rimliga invändningar. Men alla tre gick att lösa, och de blev ritningen till Vera.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em] text-center">
            Målet är enkelt: ett litet företag ska ha samma ordning i ekonomin som ett stort, utan att någon behöver
            sitta kvar till ett på natten.
          </p>
        </div>
      </div>
      <div className="bg-surface-muted">
        <div className="mx-auto my-0 px-10 py-22 max-w-[1200px] box-border">
          <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7.5vw,42px)] leading-[1.05] wrap-break-word">
            Tre invändningar, tre svar
          </h2>
          <div className="mt-5 gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="p-7 rounded-[20px] bg-surface border border-line min-w-0">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">01</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Egen regelbok
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Vera lär sig hur just ert företag bokför, och följer det.
              </p>
            </div>
            <div className="p-7 rounded-[20px] bg-surface border border-line min-w-0">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Granskning
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Inget förs in utan ert godkännande, och varje steg loggas.
              </p>
            </div>
            <div className="p-7 rounded-[20px] bg-surface border border-line min-w-0">
              <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
              <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[24px] leading-[1.1]">
                Direkt till programmet
              </h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                I automatiskt läge förs den godkända bokföringen in åt er.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[760px] box-border" id="grundaren">
        <h2 className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6vw,42px)] leading-[1.05]">
          Där vi är nu
        </h2>
        <div className="gap-5.5 flex flex-col">
          <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
            Efter [X] månaders utveckling lanserar vi Vera med den första agenten, bokföringsagenten. Fler agenter
            följer.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
            Jag är ingen utbildad ekonom, och det är en del av poängen. Vera är byggd för att förklara, inte bara
            utföra, och för att ni ska bestämma hur mycket hon sköter själv.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] font-serif text-ink uppercase tracking-[0.03em]">
            För företagare som hellre lägger tiden på kunderna än på blanketterna.
          </p>
        </div>
        <div className="mt-9 pt-6 gap-4 border-t border-t-line flex items-center">
          <div className="rounded-full w-14 h-14 bg-chip flex-none" />
          <div>
            <div className="text-[15px] font-bold tracking-[0.1em] uppercase">Hugo</div>
            <div className="mt-0.5 text-[14px] text-ink-soft tracking-[0.06em] uppercase">Grundare, Vera Labs AB</div>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-18 max-w-[1200px] box-border flex flex-col items-center text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6vw,40px)] wrap-break-word">
            Låt oss visa hur Vera skulle arbeta hos er.
          </h2>
          <p className="mx-auto mt-0 mb-7 text-[17px] leading-[1.6] text-ink-inverse-soft font-serif max-w-[520px] uppercase tracking-[0.03em]">
            Vi går igenom en vecka med exempel från er verksamhet.
          </p>
          <div className="gap-3 flex flex-wrap justify-center">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center min-h-13 no-underline font-bold text-[14px] tracking-[0.1em] uppercase bg-page text-contrast"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center min-h-13 no-underline font-bold text-[14px] tracking-[0.1em] uppercase border-[1.5px] border-ink-inverse text-ink-inverse"
              href="/agenter/bokforing"
            >
              Läs om bokföringsagenten
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
