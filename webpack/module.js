/* @flow */

module.exports = {
  loaders: [
    { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    { test: /\.json$/, loader: 'json' }
  ]
}
