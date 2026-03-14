import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enoch Schmaltz - Author",
  description:
    "Author profile for Enoch Schmaltz covering writing on technology, systems thinking, leadership, and complex project environments.",
  alternates: {
    canonical: "https://www.enochschmaltz.com/enoch-schmaltz-author",
  },
};

export default function EnochSchmaltzAuthorPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz - Author
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz writes about technology, systems thinking,
            leadership, and complex project environments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His work explores the relationship between advanced technology,
            perception, and public understanding.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Writing is published through platforms including Medium and
            Substack.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Main identity page:{" "}
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
