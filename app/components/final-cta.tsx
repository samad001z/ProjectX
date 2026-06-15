import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { MarkerHighlight } from "./ui/marker-highlight";
import { Reveal } from "./reveal";
import {
  GOOGLE_FORM_URL,
  CONTACT_EMAIL,
  whatsappLink,
} from "../lib/constants";

const waMessage = "Hi ProjeX, I'd like to start a project. Can we discuss?";

export function FinalCta() {
  return (
    <section id="start" className="scroll-mt-24 border-b border-line bg-card">
      <Container className="py-24 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Your viva is just a date on the calendar. Let&apos;s make it the{" "}
            <MarkerHighlight variant="underline">easy</MarkerHighlight> part.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
            Send your details through the form, or message us on WhatsApp.
            Either way, you will hear back within a day.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
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
            <Button
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="mt-6 text-[14px] text-muted">
            Prefer email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
