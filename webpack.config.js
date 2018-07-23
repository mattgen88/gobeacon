const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./jsx/index.html",
  filename: "../index.html"
});


module.exports = {
  devServer: {
    port: 3000,
    publicPath: '/',
    historyApiFallback: true
  },
  entry: path.resolve("jsx") + "/index.js",
  output: {
    path: path.resolve("htdocs")+"/js/",
    filename: "bundle.js",
    publicPath: '/js/'
  },
  module: {
    rules: [
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
