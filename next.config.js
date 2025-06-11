/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Skip ESLint errors in production
  },
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
