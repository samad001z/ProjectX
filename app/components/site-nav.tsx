"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { cn } from "../lib/cn";
import {
  GOOGLE_FORM_URL,
  NAV_LINKS,
  BUSINESS_NAV_LINKS,
  BUSINESS_WHATSAPP_MESSAGE,
  whatsappLink,
} from "../lib/constants";

/* One nav, two doors. The audience split (students / businesses) is the
   primary navigation; in-page section links and the CTA adapt to whichever
   door you're behind. Existing student-home behaviour is unchanged. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const onBusiness = pathname?.startsWith("/business") ?? false;

  const sections = onBusiness ? BUSINESS_NAV_LINKS : NAV_LINKS;
  const cta = onBusiness
    ? { href: whatsappLink(BUSINESS_WHATSAPP_MESSAGE), label: "Talk to us" }
    : { href: GOOGLE_FORM_URL, label: "Start your project" };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-[68px] items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 md:gap-5">
            <Link
              href="/"
              className="font-display text-xl font-extrabold tracking-tight text-ink"
            >
              Proje<span className="text-primary">X</span>
            </Link>

            {/* The two doors — subtle, with an amber underline on the active one. */}
            <div
              aria-label="Audience"
              className="hidden items-center gap-4 border-l border-line pl-4 lg:flex lg:pl-5"
            >
              <DoorLink href="/" active={!onBusiness}>
                For students
              </DoorLink>
              <DoorLink href="/business" active={onBusiness}>
                For businesses
              </DoorLink>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-7 lg:flex">
              {sections.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {cta.label}
            </Button>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink/25 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <Container>
              {/* Both doors, up top, so the split is never hidden on mobile. */}
              <div className="flex items-center gap-2 py-3">
                <MobileDoor href="/" active={!onBusiness} onClick={() => setOpen(false)}>
                  For students
                </MobileDoor>
                <MobileDoor
                  href="/business"
                  active={onBusiness}
                  onClick={() => setOpen(false)}
                >
                  For businesses
                </MobileDoor>
              </div>

              <ul className="flex flex-col border-t border-line pt-1">
                {sections.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-3.5 text-[15px] font-medium text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4 pb-2">
                  <Button
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {cta.label}
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DoorLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative py-1 text-[13.5px] font-medium transition-colors",
        active ? "text-ink" : "text-muted hover:text-ink",
      )}
    >
      {children}
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-mark"
        />
      )}
    </Link>
  );
}

function MobileDoor({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex-1 rounded-full border px-4 py-3 text-center text-[14px] font-medium transition-colors",
        active
          ? "border-ink/15 bg-card text-ink"
          : "border-line text-muted hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}
