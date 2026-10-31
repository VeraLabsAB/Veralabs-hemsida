#!/usr/bin/env node
/**
 * Kontroll av startsidan efter omskrivningen 2026-10-31. Kör med dev-servern igång:
 *
 *   node scripts/kolla-startsidan.mjs
 *   node scripts/kolla-startsidan.mjs --url http://localhost:3000
 *
 * Skriver GRÖN eller RÖD per kontroll. Avslutningskod 0 när allt är grönt, 1 annars.
 * Inga beroenden: HTML:en läses med enkla reguljära uttryck. Textkontrollerna görs på
 * innehållet i <main>, så att menyn och sidfoten (som inte ingår i uppgiften) inte stör;
 * länkkontrollen för menyknappen "Boka en demo" görs på hela sidan.
 */

const args = process.argv.slice(2);
const urlArg = args.indexOf("--url");
const BASE = (urlArg > -1 ? args[urlArg + 1] : "http://localhost:3000").replace(/\/$/, "");

const results = [];
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;

function report(title, ok, detail = "") {
  results.push(ok);
  console.log(`${ok ? green("GRÖN") : red("RÖD ")}  ${title}${detail ? "\n       " + detail : ""}`);
}

/* ── HTML-hjälp ─────────────────────────────────────────────────────── */
const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", shy: "", hellip: "…" };
function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, name) => (name in ENTITIES ? ENTITIES[name] : m));
}
/** Synlig text: utan script/style, taggar, mjuka bindestreck och extra blanksteg. */
function textOf(html) {
  return decode(
    html
      .replace(/<(script|style|template)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/­/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
const norm = (s) => s.replace(/­/g, "").replace(/\s+/g, " ").trim().toLowerCase();
const has = (text, needle) => norm(text).includes(norm(needle));
const count = (text, needle) => norm(text).split(norm(needle)).length - 1;

/** Alla <a>-taggar: { href, text } (texten utan inre taggar). */
function links(html) {
  const out = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = /\bhref="([^"]*)"/i.exec(m[1])?.[1] ?? "";
    out.push({ href, text: textOf(m[2]) });
  }
  return out;
}
/** Innehållet i det första elementet med ett visst id, genom att räkna öppnande och stängande taggar. */
function elementById(html, id) {
  const start = html.search(new RegExp(`<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"`, "i"));
  if (start < 0) return null;
  const tag = /<([a-z][a-z0-9]*)/i.exec(html.slice(start))[1];
  const re = new RegExp(`<${tag}\\b[^>]*?(?<!/)>|</${tag}>`, "gi");
  re.lastIndex = start;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    depth += m[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(start, m.index + m[0].length);
  }
  return html.slice(start);
}
function mainOf(html) {
  const m = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  return m ? m[1] : html;
}

async function fetchHtml(path) {
  const res = await fetch(BASE + path, { headers: { accept: "text/html" } });
  if (!res.ok) throw new Error(`${path} svarade ${res.status}`);
  return res.text();
}

/* ── Kontroller ─────────────────────────────────────────────────────── */
let home;
try {
  home = await fetchHtml("/");
} catch (err) {
  console.error(red(`Kunde inte hämta ${BASE}/: ${err.message}. Är dev-servern igång (npm run dev)?`));
  process.exit(1);
}
const main = mainOf(home);
const mainText = textOf(main);

const FINNS = [
  "Ni driver företaget. Kassio gör resten.",
  "Boka ett gratis möte",
  "Se våra agenter",
  "Fungerar med Fortnox, Bokio och Spiris",
  "Välj era agenter",
  "Koppla in era program",
  "Låt Kassio sköta resten",
  "Jämför tre sätt att få arbetet gjort.",
  "Vilket jobb vill ni lämna över först?",
  "få personlig rådgivning, så att ert företag får ut så mycket som möjligt av Kassio",
  "Boka mitt möte",
  "30 minuter, utan förpliktelser",
];
for (const s of FINNS) report(`Finns: ”${s}”`, has(mainText, s));

