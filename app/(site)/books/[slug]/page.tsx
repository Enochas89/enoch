import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllBooks, getBookBySlug } from "@/lib/content/books";
import { bookJsonLd, absoluteUrl, siteMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const book = getBookBySlug(params.slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [absoluteUrl(book.coverImage)],
    },
    twitter: {
      title: book.title,
      description: book.description,
      images: [absoluteUrl(book.coverImage)],
      card: "summary_large_image",
    },
  };
}

export default function BookDetailPage({ params }: Props) {
  const book = getBookBySlug(params.slug);
  if (!book) return notFound();

  const jsonLd = bookJsonLd({
    title: book.title,
    description: book.description,
    image: absoluteUrl(book.coverImage),
    releaseDate: book.releaseDate,
    slug: book.slug,
  });

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative w-full max-w-sm aspect-[2/3] shadow-2xl border border-slate-200 overflow-hidden bg-slate-100 mx-auto lg:mx-0">
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 18rem, 22rem"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {siteMetadata.penName}
              </p>
              <h1 className="text-5xl font-serif text-slate-900">{book.title}</h1>
              {book.subtitle && (
                <p className="text-lg font-medium text-slate-600">{book.subtitle}</p>
              )}
              <p className="text-slate-600 leading-relaxed">{book.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                {book.releaseDate && <span>Release: {formatDate(book.releaseDate)}</span>}
                <span className="rounded-full bg-slate-100 px-3 py-1 uppercase tracking-widest text-[10px]">
                  {book.status}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {book.formats.map((format) => (
                  <a
                    key={format.label}
                    href={format.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-wider py-3 border border-slate-200 hover:border-slate-900 transition-all text-slate-600 text-center"
                  >
                    {format.label}
                  </a>
                ))}
              </div>
              {book.retailers && book.retailers.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Retailers</p>
                  <div className="flex flex-wrap gap-2">
                    {book.retailers.map((retailer) => (
                      <a
                        key={retailer.label}
                        href={retailer.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-800 hover:border-teal-600"
                      >
                        {retailer.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
