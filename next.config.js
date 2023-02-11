const nextBuildId = require("next-build-id");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.ts", "page.tsx"],
  productionBrowserSourceMaps: process.env.ENVIRONMENT === "development",
  images: {
    domains: process.env.IMAGE_DOMAINS.split(","),
  },
  env: {
    RESTFUL_API_URL: process.env.RESTFUL_API_URL,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    PAGE_PROPS_REVALIDATE: process.env.PAGE_PROPS_REVALIDATE,
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
});
