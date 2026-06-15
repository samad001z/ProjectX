import { Reveal } from "./reveal";

const quotes = [
  {
    body: "I had built the project but couldn't explain half of it. The viva prep was the actual lifesaver. For once I walked in calm and answered everything.",
    name: "Sneha Rajurkar",
    detail: "Final-year CSE, Pune",
    span: "lg:col-span-7",
  },
  {
    body: "They matched my guide's report format exactly and the similarity score came back low. No awkward questions about where the work came from.",
    name: "Aditya Menon",
    detail: "ECE, Coimbatore",
    span: "lg:col-span-5 lg:mt-12",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-line bg-card">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {quotes.map((quote, i) => (
            <Reveal key={quote.name} delay={i * 0.08} className={quote.span}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-[14px] border border-line bg-paper p-8 sm:p-10">
                <blockquote className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                  {quote.body}
                </blockquote>
                <figcaption className="font-mono text-[13px] text-muted">
                  <span className="text-ink">{quote.name}</span>
                  <span className="mx-1.5">/</span>
                  {quote.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
