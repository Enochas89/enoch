import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getAllWriting, getWritingBySlug } from "@/lib/content/writing";
import { articleJsonLd, absoluteUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { breadcrumbListSchema, SITE_URL } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const writing = await getAllWriting();
  return writing.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getAllWriting()).find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `${SITE_URL}/writing/${article.slug}`,
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
  const { slug } = await params;
  const article = await getWritingBySlug(slug);
  if (!article) return notFound();

  const articleUrl = `${SITE_URL}/writing/${article.slug}`;

  const articleSchemaJsonLd = articleJsonLd({
    title: article.title,
    summary: article.summary,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    slug: article.slug,
  });

  const articleBreadcrumbJsonLd = breadcrumbListSchema(
    [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Writing", item: `${SITE_URL}/writing` },
      { name: article.title, item: articleUrl },
    ],
    `${articleUrl}#breadcrumb`,
  );

  return (
    <div className="bg-white">
      <JsonLd data={articleSchemaJsonLd} />
      <JsonLd data={articleBreadcrumbJsonLd} />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="card space-y-6 p-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span className="pill capitalize">{article.type}</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span aria-hidden>*</span>
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
                Also published on Substack
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
