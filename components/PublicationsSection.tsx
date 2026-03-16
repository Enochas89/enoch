import Link from "next/link";

const publications = [
  {
    title: "Puppet Skies",
    href: "/books/puppet-skies",
    description:
      "An investigation into the history of stealth aircraft programs and how secret military aircraft are developed away from public scrutiny. Investigating classified aerospace technology and the mechanisms used to hide advanced government assets.",
  },
  {
    title: "The Controlled Release",
    href: "/books/the-controlled-release",
    description:
      "Exploring modern psychological warfare and the control of public perception. This work analyzes psychological manipulation and the behavioral control theory used by institutional power structures to maintain hidden societal structures.",
  },
];

export default function PublicationsSection() {
  return (
    <section className="bg-[#fcfcfc] py-16 border-y border-[#c5a059]/40">
      <div className="mx-auto max-w-6xl px-6 space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059]">
            Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
            Books by Enoch Schmaltz
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="rounded-lg border border-[#c5a059]/50 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-serif text-[#1a1a1a]">
                <Link
                  href={publication.href}
                  className="underline underline-offset-4 decoration-[#c5a059] hover:text-[#7f5f2b]"
                >
                  {publication.title}
                </Link>
              </h3>
              <p className="mt-4 leading-relaxed text-[#2a2a2a]">
                {publication.description}
              </p>
            </article>
          ))}
        </div>
        <p className="text-sm text-[#2a2a2a]">
          Research keyword anchors: Enoch Schmaltz author, Puppet Skies by Enoch
          Schmaltz.
        </p>
      </div>
    </section>
  );
}
