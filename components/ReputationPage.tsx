import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SCHEMA_IDS, pageSchema, SITE_URL } from "@/lib/schema";
import type { ReputationPageData } from "@/lib/reputationPages";

export default function ReputationPage({ page }: { page: ReputationPageData }) {
  const pageUrl = `${SITE_URL}/${page.slug}`;
  const jsonLd = pageSchema({
    url: pageUrl,
    name: page.title,
    description: page.description,
    type: "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": SCHEMA_IDS.author,
      name: "Enoch Schmaltz",
      alternateName: "E. A. Schmaltz",
      url: SITE_URL,
      image: `${SITE_URL}/EnochSchmaltz.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/enochschmaltz",
        "https://github.com/Enochas89",
        "https://about.me/enochschmaltz",
        "https://medium.com/@enochschmaltz",
        "https://enochschmaltz89.substack.com",
        "https://www.goodreads.com/author/show/enoch-schmaltz",
        "https://www.amazon.com/author/enochschmaltz",
        "https://www.wikidata.org/wiki/Q138569168",
      ],
    },
  });

  return (
    <div className="bg-white">
      <JsonLd data={jsonLd} />
      <section className="pt-24 pb-16 md:pt-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            {page.heading}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="py-14 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid gap-6 md:grid-cols-3">
          {page.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h2 className="text-xl font-serif font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Official Enoch Schmaltz Pages
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {page.links.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <li key={`${link.label}-${link.href}`}>
                  {isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-slate-600">
            Official website:{" "}
            <a
              href={SITE_URL}
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              {SITE_URL.replace("https://", "")}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
