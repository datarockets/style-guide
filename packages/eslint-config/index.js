// @flow

module.exports = {
  extends: [
    'airbnb',
    'datarockets-base',
  ],

  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ],
    }],
  },
}
