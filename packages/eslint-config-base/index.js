// @flow

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },

  rules: {
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'import/extensions': ['error', 'never', {
      css: 'always',
    }],
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }],
    semi: ['error', 'never'],
  },
}
