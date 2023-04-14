
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)