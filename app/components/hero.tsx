"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { MarkerHighlight } from "./ui/marker-highlight";
import { GOOGLE_FORM_URL } from "../lib/constants";

const trustItems = [
  "fresh non-repeated code",
  "viva prep",
  "milestone payment",
  "negotiable pricing",
];

export function Hero() {
  const reduce = useReducedMotion();

  // One orchestrated reveal: eyebrow, headline, then subhead + CTA.
  // The marker stroke draws itself in (via MarkerHighlight delay) right after
  // the headline lands, so the signature is the punctuation of the entrance.
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
            <span className="text-primary">{"//"}</span> final-year · mini ·
            internship
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-[20ch] font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-[3.4rem] lg:text-[4.25rem]"
          >
            We build your project with you, then get you ready to{" "}
            <MarkerHighlight variant="underline" delay={reduce ? 0 : 0.5}>
              defend
            </MarkerHighlight>{" "}
            it in your viva.
          </motion.h1>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div variants={item} className="lg:col-span-7">
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Real, non-repeated code, full documentation, and a walkthrough so
                you can explain every line yourself.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Start your project
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </Button>
                <Button href="#work" variant="ghost">
                  See our work
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Build-log status strip: a gentle left-to-right marquee of trust items.
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
              {trustItems.map((label, i) => (
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
                trustItems.map((label) => (
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
