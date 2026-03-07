import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Writing by Enoch Schmaltz",
  description:
    "Writing by Enoch Schmaltz on project systems, leadership, technology, and complex execution environments.",
  alternates: {
    canonical: "https://enochschmaltz.com/enoch-schmaltz-writing",
  },
};

const enochWritingArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Writing — Enoch Schmaltz",
  author: {
    "@type": "Person",
    name: "E. A. Schmaltz",
    "@id": "https://enochschmaltz.com/#author",
  },
  publisher: {
    "@type": "Organization",
    name: "E. A. Schmaltz",
    url: "https://enochschmaltz.com",
  },
  mainEntityOfPage: "https://enochschmaltz.com/enoch-schmaltz-writing",
  inLanguage: "en-US",
};

export default function EnochSchmaltzWritingPage() {
  return (
    <div className="bg-white">
      <JsonLd data={enochWritingArticleJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Writing by Enoch Schmaltz
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz writes about project systems, leadership,
            technology, and complex execution environments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Writing appears on{" "}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Medium
            </a>{" "}
            and{" "}
            <a
              href="https://enochschmaltz89.substack.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Substack
            </a>
            .
          </p>
          <p className="text-slate-700 leading-relaxed">
            Back to profile:{" "}
            <Link
              href="/enoch-schmaltz"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              /enoch-schmaltz
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
