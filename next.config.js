/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devlogspk.s3.eu-central-003.backblazeb2.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/1",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
