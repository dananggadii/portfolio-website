import type { Metadata } from "next";
import CertificationsSection from "@/components/CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications — Danang",
  description:
    "Industry-recognised credentials across AWS, Google Cloud, BytePlus, and GitHub.",
};

export default function CertificationsPage() {
  return (
    <main>
      <CertificationsSection />
    </main>
  );
}
