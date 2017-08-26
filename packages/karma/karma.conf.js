const m = require('./webpack/module')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [{ pattern: 'test/*.js' }],
    preprocessors: {
      'test/*.js': ['webpack']
    },
    webpack: {
      module: { loaders: m.loaders },
      node: { fs: 'empty' }
    },
    coverageReporter: {
      reporters: [{ type: 'lcov' }, { type: 'text' }]
    },
    reporters: ['mocha', 'coverage'],
    browsers: ['Firefox', 'PhantomJS'],
    singleRun: true
  })
}
