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
        <div className="blue-panel grid gap-4 rounded-[2rem] p-6 md:p-8">
          {points.map((item) => (
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0" key={item}>
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--blue)]" />
              <span className="font-extrabold">{item}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
