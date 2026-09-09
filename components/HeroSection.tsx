"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const heading = (
  <>
    From code to cloud,{" "}
    I build systems that scale.
  </>
);

const description =
  "I\u2019m a Cloud DevOps Engineer focused on cloud infrastructure, automation, and reliable software delivery.";

const statItems = [
  { value: "2+", label: "Years Experience" },
  { value: "10", label: "Certifications" },
  { value: "8", label: "Projects Delivered" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  const scrollToAbout = () => {
    window.dispatchEvent(new CustomEvent("smoothscrollstart"));
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col md:flex-row md:items-stretch"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* Portrait — full-bleed on desktop, natural aspect on mobile */}
      <div className="relative w-full aspect-[4/5] md:w-[55%] md:aspect-auto flex-shrink-0">
        <Image
          src="/assets/hero/profil.png"
          alt="Danang — Cloud DevOps Engineer"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      {/* Text content */}
      <div
        className="flex-1 flex flex-col justify-center px-5 pt-10 pb-16 md:px-12 lg:px-16 md:py-[120px]"
      >
        <h1
          className="reveal text-[1.75rem] sm:text-[1.875rem] md:text-[2rem] lg:text-[2.625rem] font-semibold leading-[1.1] tracking-[-0.01em] mb-4"
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

        <div className="reveal">
          <button
            onClick={scrollToAbout}
            className="btn-pill w-full sm:w-auto px-8 py-3.5 text-body-lg font-semibold bg-[#4A6070] text-white hover:bg-[#3A5060] focus-visible:bg-[#3A5060] transition-colors duration-200"
          >
            Find out more
          </button>
        </div>

        {/* Stats — plain text row, no cards */}
        <div className="reveal mt-12 grid grid-cols-3 gap-2 sm:gap-3 md:mt-16 md:flex md:items-start md:gap-12">
          {statItems.map((s) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
