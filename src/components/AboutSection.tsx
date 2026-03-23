export default function AboutSection({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  return (
    <section id="about" aria-label="About">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-text-bright mb-8">
        About
      </h2>
      {paragraphs.map((text, i) => (
        <p key={i} className="text-base leading-relaxed mb-4">
          {text}
        </p>
      ))}
    </section>
  );
}
