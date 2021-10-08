const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname,'..','src','index.js'),
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: NODE_ENV === 'development' ? 'Carl的Vue2脚手架-开发模式' : 'Carl的Vue2脚手架-生产模式',
      template: path.join(__dirname,'..','public','index.html')
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname,'..','src')
    },
    extensions: ['.js','.json','.vue']
  },
  optimization: {
    runtimeChunk: 'single'
  },
  output: {
    path: path.join(__dirname,'..','dist'),
    filename: NODE_ENV === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js'
  }
}