export const siteMetadata = {
  name: "Enoch Schmaltz",
  penName: "E.A. Schmaltz",
  title: "E.A. Schmaltz",
  description:
    "Author and analyst examining power, technology, and the cultural weather. Essays, books, and media by E.A. Schmaltz.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://easchmaltz.com",
  locale: "en_US",
  twitterHandle: "@easchmaltz",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteMetadata.siteUrl).toString();

export const ogImage = (path = "/images/social-card.png") =>
  absoluteUrl(path);

export const defaultMetadata = {
  title: {
    default: `${siteMetadata.penName} | Author`,
    template: `%s | ${siteMetadata.penName}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    siteName: siteMetadata.penName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
  },
};

export type BookJsonLd = {
  title: string;
  description: string;
  image: string;
  releaseDate: string;
  slug: string;
};

export const bookJsonLd = (book: BookJsonLd) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  description: book.description,
  image: book.image,
  datePublished: book.releaseDate,
  author: {
    "@type": "Person",
    name: siteMetadata.name,
  },
  url: absoluteUrl(`/books/${book.slug}`),
});

export type ArticleJsonLd = {
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
};

export const articleJsonLd = (article: ArticleJsonLd) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.summary,
  datePublished: article.publishedAt,
  dateModified: article.updatedAt || article.publishedAt,
  author: {
    "@type": "Person",
    name: siteMetadata.name,
  },
  url: absoluteUrl(`/writing/${article.slug}`),
  mainEntityOfPage: absoluteUrl(`/writing/${article.slug}`),
});
