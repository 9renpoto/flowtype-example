module.exports = {
  "extends": '../../babel.config',
  "env": {
    "development": {
      "presets": [
        "power-assert"
      ],
      "plugins": [
        "istanbul"
      ]
    }
  }
}
