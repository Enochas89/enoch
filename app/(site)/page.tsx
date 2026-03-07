import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import { getAllBooks } from "@/lib/content/books";
import SubstackFeed from "@/components/SubstackFeed";
import AuthorIdentityLink from "@/components/AuthorIdentityLink";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "E. A. Schmaltz — Author, Systems Thinker, and Technology Writer",
  },
  description:
    "E. A. Schmaltz writes about technology, perception, AI, sensing systems, and complex public policy.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const homePageJsonLd = pageSchema({
  url: SITE_URL,
  name: "E. A. Schmaltz",
  description:
    "E. A. Schmaltz writes about technology, perception, AI, sensing systems, and complex public policy.",
});

export default async function HomePage() {
  const writing = await getAllWriting();
  const feed = writing.slice(0, 12);
  const books = getAllBooks();

  return (
    <div className="bg-white">
      <JsonLd data={homePageJsonLd} />
      <Hero />
      <section className="py-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
          <AuthorIdentityLink className="text-sm text-slate-700" />
          <Link
            href="/enoch-schmaltz"
            className="text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
          >
            Learn more about Enoch Schmaltz
          </Link>
        </div>
      </section>
      {books.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Books</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {books.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}
      <SubstackFeed posts={feed} />
      <NewsletterSection />
    </div>
  );
}
