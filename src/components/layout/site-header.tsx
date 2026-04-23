"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { mainNavItems } from "@/lib/constants/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-[var(--line)] bg-[rgba(255,253,248,0.92)] shadow-[0_18px_60px_rgba(20,33,42,0.08)] backdrop-blur-xl"
          : "border-transparent bg-[rgba(255,253,248,0.68)] backdrop-blur-lg"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3 font-extrabold text-[var(--foreground)]" href="/">
          <span className="relative h-8 w-8 rounded-full bg-[linear-gradient(135deg,#6fb6d7,#dff4fb_46%,#f1ded5)] shadow-[0_10px_28px_rgba(111,182,215,0.28)]">
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </span>
          <span>Lumi Systems</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-bold text-[var(--muted)] lg:flex">
          {mainNavItems.map((item) => (
            <Link className="transition hover:text-[var(--foreground)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <ButtonLink className="ml-1 min-h-11 px-4 py-2" href="/contact">
            Request a Demo
          </ButtonLink>
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-white/70 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="grid gap-1.5">
            <span className={`h-0.5 w-5 bg-[var(--foreground)] transition ${isOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-[var(--foreground)] transition ${isOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav className="container-shell grid gap-3 border-t border-[var(--line)] bg-[rgba(255,253,248,0.98)] py-5 text-sm font-bold text-[var(--muted)] lg:hidden">
          {mainNavItems.map((item) => (
            <Link
              className="rounded-full px-2 py-2 transition hover:text-[var(--foreground)]"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact">Request a Demo</ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
