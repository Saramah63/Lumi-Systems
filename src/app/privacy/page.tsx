import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Lumi Systems.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        body="Privacy information for Lumi Systems will be published as pilot programs, contact workflows, and product data practices are finalized."
        eyebrow="Policy"
        title="Privacy Policy"
      />
    </main>
  );
}
