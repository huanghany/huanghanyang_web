import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['172.20.10.8', '192.168.85.1'],
};

export default nextConfig;
