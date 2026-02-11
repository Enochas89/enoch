import { getAllWriting } from "@/lib/content/writing";
import { absoluteUrl, siteMetadata } from "@/lib/seo";

export async function GET(request: Request) {
  const posts = await getAllWriting();

  // Prefer configured site URL for absolute references; fall back to request origin.
  const origin = siteMetadata.siteUrl || new URL(request.url).origin;
  const feedUrl = `${origin}/rss.xml`;
  const imageUrl = `${origin}/puppetskieslogo.webp`;

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.externalUrl ?? absoluteUrl(`/writing/${post.slug}`)}</link>
      <guid isPermaLink="false">${post.externalUrl ?? absoluteUrl(`/writing/${post.slug}`)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:webfeeds="http://webfeeds.org/rss/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${siteMetadata.penName}</title>
      <link>${siteMetadata.siteUrl}</link>
      <description>${siteMetadata.description}</description>
      <language>en-US</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
      <image>
        <url>${imageUrl}</url>
        <title>${siteMetadata.penName}</title>
        <link>${siteMetadata.siteUrl}</link>
        <width>1600</width>
        <height>400</height>
      </image>
      <webfeeds:logo>${imageUrl}</webfeeds:logo>
      <webfeeds:cover image="${imageUrl}" />
      <webfeeds:accentColor>0d9488</webfeeds:accentColor>
      <generator>Puppet Skies RSS • Next.js</generator>
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
