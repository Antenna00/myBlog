/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "firebasestorage.googleapis.com",
            pathname: '**',
          },
        ],
      },
};

module.exports = nextConfig;
