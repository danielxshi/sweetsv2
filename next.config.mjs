/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: "custom",
    formats: ["image/avif", "image/webp"],
    domains: [
      "square-postoffice-production.s3.amazonaws.com",
      "mir-s3-cdn-cf.behance.net",
    ],
  },
};

export default nextConfig;
