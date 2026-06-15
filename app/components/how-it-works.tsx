"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/eyebrow";

type Step = {
  n: string;
  title: string;
  body: string;
  tag?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Submit your requirements",
    body: "Share your problem statement, domain, deadline, and your college's report format.",
  },
  {
    n: "02",
    title: "We review and send an indicative quote",
    body: "We scope the work and reply with a clear price. No vague back-and-forth.",
    tag: "within 24 hrs",
  },
  {
    n: "03",
    title: "You approve, we build in milestones",
    body: "Pay and track in stages, so you watch real progress instead of waiting on a black box.",
  },
  {
    n: "04",
    title: "We deliver code, docs, PPT, and a setup guide",
    body: "Everything you need to submit, runnable on your own machine.",
  },
  {
    n: "05",
    title: "Walkthrough session so you can defend it in viva",
    body: "We explain every part and prep you with the questions your examiner is likely to ask.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        },
      };

  return (
    <section id="how" className="scroll-mt-24 border-b border-line bg-card">
      <Container className="py-20 md:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Five steps from brief to viva-ready.
          </h2>
        </motion.div>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 max-w-3xl"
        >
          {steps.map((step) => (
            <motion.li
              key={step.n}
              variants={item}
              className="grid grid-cols-[2.5rem_1fr] border-t border-line first:border-t-0 sm:grid-cols-[5rem_1fr]"
            >
              <div className="pt-7 pr-3 text-right font-mono text-base font-semibold text-primary sm:pr-6 sm:text-lg">
                {step.n}
              </div>
              <div className="border-l border-line py-7 pl-5 sm:pl-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {step.title}
                  </h3>
                  {step.tag && (
                    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                      {step.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
