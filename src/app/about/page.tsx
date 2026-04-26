import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Company",
  description: "Lumi Systems builds human-centered tools for emotional intelligence and communication.",
};

const values = [
  {
    title: "Human-centered",
    body: "Built around real needs, real contexts, and everyday human interaction.",
  },
  {
    title: "Practical",
    body: "Focused on tools that can be used in daily routines, not just in theory.",
  },
  {
    title: "Ethical",
    body: "Designed responsibly for sensitive learning environments.",
  },
  {
    title: "Evidence-aware",
    body: "Shaped by research, feedback, and real-world evaluation.",
  },
  {
    title: "Scalable",
    body: "Built to grow from focused early use into broader learning systems.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)] pt-[clamp(88px,9vw,120px)] pb-[clamp(80px,8vw,110px)]">
        <Reveal className="container-shell grid gap-[clamp(48px,6vw,88px)] lg:grid-cols-[minmax(0,1.16fr)_minmax(360px,0.84fr)] lg:items-center">
          <div className="grid gap-5">
            <p className="eyebrow">COMPANY</p>
            <h1 className="font-display max-w-[760px] text-[clamp(48px,5.2vw,78px)] leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] max-md:text-[clamp(38px,10vw,52px)] max-md:leading-[1]">
              Human-centered tools for emotional learning and communication
            </h1>
          </div>
          <div className="panel-surface max-w-[490px] justify-self-start p-[clamp(32px,3vw,36px)]">
            <p className="text-[17px] leading-[1.6] text-[var(--body)] md:text-[18px]">
              Lumi Systems develops practical digital tools that support emotional intelligence, communication, and
              social development through structured, accessible, and responsible learning experiences.
            </p>
            <p className="mt-4 text-[17px] leading-[1.6] text-[var(--muted)] md:text-[18px]">
              Our work starts in early childhood, where emotional learning has long-term relevance and daily practical
              need.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-[clamp(96px,10vw,140px)]">
        <Reveal className="container-shell grid gap-[clamp(48px,6vw,88px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-0">
            <p className="eyebrow">FIRST PRODUCT</p>
            <h2 className="font-display mt-4 max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Our first product is Lumi.
            </h2>
            <p className="mt-5 max-w-[38rem] text-[17px] leading-[1.68] text-[var(--body)] md:text-[18px]">
              Lumi is a guided digital companion designed for children aged 4–6 in daycare environments. It helps
              children practice emotions, communication, and everyday social situations through short, educator-led
              moments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/about-lumi">Explore Lumi</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                See how it works
              </ButtonLink>
            </div>
          </div>
          <div className="w-full max-w-[560px] justify-self-start rounded-[32px] border border-[rgba(20,33,42,0.08)] bg-[linear-gradient(145deg,rgba(243,249,251,0.88)_0%,rgba(255,255,255,0.82)_54%,rgba(244,239,230,0.64)_100%)] p-[clamp(36px,3.8vw,44px)] shadow-[0_20px_60px_rgba(20,33,42,0.07)]">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--blue-strong)]">Lumi</p>
                <p className="text-[clamp(22px,2.2vw,30px)] font-medium leading-[1.25] tracking-[-0.03em] text-[var(--foreground)]">
                  Guided emotional learning for early childhood.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Ages 4–6", "Educator-led", "Daycare routines"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(20,33,42,0.1)] bg-white/72 px-4 py-2 text-[13px] font-medium leading-none text-[var(--muted)] shadow-[0_10px_24px_rgba(20,33,42,0.04)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--mist)] py-[clamp(96px,10vw,140px)]">
        <Reveal className="container-shell grid gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-0">
            <p className="eyebrow">VISION</p>
            <h2 className="font-display mt-4 max-w-[11ch] text-[36px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[52px] lg:text-[60px]">
              Our long-term vision
            </h2>
            <p className="mt-5 max-w-[36rem] text-[17px] leading-[1.68] text-[var(--body)] md:text-[18px]">
              To build a family of learning tools that support emotional intelligence, communication, wellbeing, and
              social development across different environments.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <PremiumCard
                key={item.title}
                body={item.body}
                className="rounded-[26px] bg-white/52 p-[26px] md:p-[30px]"
                marker="dot"
                title={item.title}
                variant="compact"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-[clamp(96px,10vw,140px)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(111,182,215,0.08),transparent_34%),radial-gradient(circle_at_86%_66%,rgba(244,239,230,0.32),transparent_28%)]"
        />
        <Reveal className="container-shell relative grid gap-[clamp(48px,6vw,88px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="relative aspect-[4/5] min-h-[320px] w-full overflow-hidden rounded-[36px]">
              <Image
                alt="Sara Mahmodi, founder of Lumi Systems"
                className="object-cover object-[center_18%]"
                fill
                sizes="(max-width: 900px) min(100vw, 520px), 40vw"
                src="/assets/sara-mahmodi.png"
              />
            </div>
          </div>
          <div className="grid max-w-[680px] gap-0">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--blue-strong)]">FOUNDER NOTE</p>
            <h2 className="font-display mt-4 max-w-[680px] text-[clamp(44px,5vw,72px)] leading-[0.98] tracking-[-0.055em] text-slate-950">
              Founded by Sara Mahmodi
            </h2>
            <p className="mt-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              FOUNDER, LUMI SYSTEMS
            </p>
            <p className="mt-[26px] max-w-[680px] text-[clamp(21px,2vw,28px)] font-medium leading-[1.25] text-[var(--foreground)]">
              Founder-led. Design-driven. Built for real-world impact.
            </p>
            <p className="mt-[22px] max-w-[680px] text-[17px] leading-[1.68] text-[var(--body)] md:text-[18px]">
              Lumi Systems was founded by Sara Mahmodi to build practical learning tools for emotional intelligence,
              communication, and early human development. Her work brings together human-centered design, product
              thinking, and a commitment to creating tools that support children, educators, and everyday learning
              environments.
            </p>
            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.68] text-[var(--muted)] md:text-[18px]">
              The company&apos;s first product, Lumi, focuses on guided emotional learning for children aged 4–6 in
              daycare environments.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Human-centered design",
                "Emotional learning",
                "Early childhood environments",
                "Product development",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(20,33,42,0.1)] bg-white/70 px-4 py-2 text-[13px] font-medium leading-none text-[var(--muted)] shadow-[0_10px_24px_rgba(20,33,42,0.04)] backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
