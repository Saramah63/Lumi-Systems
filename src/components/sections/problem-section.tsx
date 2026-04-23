import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const insights = ["Early years matter", "Everyday interaction shapes development", "Support tools are limited"];

export function ProblemSection() {
  return (
    <section className="section-space border-y border-[var(--line)] bg-[var(--mist)]">
      <Reveal className="container-shell">
        <SectionHeading
          centered
          body="Children begin learning how to express feelings, communicate needs, and respond to others during their earliest years. Yet many learning environments still lack practical, engaging, and developmentally appropriate tools to support this process consistently."
          title="Emotional skills are critical — but often under-supported."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-5 text-center font-extrabold" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
