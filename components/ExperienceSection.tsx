"use client";

import { Fragment, useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

/*
  Career history in reverse-chronological order. Data is hardcoded here (same
  convention as Certifications/Projects) — source of truth for the content is
  assets/experience/experience.md.
*/
const experiences: Experience[] = [
  {
    role: "Cloud DevOps Engineer (L2)",
    company: "Aku Mitra Digital",
    period: "Jan 2026 – Present",
    summary:
      "Leading multi-cloud infrastructure delivery across GCP, AWS, and Alibaba Cloud — from internal platform tooling to production environments for enterprise clients.",
    bullets: [
      "Lead infrastructure and observability for a provincial-scale government system (SI SPMB Jawa Tengah), serving 600,000 concurrent users during peak admission season — recognized with the Best SPMB Indonesia award.",
      "Design and deploy internal platform tools (project management, HRIS, billing dashboard) on GKE and Docker Compose, cutting manual setup time for new internal services.",
      "Build CI/CD pipelines with GitHub Actions across VPS and Kubernetes targets, reducing deployment steps from manual to a single push-to-deploy flow.",
      "Own AWS production environment setup (VPC, EC2, RDS, CloudTrail) with backup lifecycle policies for a manufacturing client.",
    ],
  },
  {
    role: "L1 Cloud Engineer",
    company: "Aku Mitra Digital",
    period: "Apr 2025 – Dec 2025",
    summary:
      "Owned multi-cloud infrastructure delivery (GCP, AWS, Alibaba Cloud) for external clients — from migration assessment to production rollout.",
    bullets: [
      "Migrated all internal applications from VMs to cloud-native GKE, and automated the CI/CD pipeline end-to-end using Artifact Registry and Cloud Build.",
      "Delivered infrastructure across 4 cloud providers (GCP, AWS, Alibaba Cloud, Tencent Cloud) for 8 client projects.",
      "Managed multi-cloud IAM under least-privilege principles and led disaster-recovery snapshot management for production workloads.",
      "Recognized as Best Engineer — 2025, having earned 8 certifications in the same year.",
    ],
  },
  {
    role: "Cloud Engineer Intern",
    company: "Aku Mitra Digital",
    period: "May 2024 – Mar 2025",
    summary: "First hands-on cloud role — migration, monitoring, and full-stack delivery.",
    bullets: [
      "Migrated critical workloads (EC2, S3, MongoDB Atlas, Cloud SQL) from AWS/GCP to Alibaba Cloud for Booking Platform with minimal downtime and zero data loss.",
      "Built an end-to-end monitoring stack (Prometheus, Grafana, Wazuh) across Debian, Ubuntu, and Windows Server for a customer security POC.",
      "Developed a scalable company-profile Web API with NestJS, Prisma ORM, and PostgreSQL.",
    ],
  },
];

const awards = [
  {
    title: "Best SPMB Indonesia",
    detail: "SI SPMB Jawa Tengah infrastructure & observability project (2026)",
  },
  {
    title: "Best Engineer — 2025",
    detail: "8 certifications earned in a single year",
  },
];

/*
  80px of vertical space with a thin hairline centred in it — slightly tighter
  than the Projects list divider (96px) because these rows are text-only.
*/
function EntryDivider() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0"
      style={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <div style={{ height: 1, width: "100%", backgroundColor: "#E8E6E1" }} />
    </div>
  );
}

/* ── Trophy icon — bare accent stroke SVG, no background plate ────────────── */
function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4A6070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      id="experience"
      className="px-5 md:px-10 lg:px-16 py-16 md:py-[120px]"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="max-w-content-xl mx-auto">

        {/* Header — no eyebrow label */}
        <h2
          className="reveal text-headline-xl font-semibold leading-[1.2] tracking-[-0.01em] mb-4"
          style={{ color: "#1A1A1A" }}
        >
          From intern to L2 in two years
        </h2>
        <p
          className="reveal text-body-xl leading-relaxed mb-14 max-w-2xl"
          style={{ color: "#5C5C5C" }}
        >
          Three hands-on roles at Aku Mitra Digital — delivering multi-cloud
          infrastructure, CI/CD automation, and observability for enterprise
          and government clients.
        </p>

        {/*
          Timeline — a fixed 180px date rail on the left (JetBrains Mono, the
          technical-metadata face) and the role content on the right. Entries
          are separated by hairlines only: no outer frame, so the timeline
          reads as an open document and stays visually distinct from the boxed
          Projects list. On mobile the rail stacks above its entry.
        */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <Fragment key={exp.role}>
              {i > 0 && <EntryDivider />}
              <div className="reveal flex flex-col md:flex-row md:gap-10 lg:gap-16">

                {/* Date rail — mono metadata */}
                <div className="md:w-[180px] flex-shrink-0 md:mt-1 mb-2 md:mb-0">
                  <p
                    className="font-mono text-label-sm md:text-label-md flex items-center gap-2"
                    style={{ color: "#737373" }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Role content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-headline-sm font-semibold leading-snug mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {exp.role}
                  </h3>

                  {/* Company — the one quiet accent use per entry */}
                  <p className="text-label-lg mb-4" style={{ color: "#4A6070" }}>
                    {exp.company}
                  </p>

                  <p
                    className="text-body-md leading-relaxed mb-5"
                    style={{ color: "#5C5C5C" }}
                  >
                    {exp.summary}
                  </p>

                  {/* Achievements — accent dash markers, no numbering */}
                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="w-4 h-[2px] flex-shrink-0 mt-[11px]"
                          style={{ backgroundColor: "#4A6070" }}
                        />
                        <span
                          className="text-body-md leading-relaxed"
                          style={{ color: "#5C5C5C" }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        {/*
          Awards — compact list below the timeline. The trophy SVG replaces the
          🏆 emoji from the source data: same meaning, but a bare accent stroke
          icon fits the editorial system.
        */}
        <div className="reveal mt-16 md:mt-20">
          <h3
            className="text-headline-sm font-semibold leading-snug mb-6"
            style={{ color: "#1A1A1A" }}
          >
            Awards &amp; Recognition
          </h3>
          <div className="flex flex-col gap-5">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start gap-4">
                <TrophyIcon />
                <div>
                  <p
                    className="text-body-md font-medium"
                    style={{ color: "#1A1A1A" }}
                  >
                    {award.title}
                  </p>
                  <p
                    className="text-body-sm mt-0.5"
                    style={{ color: "#5C5C5C" }}
                  >
                    {award.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
