import Link from "next/link";
import { Container } from "./ui/container";
import { CONTACT_EMAIL, whatsappLink } from "../lib/constants";
import { products } from "@/lib/products";

const studentLinks = [
  { href: "/#services", label: "What we build" },
  { href: "/#how", label: "How it works" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteFooter() {
  return (
    <footer className="bg-paper">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="font-display text-xl font-extrabold tracking-tight text-ink"
            >
              Proje<span className="text-primary">X</span>
            </Link>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">
              A small studio that builds real software — academic projects with
              engineering students, and live systems for local businesses.
            </p>
            <p className="mt-5 font-mono text-[12.5px] leading-relaxed text-muted">
              Taking a small number of projects at a time, so every one gets
              proper attention.
            </p>
          </div>

          <nav aria-label="For students" className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              For students
            </p>
            <ul className="mt-4 space-y-2.5">
              {studentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="For businesses" className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              For businesses
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/business"
                  className="text-[14px] text-ink/80 transition-colors hover:text-primary"
                >
                  Solutions overview
                </Link>
              </li>
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/business/${product.slug}`}
                    className="text-[14px] text-ink/80 transition-colors hover:text-primary"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-words text-ink/80 transition-colors hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hi ProjeX, I'd like to ask about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/80 transition-colors hover:text-primary"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} ProjeX. Built with students and local
            businesses across India.
          </p>
          <p className="font-mono text-[12px] text-muted">replies within a day</p>
        </div>
      </Container>
    </footer>
  );
}
