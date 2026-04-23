import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const benefits = [
  "Children express emotions more clearly",
  "Everyday conflicts become easier to handle",
  "Communication improves in group settings",
  "Educators gain structured support",
  "Emotional learning becomes consistent",
];

export function BenefitsSection() {
  return (
    <section className="section-space">
      <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.88fr]">
        <SectionHeading title="What changes with Lumi" />
        <div className="grid gap-4">
          {benefits.map((benefit) => (
            <div className="rounded-2xl border border-[var(--line)] bg-white/72 p-5 font-extrabold" key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
