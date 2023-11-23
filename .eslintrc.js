module.exports = {
  extends: ['./eslint/configs/node'],
  overrides: [
    {
      files: ['eslint/rules/**'],
      rules: {
        'sort-keys': 'error',
      },
    },
  ],
};
