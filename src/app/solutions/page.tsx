import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Practical emotional learning support for early childhood education, educators, and future family use.",
};

const solutions = [
  {
    title: "For early childhood education",
    body: "Support structured social-emotional learning through guided interactive experiences designed for real educational contexts.",
  },
  {
    title: "For educators",
    body: "Help reinforce emotional vocabulary, communication habits, turn-taking, empathy, and conflict response through accessible digital support.",
  },
  {
    title: "For future family use",
    body: "Extend emotional learning beyond institutional settings into everyday family life through consistent and child-friendly interaction.",
  },
];

const practicePoints = [
  "Short guided interaction sessions",
  "Individual or small group use",
  "Integrated into daily routines",
  "Used as support during real situations",
  "Flexible across different learning environments",
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        body="Lumi Systems is building tools designed to support emotional and communication learning in environments where these skills matter every day."
        eyebrow="Solutions"
        title="Practical emotional learning support"
      />
      <section className="section-space">
        <Reveal className="container-shell grid gap-6">
          {solutions.map((solution, index) => (
            <article
              className="grid gap-6 border-b border-[var(--line)] py-10 last:border-0 md:grid-cols-[0.22fr_0.48fr_0.7fr] md:items-start"
              key={solution.title}
            >
              <span className="text-sm font-extrabold text-[var(--blue-strong)]">0{index + 1}</span>
              <h2 className="text-3xl font-extrabold tracking-normal text-[var(--foreground)]">{solution.title}</h2>
              <p className="body-large">{solution.body}</p>
            </article>
          ))}
        </Reveal>
      </section>
      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.88fr]">
          <SectionHeading
            eyebrow="Why it matters"
            title="Why this matters for early childhood environments"
            body="Emotional and social challenges are part of everyday life in daycare settings—yet tools to address them are often limited, inconsistent, or time-dependent. Lumi provides a structured, repeatable way to support emotional learning without adding complexity to daily routines."
          />
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/72 p-8 md:p-10">
            <p className="eyebrow mb-5">How Lumi is used in practice</p>
            <div className="grid gap-4">
              {practicePoints.map((point) => (
                <div className="flex items-center gap-3 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0" key={point}>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--blue)]" />
                  <span className="font-extrabold text-[var(--foreground)]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
