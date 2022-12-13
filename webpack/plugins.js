import path from "path";
import appPaths from "./app-paths";

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
export function uploadSourceMapPlugin() {
  // return new SentryCliPlugin({
  //   include: "./build",
  //   ignore: ["node_modules", "webpack.config.js"],
  //   release: process.env.SENTRY_RELEASE,
  //   urlPrefix: "~/static/js",
  //   setCommits: {
  //     repo: "",
  //     commit: process.env.SENTRY_RELEASE,
  //   },
  // });
  return null;
}
export function bundleAnalyzerPlugin() {
  return new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: path.resolve(appPaths.BUNDLE_REPORT_PATH, "bundle-report.html"),
    openAnalyzer: false,
  });
}
