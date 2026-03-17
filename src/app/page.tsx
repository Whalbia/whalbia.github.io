import { portfolio } from "@/data/portfolio";
import GlowEffect from "@/components/GlowEffect";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <GlowEffect />
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row min-h-screen">
        <Sidebar data={portfolio} />
        <main
          id="main-content"
          className="flex-1 px-6 py-8 lg:px-16 lg:py-24 space-y-20"
        >
          <AboutSection paragraphs={portfolio.about} />
          <ExperienceSection
            entries={portfolio.experience}
            resumeLink={portfolio.links.resume}
          />
          <ProjectsSection projects={portfolio.projects} />
          <Footer />
        </main>
      </div>
    </>
  );
}
