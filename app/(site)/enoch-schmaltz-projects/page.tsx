import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Enoch Schmaltz",
  description:
    "Projects by Enoch Schmaltz, including tools and experiments related to project systems and coordination.",
  alternates: {
    canonical: "https://www.enochschmaltz.com/enoch-schmaltz-projects",
  },
};

export default function EnochSchmaltzProjectsPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Projects by Enoch Schmaltz
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz develops tools and experiments related to project
            systems and coordination.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Project code and updates are available on{" "}
            <a
              href="https://github.com/Enochas89"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              GitHub
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
