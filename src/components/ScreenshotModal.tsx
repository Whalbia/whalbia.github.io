"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ScreenshotModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  note?: string;
  screenshots: string[];
}

export default function ScreenshotModal({
  open,
  onClose,
  title,
  note,
  screenshots,
}: ScreenshotModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-bg rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-accent-border">
        <div className="sticky top-0 bg-bg border-b border-accent-border px-6 py-4 flex items-start justify-between z-10">
          <div>
            <h3 className="text-lg font-semibold text-text-bright">{title}</h3>
            {note && (
              <p className="text-sm text-text-muted mt-1 italic">{note}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-bright transition-colors p-1"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((src) => (
            <div
              key={src}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`${title} screenshot`}
                width={400}
                height={800}
                loading="lazy"
                className="w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTlFNkUwIi8+PC9zdmc+"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
