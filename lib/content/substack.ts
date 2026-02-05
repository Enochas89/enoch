import { XMLParser } from "fast-xml-parser";
import { cache } from "react";

export type SubstackPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  externalUrl: string;
};

const FEED_URL =
  process.env.NEXT_PUBLIC_SUBSTACK_FEED ||
  "https://publicunderstanding.substack.com/feed";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

export const getSubstackPosts = cache(async (): Promise<SubstackPost[]> => {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 60 * 15 } });
    const xml = await res.text();
    const json = parser.parse(xml);
    const items: Array<Record<string, unknown>> =
      (json?.rss?.channel?.item as Array<Record<string, unknown>>) || [];
    return items.map((item) => {
      const url = item.link as string;
      const slug = url?.split("/").filter(Boolean).pop() || url;
      return {
        slug,
        title: (item.title as string) || slug,
        summary: (item.description as string) || "",
        publishedAt: (item.pubDate as string) || new Date().toISOString(),
        externalUrl: url,
      };
    });
  } catch (err) {
    console.error("Failed to load Substack feed", err);
    return [];
  }
});
