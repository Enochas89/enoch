import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListSchema, pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Software Projects",
  description:
    "Software projects by Enoch Schmaltz including writing tools, project systems, and independent web applications.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-software-projects`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/enoch-schmaltz-software-projects`,
    title: "Enoch Schmaltz Software Projects",
    description:
      "Software projects by Enoch Schmaltz including writing tools, project systems, and independent web applications.",
  },
};

const projectsPageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-software-projects`,
  name: "Enoch Schmaltz Software Projects",
  description:
    "Software projects by Enoch Schmaltz including writing tools, project systems, and independent web applications.",
});

const projectsBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Enoch Schmaltz", item: `${SITE_URL}/enoch-schmaltz` },
    { name: "Software Projects", item: `${SITE_URL}/enoch-schmaltz-software-projects` },
  ],
  `${SITE_URL}/enoch-schmaltz-software-projects#breadcrumb`,
);

const projectCards = [
  {
    name: "NovelCraft Pro",
    summary:
      "A desktop writing and storyboarding system combining timeline planning, drafting workflows, and production-oriented tooling.",
    link: "/software",
    label: "Software Page",
  },
  {
    name: "ClearView",
    summary:
      "A project management platform concept focused on communication, coordination, and timeline visibility for teams.",
    link: "/projects",
    label: "Projects Page",
  },
  {
    name: "Independent Tools",
    summary:
      "Experimental web applications and publishing utilities built to support creators and technical workflows.",
    link: "https://github.com/Enochas89",
    label: "GitHub",
    external: true,
  },
];

export default function EnochSchmaltzSoftwareProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:py-28 space-y-10">
      <JsonLd data={projectsPageJsonLd} />
      <JsonLd data={projectsBreadcrumbJsonLd} />

      <header className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Software Projects</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
          Enoch Schmaltz Software Projects
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Software work by Enoch Schmaltz focuses on practical systems for writing,
          project management, and execution visibility in complex environments.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Development Scope</h2>
        <p className="text-slate-700 leading-relaxed">
          Development work spans desktop tools, web applications, and workflow systems.
          Projects are built with an emphasis on clarity, reliability, and practical utility
          for creators, operators, and technical teams.
        </p>
        <p className="text-slate-700 leading-relaxed">
          The long-term direction is to combine engineering discipline with publishing
          and research workflows so complex work can move from idea to delivery.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Notable Software Work</h2>
        <div className="grid gap-4">
          {projectCards.map((item) => (
            <article key={item.name} className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{item.summary}</p>
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-teal-700 underline underline-offset-4 hover:text-teal-800"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.link}
                  className="mt-3 inline-block text-teal-700 underline underline-offset-4 hover:text-teal-800"
                >
                  {item.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Related Pages</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <Link href="/software" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /software
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /projects
            </Link>
          </li>
          <li>
            <Link href="/press" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /press
            </Link>
          </li>
          <li>
            <Link
              href="/enoch-schmaltz-credentials"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              /enoch-schmaltz-credentials
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
