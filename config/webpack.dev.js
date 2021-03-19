const base = require("./webpack.base");
const { merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const devConfig = {
  mode: "development",
  output: {
    
    assetModuleFilename: '[name][ext][query]'
  },
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devtool: "eval-source-map"
}

module.exports = merge(base, devConfig)
