const standardRules = require('./standard');

/**
 * Rules enabled by `@typescript-eslint` but we don't want them.
 */
const disabledTypescriptRules = {
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
};

/**
 * Rules enabled by `import/recommended` but are better handled by
 * TypeScript and @typescript-eslint.
 */
const disabledImportRules = {
  'import/default': 'off',
  'import/export': 'off',
  'import/namespace': 'off',
  'import/no-unresolved': 'off',
};

/* eslint-disable sort-keys -- We disable this rule to align related properties together. */
/**
 * These are extended ESLint standard rules by `@typescript-eslint`.
 */
const extendedStandardRules = {
  /**
   * Require default parameters to be last.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',
  /**
   * Disallow unused variables.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': standardRules['no-unused-vars'],
  /**
   * Disallow unnecessary constructors.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-useless-constructor/
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
};
/* eslint-enable sort-keys -- enable back */

module.exports = {
  ...disabledImportRules,
  ...disabledTypescriptRules,
  ...extendedStandardRules,
  /**
   * Require consistent usage of type exports.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
   */
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  /**
   * Require consistent usage of type imports.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
   */
  '@typescript-eslint/consistent-type-imports': 'warn',

  /**
   * Enforce using a particular method signature syntax.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
   */
  '@typescript-eslint/method-signature-style': 'warn',
  /**
   * Disallow unnecessary namespace qualifiers.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
   */
  '@typescript-eslint/no-unnecessary-qualifier': 'warn',
  /**
   * Require Array#sort calls to provide a compare function.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/require-array-sort-compare/
   */
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  /**
   * Require exhaustive checks when using union types in switch statements.
   *
   * This ensures cases are considered when items are later added to a union.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
   */
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};
