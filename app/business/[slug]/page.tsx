import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  CreditCard,
  ExternalLink,
  Globe,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Plus,
  Smartphone,
  SlidersHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getProduct, productSlugs, type Product } from "@/lib/products";
import { SiteNav } from "../../components/site-nav";
import { SiteFooter } from "../../components/site-footer";
import { Reveal } from "../../components/reveal";
import { Container } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { CONTACT_EMAIL, formatINR, whatsappLink } from "../../lib/constants";

/* Prerender one static page per product. */
export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/business/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name} — ProjeX for business`;
  return {
    title,
    description: product.tagline,
    alternates: { canonical: `/business/${product.slug}` },
    openGraph: {
      title,
      description: product.tagline,
      url: `/business/${product.slug}`,
      siteName: "ProjeX",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.tagline,
    },
  };
}

/** The one prefilled WhatsApp message, reused by every "Get this" button. */
function getThisMessage(product: Product): string {
  return `Hi ProjeX — I'm interested in ${product.name} for my business. Can we discuss setup?`;
}

/* Decorative line icons for the feature list — cycled so the list has texture
   without emoji. Order roughly tracks mobile → payments → dashboard → control
   → reporting, which suits most of the catalog. */
const featureIcons: LucideIcon[] = [
  Smartphone,
  CreditCard,
  LayoutDashboard,
  SlidersHorizontal,
  BarChart3,
  Bell,
  Globe,
];

export default async function ProductPage({
  params,
}: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const waLink = whatsappLink(getThisMessage(product));
  const forWhoLower =
    product.forWho.charAt(0).toLowerCase() + product.forWho.slice(1);

  return (
    <div id="top">
      <SiteNav />
      <main id="main-content">
        {/* 1. Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden
            className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
          />
          <Container className="relative py-12 md:py-16">
            <Link
              href="/business"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft aria-hidden className="size-3.5" strokeWidth={2} />
              All solutions
            </Link>

            <div className="mt-7 max-w-[44rem]">
              <span className="inline-block rounded-full border border-line bg-paper/80 px-3 py-1 font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted">
                {product.category}
              </span>

              <h1 className="mt-5 max-w-[20ch] font-display text-[2.2rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-[2.9rem]">
                {product.name}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {product.tagline}
              </p>

              <p className="mt-4 font-mono text-[13px] text-muted">
                live in {product.timelineDays} days · one-time setup
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Get this
                </Button>
                <Button
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  View live demo
                  <ExternalLink aria-hidden className="size-4" strokeWidth={2} />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Screenshots gallery */}
        {product.screenshots.length > 0 && (
          <section className="border-b border-line bg-card">
            <Container className="py-16 md:py-20">
              <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {product.screenshots.map((src, i) => (
                  <figure
                    key={src}
                    className="overflow-hidden rounded-xl border border-line bg-paper"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${product.name} — screen ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </figure>
                ))}
              </Reveal>
            </Container>
          </section>
        )}

        {/* 3. Who it's for */}
        <section className="border-b border-line">
          <Container className="py-16 md:py-20">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted">
                Who it&apos;s for
              </p>
              <p className="mt-4 text-xl leading-relaxed text-ink/90 sm:text-2xl">
                Built for {forWhoLower} who want a polished, working system live
                in days — done for you, on your own brand, with payments and an
                admin panel you run yourself.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* 4. What it does + 5. What's included */}
        <section className="border-b border-line bg-card">
          <Container className="grid grid-cols-1 gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                What it does
              </h2>
              <ul className="mt-8 space-y-5">
                {product.features.map((feature, i) => {
                  const Icon = featureIcons[i % featureIcons.length];
                  return (
                    <li key={feature} className="flex gap-4">
                      <Icon
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        strokeWidth={1.75}
                      />
                      <span className="text-[15px] leading-relaxed text-ink/90">
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.05}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                What&apos;s included
              </h2>
              <ul className="mt-8 space-y-4">
                {product.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-[18px] shrink-0 text-mark-ink"
                      strokeWidth={2.5}
                    />
                    <span className="text-[15px] leading-relaxed text-ink/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* 6. Pricing — fixed and transparent */}
        <section id="pricing" className="scroll-mt-24 border-b border-line">
          <Container className="py-20 md:py-24">
            <Reveal className="mx-auto max-w-2xl rounded-xl border border-line bg-card p-8 sm:p-10">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                Pricing
              </p>

              <div className="mt-6">
                <p className="font-mono text-[13px] text-muted">One-time setup</p>
                <p className="mt-1.5 font-display text-4xl font-semibold tracking-tight text-primary sm:text-[2.75rem]">
                  from {formatINR(product.priceFrom)}
                </p>
              </div>

              {product.monthly !== null && (
                <div className="mt-7 border-t border-line pt-7">
                  <p className="text-[15px] leading-relaxed text-ink">
                    <span className="text-muted">+ optional</span>{" "}
                    <span className="font-semibold text-ink">
                      {formatINR(product.monthly)}/mo
                    </span>{" "}
                    maintenance &amp; hosting
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                    Hosting, keeping the payment integration current, backups,
                    and small tweaks. Skip it and self-host if you&apos;d rather.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Get this
                </Button>
                <p className="font-mono text-[12.5px] text-muted">
                  fixed price — no surprises
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 7. FAQ */}
        {product.faqs.length > 0 && (
          <section className="border-b border-line bg-card">
            <Container className="grid grid-cols-1 gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                  Questions, answered
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-8" delay={0.05}>
                <ul className="border-t border-line">
                  {product.faqs.map((faq) => (
                    <li key={faq.q} className="border-b border-line">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                          <span className="font-display text-lg font-semibold text-ink">
                            {faq.q}
                          </span>
                          <Plus
                            aria-hidden
                            className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                            strokeWidth={2}
                          />
                        </summary>
                        <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </details>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Container>
          </section>
        )}

        {/* 8. Final CTA band */}
        <section className="border-b border-line">
          <Container className="py-20 md:py-24">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Ready to put {product.name} to work?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                Fixed at {formatINR(product.priceFrom)} to set up, live in about{" "}
                {product.timelineDays} days. Message us and we&apos;ll confirm
                the scope before anything starts.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Get this
                </Button>
                <Button href="/business" variant="ghost">
                  See other solutions
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
                </Button>
              </div>
              <p className="mt-6 text-[14px] text-muted">
                Prefer email?{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    `${product.name} — setup enquiry`,
                  )}`}
                  className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                >
                  <Mail aria-hidden className="size-3.5" strokeWidth={2} />
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
