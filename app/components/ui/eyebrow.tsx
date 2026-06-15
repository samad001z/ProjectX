import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/* Small mono uppercase label — the technical-credibility signal.
   Use sparingly (max ~1 per 3 sections), never as body text. */
export function Eyebrow({ children, className, as: Tag = "p" }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
