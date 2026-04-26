import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const credibility = [
  "Human-centered design",
  "Early childhood focus",
  "Built for practical environments",
  "Designed for scalability",
];

export function CredibilityStrip() {
  return (
    <section className="section-space border-y border-[var(--line)] bg-white/60">
      <Reveal className="container-shell">
        <SectionHeading
          title="Designed for real-world use"
          body="Currently in early-stage development with a focus on pilot environments, real use, and fit within daily routines."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {credibility.map((item) => (
            <div className="list-card" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
