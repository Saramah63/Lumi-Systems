import type { Metadata } from "next";
import { ProcessSteps } from "@/components/sections/process-steps";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Lumi guides children through simple interactive scenarios that make emotional and social learning more concrete.",
};

const scenarios = ["Taking turns", "Expressing feelings", "Handling conflict", "Accepting “no”"];

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        body="Lumi guides children through simple, engaging experiences designed to make emotional and social learning more concrete."
        eyebrow="How it works"
        title="How Lumi works"
      />
      <section className="section-space">
        <Reveal className="container-shell">
          <SectionHeading title="A simple four-step learning flow." />
          <ProcessSteps />
        </Reveal>
      </section>
      <section className="section-space bg-[var(--sand)]">
        <Reveal className="container-shell">
          <SectionHeading eyebrow="Example scenarios" title="Everyday moments become practice moments." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-8 text-2xl font-extrabold" key={scenario}>
                {scenario}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
