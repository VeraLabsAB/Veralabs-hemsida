"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Demofilmen under public/, t.ex. "/video/demo.mp4" (H.264 i MP4). */
  src: string;
  /** Stillbild som visas innan filmen laddat. */
  poster?: string;
  /** Textningsfil (WebVTT) under public/. Visas som standard när den anges. */
  captions?: string;
  /** Klasser för ramen runt filmen; den måste vara `relative` och ha en höjd. */
  className?: string;
};

/**
 * Startsidans demofilm. Fyller hela sin ram, startar utan ljud när den rullas in i fönstret
 * (IntersectionObserver) och pausas när den rullas ut. Vid "minska rörelse" startar den aldrig
 * av sig själv. Synliga knappar för ljud på/av och paus/spela. Går filmen inte att ladda visas en
 * platshållare i stället för en tom yta.
 */
export function DemoVideo({ src, poster, captions, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React skriver inte ut muted i server-HTML:en, så det sätts här innan något försöker spela.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByUser.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlay = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  return (
    <div className={className}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        aria-label="Demofilm: Kassio bokför en hel vecka"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      >
        {captions && <track kind="subtitles" srcLang="sv" label="Svenska" src={captions} default />}
      </video>
      {failed ? (
        <div className="absolute inset-0 p-6 gap-4 bg-[linear-gradient(135deg,var(--contrast)_0%,var(--accent)_100%)] flex flex-col items-center justify-center text-ink-inverse text-center box-border">
          <div className="rounded-full w-18 h-18 bg-page flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M4 2l8 5-8 5z" fill="var(--contrast)" />
            </svg>
          </div>
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase">Demofilm</div>
          <div className="text-[15px] leading-[1.5] text-ink-inverse-soft max-w-[360px]">
            Filmen är på väg. Vill ni inte vänta? Boka ett möte, så visar vi live.
          </div>
        </div>
      ) : (
        <div className="absolute bottom-5 right-5 gap-2 flex flex-wrap justify-end">
          <button
            className="btn btn--secondary btn--sm theme-dark"
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausa filmen" : "Spela filmen"}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
              {playing ? (
                <path d="M3 2h3v10H3z M8 2h3v10H8z" fill="currentColor" />
              ) : (
                <path d="M3 1.5l9 5.5-9 5.5z" fill="currentColor" />
              )}
            </svg>
            <span>{playing ? "Paus" : "Spela"}</span>
          </button>
          <button
            className="btn btn--secondary btn--sm theme-dark"
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Slå på ljudet" : "Stäng av ljudet"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d={muted ? "M4 9v6h4l5 4V5L8 9z M16 9l5 6 M21 9l-5 6" : "M4 9v6h4l5 4V5L8 9z M16 8a5 5 0 010 8 M18.5 5.5a9 9 0 010 13"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{muted ? "Ljud på" : "Ljud av"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
