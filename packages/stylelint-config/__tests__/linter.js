// @flow

const stylelint = require('stylelint')
const RunLinter = require('../../../__tests__/RunLinter')
const config = require('..')

const lintCase = async (oneCase) => {
  const result = await stylelint.lint({
    code: `${oneCase}\n`,
    config,
  })

  return {
    errored: result.errored,
    example: oneCase,
    results: result.results[0].warnings.map(warning => ({
      id: warning.rule,
      message: warning.text,
    })),
  }
}

module.exports = new RunLinter({
  lintCases: cases => Promise.all(cases.map(lintCase)),
})
