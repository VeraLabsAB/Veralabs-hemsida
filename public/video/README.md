# Bakgrundsvideo för integrationssektionen

Startsidans integrationssektion läser två filer härifrån:

- `integrationer.mp4` – videon. H.264 i en MP4-behållare, utan ljudspår,
  1920×1080, 10–20 sekunder som loopar sömlöst, helst under 8 MB. Lugnt
  motiv i Light Steel-toner; ett mörkt skikt (65 %) läggs ovanpå så videon
  får gärna vara ljus.
- `integrationer.jpg` – stillbild ur videon, visas innan videon laddat, vid
  "minska rörelse" och om videon saknas. Samma format, under 300 kB.

Saknas filerna visas sektionens vanliga mörka bakgrund. Komponenten är
`src/components/VideoBackground.tsx`.
