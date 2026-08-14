import Image from "next/image";

import { stack, type StackGroup } from "@/lib/content";
import { cn, photo } from "@/lib/utils";
import { Container, SectionHeading, TagRow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: bento composition.
 *
 * Six groups, six cells, no filler tile and no cell taller than its content.
 * Row rhythm is 7+5, then 5+3+4, then one full width row, so the grid never
 * settles into equal columns. Hairline gaps replace card containers.
 * Three cells carry visual variation (surface tint, hatch pattern, photograph).
 * Mobile: single column stack.
 */
function Cell({
  group,
  className,
  wash,
}: {
  group: StackGroup;
  className?: string;
  wash?: "surface" | "hatch";
}) {
  return (
    <div className={cn("relative flex flex-col bg-canvas p-6 md:p-8", className)}>
      {wash === "surface" ? (
        <span aria-hidden className="pointer-events-none absolute inset-0 bg-surface" />
      ) : null}
      {wash === "hatch" ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 pattern-hatch opacity-60"
        />
      ) : null}

      <CellBody group={group} />
    </div>
  );
}

function CellBody({ group }: { group: StackGroup }) {
  return (
    <div className="relative flex flex-1 flex-col gap-6">
      <div>
        <h3 className="text-lg font-medium tracking-tight text-ink">{group.name}</h3>
        <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-muted">
          {group.note}
        </p>
      </div>
      <div className="mt-auto">
        <TagRow items={group.items} />
      </div>
    </div>
  );
}

export function Stack() {
  const { groups } = stack;

  return (
    <section id="stack" className="border-t border-line py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[18ch]">{stack.heading}</SectionHeading>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:mt-14 md:auto-rows-[minmax(11rem,auto)] md:grid-cols-12">
            <Cell group={groups.backend} wash="surface" className="md:col-span-7" />
            <Cell group={groups.databases} className="md:col-span-5" />

            <Cell group={groups.frontend} wash="hatch" className="md:col-span-5" />
            <Cell group={groups.tools} className="md:col-span-3" />
            <Cell group={groups.testing} className="md:col-span-4" />

            <div className="grid grid-cols-1 bg-canvas md:col-span-12 md:grid-cols-12">
              <div className="flex flex-col p-6 md:col-span-8 md:p-8">
                <CellBody group={groups.emerging} />
              </div>
              <div className="relative order-first min-h-44 md:order-0 md:col-span-4 md:min-h-full">
                <Image
                  src={photo(stack.imageId, 900, 600)}
                  alt={stack.imageAlt}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
