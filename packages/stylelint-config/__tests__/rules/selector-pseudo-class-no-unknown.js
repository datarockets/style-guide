// @flow

const runTest = require('../runTest')

runTest({
  filename: __filename,

  valid: [
    `:global(.class) { color: #abc; }`,
    `:local(.class) { color: #abc; }`,
  ],

  invalid: [
    `:test(.class) { color: #abc; }`,
  ],
})
