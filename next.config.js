/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHS_URL: process.env.NEXT_PUBLIC_GRAPHS_URL,
  },
};

module.exports = nextConfig;
