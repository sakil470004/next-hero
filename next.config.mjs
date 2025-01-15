/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/post',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
