exports.config = {
  specs: ['./test/*.js'],
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  sync: true,
  bail: 0,
  outputDir: './reports',
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  services: ['selenium-standalone'],
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
