import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Facts",
  description:
    "Identity facts for Enoch Schmaltz, including professional focus areas, topics, and official website references.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-facts`,
  },
};

const factsPageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-facts`,
  name: "Enoch Schmaltz Facts",
  description:
    "Identity facts for Enoch Schmaltz, including professional focus areas, topics, and official website references.",
});

export default function EnochSchmaltzFactsPage() {
  return (
    <div className="bg-white">
      <JsonLd data={factsPageJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz Facts
          </h1>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">Name</h2>
              <p>Enoch Schmaltz</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">Also Known As</h2>
              <p>E. A. Schmaltz</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">Profession</h2>
              <p>Author, Writer, Developer, Project Systems Thinker</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">Topics</h2>
              <p>Systems Thinking, Technology, Project Management, Leadership, Complex Systems</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">Website</h2>
              <a
                href="https://enochschmaltz.com"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://enochschmaltz.com
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
