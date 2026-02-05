import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/writing/why-the-u-2-created-half-of-americas-ufo-sightings",
        destination:
          "https://enochschmaltz89.substack.com/p/why-the-u-2-created-half-of-americas",
        permanent: false,
      },
      {
        source: "/writing/the-a-12-and-the-ufo-mirage",
        destination:
          "https://enochschmaltz89.substack.com/p/the-a-12-and-the-ufo-mirage",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
