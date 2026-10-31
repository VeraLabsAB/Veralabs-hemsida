# Video på sajten

## Demofilmen på startsidan

Startsidans demosektion (`/#sa`, komponenten `src/components/DemoVideo.tsx`) läser:

- `demo.mp4` – demofilmen. H.264 i MP4, med ljud; startar automatiskt utan ljud
  när sektionen rullas in, besökaren slår på ljudet själv. Saknas filen visas en
  platshållare. Sätt filmens längd i `DEMO_LANGD_SEKUNDER` i `src/app/page.tsx`.
- `demo.sv.vtt` – textning (WebVTT), valfri. Ange sökvägen som `captions` på
  `<DemoVideo>` så visas den som standard.

## Bakgrundsvideo för integrationssektionen

Integrationssektionen på Kassio Finances produktsida (`/agenter/bokforing`) läser två filer härifrån:

- `integrationer.mp4` – videon. H.264 i en MP4-behållare, utan ljudspår,
  1920×1080, 10–20 sekunder som loopar sömlöst, helst under 8 MB. Lugnt
  motiv i Light Steel-toner; ett mörkt skikt (65 %) läggs ovanpå så videon
  får gärna vara ljus.
- `integrationer.jpg` – stillbild ur videon, visas innan videon laddat, vid
  "minska rörelse" och om videon saknas. Samma format, under 300 kB.

Saknas filerna visas sektionens vanliga mörka bakgrund. Komponenten är
`src/components/VideoBackground.tsx`.
