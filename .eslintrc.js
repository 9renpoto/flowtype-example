/* @flow */
module.exports = {
  extends: [
    '@9renpoto/eslint-config-react',
    '@9renpoto/eslint-config-flowtype'
  ],
  plugins: ['jest'],
  settings: {
  'import/resolver': {
    node: {
      extensions: [
        '.js',
        '.jsx'
      ]
    }
  }
}
}
