import type { Metadata } from "next";
import { AudienceGrid } from "@/components/sections/audience-grid";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProductPreview } from "@/components/sections/product-preview";
import { SolutionSection } from "@/components/sections/solution-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Emotionally intelligent learning for the early years. Lumi Systems builds interactive digital tools for early childhood emotional learning.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AudienceGrid />
      <ProductPreview />
      <CredibilityStrip />
      <CTASection />
    </main>
  );
}
