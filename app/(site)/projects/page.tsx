import type { Metadata } from "next";
import { getPublicRepos } from "@/lib/github";

type ProjectFallback = {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language?: string;
};

const FALLBACK_PROJECTS: ProjectFallback[] = [
  {
    id: "clearview",
    name: "clearview",
    description:
      "Web-based project management platform focused on team coordination, project visibility, and execution workflows.",
    html_url: "https://github.com/Enochas89/clearview",
    homepage: "https://clearview-xi.vercel.app",
    language: "TypeScript",
  },
  {
    id: "clearviewteams",
    name: "clearviewteams",
    description:
      "Project collaboration platform concept for managing communication, ownership, and delivery timelines across teams.",
    html_url: "https://github.com/Enochas89/clearviewteams",
    homepage: "https://clearviewteams.vercel.app",
    language: "TypeScript",
  },
  {
    id: "bookpublish",
    name: "bookpublish",
    description:
      "Publishing workflow project for drafting, organizing, and shipping long-form writing projects.",
    html_url: "https://github.com/Enochas89/bookpublish",
    language: "HTML",
  },
  {
    id: "timber-testament",
    name: "Timber-Testament-",
    description:
      "Book and project publishing experiment exploring narrative structure and content presentation.",
    html_url: "https://github.com/Enochas89/Timber-Testament-",
    homepage: "https://timber-testament.vercel.app",
    language: "TypeScript",
  },
  {
    id: "ten-out-of-ten",
    name: "10outoften",
    description:
      "Independent web application experiment built with a lightweight, iterative product workflow.",
    html_url: "https://github.com/Enochas89/10outoften",
    homepage: "https://10outoften.vercel.app",
    language: "JavaScript",
  },
  {
    id: "enoch-site",
    name: "enoch",
    description:
      "Primary website repository containing author pages, writing, books, media, and SEO infrastructure.",
    html_url: "https://github.com/Enochas89/enoch",
    homepage: "https://www.enochschmaltz.com",
    language: "TypeScript",
  },
];

export const metadata: Metadata = {
  title: "Projects \u2014 Enoch Schmaltz",
  description:
    "Projects and tools by Enoch Schmaltz focused on project systems, development work, and execution visibility.",
  alternates: {
    canonical: "https://www.enochschmaltz.com/projects",
  },
  openGraph: {
    type: "website",
    url: "https://www.enochschmaltz.com/projects",
    title: "Projects \u2014 Enoch Schmaltz",
    description:
      "Projects and tools by Enoch Schmaltz focused on project systems, development work, and execution visibility.",
  },
};

export default async function ProjectsPage() {
  let repos = [] as Awaited<ReturnType<typeof getPublicRepos>>;
  let hasError = false;

  try {
    repos = await getPublicRepos("Enochas89");
  } catch {
    hasError = true;
  }

  const showFallback = hasError || repos.length === 0;

  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
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

          {hasError && (
            <p className="text-slate-700 leading-relaxed">
              GitHub projects are temporarily unavailable. Visit{" "}
              <a
                href="https://github.com/Enochas89"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                github.com/Enochas89
              </a>{" "}
              to view the full project list.
            </p>
          )}

          {!hasError && repos.length === 0 && (
            <p className="text-slate-700 leading-relaxed">
              No public repositories are currently listed.
            </p>
          )}

          {!hasError && repos.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {repos.map((repo) => (
                <article
                  key={repo.id}
                  className="border border-slate-200 rounded-lg p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold text-slate-900">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-teal-700 underline-offset-4 hover:underline"
                      >
                        {repo.name}
                      </a>
                    </h2>
                    {repo.archived && (
                      <span className="text-[10px] uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        Archived
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-slate-500">
                    {repo.language && <span>{repo.language}</span>}
                    <span>{repo.stargazers_count} stars</span>
                    <span>{repo.forks_count} forks</span>
                    <span>
                      Updated{" "}
                      {new Date(repo.updated_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
                    >
                      Project website
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}

          {showFallback && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-slate-900">
                Featured Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {FALLBACK_PROJECTS.map((project) => (
                  <article
                    key={project.id}
                    className="border border-slate-200 rounded-lg p-5 space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-slate-900">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-teal-700 underline-offset-4 hover:underline"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-slate-500">
                      {project.language && <span>{project.language}</span>}
                      <span>GitHub</span>
                    </div>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
                      >
                        Project website
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
