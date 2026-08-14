import Image from "next/image";

import { about } from "@/lib/content";
import { photo } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: editorial split.
 * Prose column carries the section, the narrow column carries a visual and
 * the short "now" list, so this is not a headline plus filler paragraph.
 * Mobile: single column, image after the prose.
 */
export function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading>{about.heading}</SectionHeading>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 max-w-[58ch] text-xl leading-snug text-ink md:text-2xl md:leading-snug">
                {about.lead}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex max-w-[62ch] flex-col gap-5 text-base leading-relaxed text-muted">
                {about.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-surface">
              <Image
                src={photo(about.imageId, 800, 1000)}
                alt={about.imageAlt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover grayscale"
              />
            </div>

            <h3 className="mt-8 font-mono text-xs text-faint">
              {about.nowHeading}
            </h3>
            <ul className="mt-3 flex flex-col">
              {about.now.map((item) => (
                <li
                  key={item}
                  className="border-line py-3 text-sm leading-relaxed text-ink not-last:border-b"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
