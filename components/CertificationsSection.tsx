"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const certifications: { name: string; src: string; verifyUrl?: string }[] = [
  {
    name: "AWS Certified DevOps Engineer – Professional",
    src: "/assets/certification/aws-certified-devops-engineer-professional.png",
    verifyUrl: "https://www.credly.com/badges/f437a62d-963f-48a0-9222-8e67933c51c6/public_url",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    src: "/assets/certification/aws-certified-solutions-architect-associate.png",
    verifyUrl: "https://www.credly.com/badges/93e3b9ba-67e9-47dd-9fef-6851585d787a/public_url",
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    src: "/assets/certification/aws-certified-sysops-administrator-associate.png",
    verifyUrl: "https://www.credly.com/badges/a10c9777-f5bf-4dc4-9069-1264ff28b168/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    src: "/assets/certification/aws-certified-cloud-practitioner.png",
    verifyUrl: "https://www.credly.com/badges/83c037aa-326a-4b50-92ac-5346ac6998e1/linked_in_profile",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    src: "/assets/certification/professional-cloud-architect-certification.png",
    verifyUrl: "https://www.credly.com/badges/07679d25-78d2-4f76-bf94-3642bf80eace/public_url",
  },
  {
    name: "Google Cloud Professional DevOps Engineer",
    src: "/assets/certification/professional-cloud-devops-engineer-certification.png",
    verifyUrl: "https://www.credly.com/badges/cb170829-5c55-4081-98e0-e09c14070056/public_url",
  },
  {
    name: "Google Cloud Professional Network Engineer",
    src: "/assets/certification/professional-cloud-network-engineer-certification.png",
    verifyUrl: "https://www.credly.com/badges/4c5dd1a1-5421-42d6-bff0-d5fb0111e888/public_url",
  },
  {
    name: "Google Cloud Professional Security Engineer",
    src: "/assets/certification/professional-cloud-security-engineer-certification.png",
    verifyUrl: "https://www.credly.com/badges/ecb11c7b-1dd2-451b-a716-39bce7cedae5/public_url",
  },
  {
    name: "BytePlus Cloud Essentials",
    src: "/assets/certification/byteplus-cloud-essentials.png",
    verifyUrl: "https://www.credly.com/earner/earned/badge/f5190bd6-1ffe-4bbe-898e-31d6e582eff8",
  },
  {
    name: "GitHub Foundations",
    src: "/assets/certification/github-foundations.png",
    verifyUrl: "https://www.credly.com/badges/dcf19ede-8709-4a2a-b3d1-6b6286b4134b/public_url",
  },
];

export default function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      id="certifications"
      className="px-5 md:px-10 lg:px-16 py-16 md:py-[120px]"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="max-w-content-xl mx-auto">

        {/* Header — no eyebrow label */}
        <h2
          className="reveal text-headline-xl font-semibold leading-[1.2] tracking-[-0.01em] mb-4"
          style={{ color: "#1A1A1A" }}
        >
          Industry-recognised credentials
        </h2>
        <p
          className="reveal text-body-xl leading-relaxed mb-14 max-w-2xl"
          style={{ color: "#5C5C5C" }}
        >
          Validated expertise across AWS, Google Cloud, BytePlus, and GitHub —
          covering architecture, DevOps, security, and networking.
        </p>

        {/* Badge grid — 5 cols desktop / 2–3 mobile
            Card: radius 8px, white, 1px hairline (slate-blue on hover), NO shadow.
            No stagger delays. */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {certifications.map((cert) => {
            const verifyUrl = cert.verifyUrl;

            /* Wrap the card in an external link when a verify URL exists */
            const Wrapper = verifyUrl
              ? ({ children }: { children: ReactNode }) => (
                  <a
                    href={verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: ReactNode }) => <>{children}</>;

            return (
              <Wrapper key={cert.name}>
                <div
                  className="reveal group flex h-full flex-col items-center gap-3 border border-[#E8E6E1] p-4 transition-colors duration-200 hover:border-[#4A6070] sm:gap-4 sm:p-5"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,        /* card radius: 8px */
                  }}
                >
                  {/* Fixed 96×96 bounding box — uniform across all badge shapes */}
                  <div className="relative flex-shrink-0" style={{ width: 96, height: 96 }}>
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      fill
                      className="object-contain"
                      sizes="96px"
                      unoptimized
                    />
                  </div>

                  {/* Badge name + verification affordance — the whole card
                      links out to the Credly badge when a verifyUrl exists */}
                  <div className="flex flex-col items-center gap-1">
                    <p
                      className="text-body-xs text-center leading-snug transition-colors duration-200 group-hover:text-[#4A6070]"
                      style={{ color: "#737373" }}
                    >
                      {cert.name}
                    </p>
                    {verifyUrl && (
                      <p
                        className="font-mono text-body-xs transition-colors duration-200 group-hover:text-[#4A6070]"
                        style={{ color: "#737373" }}
                      >
                        Verify ↗
                      </p>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
