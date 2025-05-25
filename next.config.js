const nextConfig = {
  // Add this to support framer-motion with Next.js
  transpilePackages: ['framer-motion'],
  // Your other config options...
  images: {
    domains: [], // Only needed for external images
    // You might need to add this if you're having issues with local images
    unoptimized: true,
  },
};

module.exports = nextConfig;