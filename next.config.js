/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.vecteezy.com','fakestoreapi.com'],
  }
}

module.exports = nextConfig
