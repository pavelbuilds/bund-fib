/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old page routes that only existed to serve a PDF. The URLs are kept
      // alive (printed flyers/QR codes may link to them) as redirects.
      {
        source: '/familien_flyer',
        destination: '/familien_flyer.pdf',
        permanent: false,
      },
      {
        source: '/satzung',
        destination: '/SatzungBund-fiB.pdf',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
