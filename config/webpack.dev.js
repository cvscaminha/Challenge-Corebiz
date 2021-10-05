const ReactRefreshWebPackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: "chrome",
    hot: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebPackPlugin()],
  devtool: "eval-source-map",
  //devtool: "false",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
