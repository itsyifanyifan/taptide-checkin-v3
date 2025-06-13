/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'standalone',
  // Configure images if needed
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig; 