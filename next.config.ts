import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode to surface potential issues early.
  reactStrictMode: true,

  // Remove the X-Powered-By header from HTTP responses.
  poweredByHeader: false,

  // Allow remote images served from Supabase Storage.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },

  // Increase the Server Actions body limit from 1 MB to 2 MB.
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // Exclude test files from the production bundle.
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(test|spec)\.(ts|tsx|js|jsx)$/,
      loader: "ignore-loader",
    });

    return config;
  },
};

export default nextConfig;
