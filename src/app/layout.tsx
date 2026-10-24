import type { Metadata } from "next";
import { Archivo_Black, League_Spartan, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { themeInitScript } from "@/components/site-header/ThemeToggle";
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
    default: "VeraAI – AI-agenter för företag",
    template: "%s – VeraAI",
  },
  description:
    "Vera är ett team av AI-agenter som förbereder bokföringen, bevakar marknaden och tar fram underlag för era beslut. Ni granskar och godkänner.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${montserrat.variable} ${leagueSpartan.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {/* Slide-in boxes start 90px off to the side; clip so phones can't scroll sideways. */}
        <div className="min-h-screen overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
