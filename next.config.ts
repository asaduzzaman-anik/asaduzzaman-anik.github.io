import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Prevent Next from treating the parent "Web Developments" folder as the monorepo root
  // because of a stray package-lock.json one level up.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
