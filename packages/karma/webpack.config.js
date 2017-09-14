/* @flow */
const ClosureCompilerPlugin = require('webpack-closure-compiler')
const path = require('path')

const m = require('./webpack/module')

module.exports = {
  entry: {
    webpack: path.join(__dirname, 'src/foo.js')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  },
  module: m,
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        compilation_level: 'ADVANCED'
      },
      concurrency: 3
    })
  ]
}
