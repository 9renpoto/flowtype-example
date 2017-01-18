const webpackConfig = require('./webpack.config')

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
      module: webpackConfig.module,
      target: 'node'
    },
    reporters: ['mocha', 'coverage'],
    browsers: ['Chrome', 'Firefox', 'PhantomJS', 'Opera'],
    singleRun: true
  })
}
