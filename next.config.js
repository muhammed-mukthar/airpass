module.exports = {
  images: {
    domains: ["files-for-tahleeq.s3.amazonaws.com"],
  },
  optimizeFonts: false,
  async redirects() {
    return [
      // { source: "/plans", destination: "/404", permanent: true },
      // { source: "/add-on", destination: "/404", permanent: true },
    ];
  },
};
