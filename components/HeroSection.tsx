"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Shared content ────────────────────────────────────────────────── */

  const heading = (
    <>
      From code to cloud,{" "}
      I build systems that scale.
    </>
  );

  const description =
    "I\u2019m a Cloud DevOps Engineer focused on cloud infrastructure, automation, and reliable software delivery.";

  const ctaButtons = (
    <div className="reveal flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
      <button
        onClick={scrollToAbout}
        className="btn-pill w-full sm:w-auto px-8 py-3.5 text-body-lg font-semibold bg-[#4A6070] text-white hover:bg-[#3A5060] focus-visible:bg-[#3A5060] transition-colors duration-200"
      >
        Find out more
      </button>
      {/* CV is served from public/assets/hero/cv/ — the "#" in the filename
          must stay URL-encoded as %23 or the browser treats it as a fragment. */}
      <a
        href="/assets/hero/cv/danang-cv.pdf"
        download
        className="btn-pill w-full sm:w-auto px-8 py-3.5 text-body-lg font-semibold text-[#4A6070] border border-[#4A6070] hover:text-[#1A1A1A] hover:border-[#1A1A1A] focus-visible:text-[#1A1A1A] focus-visible:border-[#1A1A1A] transition-colors duration-200"
      >
        Download CV
      </a>
    </div>
  );

  const stats = (items: { value: string; label: string }[]) => (
    items.map((s) => (
      <div key={s.label} className="min-w-0 text-center md:text-left">
        <p
          className="font-mono text-headline-md font-semibold"
          style={{ color: "#1A1A1A" }}
        >
          {s.value}
        </p>
        <p
          className="font-mono text-label-sm uppercase tracking-widest font-medium mt-1"
          style={{ color: "#737373" }}
        >
          {s.label}
        </p>
      </div>
    ))
  );

  const statItems = [
    { value: "2+", label: "Years Experience" },
    { value: "10", label: "Certifications" },
    { value: "8", label: "Projects Delivered" },
  ];

  /* ── Render ────────────────────────────────────────────────────────── */

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* ── Desktop: two-column side-by-side ──────────────────────────── */}
      <div className="hidden md:flex min-h-screen items-stretch">

        {/* Left — full-bleed portrait, hard column edge at 55% */}
        <div className="w-[55%] relative flex-shrink-0">
          <Image
            src="/assets/hero/profil.png"
            alt="Danang — Cloud DevOps Engineer"
            fill
            priority
            className="object-cover object-top"
            sizes="55vw"
          />
        </div>

        {/* Right — text content */}
        <div
          className="flex-1 flex flex-col justify-center px-12 lg:px-16"
          style={{ paddingTop: 120, paddingBottom: 120 }}
        >
          <h1
            className="reveal text-[2rem] lg:text-[2.625rem] font-semibold leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ color: "#1A1A1A" }}
          >
            {heading}
          </h1>

          <p
            className="reveal text-body-xl leading-relaxed mb-8 max-w-sm"
            style={{ color: "#5C5C5C" }}
          >
            {description}
          </p>

          {ctaButtons}

          {/* Stats — plain text row, no cards */}
          <div className="reveal mt-16 flex items-start gap-12">
            {stats(statItems)}
          </div>
        </div>
      </div>

      {/* ── Mobile: portrait on top, text below ───────────────────────── */}
      <div className="md:hidden flex flex-col">

        {/* Portrait — natural aspect ratio */}
        <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/assets/hero/profil.png"
            alt="Danang — Cloud DevOps Engineer"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Text — 20px side margins */}
        <div className="px-5 pt-10 pb-16">
          <h1
            className="reveal text-[1.75rem] sm:text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ color: "#1A1A1A" }}
          >
            {heading}
          </h1>

          <p
            className="reveal text-body-xl leading-relaxed mb-8"
            style={{ color: "#5C5C5C" }}
          >
            {description}
          </p>

          {ctaButtons}

          {/* Stats — plain text row, no cards */}
          <div className="reveal mt-12 grid grid-cols-3 gap-2 sm:gap-3">
            {stats(statItems)}
          </div>
        </div>
      </div>
    </section>
  );
}
