import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // When multiple lockfiles exist on the machine, pin Turbopack to this app directory.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
