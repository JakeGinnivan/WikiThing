var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Wiki Editor' }),
    new CleanWebpackPlugin(['dist'], { root: path.normalize(path.join(__dirname, '../')) })
  ]
}
