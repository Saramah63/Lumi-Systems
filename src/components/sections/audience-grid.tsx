import { PremiumCard } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const audience = [
  {
    title: "For children",
    body: "Practice emotions, communication, and social situations.",
  },
  {
    title: "For educators",
    body: "Use structured prompts without adding a heavy program.",
  },
  {
    title: "For partners",
    body: "Explore pilots, research collaboration, and scalable implementation.",
  },
];

export function AudienceGrid() {
  return (
    <section className="section-space bg-[var(--sand)]">
      <Reveal className="container-shell">
        <SectionHeading title="Where Lumi fits" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audience.map((item) => (
            <PremiumCard body={item.body} key={item.title} title={item.title} variant="feature" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
