import Image from "next/image";
import { Book } from "@/lib/content/books";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  const retailers = book.retailers?.length ? book.retailers : book.formats;
  const primaryRetailer =
    retailers.find((r) => r.label.toLowerCase() === "amazon") || retailers[0];

  return (
    <article className="card flex flex-col gap-5 overflow-hidden">
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start">
        <div className="relative h-48 w-36 flex-shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--accent-soft)] shadow-md">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 9rem, 12rem"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)] font-semibold">
            <span className="pill">{book.status.replace("-", " ")}</span>
            {book.releaseNote && (
              <span className="text-[var(--accent)]">{book.releaseNote}</span>
            )}
            {!book.releaseNote && book.releaseDate && (
              <span className="text-[var(--muted)]">{formatDate(book.releaseDate)}</span>
            )}
          </div>
          <h3 className="text-2xl font-semibold text-[var(--ink)]">{book.title}</h3>
          {book.subtitle && (
            <p className="text-base font-medium text-[var(--muted)]">
              {book.subtitle}
            </p>
          )}
          <p className="text-[var(--muted)]">{book.description}</p>
          <div className="mt-auto flex flex-wrap gap-3">
            {primaryRetailer?.url && (
              <a
                href={primaryRetailer.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                Buy on {primaryRetailer.label}
                <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
            <Link
              href={`/books/${book.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              View details
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
