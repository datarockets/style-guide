// @flow

const runTest = require('../runTest')

runTest({
  filename: __filename,

  valid: [
    '@define-mixin test { color: #abc; }',
    '@mixin test;',
  ],

  invalid: [
    '@test test;',
  ],
})
