"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { MarkerHighlight } from "../ui/marker-highlight";
import { BUSINESS_WHATSAPP_MESSAGE, whatsappLink } from "../../lib/constants";

const proof = [
  "fixed pricing",
  "payments built in",
  "admin panel included",
  "live in days",
];

/* Studio voice — this is the agency talking to a business owner, not the
   student-facing pitch. Calm, concrete, outcome-first. */
export function BusinessHero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.04 },
    },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
        },
      };

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
      />

      <Container className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[60rem] pt-16 pb-12 md:pt-24 md:pb-16"
        >
          <motion.p
            variants={item}
            className="font-mono text-[13px] tracking-tight text-muted"
          >
            <span className="text-primary">{"//"}</span> for businesses · cafés ·
            salons · shops
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-[22ch] font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-[3.4rem] lg:text-[4rem]"
          >
            Software for your café, salon, or shop — built, branded, and{" "}
            <MarkerHighlight variant="underline" delay={reduce ? 0 : 0.5}>
              live in days
            </MarkerHighlight>
            .
          </motion.h1>

          <motion.div variants={item} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-muted">
              Done-for-you systems with online payments and an admin panel you
              actually run yourself. You pick the solution, we brand it and put
              it live.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#catalog" className="group">
                See the solutions
                <ArrowDown
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  strokeWidth={2.25}
                />
              </Button>
              <Button
                href={whatsappLink(BUSINESS_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                Talk to us
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Proof strip: a gentle left-to-right marquee, matching the student home.
          Reduced-motion users get the same items, static and wrapped. */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.5, duration: 0.5 }}
        className="relative border-t border-line bg-paper/40"
      >
        {reduce ? (
          <Container>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 py-4 text-[14.5px] font-medium text-ink/75">
              {proof.map((label, i) => (
                <li key={label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span aria-hidden className="size-1.5 rounded-full bg-primary/50" />
                  )}
                  {label}
                </li>
              ))}
            </ul>
          </Container>
        ) : (
          <div className="marquee overflow-hidden py-4">
            <ul
              aria-label="What you get"
              className="marquee-track reverse items-center"
            >
              {[0, 1].map((copy) =>
                proof.map((label) => (
                  <li
                    key={`${copy}-${label}`}
                    aria-hidden={copy === 1}
                    className="flex items-center gap-6 pr-6 text-[14.5px] font-medium tracking-tight text-ink/75"
                  >
                    <span aria-hidden className="size-1.5 rounded-full bg-primary/50" />
                    {label}
                  </li>
                )),
              )}
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
}
