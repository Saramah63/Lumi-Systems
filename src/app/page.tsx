import type { Metadata } from "next";
import { AudienceGrid } from "@/components/sections/audience-grid";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { CTASection } from "@/components/sections/cta-section";
import { DaycareFitSection } from "@/components/sections/daycare-fit-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProductPreview } from "@/components/sections/product-preview";
import { SolutionSection } from "@/components/sections/solution-section";
import { WhyItMattersSection } from "@/components/sections/why-it-matters-section";

export const metadata: Metadata = {
  title: "Home",
  description: "A practical tool for emotional learning in early childhood, designed for real daycare environments.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DaycareFitSection />
      <BenefitsSection />
      <WhyItMattersSection />
      <AudienceGrid />
      <ProductPreview />
      <CredibilityStrip />
      <CTASection />
    </main>
  );
}
