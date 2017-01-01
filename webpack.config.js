const ClosureCompilerPlugin = require('webpack-closure-compiler')
const path = require('path')

module.exports = {
  entry: {
    'loader': path.join(__dirname, 'src/loader.js'),
    'webpack': path.join(__dirname, 'src/foo.js')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3
    })
  ]
}
