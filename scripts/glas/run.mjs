#!/usr/bin/env node
/**
 * Glas-testerna: DESIGN-GLASS.md §12, en punkt i taget, grönt eller rött.
 *
 *   npm run test:glas               bygger, startar en produktionsserver på port 3100,
 *                                   kör alla kontroller och sparar skärmdumpar i
 *                                   docs/skarmdumpar/<datum>/
 *   npm run test:glas -- --skip-build   hoppar över bygget (snabbare när koden redan är byggd)
 *   npm run test:glas -- --url http://localhost:3000   kör mot en server som redan är igång
 *
 * Kräver: playwright (npm i -D playwright && npx playwright install chromium).
 * axe-core finns redan som indirekt beroende.
 *
 * Avslutningskod 0 när allt är grönt, 1 annars. Skriptet är skrivet för att köras av
 * Hugo i Terminalen (kommandovakten tillåter inte node härifrån, GLAS-PLAN.md fråga 15).
 */

import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const args = process.argv.slice(2);
const skipBuild = args.includes("--skip-build");
const urlArg = args.indexOf("--url");
const externalUrl = urlArg > -1 ? args[urlArg + 1] : null;
const PORT = 3100;
const BASE = externalUrl ?? `http://localhost:${PORT}`;
const today = new Date().toISOString().slice(0, 10);
const SHOT_DIR = join(ROOT, "docs", "skarmdumpar", today);
const BASELINE = join(ROOT, "scripts", "glas", "build-baseline.txt");

/* Samma väljare som glasräkningen i GLAS-PLAN.md: platta knappar är solida och räknas inte. */
const GLASS_SELECTOR = ".glass, .btn--primary:not(.btn--flat), .btn--secondary:not(.btn--flat)";

const results = [];
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

function report(nr, title, ok, detail = "") {
  results.push({ nr, title, ok });
  const mark = ok ? green("GRÖN") : red("RÖD ");
  console.log(`${mark}  ${nr}. ${title}${detail ? "\n       " + detail.replace(/\n/g, "\n       ") : ""}`);
}

/* ── Filhjälp ────────────────────────────────────────────────────────── */
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
const srcFiles = (sub, exts) =>
  walk(join(ROOT, "src", sub)).filter((f) => exts.some((e) => f.endsWith(e)));
const rel = (p) => relative(ROOT, p);

/* ── 1. Build ────────────────────────────────────────────────────────── */
function runBuild() {
  if (skipBuild || externalUrl) {
    report(1, "npm run build", true, dim("hoppades över (--skip-build / --url)"));
    return true;
  }
  console.log(dim("Bygger …"));
  const r = spawnSync("node", ["node_modules/next/dist/bin/next", "build"], {
    cwd: ROOT,
    encoding: "utf8",
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  });
  const out = (r.stdout ?? "") + (r.stderr ?? "");
  const warnings = out.split("\n").filter((l) => /warn/i.test(l) && !/warnings?:\s*0/i.test(l));
  let baselineNote = "";
  if (existsSync(BASELINE)) {
    const base = readFileSync(BASELINE, "utf8").split("\n").filter(Boolean);
    const news = warnings.filter((w) => !base.includes(w.trim()));
    baselineNote = news.length ? `nya varningar mot baslinjen:\n${news.join("\n")}` : "inga nya varningar mot baslinjen";
    report(1, "npm run build utan fel och utan nya varningar", r.status === 0 && news.length === 0, baselineNote);
  } else {
    writeFileSync(BASELINE, warnings.map((w) => w.trim()).join("\n") + (warnings.length ? "\n" : ""));
    report(
      1,
      "npm run build utan fel",
      r.status === 0,
      `baslinje sparad i ${rel(BASELINE)} (${warnings.length} varningsrader). ` +
        (r.status === 0 ? "" : out.split("\n").slice(-25).join("\n")),
    );
  }
  return r.status === 0;
}

