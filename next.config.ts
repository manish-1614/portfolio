import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: isProd ? '/portfolio/' : '',

  // Image configuration for static export
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Disable server-side features for static export
  trailingSlash: true,
};

export default nextConfig;
