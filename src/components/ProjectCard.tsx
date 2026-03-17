"use client";

import { useState } from "react";
import { Project } from "@/types";
import Tag from "./Tag";
import CaseStudy from "./CaseStudy";

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "NEEDS_LINK";

  const inner = (
    <>
      <div className="font-mono text-xs text-text-muted pt-1 mb-2 md:mb-0">
        {project.timeline}
      </div>
      <div>
        <h3 className="text-base font-semibold text-text-bright group-hover:text-accent-blue-bright transition-colors duration-200 inline-flex items-center gap-1">
          {project.name}
          {hasLiveUrl && (
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
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          )}
        </h3>
        <p className="text-sm leading-relaxed mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.caseStudy && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              aria-expanded={isOpen}
              className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted hover:text-text-bright transition"
            >
              {isOpen ? "Show Less" : "Learn More"}
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
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <CaseStudy caseStudy={project.caseStudy} isOpen={isOpen} />
          </>
        )}
      </div>
    </>
  );

  const className =
    "group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-4 rounded-lg p-5 transition-all duration-200 hover:bg-bg-card-hover hover:shadow-[inset_0_0_0_1px_rgba(212,212,212,0.08)]";

  if (hasLiveUrl) {
    return (
      <a
        href={project.liveUrl!}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}
