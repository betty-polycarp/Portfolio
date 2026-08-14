"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/ssr";

import { navLinks, profile } from "@/lib/content";
import { Container } from "@/components/ui/primitives";

/**
 * Sticky header, 64px tall, single line at desktop.
 *
 * Navigation only. The contact call to action lives in the hero and again in
 * the contact section, so repeating it here would be a third instance of the
 * same intent.
 *
 * Below `lg` the links collapse into a disclosure panel rather than wrapping
 * to a second row.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container>
        {/* Two visible children at every breakpoint, so justify-between reads
            as wordmark left and either the nav or the menu button right. */}
        <div className="flex h-16 items-center justify-between gap-8">
          <a href="#top" className="text-sm font-medium tracking-tight text-ink">
            {profile.name}
          </a>

          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-ink active:translate-y-px lg:hidden"
          >
            {open ? (
              <X aria-hidden weight="bold" className="size-5" />
            ) : (
              <List aria-hidden weight="bold" className="size-5" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-line bg-canvas lg:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href} className="border-line not-last:border-b">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-base text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
