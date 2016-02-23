var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wiki Editor',
      template: 'app/index.html'
    }),
    new CleanWebpackPlugin(['dist'], { root: path.normalize(path.join(__dirname, '../')) })
  ]
}
