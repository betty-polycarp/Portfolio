"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/ssr";

import { process } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: horizontal scroll rail.
 * Native scroll-snap, no scroll hijack and no pinning. The controls exist so
 * the rail is operable by pointer as well as by trackpad, keyboard and touch.
 */
export function Process() {
  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  const syncEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const atStart = rail.scrollLeft <= 2;
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;

    setEdges((previous) =>
      previous.atStart === atStart && previous.atEnd === atEnd
        ? previous
        : { atStart, atEnd },
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    syncEdges();

    // Element level observer, so no window scroll listener is involved.
    const observer = new ResizeObserver(syncEdges);
    observer.observe(rail);

    return () => observer.disconnect();
  }, [syncEdges]);

  const scrollByPanel = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    rail.scrollBy({
      left: direction * Math.round(rail.clientWidth * 0.7),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeading className="max-w-[14ch]">
                {process.heading}
              </SectionHeading>
              <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">
                {process.intro}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByPanel(-1)}
                disabled={edges.atStart}
                aria-label="Show previous steps"
                className={cn(
                  "inline-flex size-11 items-center justify-center border transition-colors duration-200 active:translate-y-px",
                  edges.atStart
                    ? "cursor-not-allowed border-line text-faint"
                    : "border-ink text-ink hover:bg-ink hover:text-canvas",
                )}
              >
                <CaretLeft aria-hidden weight="bold" className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByPanel(1)}
                disabled={edges.atEnd}
                aria-label="Show next steps"
                className={cn(
                  "inline-flex size-11 items-center justify-center border transition-colors duration-200 active:translate-y-px",
                  edges.atEnd
                    ? "cursor-not-allowed border-line text-faint"
                    : "border-ink text-ink hover:bg-ink hover:text-canvas",
                )}
              >
                <CaretRight aria-hidden weight="bold" className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>

      <div
        ref={railRef}
        onScroll={syncEdges}
        tabIndex={0}
        role="region"
        aria-label="Development process, scrollable"
        className="rail-scroll mt-10 overflow-x-auto overscroll-x-contain md:mt-14"
      >
        <ol className="flex min-w-full snap-x snap-mandatory px-5 sm:px-8 lg:px-12">
          {process.steps.map((step) => (
            <li
              key={step.name}
              className="w-[78vw] shrink-0 snap-start border-l border-line p-6 last:border-r sm:w-88 md:p-8 lg:w-96"
            >
              <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                {step.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
