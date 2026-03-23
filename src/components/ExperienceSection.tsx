import { Experience } from "@/types";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  entries,
}: {
  entries: Experience[];
}) {
  return (
    <section id="experience" aria-label="Experience">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-text-bright mb-8">
        Experience
      </h2>
      <div className="border-b border-accent-border">
        {entries.map((entry) => (
          <ExperienceCard key={entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
}
