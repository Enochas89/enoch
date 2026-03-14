import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Biography",
  description:
    "A short professional biography of Enoch Schmaltz, writer and developer focused on project systems, leadership, and technology.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-biography`,
  },
};

const biographyPageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-biography`,
  name: "Enoch Schmaltz Biography",
  description:
    "A short professional biography of Enoch Schmaltz, writer and developer focused on project systems, leadership, and technology.",
});

export default function EnochSchmaltzBiographyPage() {
  return (
    <div className="bg-white">
      <JsonLd data={biographyPageJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz Biography
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz is a writer and developer working at the
            intersection of project systems, leadership, and technology.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His work explores how complex organizations manage execution and
            coordination.
          </p>
          <p className="text-slate-700 leading-relaxed">
            He builds tools and writes about project delivery and systems
            thinking.
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