/* ── 2. Hex-grep ─────────────────────────────────────────────────────── */
function checkHex() {
  const files = [...srcFiles("app", [".tsx", ".ts", ".css"]), ...srcFiles("components", [".tsx", ".ts", ".css"])];
  const hits = [];
  const re = /#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}(?![0-9A-Fa-f])/g;
  for (const f of files) {
    const lines = readFileSync(f, "utf8").split("\n");
    lines.forEach((l, i) => {
      if (re.test(l)) hits.push(`${rel(f)}:${i + 1}: ${l.trim()}`);
      re.lastIndex = 0;
    });
  }
  const tokens = readFileSync(join(ROOT, "src/styles/tokens.css"), "utf8");
  const tokenHex = [...new Set(tokens.match(/#[0-9A-Fa-f]{6}/g) ?? [])];
  report(
    2,
    "Inga hex-färger i src/app och src/components; exakt nio i tokens.css",
    hits.length === 0 && tokenHex.length === 9,
    (hits.length ? hits.join("\n") + "\n" : "") + `tokens.css: ${tokenHex.length} unika hex`,
  );
}

/* ── 3 + 8. backdrop-filter bara i glass.css, aldrig animerat ────────── */
function checkBackdrop() {
  const files = walk(join(ROOT, "src")).filter((f) => /\.(tsx|ts|css)$/.test(f));
  const offenders = files.filter((f) => !f.endsWith("glass.css") && readFileSync(f, "utf8").includes("backdrop-filter"));
  const glass = readFileSync(join(ROOT, "src/styles/glass.css"), "utf8").split("\n");
  const plain = glass.filter((l) => /^\s*backdrop-filter:/.test(l)).length;
  const prefixed = glass.filter((l) => /^\s*-webkit-backdrop-filter:/.test(l)).length;
  const prefixedVar = glass.filter((l) => /-webkit-backdrop-filter:.*var\(/.test(l));
  report(
    3,
    "backdrop-filter bara i glass.css, varje rad med prefixad tvilling utan var()",
    offenders.length === 0 && plain === prefixed && prefixedVar.length === 0,
    (offenders.length ? "även i: " + offenders.map(rel).join(", ") + "\n" : "") +
      `${plain} oprefixade, ${prefixed} prefixade, ${prefixedVar.length} med var()`,
  );
  const animated = [];
  for (const f of files) {
    readFileSync(f, "utf8")
      .split("\n")
      .forEach((l, i) => {
        if (/(transition|animation)[^;]*backdrop/.test(l)) animated.push(`${rel(f)}:${i + 1}`);
      });
  }
  report(8, "Ingen transition eller animation nämner backdrop", animated.length === 0, animated.join("\n"));
}

/* ── Server ──────────────────────────────────────────────────────────── */
async function waitFor(url, ms = 30000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    try {
      const r = await fetch(url);
      if (r.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 400));
  }
  return false;
}

function startServer() {
  const child = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], {
    cwd: ROOT,
    stdio: "ignore",
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  });
  return child;
}

/* ── Webbläsardelen (4–7) ────────────────────────────────────────────── */
async function browserChecks() {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    report(4, "Glasräkning (kräver playwright)", false, "Installera: npm i -D playwright && npx playwright install chromium");
    report(5, "axe color-contrast (kräver playwright)", false, "");
    report(6, "Skärmdumpar (kräver playwright)", false, "");
    report(7, "prefers-reduced-motion (kräver playwright)", false, "");
    return;
  }
  const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
  mkdirSync(SHOT_DIR, { recursive: true });
  const browser = await chromium.launch();

  const open = async ({ width, height, dark, reducedMotion, reducedTransparency, path }) => {
    const context = await browser.newContext({
      viewport: { width, height },
      colorScheme: dark ? "dark" : "light",
      reducedMotion: reducedMotion ? "reduce" : "no-preference",
    });
    const page = await context.newPage();
    if (reducedTransparency) {
      const cdp = await context.newCDPSession(page);
      await cdp.send("Emulation.setEmulatedMedia", {
        features: [{ name: "prefers-reduced-transparency", value: "reduce" }],
      });
    }
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.evaluate(() => (document.fonts ? document.fonts.ready : null));
    return { context, page };
  };

  const countGlass = (page) =>
    page.evaluate((sel) => {
      return [...document.querySelectorAll(sel)].filter((e) => {
        const r = e.getBoundingClientRect();
        return (
          r.width > 0 &&
          r.height > 0 &&
          r.bottom > 0 &&
          r.top < innerHeight &&
          getComputedStyle(e).visibility !== "hidden" &&
          getComputedStyle(e).opacity !== "0"
        );
      }).length;
    }, GLASS_SELECTOR);

  /* 4. Glasräkning */
  {
    const details = [];
    let ok = true;
    for (const path of ["/", "/agenter/bokforing"]) {
      const { context, page } = await open({ width: 1280, height: 800, dark: true, path });
      const closed = await countGlass(page);
      details.push(`${path} ovanför vecket: ${closed} (≤ 3)`);
      if (closed > 3) ok = false;
      if (path === "/") {
        await page.getByRole("button", { name: /^Produkter/ }).click();
        await page.waitForTimeout(300);
        const opened = await countGlass(page);
        details.push(`${path} med öppen rullgardin: ${opened} (≤ 4)`);
        if (opened > 4) ok = false;
      }
      await context.close();
    }
    report(4, "Max 3 glasytor ovanför vecket, max 4 med öppen rullgardin", ok, details.join("\n"));
  }

  /* 5. axe color-contrast: 390 + 1280, startsidan och en produktsida.
     Sajten är bara mörk sedan 2026-10-30 (data-theme="dark" fast i layout.tsx),
     så "ljus" testas inte; sätt MODES till [false, true] om switchen återinförs. */
  const MODES = [true];
  {
    const details = [];
    let total = 0;
    for (const path of ["/", "/agenter/bokforing"]) {
      for (const dark of MODES) {
        for (const width of [390, 1280]) {
          const { context, page } = await open({ width, height: 844, dark, path });
          await page.addScriptTag({ content: axeSource });
          const violations = await page.evaluate(async () => {
            const r = await window.axe.run(document, { runOnly: ["color-contrast"] });
            return r.violations.flatMap((v) =>
              v.nodes.slice(0, 8).map((n) => `${n.target.join(" ")} – ${n.failureSummary?.split("\n")[1] ?? ""}`),
            );
          });
          total += violations.length;
          details.push(`${path} ${dark ? "mörk" : "ljus"} ${width}px: ${violations.length} fel`);
          for (const v of violations) details.push("   " + v);
          await context.close();
        }
      }
    }
    report(5, "axe color-contrast: noll fel, 390 och 1280 px", total === 0, details.join("\n"));
  }

  /* 6. Skärmdumpar */
  {
    const shots = [
      { name: "desktop", width: 1280, height: 800, dark: true },
      { name: "mobil", width: 390, height: 844, dark: true },
      { name: "minskad-transparens", width: 1280, height: 800, dark: true, reducedTransparency: true },
    ];
    const saved = [];
    for (const s of shots) {
      for (const [slug, path] of [
        ["start", "/"],
        ["glas-test", "/glas-test"],
      ]) {
        const { context, page } = await open({ ...s, path });
        const file = join(SHOT_DIR, `${slug}-${s.name}.png`);
        await page.screenshot({ path: file, fullPage: slug === "glas-test" });
        saved.push(rel(file));
        await context.close();
      }
    }
    report(6, `Skärmdumpar sparade i ${rel(SHOT_DIR)}`, saved.length === shots.length * 2, saved.join("\n"));
  }

  /* 7. prefers-reduced-motion: inga transitions eller animationer kvar på glas och reveal */
  {
    const { context, page } = await open({ width: 1280, height: 800, dark: true, reducedMotion: true, path: "/" });
    const leftovers = await page.evaluate((sel) => {
      const els = [...document.querySelectorAll(`${sel}, .reveal, .reveal-stagger > *, .btn`)];
      return els
        .filter((e) => {
          const s = getComputedStyle(e);
          const hasTransition = s.transitionDuration.split(",").some((d) => parseFloat(d) > 0);
          const hasAnimation = s.animationName !== "none";
          return hasTransition || hasAnimation;
        })
        .slice(0, 10)
        .map((e) => e.className.toString().slice(0, 60));
    }, GLASS_SELECTOR);
    report(7, "prefers-reduced-motion: inga övergångar eller animationer kvar", leftovers.length === 0, leftovers.join("\n"));
    await context.close();
  }

  await browser.close();
}

