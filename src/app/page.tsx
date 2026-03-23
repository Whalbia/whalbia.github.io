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
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row min-h-screen relative">
        <Sidebar data={portfolio} />

        {/* Divider line between sidebar and content */}
        <div
          className="hidden lg:block absolute left-[480px] top-24 bottom-24 w-px bg-accent/20"
          aria-hidden="true"
        />

        <main
          id="main-content"
          className="flex-1 px-6 py-8 lg:px-16 lg:py-24 space-y-20"
        >
          <AboutSection paragraphs={portfolio.about} />
          <ExperienceSection entries={portfolio.experience} />
          <ProjectsSection projects={portfolio.projects} />
          <Footer />
        </main>
      </div>
    </>
  );
}
