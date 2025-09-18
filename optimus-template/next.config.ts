import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  }
};

export default nextConfig;
