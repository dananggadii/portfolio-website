"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
] as const;

function scrollToSection(href: string) {
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.8);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy — one IntersectionObserver watches all five sections through
     a thin band around the viewport's vertical midpoint; whichever section
     crosses the band is "current". No scroll listeners, and the last section
     to intersect stays active when none does (e.g. over the footer), so the
     highlight never flickers. */
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Floating Navbar ────────────────────────────────────────────── */}
      <nav
        className="fixed top-4 left-1/2 z-50"
        aria-hidden={!showNav}
        inert={!showNav}
        style={{
          opacity: showNav ? 1 : 0,
          transform: showNav ? "translate(-50%, 0)" : "translate(-50%, -16px)",
          pointerEvents: showNav ? "auto" : "none",
          transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="flex items-center justify-center rounded-full h-11 md:h-12 px-3 max-[374px]:px-2 sm:px-6 md:px-8 shadow-elev-light-2"
          style={{
            backgroundColor: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid #E8E6E1",
          }}
        >
          {/* Nav links — centered, no wordmark. A compact fallback below 375px
              keeps all five links inside narrow mobile viewports; sm:/md:
              restore the desktop rhythm. */}
          <ul className="flex items-center gap-2 max-[374px]:gap-1 sm:gap-4 md:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`-mx-1 inline-flex h-11 md:h-12 items-center whitespace-nowrap px-1 text-body-xs max-[374px]:text-[11px] sm:text-body-sm transition-colors duration-200 ${
                      isActive ? "text-[#4A6070]" : "link-muted"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Back-to-Top Button ─────────────────────────────────────────── */}
      <button
        type="button"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        inert={!showBackToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full cursor-pointer bg-[#4A6070] hover:bg-[#3A5060] transition-colors duration-200"
        style={{
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? "translateY(0)" : "translateY(12px)",
          pointerEvents: showBackToTop ? "auto" : "none",
          transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
