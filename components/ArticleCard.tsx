import { WritingMeta } from "@/lib/content/writing";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function ArticleCard({ article }: { article: WritingMeta }) {
  const cardClass =
    "card flex flex-col gap-3 p-5 transition hover:-translate-y-1 hover:shadow-lg";

  const body = (
    <>
      <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
        <span className="pill capitalize">{article.type}</span>
        <span>{formatDate(article.publishedAt)}</span>
        <span aria-hidden>•</span>
        <span>{article.readingMinutes} min read</span>
      </div>
      <h3 className="text-xl font-semibold text-[var(--ink)]">{article.title}</h3>
      <p className="text-[var(--muted)]">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-wide text-[var(--muted)]"
          >
            {topic}
          </span>
        ))}
      </div>
    </>
  );

  if (article.externalUrl) {
    return (
      <a
        href={article.externalUrl}
        target="_blank"
        rel="noreferrer"
        className={cardClass}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={`/writing/${article.slug}`} className={cardClass}>
      {body}
    </Link>
  );
}
