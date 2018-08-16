// @flow

const linter = require('../linter')

linter.verify({
  filename: __filename,

  valid: [
    ' @define-mixin test { color: #abc; } ',
    ' @mixin test; ',
  ],

  invalid: [
    ' @test test; ',
  ],
})
