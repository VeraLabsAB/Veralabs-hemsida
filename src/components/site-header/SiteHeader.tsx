"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_SECTIONS, type NavLink, type NavSection } from "./navigation";
import { ThemeToggle } from "./ThemeToggle";

function isActive(section: NavSection, pathname: string) {
  return section.match.some((prefix) => pathname === prefix || pathname.startsWith(prefix + "/"));
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 5l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownLink({ link }: { link: NavLink }) {
  return (
    <Link className="nav-link" href={link.href}>
      <svg className="mt-0.5 flex-none" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d={link.icon}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <span className="nav-link-title">{link.title}</span>
        <span className="nav-link-desc">{link.description}</span>
      </span>
    </Link>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-ink no-underline" aria-label="Vera Labs, till startsidan">
      <svg className="flex-none" width="34" height="34" viewBox="0 0 452 452" aria-hidden="true">
        <rect width="452" height="452" rx="100" fill="var(--logo-sq)" />
        <path d="M78 105H155L226 266L190 345Z" fill="#F8F9FA" />
        <path d="M297 105H373L261 345H190Z" fill="#6C757D" />
      </svg>
      <span className="inline-flex items-baseline gap-[0.45em] whitespace-nowrap leading-none">
        <span className="font-display text-[25px] font-bold tracking-[0.03em] text-logo-ink">VERA</span>
        <span className="font-sans text-[23px] font-normal tracking-[0.2em] text-[#6C757D]">LABS</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The mobile menu remembers the page it was opened on, so it closes after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === pathname;

  // Drop focus after navigating so a dropdown opened by keyboard or click closes too.
  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }, [pathname]);

  return (
    <header className="relative z-60 mx-auto box-border flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-10 py-6">
      <Logo />
      <button
        className="nav-burger"
        type="button"
        aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setOpenOn(menuOpen ? null : pathname)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16 M4 12h16 M4 17h16" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <nav id="site-nav" className="site-nav" data-open={menuOpen || undefined} aria-label="Huvudmeny">
        <ThemeToggle />
        {NAV_SECTIONS.map((section) => {
          const mega = section.groups.length > 1;
          return (
            <div key={section.label} className={mega ? "nav-item mega" : "nav-item"}>
              <button className={isActive(section, pathname) ? "nav-trigger active" : "nav-trigger"} type="button">
                {section.label}
                <Chevron />
              </button>
              <div className="nav-dropdown">
                <div className="nav-panel">
                  {mega ? (
                    <div className="nav-mega-grid">
                      {section.groups.map((group, i) => (
                        <div key={group.heading} className="contents">
                          {i > 0 && <div className="nav-divider" />}
                          <div>
                            <div className="nav-heading">{group.heading}</div>
                            {group.links.map((link) => (
                              <DropdownLink key={link.href} link={link} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    section.groups[0].links.map((link) => <DropdownLink key={link.href + link.title} link={link} />)
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <Link
          href="/#kontakt"
          className="inline-flex min-h-12 items-center rounded-xl bg-accent px-6 text-[14px] font-bold tracking-[0.1em] text-ink-inverse uppercase no-underline"
        >
          Boka en demo
        </Link>
      </nav>
    </header>
  );
}
