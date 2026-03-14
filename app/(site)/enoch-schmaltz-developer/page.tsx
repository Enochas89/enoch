import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enoch Schmaltz - Developer",
  description:
    "Developer profile for Enoch Schmaltz focused on tools and software experiments for project management systems and coordination.",
  alternates: {
    canonical: "https://www.enochschmaltz.com/enoch-schmaltz-developer",
  },
};

export default function EnochSchmaltzDeveloperPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz - Developer
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz develops tools and experiments related to project
            management systems and coordination.
          </p>
          <p className="text-slate-700 leading-relaxed">
            He is interested in building software that helps teams understand
            and manage complex project environments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Development work can be found on{" "}
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
