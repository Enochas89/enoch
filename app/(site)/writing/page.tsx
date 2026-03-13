import React from "react";
import Link from "next/link";
import { FileText, Lightbulb, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import Filters from "@/components/Filters";
import JsonLd from "@/components/JsonLd";
import { getAllWriting } from "@/lib/content/writing";
import { unique } from "@/lib/utils";
import { breadcrumbListSchema, collectionPageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Writing - Enoch Schmaltz",
  description: "Essays, explainers, and commentary from E.A. Schmaltz.",
  alternates: {
    canonical: `${SITE_URL}/writing`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/writing`,
    title: "Writing - Enoch Schmaltz",
    description: "Essays, explainers, and commentary from E.A. Schmaltz.",
  },
};

const writingCollectionJsonLd = collectionPageSchema({
  url: `${SITE_URL}/writing`,
  name: "Writing | E. A. Schmaltz",
  description: "Essays, explainers, and commentary from E.A. Schmaltz.",
});

const writingBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Writing", item: `${SITE_URL}/writing` },
  ],
  `${SITE_URL}/writing#breadcrumb`,
);

export default async function WritingPage() {
  const writing = await getAllWriting();
  const topics = unique(writing.flatMap((item) => item.topics));
  const years = unique(writing.map((item) => item.year)).sort((a, b) => b - a);

  return (
    <div className="bg-white">
      <JsonLd data={writingCollectionJsonLd} />
      <JsonLd data={writingBreadcrumbJsonLd} />
      <section className="pt-32 pb-12 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-serif text-slate-900 mb-6">Writing & Essays</h1>
            <p className="text-xl text-slate-600 leading-relaxed border-l-2 border-teal-600 pl-6">
              Essays, explainers, and commentary on technology, perception, AI, and public understanding.
            </p>
          </div>

          <Filters items={writing} topics={topics} years={years} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 my-16">
            <div className="lg:col-span-2 space-y-10">
              <SectionHeader icon={<FileText className="w-5 h-5 text-teal-600" />} label="Featured Essays" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {writing.slice(0, 4).map((essay) => (
                  <Link key={essay.slug} href={`/writing/${essay.slug}`} className="group block">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {essay.title}
                    </h3>
                    <p className="text-slate-500 mb-3">{essay.summary}</p>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      Read Essay
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <SectionHeader icon={<Lightbulb className="w-5 h-5 text-teal-600" />} label="Explainers" />
              <div className="space-y-4">
                {writing
                  .filter((item) => item.type === "explainer")
                  .slice(0, 4)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/writing/${item.slug}`}
                      className="block border-b border-slate-100 pb-4"
                    >
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </Link>
                  ))}
              </div>

              <SectionHeader icon={<MessageSquare className="w-5 h-5 text-teal-600" />} label="Commentary" />
              <div className="space-y-6">
                {writing
                  .filter((item) => item.type === "commentary" || item.type === "newsletter")
                  .slice(0, 3)
                  .map((note) => (
                    <Link key={note.slug} href={`/writing/${note.slug}`} className="block">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{note.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed italic">{note.summary}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center mb-4">
      <span className="mr-3">{icon}</span>
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </h2>
      <div className="ml-4 flex-grow h-px bg-slate-100"></div>
    </div>
  );
}
