// @flow

const linter = require('../linter')

linter.verify({
  filename: __filename,

  valid: [
    ' @import url(\'foo.css\'); ',
    ' .class { background-image: url(\'x.jpg\'); } ',
    ' .class { background-image: url(); } ',
  ],

  invalid: [
    ' @import url(foo.css); ',
    ' .class { background-image: url(x.jpg); } ',
    ' .class { background-image: url(\'\'); } ',
  ],
})
