import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation about Lumi, pilots, research, funding, or partnership.",
};

const inquiryTypes = [
  "Request a demo",
  "Daycare pilot",
  "Research collaboration",
  "Partnership",
  "Funding or grants",
  "General inquiry",
];

export default function ContactPage() {
  return (
    <main>
      <section className="pt-[clamp(82px,8vw,120px)] pb-[clamp(96px,10vw,140px)]">
        <Reveal className="mx-auto grid max-w-[1240px] items-start gap-[clamp(48px,6vw,88px)] px-[clamp(24px,4vw,56px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)]">
          <div className="grid gap-0">
            <p className="eyebrow">CONTACT LUMI SYSTEMS</p>
            <h1 className="mt-4 max-w-[560px] font-display text-[clamp(48px,5.5vw,80px)] leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] max-md:max-w-full max-md:text-[clamp(38px,10vw,54px)]">
              Contact Lumi Systems
            </h1>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.62] text-[var(--body)]">
              Start a conversation about Lumi, daycare pilots, research collaboration, funding, or partnership.
            </p>

            <div className="mt-8 grid gap-3">
              <p className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">Inquiry types</p>
              <div className="grid max-w-[560px] gap-3 sm:grid-cols-2">
                {inquiryTypes.map((item) => (
                  <div
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[rgba(20,33,42,0.08)] bg-white/72 px-4 py-2 text-[13px] font-medium leading-none text-[var(--muted)] shadow-[0_10px_24px_rgba(20,33,42,0.04)]"
                    key={item}
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 max-w-[520px] rounded-[28px] border border-[rgba(20,33,42,0.08)] bg-[rgba(255,255,255,0.58)] p-6 shadow-[0_16px_46px_rgba(20,33,42,0.05)]">
              <div className="grid gap-3">
                <p className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">Direct contact</p>
                <a
                  className="text-lg font-semibold text-slate-950 transition hover:text-[var(--blue-strong)]"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
                <p className="text-[16px] leading-6 text-[var(--body)]">{siteConfig.location}</p>
                <p className="text-sm leading-6 text-[var(--muted)]">
                  Open to relevant collaboration in Finland and internationally.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[760px] rounded-[34px] border border-[rgba(20,33,42,0.09)] bg-[rgba(255,255,255,0.62)] p-[clamp(32px,4vw,52px)] shadow-[0_24px_80px_rgba(20,33,42,0.06)] lg:justify-self-end">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
