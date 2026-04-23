import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for Lumi Systems.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        body="Terms for Lumi Systems products and website use will be published as pilots, partnerships, and product access are formalized."
        eyebrow="Policy"
        title="Terms"
      />
    </main>
  );
}
