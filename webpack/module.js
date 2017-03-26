/* @flow */

module.exports = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        'plugins': [
          'transform-flow-strip-types'
        ],
        'presets': [
          'latest'
        ],
        'env': {
          'development': {
            'presets': [
              'power-assert'
            ],
            'plugins': [
              'istanbul'
            ]
          }
        }
      }
    }
  ]
}
