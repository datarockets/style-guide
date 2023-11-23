const { TYPESCRIPT_FILES } = require('../constants');
const typescriptRules = require('../rules/typescript');
const tsdocRules = require('../rules/tsdoc');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
      ],
      plugins: ['eslint-plugin-tsdoc'],
      rules: {
        ...typescriptRules,
        ...tsdocRules,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
