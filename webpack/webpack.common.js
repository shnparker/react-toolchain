module.exports = () => {
  return {
    // target: ["browserslist"],
    entry: "../src/index.tsx",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "assets/[name].[contenthash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve("@svgr/webpack"),
              options: {
                prettier: true,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: require.resolve("file-loader"),
              options: {
                name: "static/media/[name].[hash].[ext]",
              },
            },
          ],
          issuer: /\.[jt]sx?$/,
        },
      ],
    },
  };
};
