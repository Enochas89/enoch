import { siteMetadata } from "@/lib/seo";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteMetadata.siteUrl}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