/* ── 9. Checklista för Hugos Safari-test ─────────────────────────────── */
function safariChecklist() {
  console.log(`
${dim("9. Manuell Safari-kontroll (går inte att köra i headless Chromium):")}
   [ ] Öppna startsidan i Safari på Mac: headern och knapparna ska vara frostade, inte solida.
   [ ] Öppna rullgardinen Produkter: panelen ska sudda sidan bakom sig.
   [ ] Slå på Systeminställningar → Hjälpmedel → Skärm → Minska transparens: allt glas ska bli solidt.
   [ ] Samma sida på iPhone (Safari): pillen 48 px, mobilmenyn som egen panel, glaset frostat.
   [ ] Slå på Öka kontrast: glasytor får 2 px kant och blir solida.
`);
}

/* ── Kör ─────────────────────────────────────────────────────────────── */
(async () => {
  console.log(dim(`Glas-tester ${today} – ${BASE}\n`));
  const built = runBuild();
  checkHex();
  checkBackdrop();

  let server = null;
  if (!externalUrl) {
    if (!built) {
      console.log(red("Bygget misslyckades, hoppar över webbläsardelen."));
    } else {
      server = startServer();
      const up = await waitFor(BASE);
      if (!up) {
        report(4, "Starta produktionsserver", false, `${BASE} svarade inte inom 30 s`);
        server.kill();
        server = null;
      }
    }
  }
  if (externalUrl || server) {
    try {
      await browserChecks();
    } catch (e) {
      report(4, "Webbläsardelen", false, String(e?.message ?? e));
    }
  }
  if (server) server.kill();

  safariChecklist();
  const failed = results.filter((r) => !r.ok);
  console.log(failed.length ? red(`\n${failed.length} kontroll(er) röda.`) : green("\nAllt grönt."));
  process.exit(failed.length ? 1 : 0);
})();
