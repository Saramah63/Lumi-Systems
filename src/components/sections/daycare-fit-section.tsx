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
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/72 p-8 md:p-10">
          <div className="grid gap-4">
            {useCases.map((item) => (
              <div className="flex items-center gap-3 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0" key={item}>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--blue)]" />
                <span className="font-extrabold text-[var(--foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
