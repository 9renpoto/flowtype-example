/* @flow */

module.exports = {
  loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
  ]
}
