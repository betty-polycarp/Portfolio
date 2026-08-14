"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Warning } from "@phosphor-icons/react/ssr";

import { contact, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

const icons = { idle: Copy, copied: Check, error: Warning } as const;

/**
 * Full interaction cycle for the one control on the page that can fail:
 * idle, success, and an error path for browsers that refuse clipboard access
 * (the address stays visible next to the button either way).
 */
export function CopyEmail() {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;

    const timer = window.setTimeout(() => setState("idle"), 2600);
    return () => window.clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  const Icon = icons[state];

  const label =
    state === "copied"
      ? contact.emailCopied
      : state === "error"
        ? contact.emailFailed
        : contact.emailLabel;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <a
        href={`mailto:${profile.email}`}
        className="font-mono text-sm text-ink underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      >
        {profile.email}
      </a>

      <button
        type="button"
        onClick={copy}
        className={cn(
          "inline-flex items-center gap-2 border px-3 py-2 font-mono text-xs transition-colors duration-200 active:translate-y-px",
          state === "error"
            ? "border-accent text-accent"
            : "border-line text-muted hover:border-ink hover:text-ink",
        )}
      >
        <Icon aria-hidden weight="bold" className="size-3.5" />
        {label}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {state === "idle" ? "" : label}
      </span>
    </div>
  );
}
