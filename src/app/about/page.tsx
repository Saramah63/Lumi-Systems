import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lumi Systems, an early-stage company building digital tools for emotional intelligence, communication, and healthier development.",
};

const values = ["Child-centered design", "Empathy", "Clarity", "Innovation with purpose"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        body="Lumi Systems is an early-stage company focused on building digital tools that support emotional intelligence, communication, and healthier human development from the earliest years."
        eyebrow="About the company"
        title="About Lumi Systems"
      />
      <section className="section-space">
        <Reveal className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="blue-panel rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow mb-5">Mission</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              To make emotional and social learning more accessible, engaging, and human-centered through thoughtful
              digital product design.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/70 p-8 md:p-10">
            <p className="eyebrow mb-5">Vision</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              To build a new generation of emotionally intelligent tools that support children, families, and educators
              in everyday life.
            </h2>
          </div>
        </Reveal>
      </section>
      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell">
          <SectionHeading eyebrow="Values" title="Principles for a high-trust product category." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <PremiumCard key={value} title={value} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
