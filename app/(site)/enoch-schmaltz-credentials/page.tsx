import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListSchema, pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Credentials and Background",
  description:
    "Credentials, background, and professional focus for Enoch Schmaltz across writing, software development, and technology research.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-credentials`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/enoch-schmaltz-credentials`,
    title: "Enoch Schmaltz Credentials and Background",
    description:
      "Credentials, background, and professional focus for Enoch Schmaltz across writing, software development, and technology research.",
  },
};

const credentialsPageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-credentials`,
  name: "Enoch Schmaltz Credentials and Background",
  description:
    "Credentials, background, and professional focus for Enoch Schmaltz across writing, software development, and technology research.",
});

const credentialsBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Enoch Schmaltz", item: `${SITE_URL}/enoch-schmaltz` },
    { name: "Credentials", item: `${SITE_URL}/enoch-schmaltz-credentials` },
  ],
  `${SITE_URL}/enoch-schmaltz-credentials#breadcrumb`,
);

const credentialItems = [
  "Author and independent technology researcher",
  "Software developer building web applications and digital tools",
  "Creator of software projects hosted on GitHub",
  "Developer of project management and publishing platforms",
  "Research focus on advanced technology systems, aerospace history, and technological capability gaps",
];

export default function EnochSchmaltzCredentialsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:py-28 space-y-10">
      <JsonLd data={credentialsPageJsonLd} />
      <JsonLd data={credentialsBreadcrumbJsonLd} />

      <header className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Credentials</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
          Enoch Schmaltz Credentials and Background
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Enoch Schmaltz is an author, independent developer, and technology researcher
          focused on advanced systems, project execution, and long-form investigative writing.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Professional Credentials</h2>
        <ul className="space-y-2 text-slate-700 leading-relaxed">
          {credentialItems.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Current Focus</h2>
        <p className="text-slate-700 leading-relaxed">
          Current work combines writing, software development, and technology analysis.
          Primary themes include engineering systems, technology disclosure, and the gap
          between classified capabilities and public understanding.
        </p>
        <p className="text-slate-700 leading-relaxed">
          This includes research-driven nonfiction, experimental tools for creators,
          and practical digital systems that support complex technical workflows.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Verified Profiles</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            Website:{" "}
            <a
              href={SITE_URL}
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              {SITE_URL}
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/Enochas89"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              https://github.com/Enochas89
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/enochschmaltz"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              https://www.linkedin.com/in/enochschmaltz
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-serif font-semibold text-slate-900">Related Pages</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <Link href="/press" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /press
            </Link>
          </li>
          <li>
            <Link href="/enoch-schmaltz" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /enoch-schmaltz
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /projects
            </Link>
          </li>
          <li>
            <Link href="/software" className="text-teal-700 underline underline-offset-4 hover:text-teal-800">
              /software
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
