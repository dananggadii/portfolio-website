import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About — Danang",
  description:
    "Cloud platforms, tools, and skills behind Danang's DevOps and cloud infrastructure work.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
