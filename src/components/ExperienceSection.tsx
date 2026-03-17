import { Experience } from "@/types";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  entries,
  resumeLink,
}: {
  entries: Experience[];
  resumeLink: string;
}) {
  return (
    <section id="experience" aria-label="Experience">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-text-bright mb-8 lg:sr-only">
        Experience
      </h2>
      <div className="space-y-4">
        {entries.map((entry) => (
          <ExperienceCard key={entry.company} entry={entry} />
        ))}
      </div>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-8 text-sm font-semibold text-text-bright hover:text-accent transition group"
      >
        View Full Résumé
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </section>
  );
}
