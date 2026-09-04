"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Multi-Cloud Migration to Alibaba Cloud",
    subtitle: "Booking Platform",
    description:
      "Migrated EC2, S3, MongoDB Atlas, and Cloud SQL to Alibaba Cloud with minimal downtime. Redesigned network topology using VPC peering and implemented ECS/OSS equivalents with automated failover to ensure business continuity throughout the transition.",
    tags: ["Alibaba Cloud", "ECS", "OSS", "MongoDB", "Cloud SQL", "VPC"],
    image: "/assets/projects/multi-cloud-migration.svg",
  },
  {
    id: 2,
    title: "Legacy Application Modernization to GKE",
    subtitle: "Aku Mitra Digital",
    description:
      "Led architecture redesign from monolith to microservices on Google Kubernetes Engine. Established secure CI/CD pipelines via Artifact Registry and Cloud Build, with role-based access, automated container scanning, and blue-green deployment strategies.",
    tags: ["GKE", "Cloud Build", "Artifact Registry", "Kubernetes", "CI/CD"],
    image: "/assets/projects/legacy-modernization-gke.svg",
  },
  {
    id: 3,
    title: "Cloud-Native Tender POC on GCP",
    subtitle: "Regional Bank",
    description:
      "Delivered a production-grade Proof of Concept on Google Cloud Platform using GKE for container orchestration with a fully automated CI/CD pipeline. Designed for high availability and compliance with financial-sector security requirements.",
    tags: ["GCP", "GKE", "Cloud Build", "Terraform", "Security"],
    image: "/assets/projects/tender-poc-gcp.svg",
  },
  {
    id: 4,
    title: "AWS Production Environment",
    subtitle: "Industrial Manufacturing Client",
    description:
      "Built a robust AWS production environment including VPC design, EC2 Auto Scaling, EBS volume management, RDS with Multi-AZ failover, CloudTrail for audit logging, and S3 with lifecycle policies for automated backup and archival.",
    tags: ["AWS", "VPC", "EC2", "RDS", "S3", "CloudTrail"],
    image: "/assets/projects/aws-production-environment.svg",
  },
  {
    id: 5,
    title: "Infrastructure & Observability Project Lead",
    subtitle: "Regional Government Digital Platform, Central Java",
    description:
      "Led end-to-end infrastructure and observability setup on Alibaba Cloud for a government digital platform. Integrated Grafana, Prometheus, and a custom Aliyun exporter. The platform won the Best SPMB Indonesia award for service excellence.",
    tags: ["Alibaba Cloud", "Grafana", "Prometheus", "Aliyun", "Government"],
    image: "/assets/projects/observability-project-lead.svg",
  },
  {
    id: 6,
    title: "Kubernetes on Alibaba Cloud",
    subtitle: "Multifinance Platform",
    description:
      "Designed and deployed a production Kubernetes cluster on Alibaba Container Service (ACK) with Server Load Balancer, RDS for PostgreSQL as the primary database, and Redis for session caching — serving the platform's core financial workflows.",
    tags: ["Alibaba Cloud", "ACK", "SLB", "PostgreSQL", "Redis"],
    image: "/assets/projects/kubernetes-alibaba-cloud.svg",
  },
  {
    id: 7,
    title: "ARMS/OpenTelemetry Observability POC",
    subtitle: "Local Government IT Agency",
    description:
      "Designed and implemented a Managed Service for OpenTelemetry on Alibaba Cloud, enabling distributed tracing and metrics collection across the agency's microservices. Delivered as a proof-of-concept with documentation for handover.",
    tags: ["Alibaba Cloud", "OpenTelemetry", "ARMS", "Observability", "Tracing"],
    image: "/assets/projects/arms-otel-observability.svg",
  },
  {
    id: 8,
    title: "VPS Deployment via Docker Compose & GitHub Actions",
    subtitle: "Legal Services Platform",
    description:
      "Built an end-to-end CI/CD pipeline on a VPS using Docker Compose for service orchestration and GitHub Actions for automated deployments. Delivered zero-downtime rolling updates with health checks and automatic rollback on failure.",
    tags: ["Docker", "GitHub Actions", "VPS", "CI/CD", "Nginx"],
    image: "/assets/projects/vps-deployment.svg",
  },
];

