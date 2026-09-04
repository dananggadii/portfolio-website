"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
] as const;

const SECTION_LINKS = NAV_LINKS.slice(1);

function scrollToSection(href: string) {
  window.dispatchEvent(new CustomEvent("smoothscrollstart"));
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const frostedGlass = {
  backgroundColor: "rgba(255,255,255,0.88)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid #E8E6E1",
} as const;

const containerPadding = "px-5 md:px-10 lg:px-16";
const contentMaxWidth = "max-w-content-xl";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  /* Show/hide based on scroll position and direction:
     - Hidden while inside the hero (top 80% of viewport).
     - Once past the hero, hide when scrolling down, reappear when scrolling up.
     - Direction-based logic is suspended while a programmatic smooth-scroll
       (triggered by a nav link, the hero CTA, or Back-to-Top) is in progress.
       The navbar is forced visible for the duration of the scroll, then hidden
       again if the page settles back inside the hero. */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const heroThreshold = window.innerHeight * 0.8;
      const delta = current - lastScrollY;

      if (!isProgrammaticScrollRef.current) {
        if (current < heroThreshold) {
          setVisible(false);
        } else if (delta > 10) {
          setVisible(false);
        } else if (delta < -10) {
          setVisible(true);
        }
      }

      lastScrollY = current;
      setShowBackToTop(current > 500);
    };

    const onSmoothScrollStart = () => {
      isProgrammaticScrollRef.current = true;
      setVisible(true);
      if (scrollEndTimerRef.current) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
      scrollEndTimerRef.current = window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        /* Once the smooth scroll settles, hide the navbar if we're back
           inside the hero; otherwise keep it visible. */
        if (window.scrollY < window.innerHeight * 0.8) {
          setVisible(false);
        }
      }, 1200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("smoothscrollstart", onSmoothScrollStart);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("smoothscrollstart", onSmoothScrollStart);
      if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
    };
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

  /* Close the mobile menu on Escape or when clicking outside the overlay. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!mobileMenuRef.current) return;
      if (!mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  const navVisibility = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-16px)",
    pointerEvents: visible ? ("auto" as const) : ("none" as const),
    transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
  };

  return (
    <>
      {/* ── Navbar shell — shares the page content's left/right margins ──── */}
      <div
        className={`fixed top-4 left-0 right-0 z-50 ${containerPadding}`}
        style={navVisibility}
      >
        <div className={`${contentMaxWidth} mx-auto relative`}>
          {/* ── Desktop pill navbar ──────────────────────────────────────── */}
          <nav
            className="hidden md:inline-flex items-center rounded-full h-11 lg:h-12 px-1.5 shadow-elev-light-2"
            style={frostedGlass}
            aria-label="Main"
          >
            <a
              href="#hero"
              aria-label="Home"
              aria-current={activeSection === "hero" ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full transition-colors duration-200 hover:bg-white/60"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="/assets/logo.svg"
                alt=""
                width={26}
                height={26}
                className="rounded-sm"
                priority
              />
            </a>

            <ul className="flex items-center gap-1 px-1.5">
              {SECTION_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`inline-flex h-9 lg:h-10 items-center whitespace-nowrap px-3 rounded-full text-body-sm transition-colors duration-200 hover:bg-white/60 ${
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
          </nav>

          {/* ── Mobile hamburger trigger ─────────────────────────────────── */}
          <div className="md:hidden absolute right-0 top-0">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer text-[#1A1A1A] hover:text-[#4A6070] transition-colors duration-200 shadow-elev-light-2"
              style={frostedGlass}
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen overlay menu ──────────────────────────────── */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-[60] md:hidden flex flex-col"
          style={{ backgroundColor: "#FAFAF8" }}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <header className={containerPadding}>
            <div className={`${contentMaxWidth} mx-auto h-20 flex items-center justify-end`}>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer text-[#1A1A1A] hover:text-[#4A6070] transition-colors duration-200"
                style={frostedGlass}
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          <nav className={`flex-1 flex flex-col justify-center ${containerPadding}`} aria-label="Main">
            <div className={`${contentMaxWidth} mx-auto w-full`}>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "true" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`block py-4 text-3xl font-medium transition-colors duration-200 ${
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
        </div>
      )}

      {/* ── Back-to-Top Button ───────────────────────────────────────────── */}
      <button
        type="button"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        inert={!showBackToTop}
        onClick={() => {
          window.dispatchEvent(new CustomEvent("smoothscrollstart"));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
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
