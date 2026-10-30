import Link from "next/link";
import { Logo } from "@/components/site-header/SiteHeader";

const COLUMNS = [
  {
    heading: "Produkter",
    links: [
      { href: "/foretag", label: "Alla agenter" },
      { href: "/agenter/bokforing", label: "Bokföringsagenten" },
      { href: "/privatpersoner", label: "För privatpersoner" },
      { href: "/priser", label: "Priser" },
    ],
  },
  {
    heading: "Vera",
    links: [
      { href: "/sa-fungerar-vera", label: "Så fungerar Vera" },
      { href: "/vanliga-fragor", label: "Vanliga frågor" },
      { href: "/sakerhet", label: "Säkerhet" },
      { href: "/om-oss", label: "Om oss" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
  },
  {
    heading: "Villkor",
    links: [
      { href: "#integritetspolicy", label: "Integritetspolicy" },
      { href: "#cookies", label: "Cookies" },
      { href: "#villkor", label: "Användarvillkor" },
      { href: "https://app-vera.ai", label: "Kundinloggning" },
    ],
  },
];

const linkClass = "text-[14px] leading-[1.5] text-ink-soft no-underline";

/** Fråga 7: sidfoten är solid Shadow Grey i båda lägena. theme-dark ger den de mörka tokens
 *  (DESIGN-GLASS §2), så text, loggan och kanten (Iron Grey) följer med utan egna klasser. */
export function SiteFooter() {
  return (
    <footer className="theme-dark border-t border-t-line bg-page">
      <div className="mx-auto box-border max-w-[1200px] px-10 pt-14 pb-7">
        <div className="flex flex-wrap gap-x-8 gap-y-10">
          <div className="min-w-0 flex-[2_1_260px]">
            <Logo />
            <p className="mx-0 mt-4 mb-0 max-w-[320px] text-[14px] leading-[1.6] text-ink-soft">
              AI-agenter som tar hand om administrationen, så att ni kan fokusera på verksamheten.
            </p>
            <p className="mx-0 mt-4 mb-0 text-[14px] leading-[1.7] text-ink-soft">
              <a href="mailto:hej@veralabs.se" className="font-semibold text-contrast">
                hej@veralabs.se
              </a>
              <br />
              [ADRESS]
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.heading} className="min-w-0 flex-[1_1_160px]">
              <div className="mx-0 mt-0 mb-3.5 text-[12px] font-bold tracking-[0.14em] text-ink uppercase">
                {column.heading}
              </div>
              <div className="flex flex-col gap-2.5">
                {column.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link key={link.href} href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-t-line pt-5 text-[13px] leading-[1.5] text-ink-muted">
          <span>
            © 2026 Vera Labs AB · Org.nr [XXXXXX-XXXX] ·{" "}
            <a href="https://veralabs.se" className="text-ink-muted">
              veralabs.se
            </a>
          </span>
          <span>VeraAI är ett varumärke från Vera Labs AB. Alla företag och siffror i exemplen är påhittade.</span>
        </div>
      </div>
    </footer>
  );
}
