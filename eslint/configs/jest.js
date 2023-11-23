const { TYPESCRIPT_FILES } = require('../constants');
const jestRules = require('../rules/jest');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    ...jestRules,
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
