import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const points = [
  "Guided scenarios",
  "Expressive interaction",
  "Developmentally appropriate design",
  "Real-world use potential",
];

export function SolutionSection() {
  return (
    <section className="section-space">
      <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
        <SectionHeading
          body="Lumi introduces guided, interactive experiences where children can explore real-world social situations, practice responses, and build emotional understanding through engagement rather than passive content."
          eyebrow="Solution"
          title="A new approach to emotional learning"
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
