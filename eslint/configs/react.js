const reactRules = require('../rules/react');
const jsxA11yRules = require('../rules/jsx-a11y');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
  ],
  rules: {
    ...reactRules,
    ...jsxA11yRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
