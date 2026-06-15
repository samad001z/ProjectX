import { BrainCircuit, AppWindow, Smartphone, LineChart, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./reveal";
import { cn } from "../lib/cn";

type Emphasis = "feature" | "default" | "muted";

type Service = {
  icon: LucideIcon;
  name: string;
  promise: string;
  examples: string[];
  span: string;
  emphasis: Emphasis;
};

const services: Service[] = [
  {
    icon: BrainCircuit,
    name: "AI & ML",
    promise: "Models that actually run, with the maths you can explain in viva.",
    examples: ["resume screening", "medical prediction", "recommendation", "chatbots"],
    span: "md:col-span-2 lg:col-span-7",
    emphasis: "feature",
  },
  {
    icon: AppWindow,
    name: "Web apps",
    promise: "Full-stack systems built to a real problem statement.",
    examples: ["management systems", "e-commerce", "booking", "dashboards"],
    span: "lg:col-span-5",
    emphasis: "default",
  },
  {
    icon: Smartphone,
    name: "Mobile apps",
    promise: "Cross-platform apps that demo cleanly on the day.",
    examples: ["student apps", "food ordering", "tracking", "productivity"],
    span: "lg:col-span-4",
    emphasis: "default",
  },
  {
    icon: LineChart,
    name: "Data science",
    promise: "Analysis and prediction with visuals your panel will read.",
    examples: ["analysis", "prediction", "visualization"],
    span: "lg:col-span-4",
    emphasis: "default",
  },
  {
    icon: Cpu,
    name: "IoT",
    promise: "Sensor-to-dashboard builds, on request.",
    examples: ["sensors", "automation", "monitoring"],
    span: "lg:col-span-4",
    emphasis: "muted",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            What we build
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Real projects across the domains engineering students get assigned.
            Pick what fits your brief, or send the brief and we will tell you
            straight.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.05} className={service.span}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const isFeature = service.emphasis === "feature";
  const isMuted = service.emphasis === "muted";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border p-7 sm:p-8",
        isMuted ? "border-line bg-paper" : "border-line bg-card",
        isFeature && "sm:p-10",
      )}
    >
      {isMuted && (
        <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          also available
        </span>
      )}

      <Icon
        aria-hidden
        className={cn(
          isFeature ? "size-8" : "size-7",
          isMuted ? "text-muted" : "text-primary",
        )}
        strokeWidth={1.75}
      />

      <h3
        className={cn(
          "mt-6 font-display font-semibold text-ink",
          isFeature ? "text-2xl" : "text-xl",
        )}
      >
        {service.name}
      </h3>
      <p
        className={cn(
          "mt-2 leading-relaxed text-muted",
          isFeature ? "max-w-md text-[17px]" : "text-[15px]",
        )}
      >
        {service.promise}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {service.examples.map((example) => (
          <li
            key={example}
            className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-muted"
          >
            {example}
          </li>
        ))}
      </ul>
    </article>
  );
}
