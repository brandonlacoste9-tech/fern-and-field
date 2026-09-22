import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Don't walk up to a parent package-lock (for example the user's home directory).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
