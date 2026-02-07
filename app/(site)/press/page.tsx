import Link from "next/link";
import type { Metadata } from "next";
import { getAllBooks } from "@/lib/content/books";

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description:
    "Press kit and media resources for author Enoch Schmaltz, including bio, books, interview topics, and contact information.",
};

export default function PressPage() {
  const books = getAllBooks();

  const controlledRelease =
    books.find((b) => b.slug === "the-controlled-release") ?? null;
  const puppetSkies = books.find((b) => b.slug === "puppet-skies") ?? null;

  return (
    <div className="bg-white">
      <section className="pt-24 pb-12 md:pt-32 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold">
            Press & Media Kit
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Press & Media Kit
          </h1>
          <p className="text-lg text-slate-600">
Author interviews, book information, and media resources.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Short Bio</h2>
          <p className="text-slate-700 leading-relaxed">
            E. A. Schmaltz is an author and analyst who writes about emerging technology, public perception, and policy. His work explores how artificial intelligence, advanced sensing systems, and national-security innovation shape public understanding and institutional trust. He writes both nonfiction and speculative fiction.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Full Bio</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
            E. A. Schmaltz is an author and analyst focused on the intersection of emerging technology, public perception, and public policy. His work examines how new technological capabilities move from research and classified environments into public awareness, and how institutions manage disclosure, risk, and trust during that transition.
            </p>
            <p>
              He writes nonfiction exploring artificial intelligence, advanced sensing systems, and the policy challenges created by rapid technological change. Alongside his nonfiction, he writes science-fiction and fantasy that explore many of the same themes through storytelling.
            </p>
            <p>
              He is a husband and father of three and credits his wife as a constant source of support and perspective behind his work.
            </p>
            <p>
              His latest book, <em>Puppet Skies</em>, examines how invisible sensing systems reshape what we see, what we know, and what we believe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">Books</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {controlledRelease && (
              <BookCard
                title="The Controlled Release: Policy Design With World-Changing Technologies (2026)"
                description="A nonfiction book exploring how governments and institutions introduce disruptive technologies to the public and why disclosure has become a major policy challenge in the age of artificial intelligence."
                learnMore={`/books/${controlledRelease.slug}`}
              />
            )}
            {puppetSkies && (
              <BookCard
                title="Puppet Skies (2026)"
                description="A nonfiction exploration of advanced sensing systems and how invisible technologies reshape public perception, trust, and understanding."
                learnMore={`/books/${puppetSkies.slug}`}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Interview Topics
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>How governments introduce world-changing technology to the public</li>
            <li>Why disclosure has become a policy problem in the AI era</li>
            <li>The gap between technological capability and public understanding</li>
            <li>Artificial intelligence, sensing technology, and trust</li>
            <li>Writing nonfiction and speculative fiction about emerging technology</li>
          </ul>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Media Assets</h2>
          <p className="text-slate-700">
            High-resolution images, author photos, and book covers available upon request.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Media Contact</h2>
          <p className="text-slate-700">Interviews and speaking requests welcome.</p>
          <a
            className="text-teal-700 font-semibold underline underline-offset-4"
            href="mailto:hello@enochschmaltz.com"
          >
            hello@enochschmaltz.com
          </a>
        </div>
      </section>
    </div>
  );
}

function BookCard({
  title,
  description,
  learnMore,
}: {
  title: string;
  description: string;
  learnMore: string;
}) {
  return (
    <article className="card p-5 space-y-3">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-700 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={learnMore}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-[var(--accent)] transition"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
