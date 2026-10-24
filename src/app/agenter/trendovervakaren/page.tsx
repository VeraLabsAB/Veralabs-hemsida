import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trendövervakaren",
  description:
    "Vera följer sökningar, sociala medier och marknadsplatser och väger varje signal mot ert sortiment. Förslagen kommer medan det fortfarande finns tid att agera.",
};

export default function TrendovervakarenPage() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,var(--page)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto my-0 px-10 pt-16 pb-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Trend&shy;övervakaren
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,8.5vw,56px)] wrap-break-word leading-[1.02]">
              Se efterfrågan innan den toppar.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink uppercase tracking-[0.03em] font-bold">
              Vera följer sökningar, sociala medier och marknadsplatser och väger varje signal mot ert sortiment.
              Förslagen kommer medan det fortfarande finns tid att agera.
            </p>
            <div className="gap-3 flex flex-wrap">
              <Link
                className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
                href="/#kontakt"
              >
                Boka en demo
              </Link>
              <a
                className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
                href="#hur"
              >
                Så fungerar det
              </a>
            </div>
          </div>
          <div className="reveal-soft flex-[1_1_440px] min-w-0">
            <div className="px-7 py-6 rounded-3xl bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.12)] box-border w-full">
              <div className="mb-2 gap-3 flex justify-between items-center">
                <div>
                  <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                    Trendrapport
                  </div>
                  <div className="mt-0.5 font-display font-bold uppercase tracking-[0.01em] text-[24px]">Vecka 42</div>
                </div>
                <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                  Exempeldata
                </span>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">13 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Vintage-jackor i läder
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Sökintresse ökar</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">+38 %</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Passar er
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">13 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Breda jeans
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Säljer snabbare</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">+21 %</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Passar er
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">14 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Stickade västar
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">Stabil efterfrågan</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">±0 %</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-contrast bg-chip">
                    Bevakas
                  </span>
                </div>
              </div>
              <div className="px-0 py-3.5 gap-3 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center border-t border-t-line-faint">
                <div className="text-[12px] text-ink-soft font-mono tracking-normal">15 okt</div>
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold tracking-[0.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    Nytt märke på väg upp
                  </div>
                  <div className="mt-0.5 text-[12px] text-ink-soft font-mono tracking-normal">För lite underlag</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold font-mono tracking-normal">?</div>
                  <span className="mt-1 px-2 py-0.5 rounded-full inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-ink-inverse bg-accent">
                    Fråga till er
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 gap-3 flex justify-between items-center flex-wrap border-t border-t-line-faint">
                <div className="gap-4 flex flex-wrap text-[12px] font-semibold tracking-[0.06em] uppercase text-ink-soft">
                  <span>
                    <svg className="mt-0.5 flex-none" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    2 förslag
                  </span>
                  <span>
                    <svg className="mt-0.5 flex-none" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    6 kontroller klara
                  </span>
                  <span>1 fråga</span>
                </div>
                <span
                  className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                  aria-hidden="true"
                >
                  Se trenderna
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-12 gap-y-8 gap-x-14 max-w-[1200px] box-border flex flex-wrap">
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Kontinuerlig bevakning
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Signaler fångas när de uppstår, inte vid nästa genomgång.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Branschanpassad
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Utgår från er marknad, era kunder och ert sortiment.
            </div>
          </div>
          <div className="px-0 py-2 flex-[1_1_240px] min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[30px] text-accent leading-[1.1]">
              Motiverad
            </div>
            <div className="mt-2 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
              Varje förslag visar underlaget bakom.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
        <div className="reveal-soft flex-[1_1_440px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Bakgrund
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Den som är först säljer mest.
          </h2>
        </div>
        <div className="reveal-soft gap-4 flex-[1_1_440px] min-w-0 flex flex-col">
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            När en trend syns överallt har de stora kedjorna redan fyllt lagren. Att själv följa alla kanaler tar tid
            som få hinner avsätta.
          </p>
          <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
            Trendövervakaren filtrerar bort bruset och lyfter det som är relevant för er, med en bedömning av hur
            bråttom det är.
          </p>
        </div>
      </div>
      <div className="bg-surface-muted" id="hur">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-12 text-center">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
              Arbetsflöde
            </h2>
            <p className="mx-auto my-0 text-center text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Från signal till förslag.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6"
                      fill="none"
                      stroke="var(--contrast)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  1
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Bevakning</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Vera letar efter det som växer, inte det som redan är stort.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M8.5 12l2.5 2.5L16 9.5"
                      fill="none"
                      stroke="var(--contrast)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  2
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Matchning</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Signalen vägs mot sortiment, kunder och lager. Det som inte passar sorteras bort.
              </p>
            </div>
            <div className="reveal-soft p-8 gap-4 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
              <div className="flex justify-between items-center">
                <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      fill="none"
                      stroke="var(--contrast)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display font-bold uppercase tracking-[0.01em] text-[44px] text-ink-inverse-soft leading-none">
                  3
                </span>
              </div>
              <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Rekommendation</h3>
              <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
                Trendrapporten visar vad som rör sig och varför. Ni väljer vad ni satsar på.
              </p>
            </div>
          </div>
          <div className="mt-12 gap-3 flex justify-center flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/sa-fungerar-vera"
            >
              Så fungerar Vera
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-page border-b border-b-line" id="arbetssatt">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="reveal-up mx-auto mt-0 mb-6 text-center max-w-[720px]">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              I detalj
            </div>
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,6.5vw,44px)] leading-[1.05]">
              Från signal till beslut
            </h2>
            <p className="mx-auto my-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Ni styr vad som bevakas och hur ofta.
            </p>
          </div>
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">1</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Omfång
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Brett
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Hela branschen
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Följer rörelser i hela branschen, till exempel mode, second hand eller inredning. För er som letar nya
                  möjligheter.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_320px] max-w-[440px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <div className="mb-3 px-2.5 py-1 rounded-full inline-block bg-chip text-contrast text-[11px] font-bold tracking-[0.12em] uppercase">
                  Smalt
                </div>
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Ert sortiment</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Fokuserar på era märken och kategorier. För er som vill veta vad som ska köpas in mer av.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">2</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Källor
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Sökningar</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vad som söks och hur snabbt intresset ökar.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Sociala medier
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Vad som delas allt mer i er målgrupp.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">
                  Marknadsplatser
                </h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Försäljningstakt och prisnivå där era kunder handlar.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">3</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Bedömning
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Relevans</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Hur väl trenden passar sortiment, kunder och prisnivå.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Tidpunkt</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Om trenden är tidig, växande eller nära toppen.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Åtgärd</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Ett konkret förslag, till exempel inköp eller exponering i butik.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">4</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Inställningar
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-left p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Kategorier</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Välj vad som ska bevakas och vad som ska ignoreras.
                </p>
              </div>
              <div className="reveal-up p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Frekvens</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Veckorapport, eller notis direkt vid större förändringar.
                </p>
              </div>
              <div className="reveal-right p-7 rounded-2xl flex-[1_1_260px] max-w-[300px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <h3 className="mx-0 mt-0 mb-2.5 text-[14px] font-semibold tracking-[0.1em] uppercase">Justering</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Bevakningen anpassas när verksamheten förändras.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-0 w-0.5 h-12 bg-accent" />
          <div className="px-0 py-6 flex flex-col items-center">
            <div className="reveal-up mb-7 text-center">
              <div className="font-display font-bold text-[64px] text-accent leading-none">5</div>
              <h2 className="mx-0 mt-1.5 mb-0 font-display font-bold text-[clamp(28px,6vw,38px)] tracking-[0.01em] uppercase">
                Uppföljning
              </h2>
            </div>
            <div className="gap-5 flex flex-wrap justify-center w-full">
              <div className="reveal-up p-7 rounded-2xl w-full max-w-[640px] bg-surface border border-line box-border min-w-0 wrap-break-word">
                <p className="m-0 font-serif text-[16px] leading-[1.55] text-ink uppercase tracking-[0.03em]">
                  Efter en satsning följer Vera upp försäljning och pris. Resultatet gör nästa bedömning träffsäkrare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-center">
        <div className="reveal-soft flex-[1_1_400px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Exempel på signal
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Underlaget syns alltid.
          </h2>
          <div className="mb-8 gap-4 flex flex-col">
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Varje förslag visar vilka signaler som ligger bakom, hur snabbt de växer och varför de är relevanta för
              er.
            </p>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Det gör det lätt att säga ja, och lika lätt att säga nej.
            </p>
          </div>
          <Link
            className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
        <div className="reveal-soft flex-[1_1_480px] min-w-0">
          <div className="p-7 rounded-3xl bg-surface border border-line shadow-[0_30px_70px_rgba(33,37,41,0.10)] box-border">
            <div className="gap-3 flex justify-between items-start flex-wrap">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
                  13 okt · Vintage-jackor i läder
                </div>
                <div className="mt-1 font-display font-bold uppercase tracking-[0.01em] text-[30px]">På väg upp</div>
              </div>
              <span className="px-2.5 py-1 rounded-full border border-line-soft text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Exempel
              </span>
            </div>
            <div className="mt-5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Veras bedömning</div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Sök</span>
              <span className="font-mono tracking-normal font-semibold">↑</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">
                Sökintresse, senaste fyra veckorna
              </span>
              <span className="font-mono tracking-normal font-semibold text-right">+38 %</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Sälj</span>
              <span className="font-mono tracking-normal font-semibold">↑</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Liknande plagg säljs snabbare</span>
              <span className="font-mono tracking-normal font-semibold text-right">4 dagar</span>
            </div>
            <div className="px-0 py-2.5 gap-2.5 grid grid-cols-[56px_52px_minmax(0,1fr)_auto] border-t border-t-line-faint text-[13px] items-center">
              <span className="font-semibold text-ink-soft uppercase tracking-[0.06em] text-[11px]">Lager</span>
              <span className="font-mono tracking-normal font-semibold">–</span>
              <span className="uppercase tracking-[0.04em] text-[12px] min-w-0">Liknande plagg i ert lager</span>
              <span className="font-mono tracking-normal font-semibold text-right">3 st</span>
            </div>
            <div className="mt-5 px-4.5 py-4 rounded-[14px] bg-page">
              <div className="mb-1.5 text-[12px] font-bold tracking-[0.12em] uppercase text-contrast">Motivering</div>
              <div className="text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                Intresset för vintage-jackor i läder växer snabbt bland era kunder, och liknande plagg säljs nu på i
                snitt fyra dagar. Ni har bara tre i lager. Förslag: köp in fler i storlek M och L inför november.
              </div>
            </div>
            <div className="mt-4 gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Signalen syns i flera källor</span>
              </div>
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Trenden är tidig, inte toppad</span>
              </div>
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Passar ert sortiment</span>
              </div>
              <div className="gap-2 flex items-start text-[12px] font-semibold tracking-[0.06em] uppercase">
                <svg className="mt-0.5 flex-none" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Priset håller på andrahandsmarknaden</span>
              </div>
            </div>
            <div className="mt-5 pt-4 gap-2.5 flex flex-wrap border-t border-t-line-faint items-center">
              <span className="mr-auto text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-soft">
                Väntar på ert beslut
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 border-[1.5px] border-line-strong text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Avvakta
              </span>
              <span
                className="px-4 py-0 rounded-full inline-flex items-center min-h-9.5 bg-accent text-ink-inverse text-[12px] font-bold tracking-[0.1em] uppercase"
                aria-hidden="true"
              >
                Lägg till i planen
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-12">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Ingår
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] max-w-[560px] font-serif text-ink uppercase tracking-[0.03em]">
              Marknadsbevakning, vecka för vecka.
            </p>
          </div>
          <div className="gap-y-10 gap-x-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6h18v12H3z M3 10h18 M7 15h4"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sökdata</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Vad kunderna söker efter och hur snabbt det ökar.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 3h12v18l-3-2-3 2-3-2-3 2z M9 8h6 M9 12h6"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Sociala medier</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Det som får spridning i er målgrupp.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 8h16v12H4z M7 4h10v4H7z M8 13h3 M13 13h3 M8 16h3 M13 16h3"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Marknadsplatser</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Försäljningstakt och prisnivå.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 4h11l3 3v13H5z M9 10h6 M9 14h6"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Sortimentsmatchning
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Varje trend vägs mot det ni säljer.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M8.5 12l2.5 2.5L16 9.5"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Tidsbedömning</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Tidig, växande eller nära toppen.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3a9 9 0 100 18 9 9 0 000-18z M9.5 9.5a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 4 M12 17h.01"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Osäkerhetsmarkering
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Tunt underlag redovisas öppet.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 20V10 M10 20V4 M16 20v-7 M22 20H2"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">Trendrapport</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Veckans viktigaste signaler i en sammanställning.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 5h13v10H3z M1 18h17 M18 9h4v11h-4z M19.5 17.5h1"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">App och webb</h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Notiser när något kräver beslut.
                </p>
              </div>
            </div>
            <div className="reveal-soft gap-4 flex items-start min-w-0">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 7v5l3 2 M12 3a9 9 0 100 18 9 9 0 000-18z"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="mx-0 mt-0.5 mb-1.5 text-[15px] font-bold tracking-[0.1em] uppercase">
                  Resultatuppföljning
                </h3>
                <p className="m-0 text-[15px] leading-[1.5] font-serif text-ink uppercase tracking-[0.03em]">
                  Hur det gick med det ni satsade på.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-12">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Skillnaden
          </h2>
        </div>
        <div className="gap-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">01</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Känner ert sortiment
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Trender filtreras mot det ni faktiskt säljer.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">02</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Alltid igång
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Bevakningen pausar inte utanför kontorstid.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">03</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              För handel
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Utvecklad för butiker, e-handel och varumärken.
            </p>
          </div>
          <div className="reveal-soft pt-5 border-t-2 border-t-accent min-w-0">
            <div className="font-display font-bold uppercase tracking-[0.01em] text-[20px] text-accent">04</div>
            <h3 className="mx-0 my-2.5 font-display font-bold uppercase tracking-[0.01em] text-[26px] leading-[1.1]">
              Kopplad till bokföringen
            </h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Tillsammans med bokföringsagenten vägs er verkliga försäljning in.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
            href="/#kontakt"
          >
            Boka en demo
          </Link>
        </div>
      </div>
      <div className="bg-surface border-t border-t-line border-b border-b-line">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Jämförelse
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Trendbyrå
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Vem bevakar?
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Byrån
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Vera
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Frekvens
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    När tid finns
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Enligt avtal
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Veckovis eller direkt
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Anpassning
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Beror på tid
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ofta generell
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Mot ert sortiment
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Motivering
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Er egen
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    På begäran
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Till varje förslag
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Beslut
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Ni
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Ni
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-semibold tracking-[0.06em] uppercase">
                    Kostnad
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Er tid
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top font-serif text-ink uppercase tracking-[0.03em]">
                    Löpande avgift
                  </td>
                  <td className="px-4 py-4.5 border-b border-b-line text-[14px] leading-[1.45] align-top bg-chip font-serif uppercase tracking-[0.03em] font-bold text-contrast">
                    Engångspris
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 gap-3 flex flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-accent text-ink-inverse border-[1.5px] border-accent no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-surface text-ink border-[1.5px] border-line-strong no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
        <div className="mb-10">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
            Målgrupp
          </h2>
        </div>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 9l2-5h12l2 5 M4 9v11h16V9 M4 9h16 M9 20v-6h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Butiker och återförsäljare</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Inköp baserade på vad som kommer att sälja.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 11a4 4 0 100-8 4 4 0 000 8z M4 21c0-4 4-7 8-7s8 3 8 7"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">E-handel</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Sortiment som följer kundernas sökningar.
            </p>
          </div>
          <div className="reveal-soft p-7 gap-3.5 rounded-[20px] bg-surface border border-line min-w-0 flex flex-col">
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 21h18 M5 21V8l7-5 7 5v13 M9 21v-6h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[16px] font-bold tracking-[0.1em] uppercase">Varumärken</h3>
            <p className="m-0 text-[16px] leading-[1.55] font-serif text-ink uppercase tracking-[0.03em]">
              Nästa produkt, kategori eller kundgrupp.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-contrast text-ink-inverse">
        <div className="mx-auto my-0 px-10 py-24 gap-14 max-w-[1200px] box-border flex flex-wrap items-start">
          <div className="reveal-soft flex-[1_1_420px] min-w-0">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-ink-inverse">
              Kontroll
            </h2>
            <p className="mx-0 mt-0 mb-7 text-[17px] leading-[1.6] max-w-[520px] font-serif text-ink-inverse-soft uppercase tracking-[0.03em]">
              Trendövervakaren ger beslutsunderlag. Inköp och sortiment bestämmer ni.
            </p>
            <Link
              className="pb-1 gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-ink-inverse border-b-[1.5px] border-b-ink-inverse"
              href="/sakerhet"
            >
              Så skyddar vi er →
            </Link>
          </div>
          <div className="reveal-soft gap-4.5 flex-[1_1_420px] min-w-0 flex flex-col">
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Vera gör inga inköp</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Signalerna bakom varje förslag redovisas</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Bara de uppgifter ni delar används</span>
            </div>
            <div className="gap-3 flex items-start text-[15px] leading-[1.5] text-ink-inverse uppercase tracking-[0.04em] font-medium">
              <svg className="mt-0.5 flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  fill="none"
                  stroke="var(--ink-inverse-soft)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>En trend är aldrig en garanti</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-muted">
        <div className="mx-auto my-0 px-10 py-24 max-w-[1200px] box-border">
          <div className="mb-10">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05]">
              Kundröster
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <figure className="m-0 p-7 gap-4.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Vi fick signalen om breda jeans sex veckor innan efterfrågan toppade.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Sara Lind · Ägare, Exempelbutiken AB
              </figcaption>
            </figure>
            <figure className="m-0 p-7 gap-4.5 rounded-[20px] bg-surface border border-line min-w-0 box-border flex flex-col">
              <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
                Exempelcitat
              </span>
              <blockquote className="m-0 text-[20px] leading-[1.6] text-ink font-serif">
                ”Inköpen bygger nu på data i stället för magkänsla.”
              </blockquote>
              <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
                Johan Ek · Inköpare, Exempelmode AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-24 max-w-[900px] box-border">
        <div className="mb-10 text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,44px)] wrap-break-word leading-[1.05] text-center">
            Frågor om trendövervakaren
          </h2>
        </div>
        <div className="border-t border-t-line">
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka branscher passar den för?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Alla som säljer produkter, till exempel kläder, second hand, inredning och livsmedel.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Köper Vera in varor?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Nej. Vera föreslår, inköpen gör ni.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Hur hanteras osäkra signaler?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              De markeras som osäkra eller blir en fråga till er.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Vilka källor används?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Öppna källor som sökningar, sociala medier och marknadsplatser, samt er egen försäljning om ni delar den.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan vi välja kategorier?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Ni väljer vilka kategorier som bevakas och kan ändra urvalet när som helst.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan Vera garantera att en trend håller?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Nej. Vera redovisar vad underlaget visar. Bedömningen är er.
            </p>
          </details>
          <details className="faq border-b border-b-line">
            <summary className="px-1 py-5.5 gap-4 flex justify-between items-center text-[15px] font-semibold tracking-[0.08em] uppercase">
              Kan bevakningen pausas?
              <span
                className="faq-plus flex-none text-[24px] leading-none text-accent [transition:transform_.15s]"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mx-1 mt-0 mb-5.5 text-[16px] leading-[1.55] max-w-[760px] font-serif text-ink uppercase tracking-[0.03em]">
              Ja. Den kan pausas och startas igen när det passar.
            </p>
          </details>
        </div>
      </div>
      <div className="mx-auto mt-0 mb-24 px-10 py-0 max-w-[1200px] box-border">
        <div className="reveal-soft px-10 py-18 rounded-[28px] bg-accent text-ink-inverse box-border text-center">
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,7vw,46px)] wrap-break-word leading-[1.05] text-ink-inverse">
            Se trendövervakaren i er bransch
          </h2>
          <p className="mx-auto mt-0 mb-8 text-[17px] leading-[1.6] max-w-[540px] font-serif text-ink-inverse uppercase tracking-[0.03em]">
            Vi visar exempel från er marknad.
          </p>
          <div className="gap-3 flex justify-center flex-wrap">
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center justify-center min-h-13 bg-page text-contrast border-[1.5px] border-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Boka en demo
            </Link>
            <Link
              className="px-7 py-0 rounded-full inline-flex items-center min-h-13 border-[1.5px] border-surface text-ink-inverse no-underline font-bold text-[14px] tracking-[0.1em] uppercase"
              href="/#kontakt"
            >
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
