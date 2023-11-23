const { JAVASCRIPT_FILES } = require('../constants');
const nextRules = require('../rules/next');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('./react'), 'plugin:@next/next/core-web-vitals'],
  rules: {
    ...nextRules,
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ['next/babel'],
          caller: {
            // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
            supportsTopLevelAwait: true,
          },
        },
      },
    },
  ],
};
