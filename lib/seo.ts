import { articleSchema, bookSchema } from "./schema";

export const siteMetadata = {
  name: "Enoch Schmaltz",
  penName: "Enoch Schmaltz",
  title: "Enoch Schmaltz | Author, Project Manager & Systems Architect",
  description:
    "Official site of Enoch Schmaltz, author of 'Puppet Skies' and 'The Controlled Release'. Investigating societal control mechanisms, psychological governance, and the history of stealth aircraft programs.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.enochschmaltz.com",
  locale: "en_US",
  twitterHandle: "@easchmaltz",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteMetadata.siteUrl).toString();

export const ogImage = (path = "/images/social-card.png") =>
  absoluteUrl(path);

export const defaultMetadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: [
    "societal control mechanisms",
    "psychological manipulation",
    "behavioral control theory",
    "information influence systems",
    "social engineering concepts",
    "Enoch Schmaltz author",
    "Puppet Skies by Enoch Schmaltz",
  ],
  metadataBase: new URL(siteMetadata.siteUrl),
  verification: {
    google: "-KOCdeBAmOjSAghAjAACG-TYU_C3cm1oLpiDY7wO_kU",
  },
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
  ...bookSchema({
    url: absoluteUrl(`/books/${book.slug}`),
    name: book.title,
    description: book.description,
    image: book.image,
    datePublished: book.releaseDate,
  }),
});

export type ArticleJsonLd = {
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
};

export const articleJsonLd = (article: ArticleJsonLd) => ({
  ...articleSchema({
    url: absoluteUrl(`/writing/${article.slug}`),
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
  }),
});
