// @flow

// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk')

type Case = string

type CaseList = Array<Case>

// eslint-disable-next-line import/no-extraneous-dependencies
const commonPrefix = require('common-prefix')

type Result = {
  errored: boolean,
  example: string,
  results: Array<{
    id: string,
    message: string,
  }> | Array<empty>,
}

type Parameters = {
  filename?: string,
  title?: string,
  valid: CaseList | Case,
  invalid: CaseList | Case,
}

const sanitizeCase = (string: Case): Case => {
  const trim = (input: Case) => input.slice(1, -1)

  const minIndent = commonPrefix(
    trim(string)
      .split('\n')
      .filter(line => line.trim() !== '')
      // $FlowFixMe
      .map(line => /^[ \t]*/.exec(line)[0]),
  )

  return trim(string)
    .split('\n')
    .map(line => line.substr(minIndent.length))
    .join('\n')
}

const normalizeCases = (input: CaseList | Case): CaseList => (
  Array.isArray(input) ? input.map(sanitizeCase) : [sanitizeCase(input)]
)

const runTest = (configuration: Parameters, lintCases: LintCase) => {
  const ruleName = (configuration.filename || '').replace(/.+\/([a-z-]+)\.js$/, '$1')
  const title = configuration.title || ruleName

  describe(title, () => {
    let reports: Array<string> = []

    const report = (result: Result) => {
      const example = result.example
        .split('\n')
        .map(line => `\t${line}`)
        .join('\n')

      const message = result.errored
        ? result.results.map(item => `\t* ${item.message}`).join('\n')
        : '\tShould throw warning'

      const error = [
        chalk.bold('Source'),
        chalk.dim(example),
        chalk.bold('Message'),
        chalk.bold.bgRed(message),
      ].join('\n')

      reports.push(error)
    }

    afterEach(() => {
      const message = reports.join('\n\n\n')

      reports = []

      if (message) {
        throw new Error(message)
      }
    })

    describe('valid', () => {
      const cases = normalizeCases(configuration.valid)

      test('does not show warning', async () => {
        const results = await lintCases(cases)

        results.forEach((result) => {
          if (result.errored) {
            report(result)
          }
        })
      })
    })

    describe('invalid', () => {
      const cases = normalizeCases(configuration.invalid)

      test('shows warning', async () => {
        const results = await lintCases(cases)

        results.forEach((result) => {
          if (!result.errored) {
            report(result)
          }
        })
      })
    })
  })
}

type LintCase = (CaseList) => Promise<Array<Result>>

type Config = {
  lintCases: LintCase,
}

module.exports = class RunLinter {
  lintCases: LintCase

  constructor(config: Config) {
    this.lintCases = config.lintCases
  }

  verify(configuration: Parameters) {
    runTest(configuration, this.lintCases)
  }
}
