/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: process.env.NODE_ENV !== 'development'
    ? ["(?<!(drafts).*)tsx?"]
    : ["ts", "tsx"],
}

module.exports = nextConfig
