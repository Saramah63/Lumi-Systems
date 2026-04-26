import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Partners",
  description: "Collaborate with Lumi Systems on pilots, research, education, municipal work, and funding.",
};

const partnershipAreas = [
  {
    title: "Daycare pilots",
    body: "Real-world testing and feedback.",
  },
  {
    title: "Research collaboration",
    body: "Evaluation, ethics, learning relevance, and implementation.",
  },
  {
    title: "University partnership",
    body: "Educational design, child development, and research alignment.",
  },
  {
    title: "Municipality collaboration",
    body: "Scalable support for early childhood education.",
  },
  {
    title: "Funding and grants",
    body: "Aligned proposals for innovation, wellbeing, and digital learning.",
  },
];

const lookingFor = [
  "Pilot access",
  "Educator interviews",
  "Research design support",
  "Grant collaboration",
  "Ethical evaluation",
];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        body="We are open to pilot, research, education, municipality, and funding partnerships focused on practical emotional learning tools for early childhood environments."
        eyebrow="Partners"
        title="Collaborate with Lumi Systems on early emotional learning innovation."
      >
        <div className="pt-2">
          <ButtonLink href="/contact">Start a Partnership Conversation</ButtonLink>
        </div>
      </PageHero>

      <section className="section-space">
        <Reveal className="container-shell">
          <div className="grid gap-4 max-w-3xl">
            <p className="eyebrow">Partnership areas</p>
            <h2 className="font-display section-title max-w-[13ch]">Built for pilot and research collaboration.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnershipAreas.map((item) => (
              <PremiumCard body={item.body} key={item.title} marker="dot" title={item.title} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:gap-16 lg:items-start">
          <div className="grid gap-4">
            <p className="eyebrow">What we are looking for</p>
            <h2 className="font-display max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              The relationships that move the work forward.
            </h2>
          </div>
          <div className="grid gap-4">
            {lookingFor.map((item) => (
              <PremiumCard key={item} marker="dot" title={item} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
