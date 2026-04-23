import type { Metadata } from "next";
import { ProductVisual } from "@/components/sections/product-visual";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Lumi",
  description:
    "Learn about Lumi, the flagship interactive digital learning experience from Lumi Systems for emotional awareness, communication, and social skills.",
};

const capabilities = [
  "Emotional awareness",
  "Communication skills",
  "Empathy and perspective-taking",
  "Conflict response",
  "Accepting limits and boundaries",
  "Everyday interaction skills",
];

export default function AboutLumiPage() {
  return (
    <main>
      <PageHero
        body="Lumi is the first product being developed by Lumi Systems: an interactive digital learning experience designed to help children practice emotional awareness, communication, and everyday social skills."
        eyebrow="About Lumi"
        title="What is Lumi?"
      />

      <section className="section-space">
        <Reveal className="container-shell grid gap-12 lg:grid-cols-[0.8fr_0.9fr] lg:items-center">
          <ProductVisual />
          <div>
            <SectionHeading eyebrow="Core capabilities" title="Practical skills children can explore through interaction." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <PremiumCard key={item} title={item} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading
            body="Lumi combines expressive character interaction, guided scenarios, and child-centered digital design to support practical learning moments that can fit real educational settings."
            eyebrow="Experience design"
            title="Designed for engagement, clarity, and trust"
          />
          <SectionHeading
            body="Lumi begins as a web-based experience for early childhood environments, with long-term potential to expand into family-facing tools and a broader ecosystem of emotionally intelligent learning products."
            eyebrow="Product vision"
            title="Built for a larger future"
          />
        </Reveal>
      </section>
    </main>
  );
}
