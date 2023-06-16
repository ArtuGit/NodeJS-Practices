module.exports = {
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
