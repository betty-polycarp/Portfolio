"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Warning } from "@phosphor-icons/react/ssr";

import { contact, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

const icons = { idle: Copy, copied: Check, error: Warning } as const;

/** How long a result stays on the button before it returns to idle. */
const RESULT_MS = 2600;

/**
 * Synchronous copy for the case the async Clipboard API cannot serve: it is
 * absent on every non-secure origin, and reading the site over a LAN IP on a
 * phone is exactly that. execCommand is deprecated but still implemented
 * everywhere, so it sits behind the modern path rather than replacing it.
 *
 * Must stay synchronous. Browsers only honour it inside the click that asked
 * for it, so awaiting anything first would forfeit the gesture.
 */
function copySync(text: string): boolean {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "0";
  field.style.opacity = "0";

  document.body.append(field);
  field.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    field.remove();
  }
}

/**
 * Full interaction cycle for the one control on the page that can fail:
 * idle, success, and an error path for browsers that refuse clipboard access
 * (the address stays visible next to the button either way).
 */
export function CopyEmail() {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | null>(null);

  // A pending reset must not fire into an unmounted component.
  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  /**
   * The reset timer is owned here rather than by an effect keyed on state:
   * copying twice in a row lands on the same state value, which renders
   * nothing new, so an effect would never re-run and the second click would
   * inherit the first click's countdown.
   */
  const settle = (next: Exclude<CopyState, "idle">) => {
    setState(next);

    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      timer.current = null;
      setState("idle");
    }, RESULT_MS);
  };

  const copy = async () => {
    // Checked before any await, so the fallback still holds the user gesture.
    if (!navigator.clipboard?.writeText) {
      settle(copySync(profile.email) ? "copied" : "error");
      return;
    }

    try {
      await navigator.clipboard.writeText(profile.email);
      settle("copied");
    } catch {
      settle("error");
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
