module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'max-len': 0,
    'no-unused-vars': 'warn',
    quotes: ['error', 'double', { avoidEscape: true }],
    'no-console': 'off',
  },
  plugins: ['jest', 'prettier'],
};
