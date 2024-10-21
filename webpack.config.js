/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  watch: false,
  devtool: "inline-source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [".ts", ".js"],
  },
};
