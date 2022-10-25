// @flow

const linter = require('../linter')

linter.verify({
  filename: __filename,

  valid: [
    ' @document domain(\'http://www.w3.org/\'); ',
    ' .class { background-image: url(\'x.jpg\'); } ',
    ' .class { background-image: url(); } ',
  ],

  invalid: [
    ' @document domain(http://www.w3.org/); ',
    ' .class { background-image: url(x.jpg); } ',
    ' .class { background-image: url(\'\'); } ',
  ],
})
