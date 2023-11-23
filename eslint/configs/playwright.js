const playwrightRules = require('../rules/playwright');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:playwright/recommended'],
  rules: {
    ...playwrightRules,
  },
};
