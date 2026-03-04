import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects \u2014 Enoch Schmaltz",
  description:
    "Projects and tools by Enoch Schmaltz focused on project systems, development work, and execution visibility.",
  alternates: {
    canonical: "https://enochschmaltz.com/projects",
  },
  openGraph: {
    type: "website",
    url: "https://enochschmaltz.com/projects",
    title: "Projects \u2014 Enoch Schmaltz",
    description:
      "Projects and tools by Enoch Schmaltz focused on project systems, development work, and execution visibility.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Projects - Enoch Schmaltz
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            This page highlights development work and tools related to project
            systems.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Development projects are published on{" "}
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
        </div>
      </section>
    </div>
  );
}
