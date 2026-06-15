import { Container } from "./ui/container";
import { MarkerCheck } from "./ui/marker-check";
import { Reveal } from "./reveal";

const points = [
  {
    title: "Fresh, non-repeated code",
    body: "Your project is written from scratch for your brief. Nothing recycled, nothing handed to another student.",
  },
  {
    title: "Documentation done properly",
    body: "A complete report, PPT, and setup guide in your college's format, not a thin afterthought.",
  },
  {
    title: "Viva and review prep included",
    body: "We rehearse the likely questions with you, so the panel never catches you off guard.",
  },
  {
    title: "Milestone-based payment",
    body: "You pay in stages as work lands. You never hand over everything upfront.",
  },
];

export function WhyUs() {
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Why students pick us
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Most students are not scared of the project. They are scared of
                standing in front of an examiner and going blank. Everything we
                do is built around that moment.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <ul>
            {points.map((point) => (
              <li
                key={point.title}
                className="flex gap-4 border-t border-line py-6 first:border-t-0 first:pt-0"
              >
                <MarkerCheck className="mt-0.5 size-6 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
