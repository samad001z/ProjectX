import { Container } from "./ui/container";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "Flutter",
  "TensorFlow",
  "Node.js",
  "Tailwind CSS",
];

export function BuiltWith() {
  return (
    <section className="border-b border-line bg-card">
      <Container className="py-14 md:py-16">
        <p className="font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted">
          Built with
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-4 py-1.5 font-mono text-[13px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
