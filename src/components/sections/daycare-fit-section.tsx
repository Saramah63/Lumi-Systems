import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const useCases = [
  "Short guided sessions",
  "Small group interaction",
  "Support during real situations",
  "Reinforcing daily learning",
];

export function DaycareFitSection() {
  return (
    <section className="section-space bg-[var(--mist)]">
      <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.78fr_0.86fr] lg:items-center">
        <SectionHeading
          title="Designed to fit into daily routines"
          body="Lumi is not an additional program to manage. It is a flexible support tool that can be used within existing routines."
        />
        <div className="panel-surface p-8 md:p-10">
          <div className="grid gap-4">
            {useCases.map((item) => (
              <div className="list-card border-0 bg-transparent p-0 shadow-none hover:translate-y-0 hover:bg-transparent hover:shadow-none" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
