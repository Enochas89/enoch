import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  "/enoch-schmaltz",
  "/about",
  "/enoch-schmaltz-author",
  "/enoch-schmaltz-developer",
  "/who-is-enoch-schmaltz",
  "/enoch-schmaltz-biography",
  "/enoch-schmaltz-writing",
  "/enoch-schmaltz-projects",
  "/enoch-schmaltz-links",
  "/writing",
  "/projects",
  "/software",
  "/contact",
  "/rss.xml",
  "/press",
];

export async function GET() {
  const urls = staticPaths
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
