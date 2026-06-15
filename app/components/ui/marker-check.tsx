import { cn } from "../../lib/cn";

/* A small hand-drawn check in the amber marker color. Reinforces the marker
   signature on trust points without the heavier MarkerHighlight stroke.
   Amber is reserved for this kind of success/affirmation. */
export function MarkerCheck({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-6", className)}
    >
      <path
        d="M3.5 12.5 C 5 14, 6.8 16.2, 8.6 18.4 C 11.6 13, 15.8 7.8, 21 4.2"
        stroke="var(--mark)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
