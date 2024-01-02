/** @type {import('next').NextConfig} */
const nextConfig = {  

    reactStrictMode: true,
    images: {
      

        remotePatterns: [
          {
            protocol: 'https',
            hostname: "firebasestorage.googleapis.com",
            pathname: '**',
          },
          {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
        ],
      },
};

module.exports = nextConfig;

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
  reactStrictMode: true,
  images: {
    

      remotePatterns: [
        {
          protocol: 'https',
          hostname: "firebasestorage.googleapis.com",
          pathname: '**',
        },
        {
      protocol: "https",
      hostname: "*.googleusercontent.com",
      port: "",
      pathname: "**",
    },
      ],
    },
});