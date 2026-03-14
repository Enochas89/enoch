import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who is Enoch Schmaltz?",
  description:
    "Learn who Enoch Schmaltz is: a writer, developer, and project management professional focused on systems, leadership, and technology.",
  alternates: {
    canonical: `${SITE_URL}/who-is-enoch-schmaltz`,
  },
};

const whoIsPageJsonLd = pageSchema({
  url: `${SITE_URL}/who-is-enoch-schmaltz`,
  name: "Who is Enoch Schmaltz?",
  description:
    "Learn who Enoch Schmaltz is: a writer, developer, and project management professional focused on systems, leadership, and technology.",
});

export default function WhoIsEnochSchmaltzPage() {
  return (
    <div className="bg-white">
      <JsonLd data={whoIsPageJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Who is Enoch Schmaltz?
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz is a writer, developer, and project management
            professional focused on systems that help organizations deliver
            complex projects.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His background includes construction project management, with an
            ongoing focus on systems thinking, leadership, and technology.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His writing appears on platforms such as Medium and Substack.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Main identity page:{" "}
            <Link
              href="/enoch-schmaltz"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              /enoch-schmaltz
            </Link>
          </p>
        </div>
      </section>

      <section className="py-10 border-t border-slate-100">
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
