import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/ssr";

import { cn } from "@/lib/utils";

/**
 * Hero entry cascade. A Server Component on purpose: the animation is a CSS
 * keyframe that ends at opacity 1, so it ships no JavaScript and degrades to
 * plain visible content if the stylesheet is the thing that fails to load.
 */
export function Enter({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("enter", className)}
      style={
        delay ? ({ "--enter-delay": `${delay}s` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}

/** Page gutter. Every section shares it so the vertical rhythm lines up. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)}
    >
      {children}
    </div>
  );
}

/**
 * Section headline. No eyebrow label above it anywhere on this page:
 * the headline names the section, its position on the page categorises it.
 */
export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.05]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium " +
  "transition-[background-color,color,border-color,transform] duration-200 ease-out " +
  "active:translate-y-px whitespace-nowrap";

/** Primary action: accent fill. 5.1:1 in light, 7.1:1 in dark against its label. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={href}
      className={cn(
        buttonBase,
        variant === "primary"
          ? "bg-accent text-accent-ink hover:bg-accent-hover"
          : "border border-ink text-ink hover:bg-ink hover:text-canvas",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      <Icon
        aria-hidden
        weight="bold"
        className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
      />
    </a>
  );
}

/** Monospace metadata chip. Sharp corners, hairline border, no fill. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line px-2 py-1 font-mono text-[0.6875rem] leading-none text-muted">
      {children}
    </span>
  );
}

export function TagRow({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
