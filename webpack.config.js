const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const SwPrecachePlugin = require("sw-precache-webpack-plugin");

const manifestPlugin = new ManifestPlugin({
  fileName: "asset-manifest.json",
});

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const swPrecachePlugin = new SwPrecachePlugin({
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: "service-worker.js",
  logger(message) {
    if (message.indexOf("Total precache size is") === 0) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  },
  minify: true,
  navigateFallback: "/index.html",
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "src/index.js")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [manifestPlugin, htmlWebpackPlugin, new Dotenv(), swPrecachePlugin],
  devServer: {
    port: 3001,
  },
};
