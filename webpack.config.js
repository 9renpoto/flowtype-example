/* @flow */
const ClosureCompilerPlugin = require('webpack-closure-compiler')
const path = require('path')

const module = require('./webpack/module')

module.exports = {
  entry: {
    'loader': path.join(__dirname, 'src/loader.js'),
    'webpack': path.join(__dirname, 'src/foo.js')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  },
  module,
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        compilation_level: 'ADVANCED'
      },
      concurrency: 3
    })
  ]
}
