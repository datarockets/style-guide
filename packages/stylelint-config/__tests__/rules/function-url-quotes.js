// @flow

const runTest = require('../runTest')

runTest({
  filename: __filename,

  valid: [
    '@document domain(\'http://www.w3.org/\');',
    '.class { background-image: url(\'x.jpg\'); }',
    '.class { background-image: asset-url(); }',
  ],

  invalid: [
    '@document domain(http://www.w3.org/);',
    '.class { background-image: url(x.jpg); }',
    '.class { background-image: asset-url(\'\'); }',
  ],
})
