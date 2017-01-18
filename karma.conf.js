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
      node: { fs: 'empty' }
    },
    reporters: ['mocha', 'coverage'],
    browsers: ['Firefox', 'PhantomJS'],
    singleRun: true
  })
}
