import NewsletterSection from "@/components/NewsletterSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enoch Schmaltz | Writer, Developer, and Project Systems Builder",
  description:
    "Professional profile for Enoch Schmaltz: writer, developer, and project systems builder focused on execution, visibility, and accountability in complex environments.",
};

export default function EnochSchmaltzPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-12 md:pt-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            About Enoch Schmaltz
          </h1>
          <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
            <p>
              Enoch Schmaltz is a writer, developer, and project management
              professional focused on the systems that allow complex work to
              move from concept to completion.
            </p>
            <p>
              His background includes construction project management and
              coordination within complex project environments where multiple
              teams, technical constraints, and decision pathways must align to
              deliver successful outcomes.
            </p>
            <p>
              Through both writing and software development, Schmaltz explores
              how systems shape execution. His work focuses on visibility,
              accountability, and the structures that allow organizations to
              manage complex projects effectively.
            </p>
            <p>
              Author work is published under the name{" "}
              <Link href="/about">E. A. Schmaltz</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Writing
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Enoch Schmaltz writes about leadership, project delivery, systems
            thinking, and the intersection of technology and decision-making.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His essays explore how institutions and teams navigate increasingly
            complex technological environments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Writing is published on platforms including Medium and Substack.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Development Work
          </h2>
          <p className="text-slate-700 leading-relaxed">
            In addition to writing, Schmaltz develops project management and
            analytical tools that explore how complex systems operate in
            practice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            These projects focus on improving coordination, reducing information
            friction, and helping teams understand the real state of project
            environments.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Online Profiles
          </h2>
          <p className="text-slate-700 leading-relaxed">
            You can find Enoch Schmaltz online at:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://enochschmaltz89.substack.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Enochas89"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://about.me"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                About.me
              </a>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Official website:{" "}
            <a
              href="https://enochschmaltz.com"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              https://enochschmaltz.com
            </a>
          </p>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
