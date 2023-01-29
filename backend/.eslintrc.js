module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'No-console': 2,
    'comma-dangle': 1,
    Quotes: 2,
    'Linebreak-style': 0,
    'no-unused-vars': 0,
    'max-len': 0
  }
}
