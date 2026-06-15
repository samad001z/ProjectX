"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { cn } from "../lib/cn";
import { GOOGLE_FORM_URL, whatsappLink } from "../lib/constants";

/* EDITME: ranges are starting points, not fixed sticker prices.
   All amounts are placeholder mock values in INR. */
type Tier = {
  id: string;
  name: string;
  scope: string;
  low: number;
  high: number;
  includes: string[];
  emphasis?: boolean;
};

const tiers: Tier[] = [
  {
    id: "mini",
    name: "Mini project",
    scope: "Smaller scope, quick turnaround.",
    low: 3000,
    high: 6000,
    includes: ["working code", "basic docs", "walkthrough"],
  },
  {
    id: "major",
    name: "Major project",
    scope: "Full final-year scope, built end to end.",
    low: 8000,
    high: 18000,
    includes: ["code + setup", "full docs + PPT", "viva prep", "revisions"],
    emphasis: true,
  },
  {
    id: "docs",
    name: "Documentation add-on",
    scope: "Report, PPT, and setup guide for an existing build.",
    low: 1500,
    high: 4000,
    includes: ["report", "PPT", "setup guide"],
  },
];

const rupee = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const budgetOptions = [
  { value: "Mini project", label: "Mini project" },
  { value: "Major project", label: "Major project" },
  { value: "Documentation add-on", label: "Documentation add-on" },
  { value: "something else", label: "Something else" },
];

export function Pricing() {
  const [type, setType] = useState(budgetOptions[1].value);
  const [amount, setAmount] = useState(8000);

  const message = `Hi ProjeX, I need help with a ${type} (my budget is around ${rupee(
    amount || 0,
  )}). Can we discuss?`;

  return (
    <section id="pricing" className="scroll-mt-24 border-b border-line">
      <Container className="py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Fair pricing, and it&apos;s negotiable.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The ranges below are starting points, not sticker prices. Tell us
            what you can pay and we will meet you at a fair number.
          </p>
        </div>

        {/* Anchor cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={cn(
                "flex h-full flex-col rounded-xl border bg-card p-7",
                tier.emphasis ? "border-primary" : "border-line",
              )}
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {tier.name}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                {tier.scope}
              </p>
              <p
                className={cn(
                  "mt-5 font-display text-2xl font-bold",
                  tier.emphasis ? "text-primary" : "text-ink",
                )}
              >
                {rupee(tier.low)} <span className="text-muted">-</span>{" "}
                {rupee(tier.high)}
              </p>
              <ul className="mt-5 space-y-1.5">
                {tier.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center gap-2 font-mono text-[12.5px] text-muted"
                  >
                    <span className="text-primary">+</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-5 font-mono text-[13px] text-muted">
          starting points, not fixed. tell us your budget and we&apos;ll meet you
          fairly.
        </p>

        {/* Name your budget */}
        <div className="mt-10 rounded-xl border border-line bg-card p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                Name your budget
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                Student budgets are real. Tell us what you can pay and we will
                find a way, or tell you straight if we can&apos;t do it justice
                at that price.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="budget-type"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted"
                  >
                    Project type
                  </label>
                  <select
                    id="budget-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="rounded-lg border border-line bg-paper px-4 py-3 text-[15px] text-ink focus:border-primary"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="budget-amount"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted"
                  >
                    Your budget (₹)
                  </label>
                  <input
                    id="budget-amount"
                    type="number"
                    min={0}
                    step={500}
                    value={Number.isFinite(amount) ? amount : ""}
                    onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                    className="rounded-lg border border-line bg-paper px-4 py-3 text-[15px] text-ink focus:border-primary"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Discuss on WhatsApp
                </Button>
                <Button href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" variant="ghost">
                  Prefer a form? Start here
                  <ArrowRight aria-hidden className="size-4" strokeWidth={2.25} />
                </Button>
              </div>
              <p className="mt-3 font-mono text-[12px] text-muted">
                opens WhatsApp with your details filled in. nothing sent until you
                press send.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
