/* eslint-env node */
module.exports = {
  extends: ['@gipo355/eslint-config-base'],
  ignorePatterns: ['!**/*'],
  root: true,
  env: {
    node: true,
    browser: true,
    es2024: true,
  },
  rules: {
    'unicorn/prefer-module': 'off'
  }
};
