import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { breadcrumbListSchema, pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Profile",
  description:
    "Professional profile of Enoch Schmaltz, writer and developer focused on project execution, systems thinking, leadership, and technology.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-profile`,
  },
};

const profilePageJsonLd = pageSchema({
  type: "ProfilePage",
  url: `${SITE_URL}/enoch-schmaltz-profile`,
  name: "Enoch Schmaltz Profile",
  description:
    "Professional profile of Enoch Schmaltz, writer and developer focused on project execution, systems thinking, leadership, and technology.",
});

const profileBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Enoch Schmaltz Profile", item: `${SITE_URL}/enoch-schmaltz-profile` },
  ],
  `${SITE_URL}/enoch-schmaltz-profile#breadcrumb`,
);

export default function EnochSchmaltzProfilePage() {
  return (
    <div className="bg-white">
      <JsonLd data={profilePageJsonLd} />
      <JsonLd data={profileBreadcrumbJsonLd} />

      <section className="pt-24 pb-16 md:pt-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz - Professional Profile
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz is a writer, developer, and project management
            systems builder whose work centers on execution in complex
            environments. His writing and software work examine how teams
            coordinate under pressure, how leadership decisions shape outcomes,
            and how systems either support or block delivery.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The work published by Enoch Schmaltz connects practical delivery
            experience with broader questions about technology, organization,
            and decision quality. Across essays, tools, and professional
            commentary, he focuses on the structures that allow people to move
            from planning to completion with clarity and accountability.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Background and Focus
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Enoch Schmaltz developed his professional perspective in
            construction project management settings where multiple teams had to
            coordinate complex schedules, dependencies, and risk. Those
            environments created a long-term focus on project execution:
            deadlines, handoffs, constraints, and leadership communication.
          </p>
          <p className="text-slate-700 leading-relaxed">
            That background now informs a broader systems viewpoint. Enoch
            Schmaltz studies how organizations make decisions in uncertain
            conditions, how information flows across departments, and how
            workflow design affects both performance and trust. His emphasis is
            practical and operational rather than abstract.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Writing
          </h2>
          <p className="text-slate-700 leading-relaxed">
            In his writing, Enoch Schmaltz covers project execution, leadership,
            systems thinking, and the effect of technology on coordination
            across complex organizations. His essays examine how teams interpret
            information, how priorities are set, and why well-designed systems
            matter when work crosses technical and operational boundaries.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Writing by Enoch Schmaltz appears on Medium and Substack, with
            complementary publishing on his primary domain,{" "}
            <a
              href="https://www.enochschmaltz.com"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              enochschmaltz.com
            </a>
            . The work is intended to be useful for leaders, builders, and
            project teams navigating fast-moving environments.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Development Work
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Enoch Schmaltz also develops software tools related to project
            management systems, delivery visibility, and execution discipline.
            This work translates operational lessons into tools that help teams
            track commitments, surface constraints, and maintain alignment over
            time.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The development focus is closely connected to his writing themes:
            how systems support leadership, where coordination breaks down, and
            what practical design choices improve day-to-day execution in
            complex project environments.
          </p>
        </div>
      </section>

      <section className="py-10 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Related Identity Pages
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link
                href="/enoch-schmaltz"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                /enoch-schmaltz
              </Link>
            </li>
            <li>
              <Link
                href="/who-is-enoch-schmaltz"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                /who-is-enoch-schmaltz
              </Link>
            </li>
            <li>
              <Link
                href="/enoch-schmaltz-writing"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                /enoch-schmaltz-writing
              </Link>
            </li>
            <li>
              <Link
                href="/enoch-schmaltz-biography"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                /enoch-schmaltz-biography
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Connect
          </h2>
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
                https://medium.com
              </a>
            </li>
            <li>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://substack.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Enochas89"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://github.com/Enochas89
              </a>
            </li>
            <li>
              <a
                href="https://about.me/enochschmaltz"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://about.me/enochschmaltz
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
