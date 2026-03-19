import Image from "next/image";
import Link from "next/link";
import { getAllBooks } from "@/lib/content/books";
import AuthorIdentityLink from "@/components/AuthorIdentityLink";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import { breadcrumbListSchema, collectionPageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by E.A. Schmaltz",
  alternates: {
    canonical: `${SITE_URL}/books`,
  },
};

const booksCollectionJsonLd = collectionPageSchema({
  url: `${SITE_URL}/books`,
  name: "Books | E. A. Schmaltz",
  description: "Books by E.A. Schmaltz",
  author: {
    "@type": "Person",
    name: "Enoch Schmaltz",
    url: SITE_URL,
  },
});

const booksBreadcrumbJsonLd = breadcrumbListSchema(
  [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Books", item: `${SITE_URL}/books` },
  ],
  `${SITE_URL}/books#breadcrumb`,
);

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <div className="bg-white">
      <JsonLd data={booksCollectionJsonLd} />
      <JsonLd data={booksBreadcrumbJsonLd} />
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-serif text-slate-900 mb-6">Books by Enoch Schmaltz</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore{" "}
              <Link
                href="/books/puppet-skies"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                Puppet Skies
              </Link>{" "}
              and{" "}
              <Link
                href="/books/the-controlled-release"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                The Controlled Release
              </Link>
              , alongside related long-form investigations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {books.map((book) => {
              const retailers = book.retailers?.length ? book.retailers : book.formats;
              const amazonRetailer = retailers.find(
                (retailer) => retailer.label.toLowerCase() === "amazon",
              );

              return (
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
                    <h2 className="text-3xl font-serif text-slate-900">
                      <Link
                        href={`/books/${book.slug}`}
                        className="hover:text-teal-700 underline underline-offset-4"
                      >
                        {book.title}
                      </Link>
                    </h2>
                    {book.subtitle && (
                      <p className="text-slate-500 font-medium">{book.subtitle}</p>
                    )}
                    <p className="text-slate-600 leading-relaxed">{book.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {amazonRetailer?.url && (
                        <a
                          href={amazonRetailer.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center bg-teal-700 text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-teal-800 transition-colors"
                        >
                          Buy on Amazon
                        </a>
                      )}
                      <Link
                        href={`/books/${book.slug}`}
                        className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:border-slate-900 transition-colors"
                      >
                        View Book Page
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {retailers.map((retailer) => (
                        <a
                          key={retailer.label}
                          href={retailer.url || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold uppercase tracking-wider py-3 border border-slate-200 hover:border-slate-900 transition-all text-slate-600 text-center"
                        >
                          {retailer.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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

