import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Research & Impact",
  description:
    "Research-informed positioning, focus areas, and intended impact goals for Lumi Systems and early childhood emotional learning.",
};

const focusAreas = [
  "Social-emotional learning",
  "Emotional intelligence",
  "Communication skills",
  "Early childhood development",
  "Child-centered digital learning",
  "Ethical human-centered design",
];

const impactGoals = [
  "Stronger emotional vocabulary",
  "Healthier peer interaction",
  "Improved everyday communication",
  "More engaging SEL support",
  "Scalable support tools for educators and families",
];

export default function ResearchImpactPage() {
  return (
    <main>
      <PageHero
        body="Lumi Systems is grounded in the belief that emotional and communication skills developed in early childhood matter deeply for wellbeing, relationships, and learning."
        eyebrow="Research & Impact"
        title="Research-informed by design"
      />
      <section className="section-space">
        <Reveal className="container-shell">
          <SectionHeading title="Focus areas" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <PremiumCard key={area} title={area} />
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.75fr_0.85fr]">
          <SectionHeading eyebrow="Intended impact" title="Built for meaningful human value" />
          <div className="grid gap-4">
            {impactGoals.map((goal) => (
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-5 font-extrabold" key={goal}>
                {goal}
              </div>
            ))}
            <p className="mt-4 text-sm font-bold leading-7 text-[var(--muted)]">
              Lumi Systems is committed to evidence-aware development and future testing as the product evolves.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
