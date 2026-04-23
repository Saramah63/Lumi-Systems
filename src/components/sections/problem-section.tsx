import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const insights = [
  "Children struggle to express feelings",
  "Conflicts require time and attention",
  "Support depends on individual staff capacity",
];

export function ProblemSection() {
  return (
    <section className="section-space border-y border-[var(--line)] bg-[var(--mist)]">
      <Reveal className="container-shell">
        <SectionHeading
          centered
          body="Conflicts, communication difficulties, and emotional reactions happen daily in early childhood environments. Supporting these moments consistently can be difficult without structured tools."
          title="Everyday emotional challenges are part of daycare life."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-5 text-center font-extrabold" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
