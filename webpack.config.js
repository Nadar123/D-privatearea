const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    !isProd && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ].filter(Boolean),
  ...(isProd
    ? {
        mode: "production",
        devtool: "source-map",
        optimization: { minimizer: [new TerserWebpackPlugin()] },
      }
    : {
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
          port: 4200,
          open: true,
          hot: true,
          compress: true,
          historyApiFallback: true,
        },
      }),
};

module.exports = config;
