import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/rss.xml",
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
