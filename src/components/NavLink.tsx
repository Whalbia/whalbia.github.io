"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

export default function NavLink({
  section,
  label,
}: {
  section: string;
  label: string;
}) {
  const activeSection = useActiveSection();
  const isActive = activeSection === section;

  return (
    <a
      href={`#${section}`}
      className="group flex items-center gap-4 py-3"
    >
      <span
        className={`block h-px transition-all duration-200 ${
          isActive ? "w-16 bg-text-bright" : "w-8 bg-text-muted group-hover:w-12 group-hover:bg-text"
        }`}
      />
      <span
        className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
          isActive ? "text-text-bright" : "text-text-muted group-hover:text-text"
        }`}
      >
        {label}
      </span>
    </a>
  );
}
