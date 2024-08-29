const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@package/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
