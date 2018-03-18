exports.config = {
  specs: ['./test/*.js'],
  capabilities: [
    {
      browserName: 'chrome'
    },
    {
      browserName: 'phantomjs'
    }
  ],
  sync: true,
  bail: 0,
  outputDir: './reports',
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  services: ['selenium-standalone', 'phantomjs'],
  framework: 'mocha',
  reporters: ['dot', 'spec'],
  reporterOptions: {
    json: {
      outputDir: './reports'
    }
  },
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
