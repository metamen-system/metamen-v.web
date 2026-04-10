// Validate environment variables at startup

import './src/lib/env';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode to surface potential issues early.
  reactStrictMode: true,

  // Remove the X-Powered-By header from HTTP responses.
  poweredByHeader: false,

  // Allow remote images served from Supabase Storage.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },

  // Increase the Server Actions body limit from 1 MB to 2 MB.
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Exclude test files from the production bundle.
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(test|spec)\.(ts|tsx|js|jsx)$/,
      loader: 'ignore-loader',
    });

    return config;
  },

  // Security headers applied to all routes (M01-076).
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://*.supabase.co https://*.stripe.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com https://api.posthog.com https://*.sentry.io https://*.inngest.com; frame-src https://js.stripe.com https://hooks.stripe.com https://challenges.cloudflare.com; worker-src 'self' blob:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
