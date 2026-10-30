"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { NAV_SECTIONS, type NavLink, type NavSection } from "./navigation";

/* Same breakpoint as the @media rules for .site-header/.site-nav in globals.css.
   On mobile the whole menu is ONE glass panel, so the dropdown panels inside
   it must not be glass themselves (Apple: group related controls). */
const MOBILE_QUERY = "(max-width: 900px)";

function subscribeMobile(onChange: () => void) {
  const mq = matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const isMobileNow = () => matchMedia(MOBILE_QUERY).matches;
const useIsMobile = () => useSyncExternalStore(subscribeMobile, isMobileNow, () => false);

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
          stroke="var(--text-head)"
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
        <path d="M78 105H155L226 266L190 345Z" fill="var(--c-snow)" />
        <path d="M297 105H373L261 345H190Z" fill="var(--c-slate)" />
      </svg>
      <span className="inline-flex items-baseline gap-[0.45em] whitespace-nowrap leading-none">
        <span className="font-display text-[25px] font-bold tracking-[0.03em] text-logo-ink">VERA</span>
        <span className="font-sans text-[23px] font-normal tracking-[0.2em] text-slate">LABS</span>
      </span>
    </Link>
  );
}

type DropdownProps = {
  section: NavSection;
  index: number;
  active: boolean;
  open: boolean;
  mobile: boolean;
  onOpenChange: (open: boolean) => void;
};

/** One menu section: trigger button + glass panel. Hover opens for the mouse (CSS);
 *  Enter/Space toggles, Esc closes and keeps focus on the button, arrows move between rows. */
function NavDropdown({ section, index, active, open, mobile, onOpenChange }: DropdownProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<"first" | "last" | null>(null);
  const panelId = `nav-panel-${index}`;
  const mega = section.groups.length > 1;

  const links = () => Array.from(itemRef.current?.querySelectorAll<HTMLAnchorElement>("a.nav-link") ?? []);

  // After the panel has opened (and become visible), move focus into it if an arrow key asked for it.
  useEffect(() => {
    if (!open || !pendingFocus.current) return;
    const items = Array.from(itemRef.current?.querySelectorAll<HTMLAnchorElement>("a.nav-link") ?? []);
    const target = pendingFocus.current === "first" ? items[0] : items[items.length - 1];
    pendingFocus.current = null;
    target?.focus();
  }, [open]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (mobile) return;
    if (e.key === "Escape") {
      if (!open) return;
      e.preventDefault();
      onOpenChange(false);
      triggerRef.current?.focus();
      return;
    }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    if (!open) {
      pendingFocus.current = e.key === "ArrowDown" ? "first" : "last";
      onOpenChange(true);
      return;
    }
    const items = links();
    if (items.length === 0) return;
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    const next = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[next].focus();
  };

  // Close when focus leaves the whole section (Tab past the last row, or a click elsewhere).
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (mobile || !open) return;
    if (!itemRef.current?.contains(e.relatedTarget as Node | null)) onOpenChange(false);
  };

  return (
    <div
      ref={itemRef}
      className={mega ? "nav-item mega" : "nav-item"}
      data-open={open || undefined}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        ref={triggerRef}
        className={active ? "nav-trigger active" : "nav-trigger"}
        type="button"
        aria-expanded={mobile || open}
        aria-controls={panelId}
        onClick={() => onOpenChange(!open)}
      >
        {section.label}
        <Chevron />
      </button>
      <div className="nav-dropdown">
        <div id={panelId} className={mobile ? "nav-panel" : "nav-panel glass glass--strong"}>
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
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobile = useIsMobile();
  // The mobile menu remembers the page it was opened on, so it closes after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === pathname;
  // Which desktop dropdown is pinned open by keyboard or click (hover is pure CSS).
  const [openSection, setOpenSection] = useState<string | null>(null);

  // After navigating: close any pinned dropdown and drop focus so nothing stays highlighted.
  useEffect(() => {
    setOpenSection(null);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }, [pathname]);

  // The pill follows the scroll: it moves up exactly as many pixels as the page scrolls down, until it
  // is out of view, and comes back the same way when scrolling up. No animation, so it tracks the
  // scroll speed. Stays put while a menu is open or at the very top. (Hugos beslut 2026-10-30.)
  const headerRef = useRef<HTMLElement>(null);
  const menuIsOpen = menuOpen || openSection !== null;
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = Math.max(0, window.scrollY);
    let offset = 0;
    let raf = 0;
    const apply = () => {
      header.style.transform = offset > 0 ? `translateY(-${offset}px)` : "";
    };
    const update = () => {
      raf = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      lastY = y;
      // Pill height + the 12 px gap above it + room for its shadow.
      const max = header.offsetHeight + 12 + 24;
      // Hold still while a menu is pinned open, while the pointer is over the pill or a dropdown
      // opened by hover (the dropdowns are children of the header), or at the top of the page.
      const hold = menuIsOpen || y <= 0 || header.matches(":hover");
      offset = hold ? 0 : Math.min(max, Math.max(0, offset + delta));
      apply();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    if (menuIsOpen) apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [menuIsOpen]);

  return (
    <header ref={headerRef} className="site-header">
      {/* The glass sits on its own layer behind the content; see the comment at .site-header in globals.css.
          --strong: the header scrolls over the worst backgrounds (a Snow card in dark mode, the Shadow hero
          in light mode), and only the stronger fill keeps the menu text at 4.5:1 there (§9.1). */}
      <div className="site-header-glass glass glass--large glass--strong" aria-hidden="true" />
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
          <path d="M4 7h16 M4 12h16 M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <nav
        id="site-nav"
        className={mobile ? "site-nav glass glass--strong" : "site-nav"}
        data-open={menuOpen || undefined}
        aria-label="Huvudmeny"
      >
        {/* Ljus/mörk-switchen (ThemeToggle) är borttagen: sajten är bara mörk sedan 2026-10-30. */}
        {NAV_SECTIONS.map((section, index) => (
          <NavDropdown
            key={section.label}
            section={section}
            index={index}
            active={isActive(section, pathname)}
            open={openSection === section.label}
            mobile={mobile}
            onOpenChange={(next) =>
              setOpenSection((prev) => (next ? section.label : prev === section.label ? null : prev))
            }
          />
        ))}
        {/* On mobile the button lives inside the menu panel; on desktop the copy below the nav is used. */}
        <Link href="/#kontakt" className="btn btn--primary btn--sm btn--flat nav-cta-mobile">
          Boka en demo
        </Link>
      </nav>
      {/* Flat: it sits inside the header's glass, so it must not be glass itself (Apple: group controls).
          Outside the nav so the menu can be centred between the logo and this button. */}
      <Link href="/#kontakt" className="btn btn--primary btn--sm btn--flat nav-cta-desktop">
        Boka en demo
      </Link>
      {/* Scroll-edge effect (§8): a 24 px blurred band under the pill, keeps the controls readable. */}
      <span className="scroll-edge" aria-hidden="true" />
    </header>
  );
}
