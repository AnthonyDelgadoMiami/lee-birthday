import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- This is the key line
  // Optional: Add this if you use the Next.js Image component
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
