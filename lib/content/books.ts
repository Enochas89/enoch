import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export type BookFormat = {
  label: string;
  url?: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  releaseDate: string;
  status: "available" | "coming-soon";
  releaseNote?: string;
  formats: BookFormat[];
  retailers?: BookFormat[];
  coverImage: string;
};

const booksDir = path.join(process.cwd(), "content", "books");

const listBooks = cache((): Book[] => {
  if (!fs.existsSync(booksDir)) return [];

  return fs
    .readdirSync(booksDir)
    .filter((file) => file.endsWith(".json") || file.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(booksDir, fileName);
      const raw = fs.readFileSync(fullPath, "utf8");
      const data = JSON.parse(raw) as Partial<Book>;
      const slug = fileName.replace(/\.(json|md)$/, "");

      return {
        slug,
        title: data.title || slug,
        subtitle: data.subtitle,
        description: data.description || "",
        releaseDate: data.releaseDate || "",
        status: (data.status as Book["status"]) || "coming-soon",
        releaseNote: data.releaseNote as string | undefined,
        formats: data.formats || [],
        retailers: data.retailers || data.formats || [],
        coverImage:
          data.coverImage || `/images/books/${slug}/cover.jpg`,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    );
});

export const getAllBooks = () => listBooks();

export const getBookBySlug = (slug: string) =>
  listBooks().find((book) => book.slug === slug) || null;
