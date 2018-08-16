// @flow

// $FlowFixMe
const config = require('eslint-config-datarockets-base') // eslint-disable-line
const isPlainObject = require('lodash/isPlainObject')

it('is an object', () => {
  expect(isPlainObject(config)).toBeTruthy()
})
