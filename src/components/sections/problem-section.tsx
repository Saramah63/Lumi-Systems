import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

const insights = [
  {
    title: "Big emotions",
    body: "Children often need support naming what they feel and finding words for what they need.",
  },
  {
    title: "Social conflict",
    body: "Sharing, waiting, disagreement, and frustration require calm guidance in the moment.",
  },
  {
    title: "Limited staff capacity",
    body: "Educators support emotional moments while managing full group routines, transitions, and daily demands.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-space border-y border-[var(--line)] bg-[var(--mist)]">
      <Reveal className="container-shell">
        <div className="mx-auto grid max-w-[760px] gap-5 text-center">
          <p className="eyebrow">The Everyday Challenge</p>
          <h2 className="font-display max-w-[760px] text-[clamp(38px,5vw,64px)] leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] text-balance">
            Daycare teams guide emotional moments every day.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] leading-[1.65] text-[var(--body)]">
            Children are constantly learning how to express feelings, handle frustration, share, wait, ask for help,
            and repair conflict. These moments matter — but they are hard to support consistently without simple,
            repeatable tools.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <PremiumCard
              body={item.body}
              className="rounded-[26px] border border-black/10 bg-white/68 p-7 shadow-[0_18px_44px_rgba(20,33,42,0.05)] hover:-translate-y-[3px] hover:border-[rgba(39,111,141,0.22)] hover:shadow-[0_22px_52px_rgba(20,33,42,0.08)]"
              key={item.title}
              title={item.title}
              variant="compact"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
