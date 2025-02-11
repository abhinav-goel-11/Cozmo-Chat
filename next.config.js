/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "user-avatar-profile.s3.ap-south-1.amazonaws.com",
      "d2ppsdiz7cv2p8.cloudfront.net",
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
      "api.dicebear.com",
    ],
  },
  reactStrictMode: false,
  env: {
    Google_Analytics_id: "G-R6TY5W62PJ",
    BASE_URL: "https://api.hood.live/",
  },
  swcMinify: true,
  output: "standalone",
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/feed",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// const envStag = {
//   baseUrl: "https://kube-stage.joinzorro.com/web/v1/feed/",
//   baseAltUrl: "https://kube-stage.joinzorro.com/web/v1/feed/",
//   reactStrictMode: true,
//   swcMinify: true,
// }
// const envProd = {
//   baseUrl: "https://kube.joinzorro.com/web/v1/feed/",
//   baseAltUrl: "https://kube.joinzorro.com/web/v1/feed/",
// }

// //always change this value only
// let env = envStag;
// let parentUrl = env.baseUrl;

// module.exports = {parentUrl}
