const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["doctoora-profs-docs.s3.amazonaws.com"],
  },
};


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig);