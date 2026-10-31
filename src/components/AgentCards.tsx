import Link from "next/link";

export type Agent = {
  /** Produktsidan, t.ex. "/agenter/bokforing". */
  href: string;
  /** Namnet, med mjukt bindestreck (­) där det får avstavas på smala skärmar. */
  name: string;
  /** Etikett i kortets hörn, t.ex. "Första agenten". */
  badge?: string;
  description: string;
  /** Exakt tre punkter. */
  points: [string, string, string];
};

/** Agenterna som visas på /foretag och i startsidans avslut. En källa, så att texten inte kopieras. */
export const AGENTER: Agent[] = [
  {
    href: "/agenter/bokforing",
    name: "Kassio Finance",
    badge: "Första agenten",
    description: "Sköter hela den löpande bokföringen. Vecka för vecka, utan att du behöver påminna.",
    points: [
      "Läser kontoutdrag, kvitton och Z-rapporter",
      "Konterar enligt din regelbok",
      "Stämmer av och lämnar veckan klar för godkännande",
    ],
  },
  {
    href: "/agenter/trendovervakaren",
    name: "Trend­övervakaren",
    description: "Bevakar din marknad dygnet runt och säger till när något rör sig i din riktning.",
    points: [
      "Sökningar, sociala medier och marknadsplatser",
      "Inköpsförslag med motivering",
      "Underlag inför säsonger och kampanjer",
    ],
  },
  {
    href: "/agenter/strategikonsulten",
    name: "Strategi­konsulten",
    description: "Räknar på dina beslut innan du fattar dem.",
    points: ["Nulägesanalys direkt från bokföringen", "Prioriterade åtgärder, med siffror", "Uppföljning mot dina mål"],
  },
  {
    href: "/agenter/leverantorsagenten",
    name: "Leverantörs­agenten",
    description: "Hittar och utvärderar leverantörer, så att du slipper börja från noll.",
    points: ["Sökning och jämförelse", "Bevakning av nya alternativ", "Färdig sammanställning inför beslut"],
  },
];

function Check({ size }: { size: number }) {
  return (
    <svg className="mt-0.5 flex-none" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="var(--contrast)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CardProps = {
  agent: Agent;
  /** "large" är kortet på /foretag; "small" är den mindre rutan i startsidans avslut. */
  size?: "large" | "small";
};

/** Ett agentkort: namn, en rad beskrivning, tre punkter och "Läs mer" till produktsidan. */
export function AgentCard({ agent, size = "large" }: CardProps) {
  const small = size === "small";
  return (
    <div className={`${small ? "p-6 gap-3" : "p-8 gap-4"} rounded-card bg-page border border-line flex flex-col`}>
      <div className="gap-3 flex flex-wrap justify-between items-center">
        <h3
          className={`m-0 font-display font-bold wrap-break-word tracking-[0.01em] uppercase ${
            small ? "text-[20px]" : "text-[clamp(22px,6vw,30px)]"
          }`}
        >
          {agent.name}
        </h3>
        {agent.badge && (
          <span className="px-3 py-[5px] rounded-full bg-chip text-contrast text-[12px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
            {agent.badge}
          </span>
        )}
      </div>
      <p className={`m-0 ${small ? "text-[15px]" : "text-[16px]"} leading-[1.55] text-ink font-sans`}>
        {agent.description}
      </p>
      <div className={`${small ? "gap-2" : "gap-2.5"} flex flex-col`}>
        {agent.points.map((point) => (
          <div key={point} className={`${small ? "gap-2" : "gap-2.5"} flex items-start`}>
            <Check size={small ? 18 : 20} />
            <span className={`${small ? "text-[14px]" : "text-[16px]"} leading-[1.5] text-ink font-sans`}>{point}</span>
          </div>
        ))}
      </div>
      <Link
        className="mt-auto gap-2 inline-flex items-center font-bold text-[13px] tracking-[0.12em] uppercase no-underline text-accent"
        href={agent.href}
      >
        Läs mer <Arrow />
      </Link>
    </div>
  );
}
