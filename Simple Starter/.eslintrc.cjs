module.exports = {
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: ['warn', 'single'],
  }
}
