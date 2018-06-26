var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const path = require('path')



var webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    index: './examples/entry'
  },
  // cheap-module-eval-source-map is faster for development
  // devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    hotOnly: true,
    contentBase: path.join(__dirname, '..')
  }
})

// add hot-reload related code to entry chunks
// Object.keys(webpackConfig.entry).forEach(function (name) {
//   webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name])
// })

module.exports = webpackConfig;
