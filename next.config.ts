import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // TODO: Remove `unoptimized: true` when deploying to a platform with image optimization (e.g. Vercel)
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache in dev to avoid rename conflicts on OneDrive
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
