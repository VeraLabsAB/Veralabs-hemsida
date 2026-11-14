import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dev-servern blockerar skriptanrop från andra värdnamn än localhost. Det lokala nätet tillåts
     så att sajten går att testa på telefon via datorns IP (t.ex. 192.168.1.36:3000). Gäller bara dev. */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  /* Sidor som togs bort 2026-11-14 för att de var dubbletter. Gamla länkar och bokmärken leder rätt.
     Tillfälliga (307) så att webbläsare inte cachar dem medan sidan fortfarande är en förhandsbild. */
  async redirects() {
    return [
      { source: "/foretag", destination: "/#agenter", permanent: false },
      { source: "/glas-test", destination: "/", permanent: false },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
