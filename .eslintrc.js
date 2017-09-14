/* @flow */
module.exports = {
  extends: ['@9renpoto/eslint-config-flowtype', 'plugin:fp/recommended'],
  plugins: ['fp'],
  rules: {
    'fp/no-nil': 1,
    'fp/no-unused-expression': 1,
    'fp/no-mutation': [
      2,
      {
        commonjs: true,
        allowThis: true
      }
    ]
  }
}
