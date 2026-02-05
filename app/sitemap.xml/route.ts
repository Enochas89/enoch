import { getAllBooks } from "@/lib/content/books";
import { getAllWriting } from "@/lib/content/writing";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  "/about",
  "/books",
  "/writing",
  "/media",
  "/contact",
  "/rss.xml",
];

export async function GET() {
  const writing = (await getAllWriting()).map((item) => `/writing/${item.slug}`);
  const books = getAllBooks().map((book) => `/books/${book.slug}`);

  const urls = [...staticPaths, ...writing, ...books]
    .map(
      (path) => `<url><loc>${absoluteUrl(path)}</loc><changefreq>weekly</changefreq></url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
