import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { MarkerHighlight } from "../ui/marker-highlight";
import { Reveal } from "../reveal";
import { BUSINESS_WHATSAPP_MESSAGE, whatsappLink } from "../../lib/constants";

/* Calm closing. The point is the contrast with student projects: business
   pricing is fixed and on the page, no haggling. */
export function BusinessClosing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-line bg-card">
      <Container className="py-24 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            One price, on the page. No{" "}
            <MarkerHighlight variant="underline">surprises</MarkerHighlight>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Business pricing is fixed and transparent — the &ldquo;from&rdquo;
            figure on each solution is the real starting point, not a number to
            haggle over. Tell us which fits and we&apos;ll confirm the exact
            scope before anything starts.
          </p>

          <div className="mt-9 flex justify-center">
            <Button
              href={whatsappLink(BUSINESS_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
              Talk to us on WhatsApp
            </Button>
          </div>

          <p className="mt-5 font-mono text-[12.5px] text-muted">
            replies within a day · no obligation
          </p>

          <p className="mt-8 font-mono text-[13px] text-muted">
            Need an academic project?{" "}
            <Link
              href="/"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              For students →
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
