"use client";

import { useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react/ssr";

/**
 * Light and dark switch.
 *
 * The page follows the system preference until the visitor overrides it here,
 * and the override is remembered. Both icons are rendered and CSS decides which
 * one is shown (see globals.css), so the control is correct on first paint and
 * there is no hydration mismatch: the server cannot know the visitor's theme.
 */
export function ThemeToggle() {
  const [announcement, setAnnouncement] = useState("");

  const toggle = () => {
    const root = document.documentElement;

    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    setAnnouncement(next === "dark" ? "Dark theme" : "Light theme");

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Private browsing or blocked storage: the choice still applies to this
      // page view, it just will not survive a reload.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-ink active:translate-y-px"
    >
      <Sun aria-hidden weight="bold" className="icon-sun size-[18px]" />
      <Moon aria-hidden weight="bold" className="icon-moon size-[18px]" />
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </button>
  );
}
