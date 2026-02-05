import Image from "next/image";
import Link from "next/link";
import { Book } from "@/lib/content/books";
import { formatDate } from "@/lib/utils";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="card flex flex-col gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
        <div className="relative h-48 w-36 flex-shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--accent-soft)]">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 9rem, 12rem"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            <span className="pill">{book.status.replace("-", " ")}</span>
            {book.releaseDate && <span>{formatDate(book.releaseDate)}</span>}
          </div>
          <h3 className="text-2xl font-semibold text-[var(--ink)]">{book.title}</h3>
          {book.subtitle && (
            <p className="text-base font-medium text-[var(--muted)]">
              {book.subtitle}
            </p>
          )}
          <p className="text-[var(--muted)]">{book.description}</p>
          {book.releaseNote && (
            <p className="text-sm font-semibold text-[var(--accent)]">
              {book.releaseNote}
            </p>
          )}
          {book.formats.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {book.formats.map((format) => (
                <a
                  key={format.label}
                  href={format.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {format.label}
                </a>
              ))}
            </div>
          )}
          {book.retailers && book.retailers.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {book.retailers.map((retailer) => (
                <a
                  key={retailer.label}
                  href={retailer.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
                >
                  {retailer.label}
                </a>
              ))}
            </div>
          )}
          <Link
            href={`/books/${book.slug}`}
            className="mt-auto text-sm font-semibold text-[var(--accent)] underline underline-offset-4"
          >
            {"View details \u2192"}
          </Link>
        </div>
      </div>
    </article>
  );
}
