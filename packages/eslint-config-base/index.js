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
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'lines-between-class-members': 'error',
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-undef': 'error',
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },

      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },

      { blankLine: 'always', prev: '*', next: 'export' },

      { blankLine: 'always', prev: '*', next: 'class' },

      { blankLine: 'always', prev: '*', next: 'default' },
    ],
    semi: ['error', 'never'],
  },
}
