// @flow

// $FlowFixMe
const config = require('stylelint-config-datarockets')
const _isPlainObject = require('lodash/isPlainObject')

it('is an object', () => {
  expect(_isPlainObject(config)).toBeTruthy()
})
