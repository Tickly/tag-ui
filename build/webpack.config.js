var
  path = require('path'),
  config = require('../config'),
  utils = require('./utils'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  baseWebpackConfig = require('./webpack.base.conf'),
  merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    moment: {
      root: 'moment',
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
    },
    accounting: {
      root: 'accounting',
      commonjs: 'accounting',
      commonjs2: 'accounting',
      amd: 'accounting',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   }
    // }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
  ]
})
