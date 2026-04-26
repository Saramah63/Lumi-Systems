import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how Lumi fits into real daycare routines through short educator-led interactions.",
};

const steps = [
  {
    step: "01",
    title: "Choose a scenario",
    body: "Sharing, anger, saying no, waiting, asking for help, or turn-taking.",
  },
  {
    step: "02",
    title: "Lumi introduces the moment",
    body: "A simple situation appears with child-friendly prompts.",
  },
  {
    step: "03",
    title: "Children respond",
    body: "They speak, choose, reflect, or discuss.",
  },
  {
    step: "04",
    title: "Educator guides",
    body: "The adult connects the scenario to real behavior and group routines.",
  },
  {
    step: "05",
    title: "Repeat naturally",
    body: "The same skill is reinforced when similar moments happen again.",
  },
];

const modes = ["Circle time", "Small group practice", "After conflict", "Transition moments", "Weekly theme"];

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        body="Short educator-led interactions designed for real daycare routines."
        eyebrow="How It Works"
        title="How Lumi Works"
      />

      <section className="relative section-space bg-[var(--mist)]">
        <Reveal className="container-shell">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Flow</p>
            <h2 className="font-display mt-4 text-[42px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[58px] lg:text-[64px]">
              A simple, guided interaction flow
            </h2>
          </div>
          <div className="relative grid gap-5 md:grid-cols-5">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent md:block"
            />
            {steps.map((item) => (
              <article
                className="stagger-item relative z-10 rounded-3xl border border-black/10 bg-white/65 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
                key={item.step}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/80 bg-sky-100 text-sm font-bold text-sky-800">
                  {item.step}
                </div>
                <h3 className="mt-5 text-[17px] font-semibold leading-snug text-slate-950 md:text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-slate-600 md:text-[15.5px]">{item.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start lg:gap-16">
          <div className="grid gap-4">
            <p className="eyebrow">Use modes</p>
            <h2 className="font-display max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Built to fit naturally into daycare routines.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modes.map((mode) => (
              <PremiumCard key={mode} marker="dot" title={mode} variant="compact" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pb-20 md:pb-24">
        <Reveal className="container-shell text-center">
          <ButtonLink href="/request-demo">Request a Demo</ButtonLink>
        </Reveal>
      </section>
    </main>
  );
}
