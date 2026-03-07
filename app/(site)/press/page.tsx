import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Mentions, platforms, appearances, and project references for Enoch Schmaltz.",
  alternates: {
    canonical: `${SITE_URL}/press`,
  },
};

const pressPageJsonLd = pageSchema({
  url: `${SITE_URL}/press`,
  name: "Press | E. A. Schmaltz",
  description:
    "Mentions, platforms, appearances, and project references for Enoch Schmaltz.",
});

const internalLinks = [
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/enoch-schmaltz", label: "Author Profile" },
];

const externalLinks = [
  { href: "https://github.com/Enochas89", label: "GitHub" },
  { href: "https://www.linkedin.com/in/enochschmaltz", label: "LinkedIn" },
  { href: "https://substack.com/@enochschmaltz", label: "Substack" },
];

export default function PressPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <JsonLd data={pressPageJsonLd} />
      <h1 className="text-4xl font-serif font-semibold text-slate-900">Press</h1>
      <p className="mt-4 text-slate-700">
        A concise hub for mentions, platforms, appearances, and project references.
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Internal</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          {internalLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Profiles</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          {externalLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-teal-700 underline underline-offset-4 hover:text-teal-800"
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
