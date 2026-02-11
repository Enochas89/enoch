import { getAllWriting } from "@/lib/content/writing";
import { absoluteUrl, siteMetadata } from "@/lib/seo";

export async function GET(request: Request) {
  const posts = await getAllWriting();
  const origin = new URL(request.url).origin;
  const imageUrl = `${origin}/puppetskieslogo.webp`;

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${absoluteUrl(`/writing/${post.slug}`)}</link>
      <guid>${absoluteUrl(`/writing/${post.slug}`)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${siteMetadata.penName}</title>
      <link>${siteMetadata.siteUrl}</link>
      <description>${siteMetadata.description}</description>
      <image>
        <url>${imageUrl}</url>
        <title>${siteMetadata.penName}</title>
        <link>${siteMetadata.siteUrl}</link>
      </image>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=0, stale-while-revalidate=0",
    },
  });
}
