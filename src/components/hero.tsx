import Image from "next/image";

import { cta, hero } from "@/lib/content";
import { photo } from "@/lib/utils";
import { ButtonLink, Container, Enter } from "@/components/ui/primitives";

/**
 * Layout family: asymmetric split hero.
 * Three text elements only (headline, subtext, CTA pair). No eyebrow,
 * no trust strip, no scroll cue.
 */
export function Hero() {
  return (
    <section id="top" className="pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-7">
            <Enter>
              <h1 className="max-w-[16ch] text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl lg:leading-[1.04]">
                {hero.headline}
              </h1>
            </Enter>

            <Enter delay={0.08}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
                {hero.subtext}
              </p>
            </Enter>

            <Enter delay={0.16}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#work">{cta.work}</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  {cta.contact}
                </ButtonLink>
              </div>
            </Enter>
          </div>

          <Enter delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-surface lg:aspect-5/6">
              <Image
                src={photo(hero.imageId, 1000, 1200)}
                alt={hero.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </Enter>
        </div>
      </Container>
    </section>
  );
}
