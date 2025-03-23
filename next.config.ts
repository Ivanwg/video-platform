import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  rewrites: async () => {
    return [
      {
        source: '/storage/:path*',
        destination: `${process.env.S3_ENDPOINT}/:path*`,
      },
    ]
  },
}

export default nextConfig
