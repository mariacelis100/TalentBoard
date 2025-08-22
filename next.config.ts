import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removido "output: export" para permitir API Routes
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  // Configuración para API Routes
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
