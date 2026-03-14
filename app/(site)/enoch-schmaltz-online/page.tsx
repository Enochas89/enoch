import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz \u2014 Official Profiles and Links",
  description:
    "Official online profiles and identity links for Enoch Schmaltz across Medium, Substack, GitHub, and About.me.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-online`,
  },
};

const onlinePageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-online`,
  name: "Enoch Schmaltz - Official Profiles and Links",
  description:
    "Official online profiles and identity links for Enoch Schmaltz across Medium, Substack, GitHub, and About.me.",
});

export default function EnochSchmaltzOnlinePage() {
  return (
    <div className="bg-white">
      <JsonLd data={onlinePageJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz - Official Profiles and Links
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            This page centralizes the official online profiles for Enoch
            Schmaltz and supports identity consistency across platforms.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Full profile page:{" "}
            <a
              href="https://www.enochschmaltz.com/enoch-schmaltz"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              https://www.enochschmaltz.com/enoch-schmaltz
            </a>
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a
                href="https://www.enochschmaltz.com"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://www.enochschmaltz.com
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
                href="https://substack.com"
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
                href="https://about.me/enochschmaltz"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                About.me
              </a>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Knowledge Graph Profiles
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <a
                  href="https://www.wikidata.org/wiki/Q138569168"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
                >
                  Wikidata
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Amazon Author Central Bio
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Enoch Schmaltz is a writer, developer, and project management
              professional whose work focuses on systems thinking and the
              realities of execution in complex organizations. With experience
              in construction project environments, he has worked where outcomes
              depend on coordination across disciplines, clear decision paths,
              and reliable delivery systems. That background informs his
              writing on leadership, technology, and project execution. He
              examines how teams translate strategy into completed work and how
              institutions manage uncertainty when stakes are high. Alongside
              writing, he develops software tools related to project management
              systems and organizational clarity. His essays appear on his
              website as well as Medium and Substack, where he explores project
              delivery, technology, and the structures that shape modern work.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Goodreads Author Bio
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Enoch Schmaltz writes about systems thinking, project execution,
              leadership, and technology in complex organizational settings. His
              professional background includes construction project management,
              where delivery requires coordination among multiple teams,
              shifting constraints, and high accountability. This practical
              experience shapes both his books and essays. His work looks at
              how organizations make decisions, how project systems succeed or
              break down, and how leadership affects outcomes across long
              timelines. In parallel with his writing, he builds software tools
              connected to project management systems and workflow visibility.
              Across formats, he focuses on one central question: how complex
              work moves from concept to completion. Current writing is
              available on his website, with additional essays on Medium and
              Substack.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              ORCID Bio
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Enoch Schmaltz is a writer, developer, and project management
              professional focused on systems thinking, project execution,
              leadership, and technology. He draws on construction project
              management experience in complex environments where coordination
              across teams determines delivery outcomes. His writing examines
              decision-making, organizational structure, and project systems
              under real operational constraints. He also develops software
              tools related to project management workflows and execution
              visibility. Publications and essays are available at his website,
              with additional work on Medium and Substack.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Website Line Options
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>Amazon: Official website: https://www.enochschmaltz.com</li>
              <li>Goodreads: Learn more at https://www.enochschmaltz.com</li>
              <li>ORCID: Professional website: https://www.enochschmaltz.com</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Tagline Options
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>Writer, developer, and project systems thinker.</li>
              <li>
                Exploring leadership, technology, and complex project execution.
              </li>
              <li>
                Writing and building tools for systems-driven project delivery.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
