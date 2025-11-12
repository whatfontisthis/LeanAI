/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // basePath removed for Vercel deployment
  trailingSlash: true,
};

export default nextConfig;

