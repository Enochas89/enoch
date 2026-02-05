import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import { renderMdx } from "./mdx";
import { getSubstackPosts } from "./substack";

export type WritingType = "essay" | "explainer" | "commentary" | "newsletter";

export type WritingMeta = {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
  type: WritingType;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  excerpt: string;
  body: string;
  year: number;
  externalUrl?: string;
};

export type WritingWithContent = WritingMeta & {
  mdx: React.ReactElement | null;
};

const writingDir = path.join(process.cwd(), "content", "writing");

const listWriting = cache((): WritingMeta[] => {
  if (!fs.existsSync(writingDir)) return [];

  const files = fs
    .readdirSync(writingDir)
    .filter((file) => file.endsWith(".mdx"))
    .sort()
    .reverse();

  return files.map((fileName) => {
    const fullPath = path.join(writingDir, fileName);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content, excerpt } = matter(raw, {
      excerpt_separator: "<!-- more -->",
    });

    const slug = fileName
      .replace(/\.mdx$/, "")
      .replace(/^\d{4}-\d{2}-\d{2}-/, "");
    const inferredDate = fileName.slice(0, 10);

    const publishedAt =
      (data.date as string) ||
      (data.publishedAt as string) ||
      inferredDate ||
      new Date().toISOString();

    const topics = Array.isArray(data.topics)
      ? (data.topics as string[])
      : data.topics
        ? String(data.topics).split(",").map((t) => t.trim())
        : [];

    const summary =
      (data.summary as string) ||
      excerpt ||
      content.substring(0, 220).concat("…");

    const readingStats = readingTime(content);

    return {
      slug,
      title: (data.title as string) || slug,
      summary,
      topics,
      type: (data.type as WritingType) || "essay",
      publishedAt,
      updatedAt: data.updatedAt as string | undefined,
      externalUrl: data.externalUrl as string | undefined,
      readingMinutes: Math.max(1, Math.round(readingStats.minutes)),
      excerpt: excerpt || summary,
      body: content,
      year: new Date(publishedAt).getFullYear(),
    };
  });
});

export const getAllWriting = async () => {
  const [local, substack] = await Promise.all([
    Promise.resolve(listWriting()),
    getSubstackPosts(),
  ]);

  const substackMapped: WritingMeta[] = substack.map((item) => ({
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    topics: [],
    type: "essay",
    publishedAt: item.publishedAt,
    readingMinutes: 4,
    excerpt: item.summary,
    body: "",
    year: new Date(item.publishedAt).getFullYear(),
    externalUrl: item.externalUrl,
  }));

  return [...substackMapped, ...local].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};

export const getWritingBySlug = async (
  slug: string,
): Promise<WritingWithContent | null> => {
  const all = await getAllWriting();
  const entry = all.find((item) => item.slug === slug);
  if (!entry) return null;
  if (entry.externalUrl) return { ...entry, mdx: null };
  const mdx = await renderMdx(entry.body);
  return { ...entry, mdx };
};

export const getWritingTopics = () => {
  const topics = new Set<string>();
  listWriting().forEach((item) => item.topics.forEach((topic) => topics.add(topic)));
  return Array.from(topics).sort();
};
