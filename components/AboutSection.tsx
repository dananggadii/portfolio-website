"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Skill = { name: string; src: string; size?: number };

/*
  One flat list of every tool, in logical order: cloud, containers,
  IaC, networking, CI/CD & security, observability, language.
*/
const skills: Skill[] = [
  // Cloud
  { name: "AWS",           src: "/assets/skill/aws.png" },
  { name: "GCP",           src: "/assets/skill/gcp.png", size: 56 },
  { name: "Alibaba Cloud", src: "/assets/skill/alibaba cloud.webp" },
  // Containers
  { name: "Docker",     src: "/assets/skill/docker.png", size: 56 },
  { name: "Kubernetes", src: "/assets/skill/kubernetes.png" },
  { name: "Helm",       src: "/assets/skill/helm.png" },
  // IaC
  { name: "Terraform", src: "/assets/skill/terraform.webp" },
  { name: "Ansible",   src: "/assets/skill/ansible.png", size: 56 },
  // Networking
  { name: "Traefik", src: "/assets/skill/treafik.webp", size: 56 },
  // CI/CD & Security
  { name: "GitHub Actions", src: "/assets/skill/github action.png", size: 56 },
  { name: "SonarQube",      src: "/assets/skill/sonarqube.png", size: 56 },
  { name: "Trivy",          src: "/assets/skill/trivy.png", size: 56 },
  // Observability
  { name: "Prometheus",      src: "/assets/skill/prometheus.png", size: 56 },
  { name: "Grafana",         src: "/assets/skill/grafana.webp" },
  { name: "HashiCorp Vault", src: "/assets/skill/vault.webp" },
  // Language
  { name: "Python", src: "/assets/skill/python.webp" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      id="about"
      /*
        Section padding: 120px vertical, 20px/40px/64px horizontal.
        Background: approved light #FAFAF8.
      */
      className="px-5 md:px-10 lg:px-16 py-16 md:py-[120px] min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="max-w-content-xl mx-auto w-full">

        {/*
          Two-column split, mirroring the hero layout: skill list ~45% on the
          left, headline + bio ~55% on the right. One set of markup — the order
          utilities flip the two columns instead of duplicating content, so
          mobile stacks bio first with the same vertical skill list below it.
          items-stretch keeps both columns full width on the mobile flex-col
          axis and lets the bio column centre itself against the taller list.
        */}
        <div className="flex flex-col md:flex-row items-stretch gap-14 md:gap-10 lg:gap-16">

          {/* ── Left (45%) — flat grid of all skill logos ─────────────── */}
          <div className="order-2 md:order-1 w-full md:w-[45%] flex-shrink-0">
            {/*
              Single flat grid — no category headers or dividers. Four columns
              on desktop and three on mobile/tablet use compact gutters. Each
              cell is just the logo centred in a 48×48 bounding box: object-contain,
              mix-blend-multiply, grayscale at rest with colour on hover. The
              tool name lives only in alt (screen readers) and title (hover
              tooltip) — no visible label, no card/border/background.
            */}
            <div className="reveal grid grid-cols-3 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-6">
              {skills.map((skill) => {
                const logoSize = skill.size || 48;
                return (
                <div
                  key={skill.name}
                  className="flex items-center justify-center"
                  title={skill.name}
                >
                  <div
                    className="group relative"
                    style={{ width: logoSize, height: logoSize }}
                  >
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ mixBlendMode: "multiply" }}
                      sizes={`${logoSize}px`}
                      unoptimized
                    />
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* ── Right (55%) — headline + bio, vertically centred ────────── */}
          <div className="order-1 md:order-2 flex-1 min-w-0 md:flex md:flex-col md:justify-center">
            {/* Bio — no eyebrow label */}
            <div className="reveal max-w-3xl">
              {/* Headline — IBM Plex Sans 600 via h2 rule */}
              <h2
                className="text-headline-xl font-semibold leading-[1.2] tracking-[-0.01em] mb-4"
                style={{ color: "#1A1A1A" }}
              >
                Engineering infrastructure that teams depend on.
              </h2>
              <p
                className="text-body-xl leading-relaxed"
                style={{ color: "#5C5C5C" }}
              >
                Cloud DevOps Engineer (L2) at Aku Mitra Digital with 2+ years of
                experience designing, migrating, and managing multi-cloud
                infrastructure (AWS, GCP, Alibaba Cloud) for enterprise clients.
                Skilled in building CI/CD pipelines, implementing observability
                (Prometheus, Grafana), and leading infrastructure projects from POC
                through production. Promoted from L1 to L2 within 9 months.
                Currently deepening DevSecOps practices while pursuing a
                Bachelor&apos;s degree in Information Systems.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
