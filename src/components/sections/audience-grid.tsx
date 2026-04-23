import { PremiumCard } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const audience = [
  {
    title: "Daycare centers",
    body: "Bring structured emotional learning into everyday group environments.",
  },
  {
    title: "Educators and assistants",
    body: "Support communication, emotional guidance, and day-to-day interaction.",
  },
  {
    title: "Early learning programs",
    body: "Use Lumi within existing routines across different learning settings.",
  },
  {
    title: "Research and pilot partners",
    body: "Collaborate on testing, feedback, and future product development.",
  },
];

export function AudienceGrid() {
  return (
    <section className="section-space bg-[var(--sand)]">
      <Reveal className="container-shell">
        <SectionHeading title="Built for early childhood environments" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <PremiumCard body={item.body} key={item.title} title={item.title} variant="feature" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
