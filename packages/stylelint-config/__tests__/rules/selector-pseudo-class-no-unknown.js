// @flow

const linter = require('../linter')

linter.verify({
  filename: __filename,

  valid: [
    ' :global(.class) { color: #abc; } ',
    ' :local(.class) { color: #abc; } ',
  ],

  invalid: [
    ' :test(.class) { color: #abc; } ',
  ],
})
