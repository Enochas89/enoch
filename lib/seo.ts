import { articleSchema, bookSchema } from "./schema";
import type { Metadata } from "next";

export const siteMetadata = {
  name: "Enoch Schmaltz",
  penName: "Enoch Schmaltz",
  title: "Enoch Schmaltz | Author, Project Manager & Systems Architect",
  description:
    "Official website of Enoch Schmaltz: PMP Certified project management professional, Senior Estimator, software developer, SaaS founder, and author.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.enochschmaltz.com",
  locale: "en_US",
  twitterHandle: "@easchmaltz",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteMetadata.siteUrl).toString();

export const ogImage = (path = "/EnochSchmaltz.jpg") => absoluteUrl(path);

export const defaultMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: [
    "Enoch Schmaltz",
    "E. A. Schmaltz",
    "Enoch Schmaltz author",
    "Enoch Schmaltz project manager",
    "Enoch Schmaltz developer",
    "PMP Certified project manager",
    "Senior Estimator",
    "SaaS Founder",
    "NovelCraft Pro",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    images: [
      {
        url: ogImage(),
        width: 1536,
        height: 2048,
        alt: "Enoch Schmaltz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    images: [ogImage()],
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
