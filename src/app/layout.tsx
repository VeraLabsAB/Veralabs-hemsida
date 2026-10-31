import type { Metadata } from "next";
import { Archivo_Black, League_Spartan, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: "700",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Kassio Finance – AI-agenter för företag",
    template: "%s – Kassio Finance",
  },
  description:
    "Vera är ett team av AI-agenter som sköter bokföringen, bevakar marknaden och räknar på dina beslut. Du godkänner, Vera gör resten. Från Kassio Labs i Stockholm.",
  robots: { index: false, follow: false },
};

/** Mörkt läge är sajtens enda läge (Hugos beslut 2026-10-30): data-theme="dark" sätts fast här.
 *  De ljusa tokens finns kvar i tokens.css för theme-inverse och för att kunna återinföra
 *  switchen (ThemeToggle.tsx) senare. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      data-theme="dark"
      className={`${montserrat.variable} ${leagueSpartan.variable} ${archivoBlack.variable}`}
    >
      <body>
        {/* Soft Light Steel spots behind every page, so glass surfaces have something to blur (DESIGN-GLASS.md §5). */}
        <div className="light-field" aria-hidden="true" />
        {/* Clip so phones can't scroll sideways (safety net for wide tables and example cards). */}
        <div className="min-h-screen overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
