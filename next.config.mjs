/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/pwr-rt/*',
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'storage.googleapis.com',
//         pathname: '/pwr-rt/*',
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       // Basic redirect
//       {
//         source: '/team',
//         destination: '/team/RT13e',
//         permanent: true,
//       },
//     ]
//   },
// };

// export default nextConfig;