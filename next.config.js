/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  paths: {
    "@/comp/":["components/"],
    "@/styl/":["styles/"]
  },
}

module.exports = nextConfig
