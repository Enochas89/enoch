import Image from "next/image";
import { Book } from "@/lib/content/books";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

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
          {book.releaseNote && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[11px] font-semibold text-center py-1">
              {book.releaseNote}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            <span className="pill">{book.status.replace("-", " ")}</span>
            {book.releaseNote ? (
              <span>{book.releaseNote}</span>
            ) : (
              book.releaseDate && <span>{formatDate(book.releaseDate)}</span>
            )}
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
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {btn.label}
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
