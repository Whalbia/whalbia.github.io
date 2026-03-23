import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section id="projects" aria-label="Projects">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-text-bright mb-8">
        Projects
      </h2>
      <div className="border-b border-accent-border">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
