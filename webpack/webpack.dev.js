const path = require("path");
const { merge } = require("webpack-merge");

const appPaths = require("./app-paths");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    path: resolveApp("dist"),
    publicPath: "/",
    clean: true,
  },
  // devServer: {
  //   static: path.resolve(__dirname, appPaths.OUTPUT_PATH),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      scriptLoading: "defer",
      chunks: ["main"],
    }),
    // new webpack.EnvironmentPlugin(dotenv.config({ path: appPaths.ENV_PATH + this.mode }).parsed),
  ],
});
