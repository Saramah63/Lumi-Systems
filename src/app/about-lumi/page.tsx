import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "About Lumi",
  description:
    "Learn about Lumi, the flagship interactive digital learning experience from Lumi Systems for emotional awareness, communication, and social skills.",
};

const capabilities = [
  {
    title: "Emotional awareness",
    description: "Helping children recognize and name feelings in everyday situations.",
  },
  {
    title: "Communication skills",
    description: "Supporting simple, age-appropriate ways to express needs and thoughts.",
  },
  {
    title: "Empathy and perspective-taking",
    description: "Encouraging children to notice others’ feelings and responses.",
  },
  {
    title: "Conflict response",
    description: "Practicing calmer ways to respond during everyday social challenges.",
  },
  {
    title: "Accepting limits and boundaries",
    description: "Helping children understand “no”, waiting, and shared rules.",
  },
  {
    title: "Everyday interaction skills",
    description: "Reinforcing turn-taking, sharing, listening, and social confidence.",
  },
];

const benefits = [
  "Children develop stronger emotional vocabulary",
  "Everyday conflicts become easier to manage",
  "Communication improves in group settings",
  "Educators gain structured support tools",
  "Emotional learning becomes consistent—not occasional",
];

export default function AboutLumiPage() {
  return (
    <main>
      <PageHero
        body="Lumi is the first product being developed by Lumi Systems: an interactive digital learning experience designed to help children practice emotional awareness, communication, and everyday social skills."
        eyebrow="About Lumi"
        title="What is Lumi?"
      />

      <section className="bg-[#f7f5ef] py-24 md:py-32">
        <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div className="order-1 space-y-8 lg:order-2">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700/70">Core capabilities</p>
              <h2 className="font-display max-w-[640px] text-5xl leading-[0.98] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                Practical skills children can explore through interaction.
              </h2>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:row-span-2">
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-sky-100/70 via-white/70 to-stone-100/80 shadow-sm">
              <div className="absolute left-1/2 top-[44%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,182,215,0.3)_0%,rgba(111,182,215,0.14)_44%,rgba(111,182,215,0)_74%)] blur-2xl" />

              <div className="absolute left-6 top-6 z-20 rounded-full border border-black/10 bg-white/78 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Interactive character-based learning
              </div>

              <div className="absolute right-6 top-20 z-20 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Ages 4–6
              </div>

              <div className="absolute left-6 bottom-24 z-20 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Guided scenarios
              </div>

              <div className="absolute inset-x-8 bottom-0 flex justify-center">
                <Image
                  alt="Lumi, a soft white child-friendly digital character designed to support emotional learning"
                  className="h-[430px] w-auto object-contain drop-shadow-2xl"
                  height={1600}
                  priority
                  src="/assets/lumi-character.png"
                  width={1600}
                />
              </div>
            </div>
          </div>

          <div className="order-3 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                className="group rounded-2xl border border-black/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white/85 hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
                key={item.title}
              >
                <span className="mb-4 block h-2.5 w-2.5 rounded-full bg-sky-300/80" />
                <h3 className="text-lg font-semibold leading-snug text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading
            body="Lumi combines expressive character interaction, guided scenarios, and child-centered digital design to support practical learning moments that can fit real educational settings."
            eyebrow="Experience design"
            title="Designed for engagement, clarity, and trust"
          />
          <SectionHeading
            body="Lumi begins as a web-based experience for early childhood environments, with long-term potential to expand into family-facing tools and a broader ecosystem of emotionally intelligent learning products."
            eyebrow="Product vision"
            title="Built for a larger future"
          />
        </Reveal>
      </section>

      <section className="section-space">
        <Reveal className="container-shell grid gap-10 lg:grid-cols-[0.72fr_0.88fr]">
          <SectionHeading
            eyebrow="Real-world use"
            title="Designed for real-world use"
            body="Lumi is not designed as entertainment. It is designed as a practical support tool for everyday emotional and social learning in real environments."
          />
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div className="rounded-2xl border border-[var(--line)] bg-white/72 p-5 font-extrabold" key={benefit}>
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
