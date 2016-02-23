var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.development.js')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err)
    }
    res.set('content-type','text/html')
    res.send(result)
    res.end()
  })
})

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
