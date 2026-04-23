import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyItMattersSection() {
  return (
    <section className="section-space bg-[var(--sand)]">
      <Reveal className="container-shell">
        <SectionHeading
          centered
          title="Early emotional skills shape long-term outcomes"
          body="The ability to communicate, regulate emotions, and interact with others develops early—and has long-term impact on learning and wellbeing. Supporting these skills consistently in early environments is critical."
        />
      </Reveal>
    </section>
  );
}
