const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '..','dist'),
    },
    //hot: true,
    compress: true,
    port: 803
  }
})