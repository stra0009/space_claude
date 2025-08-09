/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  }
}

module.exports = nextConfig