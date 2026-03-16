const researchCards = [
  "Social Engineering Concepts and Information Influence Systems",
  "Institutional Power Structures & Hidden Societal Structures",
  "Classified Aerospace Technology & Stealth Aircraft Programs",
  "Behavioral Control Theory & Human Behavior Manipulation",
  "Psychological Governance & Public Perception Control",
  "Power and Influence Systems in Modern Psychological Warfare",
];

export default function ResearchArchive() {
  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="mx-auto max-w-6xl px-6 space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059]">
            Research Archive
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#fcfcfc]">
            Research Archive
          </h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchCards.map((phrase) => (
            <article
              key={phrase}
              className="rounded-lg border border-[#c5a059]/50 bg-[#fcfcfc] p-5"
            >
              <h3 className="text-lg font-semibold leading-snug text-[#1a1a1a]">
                {phrase}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
