/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://pashakhomchenko.notion.site/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
