/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'my-value',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
