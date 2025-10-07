import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint'ni build vaqtida ignore qilish (production deploy uchun)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript xatolarini ham ignore qilish
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
