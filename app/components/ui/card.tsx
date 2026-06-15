import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/* White surface on paper. 1px hairline, rounded-xl, no heavy shadow —
   elevation comes from the border, not a drop shadow. */
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-line bg-card p-6", className)}>
      {children}
    </div>
  );
}
