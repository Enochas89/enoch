import Image from "next/image";
import Link from "next/link";
import { getAllBooks } from "@/lib/content/books";
import AuthorIdentityLink from "@/components/AuthorIdentityLink";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by E.A. Schmaltz",
  alternates: {
    canonical: "/books",
  },
};

const booksArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Books — E. A. Schmaltz",
  author: {
    "@type": "Person",
    name: "E. A. Schmaltz",
    "@id": "https://enochschmaltz.com/#author",
  },
  publisher: {
    "@type": "Organization",
    name: "E. A. Schmaltz",
    url: "https://enochschmaltz.com",
  },
  mainEntityOfPage: "https://enochschmaltz.com/books",
  inLanguage: "en-US",
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <div className="bg-white">
      <JsonLd data={booksArticleJsonLd} />
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-serif text-slate-900 mb-6">Puppet Skies</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              The disconnect between what advanced sensors see and what our institutions are able to reveal.
              A critical exploration of high-altitude surveillance and automated algorithmic perception.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {books.map((book) => (
              <div
                key={book.slug}
                className="bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition grid gap-8 md:grid-cols-[auto,1fr] items-start"
              >
                <div className="relative w-48 h-72 md:w-56 md:h-84 shadow-lg border border-slate-200 overflow-hidden bg-slate-100">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 14rem, 16rem"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-serif text-slate-900">{book.title}</h2>
                  {book.subtitle && (
                    <p className="text-slate-500 font-medium">{book.subtitle}</p>
                  )}
                  <p className="text-slate-600 leading-relaxed">{book.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(book.retailers?.length ? book.retailers : book.formats).map(
                      (retailer) => (
                        <Link
                          key={retailer.label}
                          href={retailer.url || "#"}
                          className="text-xs font-bold uppercase tracking-wider py-3 border border-slate-200 hover:border-slate-900 transition-all text-slate-600 text-center"
                        >
                          {retailer.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-2">
            <AuthorIdentityLink className="text-sm text-slate-700" />
            <Link
              href="/enoch-schmaltz"
              className="text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              Learn more about Enoch Schmaltz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
