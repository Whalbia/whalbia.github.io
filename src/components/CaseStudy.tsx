import { CaseStudy as CaseStudyType } from "@/types";

const sections: { key: keyof CaseStudyType; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "approach", label: "My Approach" },
  { key: "challenges", label: "Key Challenges" },
  { key: "results", label: "Results" },
  { key: "wouldChange", label: "What I'd Do Differently" },
];

export default function CaseStudy({
  caseStudy,
  isOpen,
}: {
  caseStudy: CaseStudyType;
  isOpen: boolean;
}) {
  return (
    <div
      className="grid transition-[grid-template-rows] duration-400 ease-in-out overflow-hidden"
      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      aria-hidden={!isOpen}
    >
      <div className="overflow-hidden">
        <div className="border-t border-accent-border pt-5 pb-2 mt-4 space-y-5">
          {sections.map(({ key, label }) => (
            <div key={key}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-text-bright mb-1.5">
                {label}
              </h4>
              <p className="text-sm text-text leading-relaxed">
                {caseStudy[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
