/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    startUrl: "/",
  }),
};

module.exports = nextConfig;
