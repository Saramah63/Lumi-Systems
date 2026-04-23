import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lumi Systems about pilots, partnerships, research collaboration, funding, or general product discussions.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        body="Whether you are interested in piloting Lumi, exploring research collaboration, discussing funding opportunities, or learning more about the vision behind Lumi Systems, we welcome relevant conversations."
        eyebrow="Contact"
        title="Let’s talk"
      />
      <section className="section-space">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.62fr_0.9fr] lg:items-start">
          <div className="grid gap-5">
            <p className="eyebrow">Direct contact</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[var(--foreground)]">
              For partnership and product discussions, Lumi Systems is open to direct contact through the website
              inquiry form.
            </h2>
            <p className="body-large">
              Share the context of your interest and the Lumi Systems team will have a clear starting point for the
              conversation.
            </p>
          </div>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
