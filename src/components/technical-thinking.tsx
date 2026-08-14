import { thinking } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: large type editorial statements.
 * Five positions, each one sentence of opinion, set at display scale so the
 * section reads as a point of view rather than another list of skills.
 * Mobile: single column, hairline above each statement.
 */
export function TechnicalThinking() {
  return (
    <section className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[16ch]">
            {thinking.heading}
          </SectionHeading>
          <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted">
            {thinking.intro}
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {thinking.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.04}>
              <div className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <h3 className="font-mono text-sm text-accent md:col-span-3">
                  {principle.title}
                </h3>
                <p className="max-w-[46ch] text-xl leading-snug tracking-tight text-ink md:col-span-9 md:text-2xl md:leading-snug">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
