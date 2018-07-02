// @flow

module.exports = {
  extends: [
    'airbnb',
    'datarockets-base',
  ],

  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }],
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
