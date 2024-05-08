/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/weather?place=new york",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
