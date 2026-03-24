"use client";

import { useState } from "react";
import { Experience } from "@/types";
import Tag from "./Tag";
import ScreenshotModal from "./ScreenshotModal";

export default function ExperienceCard({ entry }: { entry: Experience }) {
  const [modalOpen, setModalOpen] = useState(false);
  const hasScreenshots = entry.screenshots && entry.screenshots.length > 0;

  const inner = (
    <>
      <div className="font-mono text-xs text-text-muted pt-1 mb-2 md:mb-0">
        {entry.date}
      </div>
      <div>
        <h3 className="text-base font-semibold text-text-bright group-hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-1">
          {entry.title}
          {(entry.url || hasScreenshots) && (
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
              {entry.url ? (
                <>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </>
              ) : (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </>
              )}
            </svg>
          )}
        </h3>
        <p className="text-sm text-text-muted">{entry.company}</p>
        <p className="text-sm leading-relaxed mt-2">{entry.description}</p>
        {entry.note && (
          <p className="mt-2 text-sm italic text-text-muted border-l-2 border-accent-border pl-3">
            {entry.note}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group block border-t border-accent-border py-8 px-2 transition-colors duration-200 hover:bg-bg-card-hover/50";

  if (entry.url) {
    return (
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  if (hasScreenshots) {
    return (
      <>
        <button
          onClick={() => setModalOpen(true)}
          className={`${className} w-full text-left cursor-pointer`}
        >
          {inner}
        </button>
        <ScreenshotModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={entry.company}
          note={entry.note}
          screenshots={entry.screenshots!}
        />
      </>
    );
  }

  return <div className={className}>{inner}</div>;
}
