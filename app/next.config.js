/** @type {import('next').NextConfig} */
const nextConfig = {
  // CONFIGURATION REQUIRED FOR EXTERNAL IMAGES
  images: {
    // IMPORTANT: REPLACE 'placehold.co' with the actual domain of your image host
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrends.nz%2Fproduct%2Fsilicone-wrist-band-embossed&psig=AOvVaw0jZDr5m0ro6Up-V-L4v7bS&ust=1759416205654000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiF_6Keg5ADFQAAAAAdAAAAABAE', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;