"use client";

import { Project } from "@/types";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "NEEDS_LINK";

  const inner = (
    <div>
      <h3 className="text-base font-semibold text-text-bright group-hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-1">
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
    </div>
  );

  const className =
    "group block border-t border-accent-border py-8 px-2 transition-colors duration-200 hover:bg-bg-card-hover/50";

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
