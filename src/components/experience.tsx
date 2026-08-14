import { experience } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container, SectionHeading, TagRow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: timeline.
 * Period column, rail, entry column. Top hairline per entry only, never a
 * border above and below the same row.
 * Mobile: rail is dropped, period sits above the entry title.
 */
export function Experience() {
  const { entries } = experience;

  return (
    <section
      id="experience"
      className="border-t border-line py-20 md:py-28 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[16ch]">
            {experience.heading}
          </SectionHeading>
        </Reveal>

        <ol className="relative mt-10 md:mt-16">
          {/* Rail: organises the timeline, aligned to the period column. */}
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-[calc(25%-1px)] hidden w-px bg-line md:block"
          />

          {entries.map((entry, index) => {
            const isCurrent = index === entries.length - 1;

            return (
              <li key={entry.period}>
                <Reveal delay={index * 0.05}>
                  <div className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-4 md:gap-8 md:py-10">
                    <p
                      className={cn(
                        "font-mono text-sm md:pr-8",
                        isCurrent ? "text-accent" : "text-faint",
                      )}
                    >
                      {entry.period}
                    </p>

                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                        {entry.title}
                      </h3>
                      <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted">
                        {entry.body}
                      </p>
                      <div className="mt-5">
                        <TagRow items={entry.tags} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
