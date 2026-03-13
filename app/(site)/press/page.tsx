import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Press and Media",
  description:
    "Press and media profile for Enoch Schmaltz: bio, credentials, notable projects, and verified profile links.",
  alternates: {
    canonical: `${SITE_URL}/press`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/press`,
    title: "Enoch Schmaltz Press and Media",
    description:
      "Press and media profile for Enoch Schmaltz: bio, credentials, notable projects, and verified profile links.",
  },
};

const pressPageJsonLd = pageSchema({
  url: `${SITE_URL}/press`,
  name: "Enoch Schmaltz Press and Media",
  description:
    "Press and media profile for Enoch Schmaltz with bio, credentials, projects, and profile references.",
});

const credentials = [
  "Author and independent technology researcher",
  "Software developer building web applications and digital tools",
  "Creator of multiple software projects hosted on GitHub",
  "Developer of project management and publishing platforms",
  "Research focus on advanced technology systems, aerospace history, and technological capability gaps",
];

const projects = [
  {
    title: "Puppet Skies",
    description:
      "Investigative nonfiction examining aerospace secrecy, technology development timelines, and the gap between classified defense capabilities and public technological awareness.",
    href: "/books/puppet-skies",
    hrefLabel: "View project",
  },
  {
    title: "ClearView",
    description:
      "A web-based project management platform designed to help teams coordinate projects, communication, and timelines.",
    href: "/projects",
    hrefLabel: "View projects",
  },
  {
    title: "Independent Software Development",
    description:
      "Development of experimental web applications, publishing tools, and digital systems designed to support creators and technical workflows.",
    href: "/software",
    hrefLabel: "View software",
  },
  {
    title: "Digital Publishing Projects",
    description:
      "Creation of software tools designed to help writers manage long-form projects, manuscripts, and publishing workflows.",
    href: "/writing",
    hrefLabel: "View writing",
  },
];

const profileLinks = [
  { label: "Website", href: SITE_URL },
  { label: "GitHub", href: "https://github.com/Enochas89" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/enochschmaltz" },
];

export default function PressPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <JsonLd data={pressPageJsonLd} />

      <header className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Press and Media</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
          Enoch Schmaltz
        </h1>
        <p className="text-slate-700 leading-relaxed text-lg">
          Author, independent developer, and technology researcher.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Short Bio</h2>
        <p className="text-slate-700 leading-relaxed">
          Enoch Schmaltz is an author, independent developer, and technology researcher known
          for building software tools and writing long-form investigative work exploring advanced
          technology, engineering systems, and the gap between classified capabilities and public
          knowledge.
        </p>
        <p className="text-slate-700 leading-relaxed">
          His writing combines technical analysis with narrative storytelling to examine how
          innovation, secrecy, and institutional systems shape modern technological progress.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Alongside his writing, Schmaltz develops web applications, publishing tools, and
          project-management platforms designed to help creators and teams manage complex projects.
          His development work focuses on practical software solutions, open development, and
          experimental tools that combine engineering thinking with modern web technology.
        </p>
        <p className="text-slate-700 leading-relaxed">
          His work spans investigative nonfiction, creative storytelling, and software development,
          with projects ranging from research-driven books to independently developed digital
          platforms.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Credentials</h2>
        <ul className="space-y-2 text-slate-700">
          {credentials.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Notable Projects</h2>
        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.title} className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{project.description}</p>
              <Link
                href={project.href}
                className="mt-3 inline-block text-teal-700 underline underline-offset-4 hover:text-teal-800"
              >
                {project.hrefLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Interviews and Mentions</h2>
        <p className="text-slate-700 leading-relaxed">
          Independent author and developer publishing work through personal platforms and open
          development repositories.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Verified Profile URLs</h2>
        <ul className="space-y-2 text-slate-700">
          {profileLinks.map((link) => (
            <li key={link.label}>
              <span className="font-semibold text-slate-900">{link.label}: </span>
              <a
                href={link.href}
                className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
                rel="noreferrer"
                target="_blank"
              >
                {link.href}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Related Pages</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <Link
              href="/enoch-schmaltz-credentials"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              /enoch-schmaltz-credentials
            </Link>
          </li>
          <li>
            <Link
              href="/enoch-schmaltz-software-projects"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              /enoch-schmaltz-software-projects
            </Link>
          </li>
          <li>
            <Link
              href="/enoch-schmaltz-books-and-research"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              /enoch-schmaltz-books-and-research
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <p className="text-slate-700 leading-relaxed">
          For media inquiries, rights requests, or interview opportunities, use the{" "}
          <Link
            href="/contact"
            className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
