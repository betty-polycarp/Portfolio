import { cta, hero } from "@/lib/content";
import { ButtonLink, Container, Enter } from "@/components/ui/primitives";

/**
 * Layout family: single column type-led hero, one full screen tall.
 * Three text elements only (headline, subtext, CTA pair). No eyebrow,
 * no trust strip, no scroll cue, no image.
 *
 * It fills the first screenful (see `.hero-screen`) and centres its block in
 * whatever height that leaves. The padding is a floor, not the spacing: on a
 * viewport too short to centre in, the section grows past the minimum and the
 * padding is what keeps the type off the header and the next section.
 *
 * The headline carries the whole opening. It is the largest type on the page
 * and the first thing painted, which is the point: nothing decorative gets to
 * outrank the one sentence that has to land.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="hero-screen flex flex-col justify-center py-12 md:py-20 lg:py-24"
    >
      <Container>
        <Enter>
          {/* Both sizing rules are load bearing, for the same reason: they
              keep "feel simple." whole on its own line, which is the point of
              the sentence. 16ch sets the break at desktop; the fluid clamp
              keeps narrow phones off a three line rag with an orphan. */}
          <h1 className="max-w-[16ch] text-[clamp(2rem,10vw,2.5rem)] leading-[1.05] font-medium tracking-tight text-ink md:text-7xl lg:text-8xl lg:leading-[0.98]">
            {hero.headline}
          </h1>
        </Enter>

        {/* Both paragraphs are one beat in the cascade, not two: they read as
            a single intro, and staggering them would make the second look like
            an afterthought arriving late. */}
        <Enter delay={0.08}>
          <div className="mt-8 max-w-[52ch] space-y-4 md:mt-10">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {hero.subtext}
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {hero.detail}
            </p>
          </div>
        </Enter>

        <Enter delay={0.16}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#work">{cta.work}</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {cta.contact}
            </ButtonLink>
          </div>
        </Enter>
      </Container>
    </section>
  );
}
