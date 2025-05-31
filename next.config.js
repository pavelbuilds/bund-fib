/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Add any necessary webpack configurations here
    return config;
  },
};

module.exports = nextConfig;
