/* @flow */
module.exports = {
  extends: [
    "@9renpoto/eslint-config-react",
    "@9renpoto/eslint-config-flowtype"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  }
};
