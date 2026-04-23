import { PremiumCard } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const audience = [
  {
    title: "Early childhood education providers",
    body: "Support emotional and social learning through structured digital interaction.",
  },
  {
    title: "Educators and assistants",
    body: "Reinforce communication, empathy, and practical everyday social skills.",
  },
  {
    title: "Future family use",
    body: "Extend emotional learning into home environments through accessible interaction.",
  },
  {
    title: "Research and innovation partners",
    body: "Collaborate on piloting, evaluation, and future development.",
  },
];

export function AudienceGrid() {
  return (
    <section className="section-space bg-[var(--sand)]">
      <Reveal className="container-shell">
        <SectionHeading title="Built for the environments shaping early development" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <PremiumCard body={item.body} key={item.title} title={item.title} variant="feature" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
