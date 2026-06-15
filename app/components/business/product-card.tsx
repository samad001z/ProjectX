import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { cn } from "../../lib/cn";
import { formatINR } from "../../lib/constants";

/* Three emphases so the catalog reads as an edited shelf, not a 3-up template:
   - feature: large, image-led, the flagship.
   - tall:    standard editorial card.
   - wide:    full-bleed row, image beside copy. */
export type CardVariant = "feature" | "tall" | "wide";

export function ProductCard({
  product,
  variant,
}: {
  product: Product;
  variant: CardVariant;
}) {
  const isWide = variant === "wide";
  const isFeature = variant === "feature";

  const meta = (
    <p className="font-mono text-[13px] text-muted">
      from <span className="text-ink">{formatINR(product.priceFrom)}</span>
      <span aria-hidden className="px-1.5 text-line">
        ·
      </span>
      live in {product.timelineDays} days
    </p>
  );

  return (
    <Link
      href={`/business/${product.slug}`}
      className={cn(
        "group flex h-full overflow-hidden rounded-xl border border-line bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_-24px_rgba(22,21,15,0.32)]",
        isWide ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative overflow-hidden border-line bg-paper",
          isWide
            ? "aspect-[16/10] border-b lg:aspect-auto lg:w-1/2 lg:border-b-0 lg:border-r"
            : "aspect-[16/10] border-b",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumb}
          alt={`${product.name} interface preview`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full border border-line bg-paper/90 px-3 py-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col p-6 sm:p-7",
          isWide && "lg:justify-center lg:p-9",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            className={cn(
              "font-display font-semibold text-ink",
              isFeature || isWide ? "text-2xl" : "text-xl",
            )}
          >
            {product.name}
          </h3>
          <ArrowUpRight
            aria-hidden
            className="mt-1 size-5 shrink-0 text-muted transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            strokeWidth={2}
          />
        </div>

        <p
          className={cn(
            "mt-2 leading-relaxed text-muted",
            isFeature || isWide ? "max-w-xl text-[16px]" : "text-[15px]",
          )}
        >
          {product.tagline}
        </p>

        <div className="mt-auto pt-6">{meta}</div>
      </div>
    </Link>
  );
}
