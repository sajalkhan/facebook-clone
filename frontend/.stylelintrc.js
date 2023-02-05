module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  rules: {
    'at-rule-disallowed-list': ['import'],
    // https://github.com/hudochenkov/stylelint-order/issues/66#issuecomment-428185810
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-pseudo-class-disallowed-list': ['hover'],
    'unit-disallowed-list': ['px'],
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'include'
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true
        }
      ]
    ]
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null,
        'scss/dollar-variable-pattern': /^_?[a-zA-Z0-9-]+$/,
        'scss/at-mixin-pattern': /^_?[a-zA-Z0-9-]+$/,
        'scss/operator-no-newline-after': null
      }
    }
  ]
};
