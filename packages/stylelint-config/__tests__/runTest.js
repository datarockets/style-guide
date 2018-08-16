// @flow

const stylelint = require('stylelint')
const config = require('../')

type Case = string

type CaseList = Array<Case>

type Configuration = {
  filename?: string,
  title?: string,
  valid: CaseList | Case,
  invalid: CaseList | Case,
}

type StylelintResult = {
  errored: boolean,
  results: Array<{
    _postcssResult: {
      css: string,
    },
    warnings: Array<{
      rule: string,
      text: string,
    }>,
  }>,
}

const sanitizeCase = (string: Case): Case => `${string.trim()}\n`

const normalizeCases = (input: CaseList | Case): CaseList => (
  Array.isArray(input) ? input.map(sanitizeCase) : [sanitizeCase(input)]
)

const lintCases = (cases: CaseList): Promise<Array<StylelintResult>> => (
  Promise.all(cases.map(code => stylelint.lint({ code, config })))
)

const runTest = (configuration: Configuration) => {
  const ruleName = (configuration.filename || '').replace(/.+\/([a-z-]+)\.js$/, '$1')
  const title = configuration.title || ruleName

  describe(title, () => {
    let reports: Array<string> = []

    const report = (result: StylelintResult) => {
      // eslint-disable-next-line no-underscore-dangle
      const source = result.results[0]._postcssResult.css.trimRight()
      const message = result.results[0].warnings.map(i => i.text).join('\n\t')
      const error = `Source:\n\t${source}\n\nMessage:\n\t${message}`

      reports.push(error)
    }

    afterEach(() => {
      const message = reports.join('\n\n\n')
      reports = []

      if (message) {
        throw new Error(message)
      }
    })

    if (configuration.valid) {
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
    }

    if (configuration.invalid) {
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

        if (ruleName) {
          test('appropriate rule name', async () => {
            const results = await lintCases(cases)

            results.forEach((result) => {
              if (result.results[0].warnings[0].rule !== ruleName) {
                report(result)
              }
            })
          })
        }
      })
    }
  })
}

module.exports = runTest
