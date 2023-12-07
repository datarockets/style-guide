const commentsRules = require('../rules/comments');
const importRules = require('../rules/import');
const standardRules = require('../rules/standard');
const stylisticRules = require('../rules/stylistic');
const unicornRules = require('../rules/unicorn');

// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * The base ESLint config which is shared among all environments.
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@stylistic', 'simple-import-sort'],
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  rules: {
    ...standardRules,
    ...stylisticRules,
    ...commentsRules,
    ...importRules,
    ...unicornRules,
  },
};
