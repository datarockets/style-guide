# eslint-config-datarockets-base

[![npm version](https://img.shields.io/npm/v/eslint-config-datarockets-base.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-datarockets-base)

Sharable eslint config for datarocket's projects.

It's based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some specific changes.

## Usage

1. Installing deps:

  With `npm`:

  ```
  (
    export PKG=eslint-config-datarockets-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  With `yarn`:

  ```
  (
    export PKG=eslint-config-datarockets-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

2. Add `extends: "datarockets-base"` to your `.eslintrc` file.
