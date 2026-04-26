import type { Metadata } from "next";
import { AudienceGrid } from "@/components/sections/audience-grid";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";

export const metadata: Metadata = {
  title: "Home",
  description: "Lumi Systems builds practical tools for emotional learning, starting with Lumi for daycare environments.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AudienceGrid />
      <CTASection />
    </main>
  );
}
