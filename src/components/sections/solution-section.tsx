import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const points = [
  "Guided emotional scenarios",
  "Simple and consistent structure",
  "Designed for everyday use",
  "No complex setup",
];

export function SolutionSection() {
  return (
    <section className="section-space">
      <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
        <SectionHeading
          body="Lumi introduces guided interactive experiences that help children explore real-life social situations and practice appropriate responses in a simple, repeatable way."
          title="A structured way to support emotional learning"
        />
        <div className="blue-panel panel-surface grid gap-4 p-6 md:p-8">
          {points.map((item) => (
            <div className="list-card border-0 bg-transparent p-0 shadow-none hover:translate-y-0 hover:bg-transparent hover:shadow-none" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
