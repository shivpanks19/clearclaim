const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  paths: {
    "@/comp/": ["components/"],
    "@/styl/": ["styles/"]
  },
  poweredByHeader: false,

  // Ref for i18n config https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    ...i18n,
    domains: [
      {
        domain: 'hexanovate.in',
        defaultLocale: 'en'
      }
    ]
  },

  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig
