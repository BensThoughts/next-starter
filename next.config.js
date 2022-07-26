/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  // target: 'serverless',
  swcMinify: true,
  reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  // webpack: (config, {isServer}) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //     };
  //   }
  //   return config;
  // },
});

module.exports = nextConfig;
