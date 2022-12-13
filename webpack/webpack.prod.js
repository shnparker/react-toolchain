const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const appPaths = require("./app-paths");
const { uploadSourceMapPlugin, bundleAnalyzerPlugin } = require("./plugins");
// const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const dotenv = require("dotenv");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, appPaths.OUTPUT_PATH),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    uploadSourceMapPlugin(),
    bundleAnalyzerPlugin(),
    new HtmlWebpackPlugin(),
    // new webpack.EnvironmentPlugin(dotenv.config({ path: appPaths.ENV_PATH + this.mode }).parsed),
  ],
});
