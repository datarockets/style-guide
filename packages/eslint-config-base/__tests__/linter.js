// @flow

const eslint = require('eslint')
const RunLinter = require('../../../__tests__/RunLinter')
const config = require('..')

const { ESLint } = eslint
const eslintRunner = new ESLint({
  overrideConfig: {
    ...config,
    rules: {
      ...config.rules,
      'no-unused-vars': 'off',
      'no-constant-condition': 'off',
      'no-empty': 'off',
      'class-methods-use-this': 'off',
      'import/no-unresolved': 'off',
      'no-unused-expressions': 'off',
      'import/extensions': 'off',
    },
  },
  useEslintrc: false,
})

const lintCase = async (oneCase) => {
  const report = (await eslintRunner.lintText(oneCase))[0]

  if (report.errorCount > 0) {
    const results = report.messages
      .map((item) => ({
        id: item.ruleId,
        message: item.message,
      }))

    return {
      errored: true,
      example: oneCase,
      results,
    }
  }

  return {
    errored: false,
    example: oneCase,
    results: [],
  }
}

module.exports = new RunLinter({
  lintCases: (cases) => Promise.all(cases.map(lintCase)),
})
