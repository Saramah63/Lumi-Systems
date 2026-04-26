import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedHeroTitle } from "@/components/sections/animated-hero-title";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[clamp(72px,9vw,120px)] pb-[clamp(72px,8vw,110px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(36px,4.5vw,68px)] px-[clamp(20px,4vw,48px)] lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)]">
        <Reveal className="relative z-[2] min-w-0">
          <div className="heroCopyPanel box-border grid w-full max-w-[760px] min-w-0 gap-6">
            <p className="eyebrow stagger-item">Lumi Systems</p>
            <div className="stagger-item flex min-h-[clamp(300px,32vw,380px)] w-full max-w-[700px] flex-col justify-center rounded-[34px] border border-[rgba(20,33,42,0.06)] bg-[rgba(255,253,248,0.68)] p-[clamp(20px,2.8vw,32px)] shadow-[0_18px_44px_rgba(20,33,42,0.05)] backdrop-blur-[10px]">
              <AnimatedHeroTitle />
            </div>
            <p className="body-large stagger-item mt-7 max-w-[650px] text-[clamp(17px,1.2vw,18px)] leading-[1.58]">
              Lumi Systems builds practical learning tools for emotional intelligence and communication. Our first
              product, Lumi, helps children aged 4–6 practice everyday emotional and social situations through short,
              educator-led moments in daycare environments.
            </p>
            <div className="stagger-item mt-[30px] flex flex-col gap-[14px] sm:flex-row sm:flex-wrap">
              <ButtonLink className="min-w-[180px] px-6 shadow-[0_18px_42px_rgba(20,33,42,0.14)] max-sm:w-full" href="/request-demo">
                Request a Demo
              </ButtonLink>
              <ButtonLink className="min-w-[180px] px-6 max-sm:w-full" href="/about-lumi" variant="secondary">
                Explore Lumi
              </ButtonLink>
            </div>
            <p className="stagger-item mt-[22px] max-w-[42rem] text-sm font-medium leading-6 text-[var(--muted)]">
              Built in Finland · Early-stage pilot development · Product experience at lumifriends.app
            </p>
          </div>
        </Reveal>
        <Reveal className="relative z-[1] min-w-0 lg:justify-self-end">
          <div className="heroVisualPanel hero-visual-enter relative mx-auto grid w-full max-w-[490px] gap-4 overflow-visible lg:mx-0 lg:max-w-[580px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[34px] border border-[rgba(111,182,215,0.24)] bg-[linear-gradient(140deg,rgba(244,250,252,0.98)_0%,rgba(228,242,248,0.96)_55%,rgba(255,249,244,0.94)_100%)] p-4 shadow-[0_34px_100px_rgba(20,33,42,0.13)] ring-1 ring-[rgba(20,33,42,0.05)] sm:p-6">
              <div className="absolute left-1/2 top-[40%] h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,182,215,0.32)_0%,rgba(111,182,215,0.14)_40%,rgba(111,182,215,0)_72%)] blur-2xl" />
              <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[linear-gradient(90deg,rgba(111,182,215,0.12),rgba(111,182,215,0.04),rgba(255,255,255,0))] blur-xl" />
              <div
                aria-hidden="true"
                className="hero-antenna-glow absolute left-1/2 top-[23%] z-10 h-12 w-12 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,182,215,0.55)_0%,rgba(111,182,215,0.18)_46%,rgba(111,182,215,0)_72%)] blur-md sm:top-[22%]"
              />

              <div className="relative h-full min-h-[320px] sm:min-h-[380px]">
                <Image
                  alt="Lumi, a soft white child-friendly digital character designed to support emotional learning"
                  className="hero-lumi scale-[1.19] object-contain object-center drop-shadow-[0_30px_42px_rgba(20,33,42,0.16)]"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 980px) 440px, 520px"
                  src="/assets/lumi-character.png"
                />
              </div>
            </div>

            <div className="lumiCaption mx-auto box-border grid w-full max-w-full gap-1.5 px-1 text-center lg:mx-0 lg:text-left">
              <div className="grid gap-1">
                <p className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">Lumi</p>
                <p className="text-sm leading-6 text-[var(--muted)]">
                  A guided emotional learning companion designed for children aged 4–6.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
