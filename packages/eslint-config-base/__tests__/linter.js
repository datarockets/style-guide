// @flow

const eslint = require('eslint')
const RunLinter = require('../../../__tests__/RunLinter')
const config = require('..')

const { CLIEngine } = eslint
const eslintRunner = new CLIEngine({
  ...config,
  useEslintrc: false,
})

const lintCase = (oneCase) => {
  const report = eslintRunner.executeOnText(oneCase)

  if (report.errorCount > 0) {
    const results = CLIEngine.getErrorResults(report.results)[0]
      .messages
      .map(item => ({
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
  lintCases: cases => Promise.all(cases.map(lintCase)),
})
