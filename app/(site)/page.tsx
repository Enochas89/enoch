import type { Metadata } from "next";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import SubstackFeed from "@/components/SubstackFeed";
import AuthorIdentityLink from "@/components/AuthorIdentityLink";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";
import PublicationsSection from "@/components/PublicationsSection";
import ResearchArchive from "@/components/ResearchArchive";
import ProjectGovernanceSection from "@/components/ProjectGovernanceSection";

export const metadata: Metadata = {
  title: {
    absolute: "Enoch Schmaltz | Author, Project Manager & Systems Architect",
  },
  description:
    "Official website of Enoch Schmaltz: PMP Certified project management professional, Senior Estimator, software developer, SaaS founder, and author.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const homePageJsonLd = pageSchema({
  url: SITE_URL,
  name: "Enoch Schmaltz | Author, Project Manager & Systems Architect",
  description:
    "Official website of Enoch Schmaltz: PMP Certified project management professional, Senior Estimator, software developer, SaaS founder, and author.",
});

export default async function HomePage() {
  const writing = await getAllWriting();
  const feed = writing.slice(0, 12);

  return (
    <div className="bg-white">
      <JsonLd data={homePageJsonLd} />
      <Hero />
      <section className="py-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
          <AuthorIdentityLink className="text-sm text-slate-700" />
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/enoch-schmaltz"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Learn more about Enoch Schmaltz
            </Link>
            <Link
              href="/enoch-schmaltz-credentials"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Credentials
            </Link>
            <Link
              href="/software"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Software Projects
            </Link>
            <Link
              href="/books"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Books and Research
            </Link>
          </div>
        </div>
      </section>
      <ProjectGovernanceSection />
      <PublicationsSection />
      <ResearchArchive />
      <SubstackFeed posts={feed} />
      <NewsletterSection />
    </div>
  );
}

