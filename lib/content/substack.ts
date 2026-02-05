import Parser from "rss-parser";
import { cache } from "react";

type RSSItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  contentSnippet?: string;
};

export type SubstackPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  externalUrl: string;
};

const parser = new Parser<RSSItem, unknown>();
const FEED_URL =
  process.env.NEXT_PUBLIC_SUBSTACK_FEED ||
  "https://publicunderstanding.substack.com/feed";

export const getSubstackPosts = cache(async (): Promise<SubstackPost[]> => {
  try {
    const feed = await parser.parseURL(FEED_URL);
    return (feed.items || []).map((item) => {
      const url = item.link || "";
      const slug = url.split("/").filter(Boolean).pop() || url;
      return {
        slug,
        title: item.title || slug,
        summary: item.contentSnippet || "",
        publishedAt: item.isoDate || new Date().toISOString(),
        externalUrl: url,
      };
    });
  } catch (err) {
    console.error("Failed to load Substack feed", err);
    return [];
  }
});
