import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/:path+/",
        has: [{ type: "host", value: "enochschmaltz.com" }],
        destination: "https://www.enochschmaltz.com/:path+",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "enochschmaltz.com" }],
        destination: "https://www.enochschmaltz.com/:path*",
        permanent: true,
      },
      {
        source: "/who-is-enoch-schmaltz",
        destination: "/enoch-schmaltz",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-profile",
        destination: "/enoch-schmaltz",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-biography",
        destination: "/enoch-schmaltz",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-facts",
        destination: "/enoch-schmaltz",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-author",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-writing",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-books-and-research",
        destination: "/books",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-projects",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-software-projects",
        destination: "/software",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-developer",
        destination: "/software",
        permanent: true,
      },
      {
        source: "/enoch-schmaltz-links",
        destination: "/enoch-schmaltz-online",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
