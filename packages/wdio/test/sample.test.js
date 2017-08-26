/* flow */
const { expect } = require('chai')

declare var browser

describe('webdriver.io page', () => {
  beforeEach(() => {
    browser.url('http://opapy.ch')
  })

  it('should have the right title - the fancy generator way', () => {
    expect(browser.getTitle()).to.be.equal('Opapy of Legends')
  })
})