const SAKNAS = [
  "Vera gör resten",
  "Se Vera arbeta",
  "Se vad Vera kan ta över",
  "En hel arbetsvecka. På två minuter.",
  "Full kontroll. Alltid.",
  "Fungerar med det du redan använder",
  "Så går det till",
  "Boka min demo",
  // Kundrösterna (dolda med VISA_KUNDROSTER = false).
  "Tre kvällar i månaden blev en kvart i veckan",
  "såg att marginalen på jackorna sjönk",
  "Anna Berg",
  "Erik Sund",
  // Grundarsektionen (flyttad till Om oss).
  "Ingen ska behöva lägga sina kvällar på pappersarbete",
  "Hugo · Grundare",
  // Prissektionens rubrik. Startsidan hade ingen egen prissektion när uppgiften gjordes;
  // rubriken nedan är den som används på /foretag och /priser, så att den inte råkar hamna här.
  "Ett pris per månad. Inga timmar att räkna.",
];
for (const s of SAKNAS) report(`Saknas: ”${s}”`, !has(mainText, s));

/* id="kontakt" exakt en gång, med formuläret inuti. */
const kontaktCount = (home.match(/\bid="kontakt"/g) ?? []).length;
report("Exakt ett element med id=\"kontakt\"", kontaktCount === 1, `hittade ${kontaktCount}`);
const kontakt = elementById(home, "kontakt");
report("Kontaktformuläret ligger i #kontakt", Boolean(kontakt && /<form\b/i.test(kontakt)));

/* "Boka ett gratis möte": två gånger, båda länkar till /#kontakt. */
const gratis = links(main).filter((l) => norm(l.text) === norm("Boka ett gratis möte"));
report(
  "”Boka ett gratis möte” förekommer två gånger",
  count(mainText, "Boka ett gratis möte") === 2 && gratis.length === 2,
  `text: ${count(mainText, "Boka ett gratis möte")}, länkar: ${gratis.length}`,
);
report(
  "Båda ”Boka ett gratis möte” länkar till /#kontakt",
  gratis.length > 0 && gratis.every((l) => l.href === "/#kontakt"),
  gratis.map((l) => l.href).join(", ") || "inga länkar",
);

/* Menyknappen "Boka en demo" (hela sidan, utanför <main>). */
const demoButtons = links(home).filter((l) => norm(l.text) === norm("Boka en demo"));
report(
  "Menyknappen ”Boka en demo” länkar till /#kontakt",
  demoButtons.length > 0 && demoButtons.every((l) => l.href === "/#kontakt"),
  demoButtons.map((l) => l.href).join(", ") || "ingen knapp hittad",
);

/* "Se våra agenter" → /foretag. */
const agenter = links(main).filter((l) => norm(l.text) === norm("Se våra agenter"));
report(
  "”Se våra agenter” länkar till /foretag",
  agenter.length === 1 && agenter[0].href === "/foretag",
  agenter.map((l) => l.href).join(", ") || "ingen länk hittad",
);

/* Integrationssektionen på Kassio Finances produktsida. */
try {
  const produkt = textOf(mainOf(await fetchHtml("/agenter/bokforing")));
  report(
    "Produktsidan /agenter/bokforing har integrationssektionen",
    has(produkt, "Fungerar med det du redan använder. Byt ingenting.") && has(produkt, "Visma eEkonomi"),
  );
} catch (err) {
  report("Produktsidan /agenter/bokforing har integrationssektionen", false, err.message);
}

/* Grundarsektionen på Om oss. */
try {
  const omOss = textOf(mainOf(await fetchHtml("/om-oss")));
  report(
    "Grundarsektionen finns på /om-oss",
    has(omOss, "Ingen ska behöva lägga sina kvällar på pappersarbete") && has(omOss, "Hugo · Grundare, Kassio Labs AB"),
  );
} catch (err) {
  report("Grundarsektionen finns på /om-oss", false, err.message);
}

const failed = results.filter((ok) => !ok).length;
console.log(failed === 0 ? green(`\nAllt grönt (${results.length} kontroller).`) : red(`\n${failed} av ${results.length} kontroller röda.`));
process.exit(failed === 0 ? 0 : 1);
