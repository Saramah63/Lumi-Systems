"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = [
  "emotional learning",
  "communication",
  "social development",
  "daycare routines",
] as const;

const phraseDurationMs = 3000;

export function AnimatedHeroTitle() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setIsVisible(false);

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % phrases.length);
        setIsVisible(true);
      }, 560);
    }, phraseDurationMs);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const currentPhrase = useMemo(() => {
    if (reducedMotion) return phrases[0];
    return phrases[index];
  }, [index, reducedMotion]);

  return (
    <h1 className="font-display hero-title stagger-item max-w-full">
      <span className="block">Building practical tools for</span>
      <span className="hero-phrase-line mt-1 block">
        <span className="hero-phrase-shell">
          <span className={`hero-phrase ${isVisible || reducedMotion ? "is-visible" : ""}`}>{currentPhrase}</span>
        </span>
      </span>
    </h1>
  );
}
