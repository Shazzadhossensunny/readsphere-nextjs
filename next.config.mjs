/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['covers.openlibrary.org', 'ui-avatars.com', 'openlibrary.org'], // Add openlibrary.org here
  },
};

export default nextConfig;
