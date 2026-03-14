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
  const projectTasks = [
    {
      project: "Project Systems Platforms",
      description:
        "Tools designed to improve planning clarity, ownership tracking, and execution visibility across teams.",
      tasks: [
        {
          title: "Scope Mapping",
          description: "Translate project goals into structured, trackable work packages.",
        },
        {
          title: "Delivery Coordination",
          description: "Connect team responsibilities with timeline checkpoints and dependencies.",
        },
        {
          title: "Status Reporting",
          description: "Summarize blockers, progress, and next actions in operational dashboards.",
        },
      ],
    },
    {
      project: "Writing and Publishing Tooling",
      description:
        "Systems for long-form drafting, manuscript organization, and publishing workflow management.",
      tasks: [
        {
          title: "Manuscript Organization",
          description: "Structure chapters, notes, and revisions for large writing projects.",
        },
        {
          title: "Editorial Workflow",
          description: "Support draft review cycles and production handoff steps.",
        },
        {
          title: "Release Preparation",
          description: "Package finalized content for publication and distribution channels.",
        },
      ],
    },
    {
      project: "Independent Application Experiments",
      description:
        "Rapidly iterated web and desktop prototypes used to validate product ideas and technical approaches.",
      tasks: [
        {
          title: "Prototype Development",
          description: "Build focused proof-of-concept applications around core workflow pain points.",
        },
        {
          title: "Usability Validation",
          description: "Test interaction patterns and simplify product flow based on use feedback.",
        },
        {
          title: "Stability Iteration",
          description: "Improve runtime reliability and readiness for public deployment.",
        },
      ],
    },
  ];

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

          <div className="space-y-5 pt-4">
            <h2 className="text-2xl font-serif font-semibold text-slate-900">
              Project Task Descriptions
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {projectTasks.map((item) => (
                <article key={item.project} className="rounded-lg border border-slate-200 p-5 bg-white space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{item.project}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.tasks.map((task) => (
                      <li key={task.title} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                        <p className="text-sm font-semibold text-slate-900">{task.title}</p>
                        <p className="text-sm text-slate-600">{task.description}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

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
