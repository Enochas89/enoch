import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllWriting, getWritingBySlug } from "@/lib/content/writing";
import { articleJsonLd, absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWriting().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getAllWriting().find((item) => item.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/writing/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: absoluteUrl(`/writing/${article.slug}`),
    },
    twitter: {
      title: article.title,
      description: article.summary,
      card: "summary_large_image",
    },
  };
}

export default async function WritingArticlePage({ params }: Props) {
  const article = await getWritingBySlug(params.slug);
  if (!article) return notFound();

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="card space-y-6 p-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                articleJsonLd({
                  title: article.title,
                  summary: article.summary,
                  publishedAt: article.publishedAt,
                  updatedAt: article.updatedAt,
                  slug: article.slug,
                }),
              ),
            }}
          />
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span className="pill capitalize">{article.type}</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden>•</span>
              <span>{article.readingMinutes} min read</span>
            </div>
            <h1 className="text-3xl font-semibold text-[var(--ink)]">{article.title}</h1>
            <p className="text-[var(--muted)]">{article.summary}</p>
            {article.externalUrl && (
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] underline underline-offset-4"
              >
                Read on Substack
              </a>
            )}
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
          </div>

          <div className="prose">
            {article.mdx}
          </div>
        </article>
      </div>
    </div>
  );
}
