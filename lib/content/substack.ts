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
  "https://enochschmaltz89.substack.com/feed";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

const fallbackPosts: SubstackPost[] = [
  {
    slug: "why-the-u-2-created-half-of-americas-ufo-sightings",
    title: "Why the U-2 Created Half of America’s UFO Sightings",
    summary: "How secrecy around a spy plane turned into the first modern wave of UFO reports.",
    publishedAt: "2026-02-04",
    externalUrl:
      "https://enochschmaltz89.substack.com/p/why-the-u-2-created-half-of-americas",
  },
  {
    slug: "the-a-12-and-the-ufo-mirage",
    title: "The A-12 and the UFO Mirage",
    summary: "How a faster, higher spy plane repeated the U-2 playbook — and why secrecy kept turning stealth into sightings.",
    publishedAt: "2026-02-04",
    externalUrl:
      "https://enochschmaltz89.substack.com/p/the-a-12-and-the-ufo-mirage",
  },
];

export const getSubstackPosts = cache(async (): Promise<SubstackPost[]> => {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 60 * 15 } });
    const xml = await res.text();
    const json = parser.parse(xml);
    const rawItems = (json?.rss?.channel?.item ?? []) as
      | Array<Record<string, unknown>>
      | Record<string, unknown>;
    const items: Array<Record<string, unknown>> = Array.isArray(rawItems)
      ? rawItems
      : rawItems
        ? [rawItems]
        : [];
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
    if (items.length === 0) return fallbackPosts;
    return items;
  } catch (err) {
    console.error("Failed to load Substack feed", err);
    return fallbackPosts;
  }
});
