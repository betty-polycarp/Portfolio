"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds of delay, used to stagger siblings in reading order. */
  delay?: number;
  className?: string;
};

/**
 * Scroll reveal, inverted.
 *
 * The server renders this visible with no inline hiding styles. On mount the
 * effect opts the element into the hidden state, but only when it is already
 * below the fold, then reveals it on intersection. Two properties fall out:
 *
 * 1. If this code never runs (JS blocked, chunk failed, JS off) the page is
 *    simply a static page. It can never render blank.
 * 2. Nothing on screen is ever hidden, so there is no flash of content
 *    disappearing between paint and hydration.
 *
 * Motion lives in globals.css. At MOTION_INTENSITY 5 a CSS transition is the
 * right tool, so no animation library ships to the browser for this.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already visible to the reader: leave it alone.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    element.dataset.revealState = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          element.dataset.revealState = "shown";
          observer.disconnect();
        }
      },
      // threshold 0 plus a trimmed bottom edge fires correctly for elements
      // both shorter and taller than the viewport.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={
        delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
