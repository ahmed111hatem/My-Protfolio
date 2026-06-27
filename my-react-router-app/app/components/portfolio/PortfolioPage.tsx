import { useActiveNavSection } from "../../hooks/useActiveNavSection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTheme } from "../../hooks/useTheme";
import { AboutSection } from "./AboutSection";
import { BlobBackground } from "./BlobBackground";
import { CertificationsSection } from "./CertificationsSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

export function PortfolioPage() {
  const { toggleTheme } = useTheme();
  const activeSection = useActiveNavSection();
  useScrollReveal();

  return (
    <>
      <BlobBackground />
      <Header activeSection={activeSection} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
