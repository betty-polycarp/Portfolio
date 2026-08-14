import Image from "next/image";

import { projects, type Project } from "@/lib/content";
import { cn, photo } from "@/lib/utils";
import { Container, SectionHeading, TagRow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: asymmetric project showcase.
 * Three different compositions inside one section (full width feature,
 * offset pair, wide horizontal row) so four projects never read as four
 * identical cards.
 * Mobile: every composition collapses to a single column, image first.
 */

function ProjectMedia({
  project,
  ratio,
  sizes,
  className,
}: {
  project: Project;
  ratio: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-surface", ratio, className)}>
      <Image
        src={photo(project.imageId, 1400, 1000)}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        className="object-cover grayscale"
      />
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const rows = [
    { label: "Problem", value: project.problem },
    { label: "What I built", value: project.solution },
    { label: "Outcome", value: project.outcome },
  ];

  return (
    <dl className="flex flex-col gap-4">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[6.5rem_1fr]"
        >
          <dt className="font-mono text-xs leading-5 text-faint">{row.label}</dt>
          <dd className="max-w-[62ch] text-base leading-relaxed text-muted">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectHeading({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  return (
    <div>
      <h3
        className={cn(
          "font-medium tracking-tight text-ink",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
        )}
      >
        {project.name}
      </h3>
      <p className="mt-2 text-base text-faint">{project.tagline}</p>
    </div>
  );
}

function ProjectFooter({ project }: { project: Project }) {
  return (
    <div className="mt-6 border-t border-line pt-5">
      <p className="font-mono text-xs text-faint">{project.role}</p>
      <div className="mt-3">
        <TagRow items={project.tech} />
      </div>
    </div>
  );
}

export function Projects() {
  const [feature, second, third, fourth] = projects.items;

  return (
    <section id="work" className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[14ch]">
            {projects.heading}
          </SectionHeading>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-muted">
            {projects.intro}
          </p>
        </Reveal>

        {/* Composition 1: full width feature, media above an offset text pair. */}
        <Reveal delay={0.05}>
          <article className="mt-12 md:mt-16">
            <ProjectMedia
              project={feature}
              ratio="aspect-16/10 md:aspect-21/9"
              sizes="(min-width: 1400px) 1304px, 100vw"
            />
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <ProjectHeading project={feature} size="large" />
                <ProjectFooter project={feature} />
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ProjectDetail project={feature} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Composition 2: offset pair, different media ratios, second column drops. */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <article>
              <ProjectMedia
                project={second}
                ratio="aspect-4/3"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
              <div className="mt-7">
                <ProjectHeading project={second} />
                <div className="mt-6">
                  <ProjectDetail project={second} />
                </div>
                <ProjectFooter project={second} />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5 lg:mt-24">
            <article>
              <ProjectMedia
                project={third}
                ratio="aspect-4/5"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="mt-7">
                <ProjectHeading project={third} />
                <div className="mt-6">
                  <ProjectDetail project={third} />
                </div>
                <ProjectFooter project={third} />
              </div>
            </article>
          </Reveal>
        </div>

        {/* Composition 3: wide horizontal row, narrow media beside the text. */}
        <Reveal delay={0.05}>
          <article className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-12 md:mt-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <ProjectMedia
                project={fourth}
                ratio="aspect-3/2 lg:aspect-square"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ProjectHeading project={fourth} />
              <div className="mt-6">
                <ProjectDetail project={fourth} />
              </div>
              <ProjectFooter project={fourth} />
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
