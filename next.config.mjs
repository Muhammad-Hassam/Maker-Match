/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com"] // Add the hostnames of your external image URLs
  }
};

export default nextConfig;
