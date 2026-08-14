import { writing } from "@/lib/content";
import { Container, SectionHeading, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: list plus tag cluster split.
 * Left column is the writing queue with an honest status per note, right
 * column is what is being learned. Neither is a card grid.
 * Mobile: the cluster stacks under the list.
 */
export function Writing() {
  return (
    <section id="writing" className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[14ch]">
            {writing.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h3 className="font-mono text-xs text-faint">
                {writing.notesHeading}
              </h3>
              <ul className="mt-4">
                {writing.notes.map((note) => (
                  <li
                    key={note.title}
                    className="flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <p className="max-w-[46ch] text-lg leading-snug text-ink md:text-xl">
                      {note.title}
                    </p>
                    <p className="flex shrink-0 items-center gap-3 font-mono text-xs text-faint">
                      <span>{note.topic}</span>
                      <span className="text-accent">{note.status}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <h3 className="font-mono text-xs text-faint">
                {writing.learningHeading}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {writing.learning.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
