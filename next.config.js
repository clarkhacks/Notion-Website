// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      's3.us-west-2.amazonaws.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      {
        source: '/3b962ef70129491d9fe837e68b1e1173',
        destination: '/a4190a304b92402fa1618be35593b3fd',
        permanent: false
      }
    ]
  }
})