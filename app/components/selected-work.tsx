import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./reveal";
import { cn } from "../lib/cn";

/* IMPORTANT: only ever feature ProjeX's OWN builds here.
   Never display a student's submitted project. These are placeholders. */
type Project = {
  title: string;
  category: string;
  outcome: string;
  tags?: string[];
  demoUrl?: string;
  span: string;
  feature?: boolean;
};

const projects: Project[] = [
  {
    title: "MedSignal",
    category: "AI & ML",
    outcome:
      "Early sepsis-risk flags from patient vitals, with an explainable model the panel can actually follow.",
    tags: ["Python", "FastAPI", "scikit-learn"],
    demoUrl: "#",
    span: "md:col-span-2 lg:col-span-4 lg:row-span-2",
    feature: true,
  },
  {
    title: "StallSpace",
    category: "Web app",
    outcome:
      "A campus food-stall ordering system with live queue times and UPI checkout.",
    demoUrl: "#",
    span: "lg:col-span-2",
  },
  {
    title: "GridWatch",
    category: "IoT + Data science",
    outcome:
      "Rooftop-solar monitoring with anomaly alerts and a daily-yield dashboard.",
    demoUrl: "#",
    span: "lg:col-span-2",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-line">
      <Container className="py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            A few projects we have built end to end. Yours stays private, this is
            only our own work.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className={project.span}>
              <WorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WorkCard({ project }: { project: Project }) {
  const isFeature = project.feature;

  return (
    <a
      href={project.demoUrl ?? "#"}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-line bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_-24px_rgba(22,21,15,0.32)]",
        isFeature && "sm:p-9",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-muted">
          {project.category}
        </span>
        {project.demoUrl && (
          <span className="inline-flex items-center gap-1 font-mono text-[12px] text-primary">
            demo
            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </span>
        )}
      </div>

      <h3
        className={cn(
          "mt-6 font-display font-semibold text-ink",
          isFeature ? "text-2xl sm:text-3xl" : "text-xl",
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          "mt-2 leading-relaxed text-muted",
          isFeature ? "max-w-md text-[17px]" : "text-[15px]",
        )}
      >
        {project.outcome}
      </p>

      {project.tags && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-[12px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
}
