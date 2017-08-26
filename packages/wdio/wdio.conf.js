exports.config = {
  specs: ['./test/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'firefox'
    },
    {
      maxInstances: 5,
      browserName: 'chrome'
    },
    {
      maxInstances: 5,
      browserName: 'phantomjs'
    }
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  outputDir: './reports',
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['firefox-profile', 'selenium-standalone', 'phantomjs'],
  framework: 'mocha',
  reporters: ['dot', 'spec', 'junit', 'allure', 'teamcity', 'json', 'concise'],
  reporterOptions: {
    junit: {
      outputDir: './reports'
    },
    json: {
      outputDir: './reports'
    }
  },
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
