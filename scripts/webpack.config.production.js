var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseConfig = require('./webpack.config.base')

var config = Object.create(baseConfig)

config.devtool = 'source-map'
config.entry = './app/index'
config.output.filename = 'bundle.[chunkhash].js'

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new ExtractTextPlugin('style.[chunkhash].css', { allChunks: true })
)

module.exports = config
