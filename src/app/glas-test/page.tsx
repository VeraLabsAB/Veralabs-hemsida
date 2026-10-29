import type { Metadata } from "next";

/* Testsida för glasvarianterna (GLAS-PLAN.md uppgift b). Visar varje klass i
   src/styles/glass.css över ljusfältet och över ett mörkt band, så att
   fallback-trappan och kontrasten går att granska i ljust och mörkt läge.
   Inte länkad från menyn. Tas bort eller behålls bakom noindex (fråga 14). */

export const metadata: Metadata = {
  title: "Glas-test",
  robots: { index: false, follow: false },
};

const SAMPLES = [
  { className: "glass", label: "glass", note: "Grundytan: fyllning 0.55, oskärpa 16 px." },
  { className: "glass glass--strong", label: "glass--strong", note: "Mer fyllning (0.72) för ytor med mycket text." },
  { className: "glass glass--large", label: "glass--large", note: "Oskärpa 12 px för stora ytor som headern." },
];

function Sample({ className, label, note }: (typeof SAMPLES)[number]) {
  return (
    <div className={`${className} box-border p-6`}>
      <div className="text-[13px] font-bold tracking-[0.14em] uppercase">.{label}</div>
      <p className="mt-2 mb-0 text-[16px] leading-[1.55] text-ink-soft">{note}</p>
    </div>
  );
}

export default function GlasTestPage() {
  return (
    <div className="mx-auto box-border max-w-[1200px] px-10 py-16">
      <div className="mb-4 inline-block rounded-full bg-chip px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.14em] uppercase text-contrast">
        Intern testsida
      </div>
      <h1 className="mx-0 mt-0 mb-4 font-display text-[clamp(28px,4vw,40px)] leading-[1.05] font-bold tracking-[0.01em] uppercase">
        Glasvarianter över ljusfältet
      </h1>
      <p className="mx-0 mt-0 mb-10 max-w-[640px] text-[16px] leading-[1.6] text-ink-soft">
        Varje ruta är en klass i glass.css. Utan stöd för bakgrundsoskärpa, eller med Minska transparens
        påslaget, ska rutorna vara solida Bright Snow-ytor med Alabaster-kant.
      </p>

      <h2 className="mx-0 mt-0 mb-4 text-[13px] font-bold tracking-[0.14em] uppercase text-ink-muted">
        1. Ytor över ljusfältet
      </h2>
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {SAMPLES.map((s) => (
          <Sample key={s.label} {...s} />
        ))}
      </div>

      <h2 className="mx-0 mt-0 mb-4 text-[13px] font-bold tracking-[0.14em] uppercase text-ink-muted">
        2. Text på glas med läsbarhetslager (§9.2)
      </h2>
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        <div className="glass box-border p-3">
          <div className="glass-readable box-border p-5">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase">.glass + .glass-readable</div>
            <p className="mt-2 mb-0 text-[16px] leading-[1.55] text-ink-soft">
              Brödtext på glas ligger alltid på ett inre, nästan ogenomskinligt lager. Radien är koncentrisk:
              20 px utanpå, 8 px inuti.
            </p>
          </div>
        </div>
        <div className="glass box-border p-6">
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase">.glass utan lager</div>
          <p className="mt-2 mb-0 text-[16px] leading-[1.55] text-ink-soft">
            Jämförelse: samma text direkt på glaset. Så här får brödtext inte sättas i produktion.
          </p>
        </div>
      </div>

      <h2 className="mx-0 mt-0 mb-4 text-[13px] font-bold tracking-[0.14em] uppercase text-ink-muted">
        3. Kontroller: pill-knappar och header-pill
      </h2>
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <a className="btn btn--primary" href="#">
          Primär · btn--primary
        </a>
        <a className="btn btn--secondary" href="#">
          Sekundär · btn--secondary
        </a>
        <a className="btn btn--primary btn--sm btn--flat" href="#">
          I header · btn--flat
        </a>
        <span className="glass glass--large relative inline-flex h-14 items-center rounded-pill px-6 text-[14px] font-bold tracking-[0.1em] uppercase">
          Header · glass--large
          <span className="scroll-edge" aria-hidden="true" />
        </span>
      </div>

      <h2 className="mx-0 mt-0 mb-4 text-[13px] font-bold tracking-[0.14em] uppercase text-ink-muted">
        4. Sämsta bakgrund: glas över Shadow Grey och över Bright Snow (§9.1)
      </h2>
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        <div className="box-border rounded-[20px] bg-lv-hero-bg p-8">
          <div className="glass box-border p-6">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase">Över Shadow Grey</div>
            <p className="mt-2 mb-0 text-[16px] leading-[1.55]">Headern när ett mörkt band scrollar upp under den.</p>
          </div>
        </div>
        <div className="box-border rounded-[20px] bg-snow p-8">
          <div className="glass box-border p-6">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase">Över Bright Snow</div>
            <p className="mt-2 mb-0 text-[16px] leading-[1.55]">
              Glaset ska synas mot vitt tack vare den yttre mörka kanten.
            </p>
          </div>
        </div>
        <div className="box-border rounded-[20px] bg-lv-hero-bg p-8">
          <div className="flex flex-wrap gap-3">
            <a className="btn btn--primary theme-dark" href="#">
              Primär · theme-dark
            </a>
            <a className="btn btn--secondary theme-dark" href="#">
              Sekundär · theme-dark
            </a>
          </div>
        </div>
      </div>

      <h2 className="mx-0 mt-0 mb-4 text-[13px] font-bold tracking-[0.14em] uppercase text-ink-muted">
        5. Rullgardin och modal: glass--strong med radie --r-xl
      </h2>
      <div className="glass glass--strong box-border max-w-[560px] rounded-panel p-7">
        <div className="text-[13px] font-bold tracking-[0.14em] uppercase">Panelyta</div>
        <p className="mt-2 mb-0 text-[16px] leading-[1.55] text-ink-soft">
          Rullgardiner och modaler använder den här varianten: fyllning 0.72, radie 28 px. Menyraderna inuti
          är vanliga element, inte egna glas.
        </p>
      </div>
    </div>
  );
}
