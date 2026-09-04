import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";

/**
 * Single continuous-scroll page with floating navbar.
 * Section order: Hero → About → Certifications → Projects → Experience → Footer
 */
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}
