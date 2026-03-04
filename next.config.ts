import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? 'export' : undefined,
  basePath: '/ManishPrajapati',
  assetPrefix: '/ManishPrajapati/',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
