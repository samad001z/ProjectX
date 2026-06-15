import { Plus } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "Will I actually understand the code?",
    a: "That is the whole point. You get a walkthrough where we explain how everything works, so you can talk about any part of it yourself.",
  },
  {
    q: "Do you help with the viva?",
    a: "Yes. We prepare likely examiner questions around your specific project and rehearse the answers with you before your review.",
  },
  {
    q: "Are the prices fixed?",
    a: "No. The ranges are starting points. Tell us your budget and we negotiate to something fair, and we will be honest if a project can't be done well at that price rather than cutting corners.",
  },
  {
    q: "Is payment safe and milestone-based?",
    a: "You pay in stages as work lands, never everything upfront. You see progress at each milestone before the next one begins.",
  },
  {
    q: "What about timelines?",
    a: "Sooner is calmer, but we take tight deadlines often. Tell us your submission date and we will be honest about what is realistic before you commit.",
  },
  {
    q: "Do you do revisions?",
    a: "Yes. Revisions before your deadline are part of the deal. We refine the code and documents until your guide signs off.",
  },
  {
    q: "Is this original, non-repeated work?",
    a: "Every project is written from scratch for your brief, and we hand you a similarity report you can show your guide. Nothing is recycled or shared between students.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-line bg-card">
      <Container className="grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              The questions every student asks
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Honest answers to the worries that keep you up before submission.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <ul className="border-t border-line">
              {faqs.map((faq) => (
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
        </div>
      </Container>
    </section>
  );
}
