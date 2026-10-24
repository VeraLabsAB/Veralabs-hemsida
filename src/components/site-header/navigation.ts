export type NavLink = {
  href: string;
  title: string;
  description: string;
  /** Path data for a 24×24 stroke icon. */
  icon: string;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
};

export type NavSection = {
  label: string;
  /** Route prefixes that mark this section as the current one. */
  match: string[];
  /** One group renders as a simple dropdown, two as the wide mega menu. */
  groups: NavGroup[];
};

const ICONS = {
  grid: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
  ledger: "M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6",
  trend: "M3 17l6-6 4 4 8-8 M15 7h6v6",
  target: "M12 3a9 9 0 100 18 9 9 0 000-18z M12 8a4 4 0 100 8 4 4 0 000-8z M12 12h.01",
  box: "M3 8l9-5 9 5v8l-9 5-9-5z M3 8l9 5 9-5 M12 13v8",
  layers: "M4 7l8-4 8 4-8 4z M4 12l8 4 8-4 M4 17l8 4 8-4",
  calendar: "M5 5h14v15H5z M5 10h14 M9 3v4 M15 3v4",
  heart: "M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z",
  coin: "M12 3a9 9 0 100 18 9 9 0 000-18z M9 12h6 M12 8v8",
  page: "M6 3h8l4 4v14H6z",
  question: "M12 3a9 9 0 100 18 9 9 0 000-18z M9.5 9.5a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 4 M12 17h.01",
  play: "M8 5l11 7-11 7z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M8.5 12l2.5 2.5L16 9.5",
  lock: "M6 11h12v9H6z M8 11V8a4 4 0 018 0v3",
  lockTall: "M6 11h12v10H6z M8 11V7a4 4 0 018 0v4",
  info: "M12 3a9 9 0 100 18 9 9 0 000-18z M12 11v5 M12 8h.01",
  tag: "M3 12V4h8l10 10-8 8z M7.5 8h.01",
  calculator: "M6 3h12v18H6z M9 7h6 M9 12h.01 M12 12h.01 M15 12h.01 M9 16h.01 M12 16h.01 M15 16h.01",
  mail: "M3 6h18v12H3z M3 7l9 7 9-7",
  people:
    "M9 11a3 3 0 100-6 3 3 0 000 6z M3 20c0-3.5 3-6 6-6s6 2.5 6 6 M17 11a2.5 2.5 0 100-5 M17 14c2.5 0 4.5 2 4.5 5",
};

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Produkter",
    match: ["/foretag", "/agenter", "/privatpersoner", "/privat", "/kom-igang"],
    groups: [
      {
        heading: "Företag",
        links: [
          { href: "/foretag", title: "Alla agenter", description: "Översikt över alla agenter.", icon: ICONS.grid },
          {
            href: "/agenter/bokforing",
            title: "Bokföringsagenten",
            description: "Bokföring, moms, lön och bokslut.",
            icon: ICONS.ledger,
          },
          {
            href: "/agenter/trendovervakaren",
            title: "Trendövervakaren",
            description: "Efterfrågan som växer i er bransch.",
            icon: ICONS.trend,
          },
          {
            href: "/agenter/strategikonsulten",
            title: "Strategikonsulten",
            description: "Beslutsunderlag från era egna siffror.",
            icon: ICONS.target,
          },
          {
            href: "/agenter/leverantorsagenten",
            title: "Leverantörsagenten",
            description: "Sök och jämför leverantörer.",
            icon: ICONS.box,
          },
          {
            href: "/priser#paket",
            title: "Eget paket",
            description: "Flera agenter till paketpris.",
            icon: ICONS.layers,
          },
        ],
      },
      {
        heading: "Privatpersoner",
        links: [
          {
            href: "/privatpersoner",
            title: "Alla tjänster",
            description: "Översikt över tjänsterna.",
            icon: ICONS.grid,
          },
          {
            href: "/privat/kalender",
            title: "Kalender och vardag",
            description: "Planering som får allt att gå ihop.",
            icon: ICONS.calendar,
          },
          {
            href: "/privat/traning",
            title: "Tränings- och kostråd",
            description: "Träning och kost efter dina mål.",
            icon: ICONS.heart,
          },
          {
            href: "/privat/ekonomi",
            title: "Privatekonomi och sparande",
            description: "Budget, utgifter och sparande.",
            icon: ICONS.coin,
          },
        ],
      },
    ],
  },
  {
    label: "Info",
    match: ["/sa-fungerar-vera", "/vanliga-fragor"],
    groups: [
      {
        heading: "Info",
        links: [
          {
            href: "/sa-fungerar-vera",
            title: "Så fungerar Vera",
            description: "Från uppstart till vardag.",
            icon: ICONS.page,
          },
          {
            href: "/vanliga-fragor",
            title: "Vanliga frågor",
            description: "Svar på det vanligaste.",
            icon: ICONS.question,
          },
          { href: "/#sa", title: "Se en demo", description: "Två minuter med Vera.", icon: ICONS.play },
        ],
      },
    ],
  },
  {
    label: "Säkerhet",
    match: ["/sakerhet"],
    groups: [
      {
        heading: "Säkerhet",
        links: [
          {
            href: "/sakerhet",
            title: "Ni har sista ordet",
            description: "Godkännande i varje steg.",
            icon: ICONS.shield,
          },
          {
            href: "/sakerhet#skydd",
            title: "Så skyddar vi er",
            description: "Spärrar, regler och loggning.",
            icon: ICONS.lock,
          },
          {
            href: "/sakerhet#data",
            title: "Era uppgifter",
            description: "Ägande, lagring och GDPR.",
            icon: ICONS.lockTall,
          },
          {
            href: "/sakerhet#avgransning",
            title: "Vad Vera är, och inte är",
            description: "Ansvar och avgränsningar.",
            icon: ICONS.info,
          },
        ],
      },
    ],
  },
  {
    label: "Priser",
    match: ["/priser"],
    groups: [
      {
        heading: "Priser",
        links: [
          { href: "/priser", title: "Våra tjänster", description: "Priser per agent och tjänst.", icon: ICONS.tag },
          {
            href: "/priser#sa-gar-det-till",
            title: "Så går det till",
            description: "Demo, testmånad, engångspris.",
            icon: ICONS.page,
          },
          {
            href: "/priser#kalkylator",
            title: "Räkna på er besparing",
            description: "Vad arbetet kostar i dag.",
            icon: ICONS.calculator,
          },
          {
            href: "/#kontakt",
            title: "Få en prisuppskattning",
            description: "Ett pris för ert företag.",
            icon: ICONS.mail,
          },
        ],
      },
    ],
  },
  {
    label: "Om oss",
    match: ["/om-oss"],
    groups: [
      {
        heading: "Om oss",
        links: [
          { href: "/om-oss#ide", title: "Vår idé", description: "Varför vi bygger Vera.", icon: ICONS.info },
          { href: "/om-oss#grundaren", title: "Grundaren", description: "Personen bakom VeraAI.", icon: ICONS.people },
          { href: "/#kontakt", title: "Kontakta oss", description: "Svar inom en arbetsdag.", icon: ICONS.mail },
        ],
      },
    ],
  },
];
