import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Research",
  description: "Research, ethics, and real-world evaluation priorities for Lumi Systems.",
};

const focus = [
  {
    title: "Educator usability",
    body: "Can educators use it easily?",
  },
  {
    title: "Child engagement",
    body: "Do children understand and participate?",
  },
  {
    title: "Scenario relevance",
    body: "Do the situations reflect real daycare life?",
  },
  {
    title: "Routine fit",
    body: "Can it work without disrupting the day?",
  },
];

const principles = [
  "Adult-led use",
  "Age-appropriate language",
  "Privacy-conscious development",
  "No diagnostic or therapy claims",
  "Human care remains central",
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        body="Developed with evidence-awareness, ethics, and real-world evaluation in mind."
        eyebrow="Research"
        title="Research"
      />

      <section className="section-space">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start lg:gap-16">
          <div className="grid gap-4">
            <p className="eyebrow">Why it matters</p>
            <h2 className="font-display max-w-[12ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Emotional and social skills begin early.
            </h2>
            <p className="body-copy max-w-[34rem]">
              Children build self-regulation, empathy, cooperation, and communication through repeated everyday
              interactions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map((item) => (
              <PremiumCard body={item.body} key={item.title} marker="dot" title={item.title} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start lg:gap-16">
          <div className="grid gap-4">
            <p className="eyebrow">Ethical principles</p>
            <h2 className="font-display max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Built for careful, responsible use.
            </h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <PremiumCard key={item} marker="dot" title={item} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pb-20 md:pb-24">
        <Reveal className="container-shell text-center">
          <ButtonLink href="/contact">Discuss Research Collaboration</ButtonLink>
        </Reveal>
      </section>
    </main>
  );
}
