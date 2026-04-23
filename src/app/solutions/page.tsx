import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

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
    </main>
  );
}
