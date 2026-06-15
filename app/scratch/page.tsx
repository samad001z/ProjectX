import { ArrowRight, Check } from "lucide-react";
import { Container } from "../components/ui/container";
import { Eyebrow } from "../components/ui/eyebrow";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { MarkerHighlight } from "../components/ui/marker-highlight";

const swatches = [
  { name: "paper", value: "#FBFAF6", note: "background" },
  { name: "ink", value: "#16150F", note: "text" },
  { name: "muted", value: "#6B6862", note: "secondary text" },
  { name: "line", value: "#E7E3DA", note: "hairlines" },
  { name: "primary", value: "#2B2BF5", note: "links / CTA / signature" },
  { name: "mark", value: "#FFB020", note: "marker + success only" },
];

const scale = [
  { label: "Display / hero", cls: "font-display text-[var(--step-5)] font-bold", sample: "Defend it." },
  { label: "Heading / section", cls: "font-display text-[var(--step-4)] font-bold", sample: "How it works" },
  { label: "Sub-head", cls: "font-display text-[var(--step-3)] font-semibold", sample: "What you actually get" },
  { label: "Card title", cls: "font-display text-[var(--step-2)] font-semibold", sample: "Viva question bank" },
  { label: "Lead paragraph", cls: "font-body text-[var(--step-1)] text-muted", sample: "Working code, a real report, and viva prep so you understand what you submit." },
  { label: "Body", cls: "font-body text-[var(--step-0)] text-muted", sample: "We walk you through the code and the report until the logic is yours to explain." },
  { label: "Mono / metadata", cls: "font-mono text-[var(--step--1)] uppercase tracking-[0.16em] text-muted", sample: "build-log / final-year.md" },
];

export default function ScratchPage() {
  return (
    <main id="main-content" className="py-16 sm:py-24">
      <Container>
        <Eyebrow>Design system / scratch</Eyebrow>
        <h1 className="mt-4 text-[var(--step-4)]">Phase 0 primitives</h1>
        <p className="mt-3 max-w-xl font-body text-[var(--step-0)] text-muted">
          Eyeball the type, color, and the marker signature before we build
          sections. Everything below is a reusable primitive.
        </p>

        {/* Colors */}
        <Section title="Color tokens">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((s) => (
              <div key={s.name}>
                <div
                  className="h-20 w-full rounded-xl border border-line"
                  style={{ backgroundColor: s.value }}
                />
                <p className="mt-2.5 font-mono text-[13px] text-ink">{s.name}</p>
                <p className="font-mono text-[12px] text-muted">{s.value}</p>
                <p className="mt-0.5 text-[12px] text-muted">{s.note}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Type scale */}
        <Section title="Type scale">
          <div className="divide-y divide-line">
            {scale.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[180px_1fr] md:items-baseline md:gap-8"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                  {row.label}
                </p>
                <p className={`${row.cls} leading-tight text-ink`}>{row.sample}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Marker signature */}
        <Section title="MarkerHighlight (the signature)">
          <div className="space-y-10">
            <h2 className="max-w-3xl font-display text-[var(--step-4)] font-bold leading-[1.1] text-ink">
              We build your project, then coach you to{" "}
              <MarkerHighlight variant="underline">defend</MarkerHighlight> it.
            </h2>
            <h2 className="max-w-3xl font-display text-[var(--step-4)] font-bold leading-[1.25] text-ink">
              Walk into your{" "}
              <MarkerHighlight variant="circle">viva</MarkerHighlight> calm.
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
              underline + circle variants, amber only, draws on scroll into view
            </p>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Button">
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#" variant="primary">
              Start your project
              <ArrowRight aria-hidden className="size-4" strokeWidth={2.25} />
            </Button>
            <Button variant="ghost">See how it works</Button>
            <Button variant="link" href="#">
              Read the FAQ
            </Button>
            <Button variant="primary" size="sm">
              Small primary
            </Button>
          </div>
          <p className="mt-4 font-mono text-[12px] text-muted">
            hover + active (press-down) states wired; focus ring on keyboard tab
          </p>
        </Section>

        {/* Card */}
        <Section title="Card">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <Eyebrow>viva-ready</Eyebrow>
              <h3 className="mt-2 font-display text-[var(--step-2)] font-semibold text-ink">
                Viva question bank
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Likely examiner questions with clear answers, written around your
                project.
              </p>
            </Card>
            <Card className="flex items-center gap-3 bg-mark/12">
              <span className="grid size-7 place-items-center rounded-full bg-mark text-ink">
                <Check aria-hidden className="size-4" strokeWidth={3} />
              </span>
              <p className="font-mono text-[14px] text-ink">
                success state uses amber, never blue
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 border-t border-line pt-10">
      <Eyebrow className="mb-6">{title}</Eyebrow>
      {children}
    </section>
  );
}
