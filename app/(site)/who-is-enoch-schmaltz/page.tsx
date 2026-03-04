import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who is Enoch Schmaltz?",
  description:
    "Learn who Enoch Schmaltz is: a writer, developer, and project management professional focused on systems, leadership, and technology.",
  alternates: {
    canonical: "https://enochschmaltz.com/who-is-enoch-schmaltz",
  },
};

export default function WhoIsEnochSchmaltzPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Who is Enoch Schmaltz?
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz is a writer, developer, and project management
            professional focused on systems that help organizations deliver
            complex projects.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His background includes construction project management, with an
            ongoing focus on systems thinking, leadership, and technology.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His writing appears on platforms such as Medium and Substack.
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
