"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Videofil under public/, t.ex. "/video/integrationer.mp4" (H.264, ljudlös, kort loop). */
  src: string;
  /** Stillbild som visas innan videon laddat, vid "minska rörelse" och om filen saknas. */
  poster?: string;
  /** Uppspelningshastighet: 1 = normal, 0.5 = halvfart. Webbläsare klarar ner till 0.25. */
  speed?: number;
  className?: string;
};

/**
 * Dekorativ bakgrundsvideo. Ljudlös, loopad, utan kontroller. Spelas bara medan den syns i
 * fönstret, aldrig när användaren bett om minskad rörelse, och döljs om filen inte går att
 * ladda (då syns stillbilden eller sektionens egen bakgrund). Lägg alltid ett mörkt skikt
 * och solida ytor för texten ovanpå (DESIGN-GLASS §9 och §10).
 */
export function VideoBackground({ src, poster, speed = 1, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = speed;
    video.defaultPlaybackRate = speed;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [speed]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      onError={(e) => {
        e.currentTarget.hidden = true;
      }}
    />
  );
}
