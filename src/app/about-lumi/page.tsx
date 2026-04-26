import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";
import { PremiumCard } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Lumi",
  description:
    "Lumi is guided emotional learning for children aged 4-6, designed for short educator-led interactions in daycare environments.",
};

const skillChips = ["Name the feeling", "Wait and breathe", "Ask for help"] as const;

const capabilities = [
  {
    title: "Emotion recognition",
    description: "Notice, name, and express feelings.",
    tone: "bg-white/70",
  },
  {
    title: "Communication",
    description: "Ask, listen, respond, and explain needs.",
    tone: "bg-[rgba(247,252,253,0.9)]",
  },
  {
    title: "Boundaries",
    description: "Practice saying no, hearing no, and responding respectfully.",
    tone: "bg-white/72",
  },
  {
    title: "Conflict repair",
    description: "Explore what to do after frustration, disagreement, or hurt feelings.",
    tone: "bg-[rgba(249,250,251,0.94)]",
  },
  {
    title: "Self-regulation",
    description: "Pause, calm down, and choose a next step.",
    tone: "bg-white/68",
  },
  {
    title: "Empathy",
    description: "Consider how another person may feel.",
    tone: "bg-[rgba(247,252,253,0.86)]",
  },
];

const flow = [
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

const scenarios = [
  {
    title: "I want the toy too.",
    description: "Turn-taking, asking, waiting.",
  },
  {
    title: "My friend said no.",
    description: "Boundaries and respectful response.",
  },
  {
    title: "I feel angry.",
    description: "Naming, calming, choosing behavior.",
  },
  {
    title: "I made someone sad.",
    description: "Repair, apology, empathy.",
  },
  {
    title: "I need help.",
    description: "Asking an adult or another child for support.",
  },
  {
    title: "It is hard to wait.",
    description: "Patience during transitions and group routines.",
  },
];

export default function AboutLumiPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)] pt-[clamp(88px,9vw,128px)] pb-[clamp(80px,8vw,112px)]">
        <Reveal className="container-shell grid gap-10">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_0.9fr] lg:items-center lg:gap-[clamp(40px,5vw,72px)]">
            <div className="grid gap-4">
              <p className="eyebrow">LUMI</p>
              <h1 className="font-display max-w-[760px] text-[clamp(52px,6vw,88px)] leading-[0.96] tracking-[-0.06em] text-[var(--foreground)] max-md:text-[clamp(40px,11vw,56px)] max-md:leading-[1]">
                Guided emotional learning for children aged 4-6.
              </h1>
            </div>
            <div className="panel-surface grid max-w-[520px] gap-4 rounded-[32px] border border-[rgba(20,33,42,0.08)] bg-[rgba(255,253,248,0.62)] p-[clamp(34px,3.4vw,40px)] shadow-[0_16px_46px_rgba(20,33,42,0.06)]">
              <p className="max-w-[36rem] text-[18px] leading-[1.6] text-[var(--body)]">
                Lumi helps children practice emotional awareness, communication, boundaries, empathy, and conflict
                repair through short, educator-led scenarios designed for daycare environments.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/request-demo">Request Access</ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">
                  See How It Works
                </ButtonLink>
              </div>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Product experience: lumifriends.app · Available through demo access
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#f7f5ef] py-[clamp(88px,9vw,128px)] scroll-mt-28">
        <Reveal className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start xl:gap-16">
          <div className="order-2 lg:order-1">
            <div className="visualCard capability-panel-enter relative grid min-h-[520px] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[34px] border border-black/10 bg-gradient-to-br from-sky-100/70 via-white/75 to-stone-100/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7 lg:min-h-[640px] lg:p-8">
              <div className="relative z-[4] grid gap-4">
                <div className="topChip capability-label justify-self-start select-none rounded-full border border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.72)] px-4 py-2 text-[13px] font-medium text-slate-700 shadow-[0_10px_28px_rgba(20,33,42,0.08)] backdrop-blur-[14px] md:text-sm">
                  Guided moment
                </div>
                <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-4">
                  <div className="capability-bubble capability-bubble-friend relative max-w-[280px] justify-self-start rounded-[24px] border border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.76)] p-4 text-[14px] font-medium leading-[1.35] text-slate-800 shadow-[0_16px_40px_rgba(20,33,42,0.08)] backdrop-blur-[16px] sm:max-w-[300px] sm:p-5 md:text-[15px]">
                    <span className="mr-1 font-semibold text-slate-950">Friend:</span>
                    <span>&ldquo;No, I&apos;m using it.&rdquo;</span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-8 h-3 w-3 rotate-45 rounded-[3px] border-r border-b border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.76)]"
                    />
                  </div>
                  <div className="capability-bubble capability-bubble-lumi relative max-w-[320px] justify-self-start rounded-[24px] border border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.76)] p-4 text-[14px] font-medium leading-[1.35] text-slate-800 shadow-[0_16px_40px_rgba(20,33,42,0.08)] backdrop-blur-[16px] sm:max-w-[340px] sm:p-5 md:text-[15px] lg:justify-self-end">
                    <span className="mr-1 font-semibold text-slate-950">Lumi:</span>
                    <span>&ldquo;What could we try next?&rdquo;</span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 right-8 h-3 w-3 rotate-45 rounded-[3px] border-r border-b border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.76)]"
                    />
                  </div>
                </div>
              </div>

              <div className="lumiStage relative flex items-center justify-center py-6 sm:py-8 lg:py-10">
                <div
                  aria-hidden="true"
                  className="capability-glow absolute left-1/2 top-1/2 z-[1] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-3xl sm:h-[300px] sm:w-[300px]"
                />
                <div className="lumiCharacter relative z-[2] w-[72%] max-w-[300px] sm:max-w-[340px] lg:max-w-[390px]">
                  <Image
                    alt="Lumi, a soft digital character guiding children through emotional learning"
                    className="capability-lumi h-auto max-h-[300px] w-full object-contain drop-shadow-2xl sm:max-h-[330px] lg:max-h-[360px]"
                    height={1600}
                    priority
                    src="/assets/lumi-character.png"
                    width={1600}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-5 left-1/2 z-[1] hidden h-px w-[58%] -translate-x-1/2 border-t border-dashed border-sky-200/70 lg:block"
                />
              </div>

              <div className="relative z-[5] grid gap-4">
                <div className="responseRow flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {skillChips.map((chip) => (
                    <span
                      className="skillChip capability-chip inline-flex select-none items-center justify-center rounded-full border border-[rgba(20,33,42,0.10)] bg-[rgba(255,255,255,0.72)] px-4 py-2 text-center text-[13px] font-medium text-slate-700 shadow-[0_10px_28px_rgba(20,33,42,0.08)] backdrop-blur-[14px] hover:-translate-y-0.5 md:text-sm"
                      key={chip}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="ageBadge capability-label select-none rounded-full bg-[#14212a] px-4 py-2 text-[13px] font-medium text-white shadow-sm md:text-sm">
                      Ages 4-6 · Educator-led
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <div className="space-y-5 pt-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700/70 md:text-xs">
                Core capabilities
              </p>
              <h2 className="font-display max-w-[680px] text-[clamp(42px,5vw,72px)] leading-[0.98] tracking-[-0.055em] text-slate-950">
                Skills children can practice with Lumi.
              </h2>
              <p className="max-w-[620px] text-[18px] leading-[1.6] text-slate-600">
                Lumi helps children explore emotions, communication, boundaries, and conflict repair through short
                guided scenarios led by an educator.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <PremiumCard
                  body={item.description}
                  className={`capability-card ${item.tone} rounded-[24px] border border-black/10 bg-white/70 p-6 hover:-translate-y-1 hover:border-sky-200/70 hover:bg-white/90 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]`}
                  key={item.title}
                  marker="dot"
                  title={item.title}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-[#f7f5ef] py-[clamp(88px,9vw,118px)] scroll-mt-28">
        <Reveal className="container-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700/70 md:text-xs">
              How Lumi works in practice
            </p>
            <h2 className="font-display mt-4 text-[42px] leading-[0.98] tracking-[-0.03em] text-slate-950 md:text-[58px] lg:text-[64px]">
              A simple, guided interaction flow
            </h2>
          </div>
          <div className="relative grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent xl:block"
            />
            {flow.map((item) => (
              <article
                className="stagger-item relative z-10 grid h-full gap-0 rounded-[26px] border border-black/10 bg-white/65 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] md:p-6"
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

      <section className="bg-[var(--mist)] py-[clamp(88px,9vw,118px)] scroll-mt-28">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[clamp(40px,5vw,72px)] lg:items-start">
          <div className="grid gap-0">
            <p className="eyebrow">Scenario examples</p>
            <h2 className="font-display mt-4 max-w-[520px] text-[clamp(42px,5vw,72px)] leading-[0.98] tracking-[-0.055em] text-slate-950">
              Everyday moments children already understand.
            </h2>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.64] text-[var(--body)] md:text-[18px]">
              Lumi scenarios are built around familiar daycare situations, making emotional learning easier to connect
              with real life.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {scenarios.map((item) => (
              <PremiumCard
                body={item.description}
                className="rounded-[26px] bg-white/52 p-6"
                key={item.title}
                marker="dot"
                title={item.title}
                variant="compact"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-[clamp(88px,9vw,118px)] scroll-mt-28">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:gap-[clamp(40px,5vw,72px)]">
          <div className="grid gap-0">
            <p className="eyebrow">Educator role</p>
            <h2 className="font-display mt-4 max-w-[11ch] text-[clamp(42px,5vw,72px)] leading-[0.98] tracking-[-0.055em] text-slate-950">
              Lumi supports the adult in the room.
            </h2>
          </div>
          <div className="grid max-w-[520px] gap-5 rounded-[30px] border border-[rgba(20,33,42,0.08)] bg-white/58 p-[clamp(36px,4vw,42px)] shadow-[0_16px_46px_rgba(20,33,42,0.05)]">
            <p className="max-w-[34rem] text-[clamp(21px,2vw,28px)] font-medium leading-[1.28] text-[var(--foreground)]">
              Lumi provides a shared language and a guided flow. It does not replace educators, therapy, or human
              care.
            </p>
            <p className="max-w-[34rem] text-[17px] leading-[1.66] text-[var(--body)] md:text-[18px]">
              Lumi is designed to help adults create calmer, more structured moments for reflection, communication,
              and next-step thinking inside existing daycare routines.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--mist)] py-[clamp(88px,9vw,118px)] scroll-mt-28">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.84fr_1fr] lg:items-center lg:gap-[clamp(40px,5vw,72px)]">
          <div className="grid gap-0">
            <p className="eyebrow">Product vision</p>
            <h2 className="font-display mt-4 max-w-[10ch] text-[clamp(42px,5vw,72px)] leading-[0.98] tracking-[-0.055em] text-slate-950">
              Built for a larger future.
            </h2>
          </div>
          <div className="grid max-w-[38rem] gap-4 rounded-[30px] border border-[rgba(20,33,42,0.08)] bg-white/56 p-[clamp(34px,3.6vw,40px)] shadow-[0_16px_46px_rgba(20,33,42,0.05)]">
            <p className="max-w-[34rem] text-[17px] leading-[1.66] text-[var(--body)] md:text-[18px]">
              Lumi begins as a web-based experience for early childhood environments, with long-term potential to
              expand into family-facing tools and a broader ecosystem of emotionally intelligent learning products.
            </p>
            <p className="max-w-[34rem] text-[clamp(20px,1.9vw,26px)] font-medium leading-[1.35] text-[var(--foreground)]">
              The long-term vision is to create a scalable system that supports children, educators, and families in
              building emotional intelligence from the earliest years.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-[clamp(88px,9vw,112px)] scroll-mt-28">
        <Reveal className="container-shell">
          <div className="mx-auto max-w-[1020px] rounded-[38px] border border-black/10 bg-[radial-gradient(circle_at_top,rgba(86,149,181,0.16),transparent_34%),linear-gradient(145deg,#14212a_0%,#111c24_100%)] px-8 py-14 text-center text-white shadow-[0_26px_80px_rgba(15,23,42,0.2)] md:px-14 md:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-[42px] leading-[0.96] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[68px]">
              Interested in exploring Lumi for your daycare?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              We are opening pilot conversations with selected early childhood environments.
            </p>
            <p className="mt-5 text-sm text-sky-100/75 md:text-base">
              Early-stage product. Open to relevant pilot, research, and partnership discussions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink className="bg-white !text-slate-950 shadow-sm hover:bg-sky-50" href="/request-demo">
                Request a Demo
              </ButtonLink>
              <ButtonLink className="border-white/25 bg-transparent text-white hover:bg-white/10" href="/contact" variant="secondary">
                Contact Lumi Systems
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-white/55">No commitment required. Early partners help shape the product.</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
