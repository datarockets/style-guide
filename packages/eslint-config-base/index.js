// @flow

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-flow'],
    },
  },

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
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'no-undef': 'error',
    semi: ['error', 'never'],

    // Empty Lines
    'lines-between-class-members': 'error',
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
    'padding-line-between-statements': [
      'error',
      // Return
      { blankLine: 'always', prev: '*', next: 'return' },

      // Import
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },

      // Class declaration, If, Do/While, Switch, Try
      { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
      { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },

      // Sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'any', prev: 'export', next: 'export' },

      // Case/Default
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'any', prev: 'case', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'default' },
    ],
  },
}
