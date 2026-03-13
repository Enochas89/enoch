import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.enochschmaltz.com" }],
        destination: "https://enochschmaltz.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
