var
  path = require('path')
  // config = require('../config'),
  // utils = require('./utils'),
  ,
  webpack = require('webpack')
  // vueLoaderConfig = require('./vue-loader.conf'),
  ,
  ExtractTextPlugin = require('extract-text-webpack-plugin')
// baseWebpackConfig = require('./webpack.base.conf'),
// merge = require('webpack-merge')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    // path: config.build.assetsRoot,
    path: resolve('dist'),
    filename: '[name].js',
    // publicPath: process.env.NODE_ENV === 'production' ?
    //   config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: [
          resolve('src'),
          resolve('test'),
          resolve('packages'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // utils.styleLoaders({
      //   sourceMap: config.build.productionSourceMap,
      //   extract: true,
      // }),
    ]
  },

  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   // publicPath: '/dist',
  //   filename: '[name].js'
  // },
  // devtool: config.build.productionSourceMap ? '#source-map' : false,
  devtool: '#source-map',

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
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
  ]
}
