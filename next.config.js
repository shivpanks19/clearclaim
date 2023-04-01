const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  // Ref for i18n config https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    ...i18n,
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    domains: [
      {
        domain: 'thetapacademy.com',
        defaultLocale: 'en'
      }
    ]
  },

  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)