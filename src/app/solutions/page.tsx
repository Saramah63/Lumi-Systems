import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Daycares",
  description: "Structured emotional learning support for daily daycare life.",
};

const additions = [
  {
    title: "Ready scenarios",
    body: "Clear situations to guide.",
  },
  {
    title: "Shared language",
    body: "Simple words children can use.",
  },
  {
    title: "Repeatable practice",
    body: "Skills reinforced across routines.",
  },
  {
    title: "Low setup",
    body: "Designed for existing daycare flow.",
  },
];

const placements = [
  {
    title: "Morning circle",
    body: "Introduce one skill for the day.",
  },
  {
    title: "Small groups",
    body: "Practice a situation with a few children.",
  },
  {
    title: "After conflict",
    body: "Reflect on what happened.",
  },
  {
    title: "Transitions",
    body: "Support waiting, sharing, moving, and turn-taking.",
  },
];

export default function DaycaresPage() {
  return (
    <main>
      <PageHero
        body="Lumi helps educators guide children through everyday emotional and social situations using short, simple interactions designed for ages 4–6."
        eyebrow="Daycares"
        title="Structured emotional learning support for daily daycare life."
      >
        <div className="pt-2">
          <ButtonLink href="/request-demo">Request a Daycare Demo</ButtonLink>
        </div>
      </PageHero>

      <section className="section-space">
        <Reveal className="container-shell">
          <div className="grid gap-4 max-w-3xl">
            <p className="eyebrow">What Lumi adds</p>
            <h2 className="font-display section-title max-w-[12ch]">Practical support for real daycare routines.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {additions.map((item) => (
              <PremiumCard body={item.body} key={item.title} marker="dot" title={item.title} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start lg:gap-16">
          <div className="grid gap-4">
            <p className="eyebrow">Where it fits</p>
            <h2 className="font-display max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Designed for existing daycare flow.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {placements.map((item) => (
              <PremiumCard body={item.body} key={item.title} marker="dot" title={item.title} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space">
        <Reveal className="container-shell grid gap-8 rounded-[2rem] border border-[var(--line)] bg-white/60 p-8 md:p-10 lg:grid-cols-[0.85fr_0.6fr] lg:items-end">
          <div className="grid gap-4">
            <p className="eyebrow">Pilot</p>
            <h2 className="font-display max-w-[12ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Pilot Lumi in your daycare environment.
            </h2>
            <p className="body-copy max-w-[35rem]">
              Early pilot partners can help shape scenarios, educator experience, and routine fit.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonLink href="/contact">Discuss a Pilot</ButtonLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
