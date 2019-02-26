// @flow

module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'define-mixin',
        'mixin',
      ],
    }],
    'at-rule-no-vendor-prefix': true,
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'named-where-possible',
    'function-url-quotes': ['always', {
      except: [
        'empty',
      ],
    }],
    indentation: 2,
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-no-vendor-prefix': true,
    'selector-max-compound-selectors': 4,
    'selector-max-specificity': '1,3,2',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: [
        'global',
        'local',
      ],
    }],
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,

    // UNITS
    'declaration-property-unit-blacklist': {
      '/^(border(?!(-\\w+)*-radius))/': [
        'rem',
        'em',
        '%',
      ],
      '/^[^-]{2}?.+/': [
        'px',
      ],
    },
    'declaration-property-unit-whitelist': {
      'letter-spacing': [
        'em',
        'rem',
      ],
    },
    'unit-whitelist': [
      'px',
      'vh',
      'vw',
      'vmin',
      'vmax',
      'rem',
      'em',
      '%',
      's',
      'ms',
      'deg',
    ],
  },
}
