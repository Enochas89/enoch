import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Biography",
  description:
    "A short professional biography of Enoch Schmaltz, writer and developer focused on project systems, leadership, and technology.",
  alternates: {
    canonical: "https://enochschmaltz.com/enoch-schmaltz-biography",
  },
};

export default function EnochSchmaltzBiographyPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz Biography
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz is a writer and developer working at the
            intersection of project systems, leadership, and technology.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His work explores how complex organizations manage execution and
            coordination.
          </p>
          <p className="text-slate-700 leading-relaxed">
            He builds tools and writes about project delivery and systems
            thinking.
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
