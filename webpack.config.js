const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: [
            [
              "@babel/preset-env",
              {
                modules: false,
              },
            ],
          ],
        },
      },
    ],
  },
  devServer: {
    open: true,
  },
  target: "node",
  externals: [nodeExternals()],
};
