import { siteMetadata } from "@/lib/seo";

export function GET() {
  const body = `User-agent: *
Allow: /
Allow: /about
Allow: /enoch-schmaltz
Allow: /enoch-schmaltz-writing
Allow: /enoch-schmaltz-projects
Allow: /enoch-schmaltz-links
Allow: /who-is-enoch-schmaltz
Allow: /enoch-schmaltz-biography
Allow: /writing
Allow: /projects

Sitemap: ${siteMetadata.siteUrl}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
