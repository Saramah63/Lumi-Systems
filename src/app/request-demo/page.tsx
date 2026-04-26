import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { RequestDemoForm } from "@/components/ui/request-demo-form";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request a Lumi demo for an early childhood environment.",
};

export default function RequestDemoPage() {
  return (
    <main>
      <section className="pt-[clamp(72px,8vw,112px)] pb-[clamp(88px,10vw,140px)]">
        <Reveal className="mx-auto grid max-w-[1280px] items-start gap-[clamp(48px,5vw,76px)] px-[clamp(24px,4vw,56px)] lg:grid-cols-[minmax(0,0.82fr)_minmax(600px,1.18fr)]">
          <div className="grid gap-0">
            <p className="eyebrow">REQUEST A LUMI DEMO</p>
            <h1 className="mt-4 max-w-[560px] font-display text-[clamp(46px,5vw,76px)] leading-[0.96] tracking-[-0.06em] text-[var(--foreground)] max-md:max-w-full max-md:text-[clamp(38px,10vw,54px)]">
              See how Lumi can support early emotional learning.
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.66] text-[var(--body)] md:text-[18px]">
              Lumi is currently in early-stage pilot development. Demo conversations are intended for daycare teams,
              educators, research partners, municipalities, and organizations interested in emotional learning for
              children aged 4–6.
            </p>
            <div className="mt-7 grid max-w-[520px] gap-3 sm:grid-cols-2">
              {[
                "Built for daycare routines",
                "Educator-led interaction",
                "Early-stage pilot conversations",
                "Product experience: lumifriends.app",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[rgba(20,33,42,0.08)] bg-white/72 px-4 py-2 text-[13px] font-medium leading-none text-[var(--muted)] shadow-[0_10px_24px_rgba(20,33,42,0.04)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Available through demo access.</p>
          </div>

          <div className="w-full max-w-[760px] rounded-[34px] border border-[rgba(20,33,42,0.09)] bg-[rgba(255,255,255,0.62)] p-[clamp(34px,4vw,52px)] shadow-[0_24px_80px_rgba(20,33,42,0.06)] lg:justify-self-end">
            <RequestDemoForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
