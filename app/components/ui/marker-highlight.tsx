"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

type MarkerHighlightProps = {
  children: ReactNode;
  /** "underline" sits under the word; "circle" loops around it. */
  variant?: "underline" | "circle";
  /** Stroke color — defaults to the amber marker token. */
  color?: string;
  strokeWidth?: number;
  /** Seconds before the stroke draws in (flourish timing). */
  delay?: number;
  className?: string;
};

/* The signature: a hand-drawn marker stroke that emphasises one key word.
   Reserved for amber (--mark). The stroke draws itself once when scrolled
   into view, and renders fully drawn under reduced motion. */
export function MarkerHighlight({
  children,
  variant = "underline",
  color = "var(--mark)",
  strokeWidth,
  delay = 0.45,
  className,
}: MarkerHighlightProps) {
  const reduce = useReducedMotion();

  const draw = {
    initial: reduce ? false : { pathLength: 0, opacity: 0.5 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  };

  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-[1]">{children}</span>

      {variant === "underline" ? (
        <svg
          aria-hidden
          className="pointer-events-none absolute -bottom-[0.18em] left-[-4%] h-[0.5em] w-[108%]"
          viewBox="0 0 300 24"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M5 17 C 70 23, 215 21, 296 9 C 305 7.5, 301 3, 286 5"
            stroke={color}
            strokeWidth={strokeWidth ?? 7}
            strokeLinecap="round"
            {...draw}
          />
        </svg>
      ) : (
        <svg
          aria-hidden
          className="pointer-events-none absolute left-[-7%] top-[-16%] -z-0 h-[132%] w-[114%]"
          viewBox="0 0 320 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M50 92 C 4 74, 10 28, 92 18 C 196 6, 306 26, 300 60 C 296 92, 188 108, 96 100 C 68 97.5, 44 92, 62 80"
            stroke={color}
            strokeWidth={strokeWidth ?? 5}
            strokeLinecap="round"
            {...draw}
          />
        </svg>
      )}
    </span>
  );
}
