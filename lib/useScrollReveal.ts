"use client";

import { useEffect, RefObject } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Attaches an IntersectionObserver to all `.reveal` elements inside `containerRef`.
 * When an element enters the viewport it gains `.is-visible`, triggering the
 * fade-in-up CSS transition defined in globals.css.
 *
 * Respects prefers-reduced-motion — CSS already disables motion; we still add
 * .is-visible so elements aren't permanently hidden.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (typeof window === "undefined" || !container) return;

    const elements = container.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, threshold, rootMargin]);
}
