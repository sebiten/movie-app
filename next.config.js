// next.config.js

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['m.media-amazon.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig;