/*
  96px of vertical space with a thin hairline centred in it — the upper end of
  the 64–96px band, and 1.5× stack-lg (64px) from DESIGN.md. Rendered between
  every pair of project blocks so the rhythm is identical for all 8.
*/
function RowDivider() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0"
      style={{ paddingTop: 48, paddingBottom: 48 }}
    >
      <div style={{ height: 1, width: "100%", backgroundColor: "#E8E6E1" }} />
    </div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    /*
      items-stretch is kept only for the mobile (flex-col) axis so both columns
      stay full width. From md: up, items-center stops the image column from
      being stretched to the text column's height — that stretch is what forced
      object-cover to crop the diagram.
      min-w-0 on both columns prevents flex-basis blowout / horizontal overflow.
      This row carries no vertical padding of its own: all spacing between
      projects lives outside the row (RowDivider + the list container's
      padding), so the row box hugs its content exactly and the gap between
      consecutive projects is a real, measured gap rather than two abutting
      padding boxes.
    */
    <div
      className={`reveal flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-10 lg:gap-16 items-stretch md:items-center`}
    >
      {/* Text column */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        {/* Headline — IBM Plex Sans 600 via h3 rule */}
        <h3
          className="text-headline-md font-semibold leading-snug mb-1"
          style={{ color: "#1A1A1A" }}
        >
          {project.title}
        </h3>

        {/* Subtitle — ink-secondary */}
        <p className="text-label-lg mb-4" style={{ color: "#5C5C5C" }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-body-md leading-relaxed mb-6" style={{ color: "#5C5C5C" }}>
          {project.description}
        </p>

        {/* Tags — small component radius: 4px */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-body-xs px-3 py-1"
              style={{
                color: "#737373",
                backgroundColor: "#F4F3F0",
                border: "1px solid #E8E6E1",
                borderRadius: 4,        /* small component: 4px */
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image column
          Every diagram is authored at 800×500 and draws its own 1px #E8E6E1
          hairline frame, so the box is locked to that same 8/5 ratio and the
          image is contained — never cropped, never overflowing. Identical for
          all 8 projects regardless of which side of the row they sit on.
          Sharp corners per DESIGN.md ("Media, Diagrams: sharp or 4px radius");
          the frame comes from the artwork, so no second border is added here.
          Background matches the artwork's own fill so no sliver can show. */}
      <div className="flex-1 min-w-0 w-full">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "8 / 5", backgroundColor: "#FAFAF8" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      id="projects"
      className="px-5 md:px-10 lg:px-16 py-16 md:py-[120px]"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="max-w-content-xl mx-auto">

        {/* Header — no eyebrow label */}
        <h2
          className="reveal text-headline-xl font-semibold leading-[1.2] tracking-[-0.01em] mb-4"
          style={{ color: "#1A1A1A" }}
        >
          Work that ships to production
        </h2>
        <p
          className="reveal text-body-xl leading-relaxed mb-16 max-w-2xl"
          style={{ color: "#5C5C5C" }}
        >
          A selection of infrastructure, migration, and platform engineering
          projects delivered across cloud providers and industries.
        </p>

        {/*
          Rows — 96px of real vertical space between each project block, with a
          thin hairline centred in every gap.

          The spacing sits BETWEEN the blocks, not inside them. Previously each
          row padded its text column by 48px top and bottom and the hairline was
          drawn flush on the row boundary, so the row boxes were literally
          touching (measured 0.8px apart). That read as "no gap" because on a
          desktop-width row the 8/5 diagram is the tallest element, so the row
          box collapses onto the diagram and consecutive diagrams sat flush
          against each other across the hairline — they ran together into one
          continuous image. A gap between the boxes separates them no matter
          which column drives the row height.

          The container's own top/bottom hairlines carry 48px of padding, which
          matches the 48px clearance the centred divider gives each inner
          hairline — so every rule in the list has the same breathing room.
        */}
        <div
          className="flex flex-col"
          style={{
            borderTop: "1px solid #E8E6E1",
            borderBottom: "1px solid #E8E6E1",
            paddingTop: 48,
            paddingBottom: 48,
          }}
        >
          {projects.map((project, i) => (
            <Fragment key={project.id}>
              {i > 0 && <RowDivider />}
              <ProjectRow project={project} index={i} />
            </Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
