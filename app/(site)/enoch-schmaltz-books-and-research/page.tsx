import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListSchema, pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Books and Research",
  description:
    "Books, essays, and research topics by Enoch Schmaltz focused on advanced technology, aerospace history, and capability disclosure.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-books-and-research`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/enoch-schmaltz-books-and-research`,
    title: "Enoch Schmaltz Books and Research",
    description:
      "Books, essays, and research topics by Enoch Schmaltz focused on advanced technology, aerospace history, and capability disclosure.",
  },
};

const booksResearchPageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-books-and-research`,
  name: "Enoch Schmaltz Books and Research",
  description:
    "Books, essays, and research topics by Enoch Schmaltz focused on advanced technology, aerospace history, and capability disclosure.",
});

const booksResearchBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Enoch Schmaltz", item: `${SITE_URL}/enoch-schmaltz` },
    { name: "Books and Research", item: `${SITE_URL}/enoch-schmaltz-books-and-research` },
  ],
  `${SITE_URL}/enoch-schmaltz-books-and-research#breadcrumb`,
);

export default function EnochSchmaltzBooksResearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:py-28 space-y-10">
      <JsonLd data={booksResearchPageJsonLd} />
      <JsonLd data={booksResearchBreadcrumbJsonLd} />

      <header className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Books and Research</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
          Enoch Schmaltz Books and Research
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Writing and research by Enoch Schmaltz examine advanced technology systems,
          engineering history, and how institutional disclosure lags behind real capability.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Research Themes</h2>
        <ul className="space-y-2 text-slate-700 leading-relaxed">
          <li>- Aerospace history and classified capability timelines</li>
          <li>- The relationship between secrecy, public perception, and policy response</li>
          <li>- Technology systems, trust, and decision quality in uncertain conditions</li>
          <li>- Long-form analysis connecting engineering detail with cultural impact</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Books</h2>
        <p className="text-slate-700 leading-relaxed">
          Book projects include investigative nonfiction focused on aerospace secrecy,
          technology development timelines, and institutional interpretation of emerging systems.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <em>Puppet Skies</em> is a central project in this research direction, with related
          writing and analysis published through the site.
        </p>
        <Link
          href="/books"
          className="inline-block text-teal-700 underline underline-offset-4 hover:text-teal-800"
        >
          Browse books
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Essays and Commentary</h2>
        <p className="text-slate-700 leading-relaxed">
          Essays expand these themes through technical explainers, investigative commentary,
          and narrative analysis built for readers tracking the intersection of technology,
          institutions, and public understanding.
        </p>
        <Link
          href="/writing"
          className="inline-block text-teal-700 underline underline-offset-4 hover:text-teal-800"
        >
          Read writing
        </Link>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Related Pages</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <Link href="/press" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /press
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /about
            </Link>
          </li>
          <li>
            <Link href="/enoch-schmaltz" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /enoch-schmaltz
            </Link>
          </li>
          <li>
            <Link
              href="/enoch-schmaltz-credentials"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              /enoch-schmaltz-credentials
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
