module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 0,
    'comma-dangle': 1,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': 0
  }
};
