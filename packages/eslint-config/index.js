// @flow

module.exports = {
  extends: [
    'airbnb',
    'datarockets-base',
  ],

  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react', '@babel/preset-flow'],
    },
  },

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
