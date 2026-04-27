import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AboutSkillsSection } from "@/components/sections/about-skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
