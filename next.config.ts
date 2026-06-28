import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // 🌟 เพิ่มส่วนนี้เพื่อรองรับรูปจาก Pexels
      },
    ],
  },
};

export default nextConfig;