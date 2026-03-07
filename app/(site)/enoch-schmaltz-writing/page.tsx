import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListSchema, collectionPageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Writing by Enoch Schmaltz",
  description:
    "Writing by Enoch Schmaltz on project systems, leadership, technology, and complex execution environments.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-writing`,
  },
};

const enochWritingCollectionJsonLd = collectionPageSchema({
  url: `${SITE_URL}/enoch-schmaltz-writing`,
  name: "Writing by Enoch Schmaltz",
  description:
    "Writing by Enoch Schmaltz on project systems, leadership, technology, and complex execution environments.",
});

const enochWritingBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Enoch Schmaltz", item: `${SITE_URL}/enoch-schmaltz` },
    { name: "Writing", item: `${SITE_URL}/enoch-schmaltz-writing` },
  ],
  `${SITE_URL}/enoch-schmaltz-writing#breadcrumb`,
);

export default function EnochSchmaltzWritingPage() {
  return (
    <div className="bg-white">
      <JsonLd data={enochWritingCollectionJsonLd} />
      <JsonLd data={enochWritingBreadcrumbJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Writing by Enoch Schmaltz
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Enoch Schmaltz writes about project systems, leadership,
            technology, and complex execution environments.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Writing appears on{" "}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Medium
            </a>{" "}
            and{" "}
            <a
              href="https://enochschmaltz89.substack.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Substack
            </a>
            .
          </p>
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

      <section className="py-10 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <h2 className="text-2xl font-serif font-semibold text-slate-900">
            Connect
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a
                href="https://enochschmaltz.com"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://enochschmaltz.com
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

