/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for development
  // output: 'standalone',
  
  // Configure images
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 