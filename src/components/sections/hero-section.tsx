import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="container-shell grid items-center gap-12 py-14 md:py-18 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-10 lg:py-20">
        <Reveal className="grid max-w-[740px] gap-7">
          <p className="eyebrow">Early childhood emotional learning</p>
          <h1 className="font-display max-w-[740px] text-[clamp(44px,12vw,58px)] font-bold leading-[0.98] tracking-normal text-[var(--foreground)] md:text-[clamp(64px,7vw,96px)] md:leading-[0.95]">
            <span className="hidden md:block">A practical tool for</span>
            <span className="hidden md:block">emotional learning</span>
            <span className="hidden md:block">in daycare.</span>
            <span className="md:hidden">A practical tool for emotional learning in daycare.</span>
          </h1>
          <p className="max-w-[560px] text-[clamp(1.125rem,1.45vw,1.375rem)] leading-[1.55] text-[var(--muted)]">
            Lumi helps children practice communication, emotions, and everyday social situations through guided
            interactive experiences designed for real daycare environments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink className="min-w-[180px] px-6 shadow-[0_18px_42px_rgba(20,33,42,0.14)] max-sm:w-full" href="/contact">
              Request a Demo
            </ButtonLink>
            <ButtonLink className="min-w-[180px] px-6 max-sm:w-full" href="/how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
          <p className="max-w-[680px] text-sm font-bold leading-6 text-[var(--muted)]">
            Designed for early childhood education. Built for daily routines. Currently in early-stage pilot
            development.
          </p>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <div className="hero-visual-enter relative mx-auto w-full max-w-[660px]">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,182,215,0.32)_0%,rgba(111,182,215,0.14)_40%,rgba(111,182,215,0)_72%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(111,182,215,0.2)] bg-[linear-gradient(140deg,rgba(247,252,253,0.96)_0%,rgba(234,245,249,0.92)_55%,rgba(255,250,246,0.9)_100%)] p-4 shadow-[0_34px_100px_rgba(20,33,42,0.11)] sm:p-6">
              <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[linear-gradient(90deg,rgba(111,182,215,0.12),rgba(111,182,215,0.04),rgba(255,255,255,0))] blur-xl" />

              <div className="hero-tag absolute left-3 top-5 z-20 rounded-full border border-[var(--line)] bg-white/88 px-3 py-2 text-xs font-extrabold text-[var(--foreground)] shadow-[0_10px_30px_rgba(20,33,42,0.08)] sm:left-6 sm:top-6 sm:px-4">
                Emotions
              </div>
              <div className="hero-tag-delayed absolute right-3 top-24 z-20 rounded-full border border-[var(--line)] bg-white/88 px-3 py-2 text-xs font-extrabold text-[var(--foreground)] shadow-[0_10px_30px_rgba(20,33,42,0.08)] sm:right-6 sm:top-28 sm:px-4">
                Communication
              </div>
              <div className="hero-tag absolute bottom-22 left-4 z-20 rounded-full border border-[var(--line)] bg-white/88 px-3 py-2 text-xs font-extrabold text-[var(--foreground)] shadow-[0_10px_30px_rgba(20,33,42,0.08)] sm:bottom-24 sm:left-8 sm:px-4">
                Social skills
              </div>

              <div className="relative aspect-[1/1.02] min-h-[360px] sm:min-h-[440px]">
                <Image
                  alt="Lumi, a soft white child-friendly digital character designed to support emotional learning"
                  className="hero-lumi object-contain object-center drop-shadow-[0_30px_42px_rgba(20,33,42,0.16)]"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 660px"
                  src="/assets/lumi-character.png"
                />
              </div>

              <div className="absolute bottom-4 right-4 z-20 rounded-full border border-[var(--line)] bg-white/86 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--blue-strong)] shadow-[0_10px_30px_rgba(20,33,42,0.08)] sm:bottom-6 sm:right-6">
                Guided interaction for children aged 4–6
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
