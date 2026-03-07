import NewsletterSection from "@/components/NewsletterSection";
import AuthorIdentityLink from "@/components/AuthorIdentityLink";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About the Author \u2014 E. A. Schmaltz",
  description:
    "About the author E. A. Schmaltz: books, writing, and technology commentary on perception and policy themes, including Puppet Skies and Controlled Release.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const aboutArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://enochschmaltz.com/about#webpage",
  name: "About the Author - E. A. Schmaltz",
  url: "https://enochschmaltz.com/about",
  headline: "About the Author — E. A. Schmaltz",
  about: {
    "@id": "https://enochschmaltz.com/#author",
  },
  publisher: {
    "@id": "https://enochschmaltz.com/#publisher",
  },
  isPartOf: {
    "@id": "https://enochschmaltz.com/#website",
  },
  description:
    "About the author E. A. Schmaltz: books, writing, and technology commentary on perception and policy themes, including Puppet Skies and Controlled Release.",
  inLanguage: "en-US",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <JsonLd data={aboutArticleJsonLd} />
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-5xl font-serif text-slate-900 mb-8">
                About the Author - E. A. Schmaltz
              </h1>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
                <p>
                  E. A. Schmaltz writes books and long-form essays at the
                  intersection of technology, perception, and policy. His work
                  examines how advanced sensing, artificial intelligence, and
                  institutional decision-making shape public trust and
                  understanding.
                </p>
                <p>
                  His writing spans nonfiction commentary and speculative
                  storytelling, with recurring themes around technological
                  disclosure, perception under uncertainty, and the policy
                  structures that govern emerging systems.
                </p>
                <p>
                  Books by E. A. Schmaltz include <em>Puppet Skies</em> and{" "}
                  <em>The Controlled Release</em>, each focused on how complex
                  technologies move into public life and how institutions
                  communicate risk, capability, and consequence.
                </p>
                <p>
                  For professional background and development work see:{" "}
                  <Link href="/enoch-schmaltz">Enoch Schmaltz</Link>.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-slate-200 shadow">
                <Image
                  src="/EnochSchmaltz.jpg"
                  alt="Enoch Schmaltz portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <AuthorIdentityLink className="text-sm text-slate-700" />
          <Link
            href="/enoch-schmaltz"
            className="text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
          >
            About Enoch Schmaltz
          </Link>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}

