import { products } from "@/lib/products";
import { Container } from "../ui/container";
import { Reveal } from "../reveal";
import { ProductCard, type CardVariant } from "./product-card";

/* Editorial layout: a flagship, a companion, then a full-width row.
   Falls back gracefully if more products are added later. */
const layout: { span: string; variant: CardVariant }[] = [
  { span: "lg:col-span-7", variant: "feature" },
  { span: "lg:col-span-5", variant: "tall" },
  { span: "lg:col-span-12", variant: "wide" },
];

export function Catalog() {
  return (
    <section id="catalog" className="scroll-mt-24 border-b border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted">
            Productized solutions
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Pick a system. We make it yours.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Each one is a complete, working product we&apos;ve built before —
            rebranded for you, wired to your payments, and handed over with an
            admin panel you control.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {products.map((product, i) => {
            const { span, variant } = layout[i] ?? {
              span: "lg:col-span-6",
              variant: "tall" as CardVariant,
            };
            return (
              <Reveal key={product.id} delay={i * 0.05} className={span}>
                <ProductCard product={product} variant={variant} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
