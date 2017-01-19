const m = require('./webpack/module')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      { pattern: 'test/*.js' }
    ],
    preprocessors: {
      'test/*.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: m.loaders.concat([{
          test: /\.js$/,
          loader: 'babel-istanbul',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true
          }
        }])
      },
      node: { fs: 'empty' }
    },
    coverageReporter: {
      reporters: [
        {type: 'lcov'},
        {type: 'text'}
      ]
    },
    reporters: ['mocha', 'coverage'],
    browsers: ['Firefox', 'PhantomJS'],
    singleRun: true
  })
}
