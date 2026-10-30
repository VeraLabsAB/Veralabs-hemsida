"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "vera-theme";
/** Dark mode is data-theme="dark" on <html>; light mode has no attribute. The tokens key on it. */
const THEME_ATTR = "data-theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: [THEME_ATTR] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.getAttribute(THEME_ATTR) === "dark";

/** Light/dark switch. The initial attribute is set before paint by the script in the root layout. */
export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !dark;
    if (next) document.documentElement.setAttribute(THEME_ATTR, "dark");
    else document.documentElement.removeAttribute(THEME_ATTR);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      className="theme-switch"
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Mörkt läge"
      onClick={toggle}
    >
      <span className="theme-track" aria-hidden="true">
        <span className="theme-knob">
          <svg className="theme-sun" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4"
              fill="none"
              stroke="var(--ink-inverse)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg className="theme-moon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"
              fill="none"
              stroke="var(--ink-inverse)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}

/** Inline script for <head>: applies the saved or system theme before first paint. */
export const themeInitScript = `try{var t=localStorage.getItem("${STORAGE_KEY}");if(t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.setAttribute("${THEME_ATTR}","dark")}catch(e){}`;
