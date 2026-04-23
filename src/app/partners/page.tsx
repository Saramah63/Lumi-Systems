import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Lumi Systems welcomes pilot, research, innovation, funding, and strategic partnership conversations.",
};

const partners = [
  "Daycare centers and early childhood education providers",
  "Pilot learning environments",
  "Researchers and universities",
  "Innovation ecosystems",
  "Funding and strategic partners",
];

const themes = [
  "Pilot discussions",
  "Educational feedback",
  "Research collaboration",
  "Product development input",
  "Funding and innovation support",
];

export default function ForPartnersPage() {
  return (
    <main>
      <PageHero
        body="Lumi Systems welcomes conversations with organizations interested in child development, early learning, digital innovation, and future pilot collaboration."
        eyebrow="For partners"
        title="Built for collaboration"
      />
      <section className="section-space">
        <Reveal className="container-shell">
          <SectionHeading title="Partner categories" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {partners.map((partner, index) => (
              <PremiumCard index={`0${index + 1}`} key={partner} title={partner} variant="partner" />
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section-space bg-[var(--sand)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.7fr_0.85fr] lg:items-start">
          <SectionHeading eyebrow="Collaboration themes" title="Areas of collaboration" />
          <div className="grid gap-4">
            {themes.map((theme) => (
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-5 font-extrabold" key={theme}>
                {theme}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section-space">
        <Reveal className="container-shell mx-auto max-w-4xl text-center">
          <h2 className="font-display section-title">Start a relevant partnership conversation.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Discuss a Pilot</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Explore Partnership
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Lumi Systems
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
