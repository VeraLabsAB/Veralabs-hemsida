import Link from "next/link";
import type { Metadata } from "next";
import { VideoBackground } from "@/components/VideoBackground";

export const metadata: Metadata = {
  description:
    "Vera är ett team av AI-agenter som förbereder bokföringen, bevakar marknaden och tar fram underlag för era beslut. Ni granskar och godkänner.",
};

export default function HomePage() {
  return (
    <div className="lv-page">
      {/* Drar upp bandet bakom header-pillen (12 + 56 px, 12 + 48 på mobil) så att rutnätet går ända upp,
          och fyller minst hela första skärmen med innehållet lodrätt centrerat. */}
      <div className="lv-hero text-snow -mt-[68px] pt-[68px] max-[900px]:-mt-[60px] max-[900px]:pt-[60px] min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 pt-20 pb-24 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_440px] min-w-0">
            <div className="mb-6 px-3.5 py-1.5 rounded-full inline-block bg-snow/8 border border-snow/18 text-platinum text-[13px] font-semibold tracking-[0.14em] uppercase">
              AI-agenter för företag
            </div>
            <h1 className="mx-0 mt-0 mb-6 font-display font-bold uppercase tracking-[0.01em] text-[clamp(30px,4.4vw,46px)] leading-[1.05] wrap-break-word text-snow">
              Mindre administration. Mer företag.
            </h1>
            <p className="mx-0 mt-0 mb-8 text-[18px] leading-[1.65] text-pale-1 font-sans max-w-[520px]">
              Vera är ett team av AI-agenter som förbereder bokföringen, bevakar marknaden och tar fram underlag för era
              beslut. Ni granskar och godkänner.
            </p>
            <div className="gap-3 flex flex-wrap">
              {/* The hero band is Shadow Grey in both modes, so the buttons always use the dark token set. */}
              <a className="btn btn--primary theme-dark" href="#kontakt">
                Boka en demo
              </a>
              <a className="btn btn--secondary theme-dark" href="#sa">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M3 1.5l9 5.5-9 5.5z" fill="currentColor" />
                </svg>
                <span>Se Vera arbeta</span>
              </a>
            </div>
          </div>
          <div className="flex-[1_1_400px] min-w-0 max-w-[520px]">
            <div
              className="lv-mock p-6 rounded-card bg-lv-card text-lv-ink box-border text-left font-sans"
              role="img"
              aria-label="Exempel på VeraAI-appen: veckans bokföring med tolv poster, varav elva klara och en fråga, och knappen Godkänn veckan."
            >
              <div className="gap-3 flex justify-between items-center">
                <div className="text-[13px] font-bold tracking-[0.12em] uppercase">Veckans bokföring</div>
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-lv-muted">Exempel</span>
              </div>
              <div className="mt-4 flex justify-between items-center text-[13px] text-lv-muted">
                <span>
                  Vera förbereder
                  <span className="lv-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </span>
                <span>11 av 12 klara</span>
              </div>
              <div className="mx-0 mt-2 mb-1.5 rounded-full h-2 bg-lv-soft overflow-hidden">
                <div className="lv-bar rounded-full h-full bg-lv-acc" />
              </div>
              <div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Kontoutdrag · Leverantör AB</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Inköp av varor, 25 % moms</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-lv-acc text-lv-acc-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Klar
                  </span>
                </div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Kvitto · Kontorsmaterial</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Förbrukningsmaterial</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-lv-acc text-lv-acc-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Klar
                  </span>
                </div>
                <div className="lv-row px-0 py-3.5 gap-3 flex items-center justify-between border-t border-t-lv-line">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-lv-ink">Swish · 450 kr</div>
                    <div className="mt-0.5 text-[13px] text-lv-muted">Vera undrar: privat eller för företaget?</div>
                  </div>
                  <span className="px-[9px] py-[3px] rounded-full border-[1.5px] border-lv-muted text-lv-ink text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap">
                    Fråga
                  </span>
                </div>
              </div>
              <div className="mt-4 gap-3 flex flex-wrap justify-between items-center">
                <span className="text-[13px] text-lv-muted">Väntar på ert godkännande</span>
                <span className="px-4.5 py-0 rounded-full inline-flex items-center min-h-10 bg-lv-acc text-lv-acc-ink text-[12px] font-bold tracking-[0.1em] uppercase">
                  Godkänn veckan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Varje del av startsidan är en egen skärm på desktop (min-[900px]:min-h-dvh, innehållet lodrätt
          centrerat) och sektionerna växlar mellan sidbakgrund och kortyta i stället för streck.
          Hugos beslut 2026-10-30. py-20 håller innehållet fritt från den klistrade headern. */}
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="sa">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="gap-12 flex flex-wrap items-center reveal-stagger">
            <div className="flex-[1_1_380px] min-w-0">
              <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
                Demo
              </div>
              <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
                En vecka med Vera, på två minuter.
              </h2>
              <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
                Från kontoutdrag till godkänd bokföring: hur Vera samlar in underlag, föreslår konteringar och lyfter
                det som behöver ert beslut.
              </p>
            </div>
            <div className="flex-[1_1_480px] min-w-0">
              <div className="p-6 gap-4 rounded-card relative aspect-[16/9] bg-[linear-gradient(135deg,var(--contrast)_0%,var(--accent)_100%)] flex flex-col items-center justify-center text-ink-inverse text-center box-border">
                <div className="rounded-full w-18 h-18 bg-page flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M4 2l8 5-8 5z" fill="var(--contrast)" />
                  </svg>
                </div>
                <div className="text-[13px] font-bold tracking-[0.14em] uppercase">Demo · 2 min</div>
                <div className="text-[14px] leading-[1.5] text-ink-inverse-soft max-w-[340px]">
                  Demofilmen kommer snart. Boka en demo så visar vi live.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* De tre stegen fick en egen skärm när demo-sektionen delades. Tre solida rutor i samma färg
          och radie som agentpanelen; stegen är innehåll, inte kontroller, och får inte glas (§2). */}
      <div className="min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="hur">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
          <div className="mb-10 max-w-[720px] reveal">
            <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
              Så fungerar det
            </div>
            <h2 className="m-0 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Tre steg. Ni bestämmer.
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] reveal-stagger">
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
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
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">1 · Ni sätter reglerna</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Vera arbetar efter en regelbok som vi tar fram tillsammans med er: konton, leverantörer, momssatser och
                beloppsgränser.
              </p>
              <div
                className="mt-1.5 px-4 py-3.5 rounded-[14px] bg-page border border-lv-line font-sans text-[13px] leading-[1.45] text-lv-ink"
                role="img"
                aria-label="Exempel på en regel i regelboken"
              >
                <div className="mb-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-lv-muted">Er regelbok</div>
                <div>Leverantör AB → Inköp av varor</div>
                <div className="text-lv-muted">Alltid 25 % moms</div>
              </div>
            </div>
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
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
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">2 · Vera gör förarbetet</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                Underlag samlas in och sorteras, förslag tas fram och avvikelser markeras. Det som är oklart blir en
                fråga, aldrig en gissning.
              </p>
              <div
                className="mt-1.5 px-4 py-3.5 rounded-[14px] bg-page border border-lv-line font-sans text-[13px] leading-[1.45] text-lv-ink"
                role="img"
                aria-label="Exempel på en fråga från Vera"
              >
                <div className="mb-1.5 text-[11px] font-bold tracking-[0.1em] uppercase text-lv-muted">Vera undrar</div>
                <div>Kvittot från 12 okt: privat eller för företaget?</div>
                <div className="mt-2.5 gap-2 flex">
                  <span className="px-3 py-1 rounded-full border-[1.5px] border-lv-line">Privat</span>
                  <span className="px-3 py-1 rounded-full bg-lv-acc text-lv-acc-ink">Företaget</span>
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-panel p-7 gap-3.5 min-w-0 box-border wrap-break-word flex flex-col">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
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
              <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">3 · Ni fattar besluten</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                En genomgång i slutet av veckan. Godkänn allt på en gång eller post för post.
              </p>
              <div
                className="mt-1.5 px-4 py-3.5 rounded-[14px] bg-page border border-lv-line font-sans text-[13px] leading-[1.45] text-lv-ink"
                role="img"
                aria-label="Exempel på knappen Godkänn"
              >
                <div className="gap-2.5 flex justify-between items-center">
                  <span>12 poster klara</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-lv-acc text-lv-acc-ink text-[11px] font-bold tracking-[0.1em] uppercase">
                    Godkänn
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/sa-fungerar-vera"
            >
              Så fungerar Vera →
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 max-w-[1200px] box-border min-[900px]:min-h-dvh flex flex-col justify-center">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Agenter
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            En agent för varje område.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Börja där det tar mest tid och lägg till fler när ni är redo.
          </p>
        </div>
        {/* Uppgift e), fråga 5: agentkorten är EN gemensam glaspanel (Apple: gruppera) med bara luft
            mellan fälten; fältet tonas vid hover. Två glasytor på skärmen med headern. */}
        <div className="glass glass--strong box-border rounded-panel p-2 gap-1 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] reveal-stagger">
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/bokforing"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
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
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Bokförings&shy;agenten</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Löpande bokföring, fakturering, moms, lön och bokslut.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/trendovervakaren"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 17l6-6 4 4 8-8 M15 7h6v6"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Trend&shy;övervakaren</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Hittar efterfrågan som växer i er bransch, innan den toppar.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/strategikonsulten"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 8a4 4 0 100 8 4 4 0 000-8z M12 12h.01"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Strategi&shy;konsulten</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Underlag för prissättning, sortiment och investeringar, byggt på era egna siffror.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
          <Link
            className="p-6 gap-3.5 rounded-card min-w-0 box-border wrap-break-word flex flex-col no-underline text-ink hover:bg-chip"
            href="/agenter/leverantorsagenten"
          >
            <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 8l9-5 9 5v8l-9 5-9-5z M3 8l9 5 9-5 M12 13v8"
                  fill="none"
                  stroke="var(--contrast)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="m-0 text-[15px] font-bold tracking-[0.1em] uppercase">Leverantörs&shy;agenten</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
              Söker, jämför och sammanställer leverantörer utifrån era krav.
            </p>
            <span className="mt-auto text-[12px] font-bold tracking-[0.12em] uppercase text-accent">Läs mer →</span>
          </Link>
        </div>
        <div className="mt-8">
          <Link
            className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
            href="/foretag"
          >
            Alla agenter →
          </Link>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="trygghet">
        <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-center">
          <div className="flex-[1_1_420px] min-w-0 reveal">
            <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
              Kontroll som standard.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans max-w-[520px]">
              Vera föreslår och motiverar. Ni bestämmer vad som händer.
            </p>
            <div className="mt-6">
              <Link
                className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
                href="/sakerhet"
              >
                Så skyddar vi er →
              </Link>
            </div>
          </div>
          <div className="gap-3.5 flex-[1_1_420px] min-w-0 flex flex-col reveal-stagger">
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line">
              <svg className="mt-[3px] flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
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
                <div className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Inget förs in i era system utan ert klartecken.
                </div>
              </div>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line">
              <svg className="mt-[3px] flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Er regelbok</div>
                <div className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Ni bestämmer hur varje typ av post ska hanteras.
                </div>
              </div>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line">
              <svg className="mt-[3px] flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Spårbarhet</div>
                <div className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Varje steg loggas och kan granskas i efterhand.
                </div>
              </div>
            </div>
            <div className="px-5 py-4.5 gap-3.5 rounded-[14px] flex items-start bg-page border border-line">
              <svg className="mt-[3px] flex-none" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
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
                <div className="mb-1 font-bold text-[14px] tracking-[0.08em] uppercase">Era uppgifter</div>
                <div className="m-0 text-[16px] leading-[1.55] text-ink font-sans">
                  Används bara för ert företag och tränar inga AI-modeller.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integrationer: loopad video som bakgrund (Hugos beslut 2026-10-30) med ett mörkt skikt ovanpå,
          och theme-dark så att text och chips får de mörka tokens oavsett läge. Videon pausas när
          sektionen inte syns och vid "minska rörelse"; saknas filen visas stillbilden/bakgrunden. */}
      <div className="relative overflow-hidden theme-dark bg-page text-ink min-[900px]:min-h-dvh box-border flex items-center">
        <VideoBackground
          src="/video/integrationer.mp4"
          poster="/video/integrationer.jpg"
          speed={0.5}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-shadow/65" aria-hidden="true" />
      <div className="relative mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border text-center reveal-stagger">
        <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
          Integrationer
        </div>
        <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
          Fungerar med det ni redan använder.
        </h2>
        <div className="mt-8 gap-4 flex flex-col">
          <div className="gap-3 flex flex-wrap items-center justify-center">
            <span className="mr-1 text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">Bokföring:</span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Fortnox
            </span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Bokio
            </span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Spiris
            </span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Visma eEkonomi
            </span>
          </div>
          <div className="gap-3 flex flex-wrap items-center justify-center">
            <span className="mr-1 text-[13px] font-bold tracking-[0.12em] uppercase text-contrast">Kassa:</span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Zettle
            </span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              SumUp
            </span>
            <span className="px-4.5 py-2.5 rounded-full bg-page border border-line font-display font-bold text-[16px] tracking-[0.02em]">
              Trivec
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className="min-[900px]:min-h-dvh box-border flex items-center">
        <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border reveal-stagger">
          <h2 className="mx-0 mt-0 mb-8 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Jämför alternativen.
          </h2>
          <div className="overflow-x-auto">
            <table className="cmp-table w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line" />
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Göra själv
                  </th>
                  <th className="p-4 text-left text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft border-b-2 border-b-line">
                    Konsulter
                  </th>
                  <th className="p-4 rounded-t-xl rounded-b-none text-left text-[12px] font-bold tracking-[0.12em] uppercase border-b-2 border-b-line bg-contrast text-ink-inverse">
                    Vera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Vem utför arbetet?
                  </td>
                  <td data-label="Göra själv" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Ni, på kvällar och helger
                  </td>
                  <td data-label="Konsulter" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    En konsult per område
                  </td>
                  <td data-label="Vera" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Specialiserade agenter som samarbetar
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Tillgänglighet
                  </td>
                  <td data-label="Göra själv" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    När tiden finns
                  </td>
                  <td data-label="Konsulter" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Kontorstid
                  </td>
                  <td data-label="Vera" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Alltid
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Kännedom om ert företag
                  </td>
                  <td data-label="Göra själv" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Hög, men tiden räcker inte
                  </td>
                  <td data-label="Konsulter" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Växer med uppdraget
                  </td>
                  <td data-label="Vera" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Bygger på er regelbok och historik
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-b-line align-top leading-[1.45] font-sans text-[13px] font-bold tracking-[0.08em]">
                    Prismodell
                  </td>
                  <td data-label="Göra själv" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Er arbetstid
                  </td>
                  <td data-label="Konsulter" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45]">
                    Timpris eller månadsavgift
                  </td>
                  <td data-label="Vera" className="p-4 border-b border-b-line align-top font-sans text-[16px] leading-[1.45] bg-chip text-contrast font-bold">
                    Fast månadspris per agent
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-7">
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/agenter/bokforing"
            >
              Jämförelse för bokföring →
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center">
      <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1200px] box-border">
        <h2 className="mx-0 mt-0 mb-8 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word reveal">
          Kundröster
        </h2>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] reveal-stagger">
          <figure className="m-0 p-7 gap-4.5 rounded-card bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col">
            <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Exempelcitat
            </span>
            <blockquote className="m-0 leading-[1.6] text-ink font-sans text-[20px]">
              ”Bokföringen tog flera kvällar i månaden. Nu går jag igenom veckan på en kvart.”
            </blockquote>
            <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
              Anna Berg · Ägare, Exempelbutiken AB
            </figcaption>
          </figure>
          <figure className="m-0 p-7 gap-4.5 rounded-card bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col">
            <span className="px-2.5 py-[3px] rounded-full self-start border border-line-soft text-[11px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Exempelcitat
            </span>
            <blockquote className="m-0 leading-[1.6] text-ink font-sans text-[20px]">
              ”Vera flaggade att marginalen på jackorna sjönk innan vi själva såg det.”
            </blockquote>
            <figcaption className="text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
              Erik Sund · VD, Exempelbolaget AB
            </figcaption>
          </figure>
        </div>
      </div>
      </div>
      <div className="mx-auto my-0 px-10 py-20 gap-12 max-w-[1200px] box-border flex flex-wrap items-center min-[900px]:min-h-dvh content-center reveal-stagger">
        <div className="p-5 gap-2.5 rounded-card flex-[0_1_280px] min-w-0 aspect-[4/5] border-2 border-dashed border-line-soft bg-surface-muted flex flex-col items-center justify-center text-center box-border">
          <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 5h16v14H4z M4 15l4-4 4 4 3-3 5 5 M15.5 9.5h.01"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-contrast">Porträtt av grundaren</div>
        </div>
        <div className="flex-[1_1_420px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Grundaren
          </div>
          <blockquote className="mx-0 mt-0 mb-5 font-display font-bold uppercase tracking-[0.01em] text-[clamp(24px,4.5vw,34px)] leading-[1.15]">
            ”Ingen ska behöva lägga sina kvällar på pappersarbete.”
          </blockquote>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans max-w-[560px]">
            VeraAI började i en tunnelbanekiosk, med ett bokslut som tog sexton timmar att få klart.
          </p>
          <div className="mt-4 text-[13px] font-bold tracking-[0.1em] uppercase text-contrast">
            Hugo · Grundare, Vera Labs AB
          </div>
          <div className="mt-6">
            <Link
              className="gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
              href="/om-oss"
            >
              Läs historien →
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="kontakt">
      <div className="mx-auto my-0 px-10 py-20 gap-14 w-full max-w-[1200px] box-border flex flex-wrap items-start reveal-stagger">
        <div className="flex-[1_1_360px] min-w-0">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kontakt
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Boka en demo.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans max-w-[480px]">
            30 minuter, kostnadsfritt. Vi går igenom ert företag och visar vad Vera kan ta över.
          </p>
          <div className="mt-8 gap-3.5 flex flex-col">
            <div className="gap-3 flex items-center">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6h18v12H3z M3 7l9 7 9-7"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">E-post</div>
                <a className="text-[17px] font-semibold text-accent" href="mailto:hej@veralabs.se">
                  hej@veralabs.se
                </a>
              </div>
            </div>
            <div className="gap-3 flex items-center">
              <div className="rounded-xl w-12 h-12 bg-chip flex items-center justify-center flex-none">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 7v5l3 2"
                    fill="none"
                    stroke="var(--contrast)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">Svarstid</div>
                <div className="text-[17px] font-semibold">Inom en arbetsdag</div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="p-8 gap-4.5 rounded-card flex-[1_1_440px] bg-page border border-line min-w-0 box-border wrap-break-word flex flex-col shadow-[0_30px_70px_rgba(33,37,41,0.08)]"
          action="mailto:hej@veralabs.se?subject=Boka%20ett%20samtal"
          method="post"
          encType="text/plain"
        >
          <div className="gap-4.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Namn
              <input
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                type="text"
                name="namn"
                required
              />
            </label>
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Företag
              <input
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                type="text"
                name="foretag"
                required
              />
            </label>
          </div>
          <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
            E-post
            <input
              className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
              type="email"
              name="epost"
              required
            />
          </label>
          <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
            Vad vill ni automatisera?
            <select
              className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
              name="behov"
            >
              <option>Bokföring</option>
              <option>Trendbevakning</option>
              <option>Strategi och beslut</option>
              <option>Inköp och leverantörer</option>
              <option>Flera områden</option>
              <option>Vet inte än</option>
            </select>
          </label>
          <div className="gap-4.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Bokförings&shy;program
              <select
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                name="bokforingsprogram"
              >
                <option>Fortnox</option>
                <option>Bokio</option>
                <option>Spiris</option>
                <option>Visma eEkonomi</option>
                <option>Annat</option>
                <option>Vet inte</option>
              </select>
            </label>
            <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
              Kassasystem <span className="font-medium tracking-[0.04em] normal-case">(valfritt)</span>
              <input
                className="field px-4 py-3 rounded-xl w-full box-border min-h-13 border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink"
                type="text"
                name="kassasystem"
                placeholder="T.ex. Zettle"
              />
            </label>
          </div>
          <label className="gap-2 flex flex-col text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft">
            Meddelande <span className="font-medium tracking-[0.04em] normal-case">(valfritt)</span>
            <textarea
              className="field px-4 py-3 rounded-xl w-full box-border border-[1.5px] border-line bg-surface font-sans text-[16px] text-ink min-h-24 resize-y"
              name="meddelande"
              rows={3}
            />
          </label>
          <button
            className="btn btn--primary w-full"
            type="submit"
          >
            Skicka förfrågan
          </button>
          <div className="text-[13px] leading-[1.5] text-ink-muted text-center">
            Uppgifterna används bara för att kontakta er om demon.
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
