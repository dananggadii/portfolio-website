import type { Metadata } from "next";
import ExperienceSection from "@/components/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience — Danang",
  description:
    "Cloud engineering career history, key achievements, and awards.",
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection />
    </main>
  );
}
