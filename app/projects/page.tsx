import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects — Danang",
  description:
    "Multi-cloud infrastructure, Kubernetes, and CI/CD project portfolio.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}
