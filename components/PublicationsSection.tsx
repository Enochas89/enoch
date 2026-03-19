import Image from "next/image";
import Link from "next/link";

const publications = [
  {
    title: "Puppet Skies",
    href: "/books/puppet-skies",
    buyUrl: "https://www.amazon.com/dp/B0GKS9WVWL",
    coverImage: "/images/books/puppet-skies/cover.jpg",
    description:
      "An investigation into the history of stealth aircraft programs and how secret military aircraft are developed away from public scrutiny. Investigating classified aerospace technology and the mechanisms used to hide advanced government assets.",
  },
  {
    title: "The Controlled Release",
    href: "/books/the-controlled-release",
    buyUrl: "https://www.amazon.com/dp/B0GL9GVGFW",
    coverImage: "/images/books/the-controlled-release/cover.png",
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
              className="rounded-lg border border-[#c5a059]/50 bg-white p-6 shadow-sm grid gap-5 md:grid-cols-[10rem,1fr] items-start"
            >
              <Link
                href={publication.href}
                className="relative block h-56 w-40 overflow-hidden rounded border border-[#c5a059]/40 bg-[#f2f2f2]"
              >
                <Image
                  src={publication.coverImage}
                  alt={`${publication.title} cover`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </Link>
              <div className="flex h-full flex-col">
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
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={publication.buyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#2d2d2d] transition-colors"
                  >
                    Buy on Amazon
                  </a>
                  <Link
                    href={publication.href}
                    className="inline-flex items-center justify-center border border-[#c5a059]/60 text-[#1a1a1a] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] hover:border-[#7f5f2b] hover:text-[#7f5f2b] transition-colors"
                  >
                    View Book
                  </Link>
                </div>
              </div>
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
