export default function AboutSection({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  return (
    <section id="about" aria-label="About">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-text-bright mb-8 lg:sr-only">
        About
      </h2>
      {paragraphs.map((text, i) => (
        <p key={i} className="text-base leading-relaxed mb-4">
          {i === 1 ? (
            <>
              I&apos;m finishing up my Computer Science degree at{" "}
              <a
                href="https://www.cse.msstate.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-bright border-b border-accent-border hover:text-accent-blue-bright hover:border-accent-blue transition"
              >
                Mississippi State
              </a>{" "}
              (with a math minor) in May 2026 and looking for frontend,
              fullstack, or app development roles where I can ship work that
              matters.
            </>
          ) : (
            text
          )}
        </p>
      ))}
    </section>
  );
}
