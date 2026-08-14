import { expertise } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: grouped two column index.
 *
 * Fourteen capabilities is past the point where a flat list reads. Grouping
 * them into four clusters, each with its own hairline and a two column grid,
 * keeps every item visible without turning the section into a wall of rows.
 *
 * The cluster label sits above its grid rather than in a left column, which
 * keeps this distinct from the label-left composition used by the technical
 * thinking section.
 *
 * Mobile: single column, clusters stay in order.
 */
export function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-line py-20 md:py-28 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[14ch]">
            {expertise.heading}
          </SectionHeading>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {expertise.intro}
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14">
          {expertise.groups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.04}>
              <div className="border-t border-line py-9 md:py-11">
                <h3 className="font-mono text-xs text-faint">{group.name}</h3>

                <dl className="mt-6 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.title}>
                      <dt className="text-base font-medium tracking-tight text-ink">
                        {item.title}
                      </dt>
                      <dd className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted">
                        {item.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
