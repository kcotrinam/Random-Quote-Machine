const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require("./webpack.base");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "app.[contenthash].js",
    assetModuleFilename: 'images/[name][ext][query]'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ]
  },
  devtool: "source-map"
}

module.exports = merge(base, prodConfig)
