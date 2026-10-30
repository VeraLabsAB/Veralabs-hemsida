import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dev-servern blockerar skriptanrop från andra värdnamn än localhost. Det lokala nätet tillåts
     så att sajten går att testa på telefon via datorns IP (t.ex. 192.168.1.36:3000). Gäller bara dev. */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
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
