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

const benefits = [
  "Children develop stronger emotional vocabulary",
  "Everyday conflicts become easier to manage",
  "Communication improves in group settings",
  "Educators gain structured support tools",
  "Emotional learning becomes consistent—not occasional",
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
      <section className="section-space">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.88fr]">
          <SectionHeading
            eyebrow="Real-world use"
            title="Designed for real-world use"
            body="Lumi is not designed as entertainment. It is designed as a practical support tool for everyday emotional and social learning in real environments."
          />
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div className="rounded-2xl border border-[var(--line)] bg-white/72 p-5 font-extrabold" key={benefit}>
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
