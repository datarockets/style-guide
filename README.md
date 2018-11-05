# style-guide

Use robust linting like we do

![npm version](https://img.shields.io/npm/v/eslint-config-datarockets.svg?longCache)
[![CI Status](https://img.shields.io/circleci/project/github/datarockets/style-guide/master.svg?longCache)](https://circleci.com/gh/datarockets/style-guide/tree/master)

## Packages

* [eslint-config-datarockets](./packages/eslint-config)
  
  Configuration for react projects.
  
* [eslint-config-datarockets-base](./packages/eslint-config-base)
  
  Configuration for javascript projects.

* [stylelint-config-datarockets](./packages/stylelint-config)

  Configuration for stylesheets.

## Contributing

It uses [lerna](https://lernajs.io) to maintain all packages within one repository, so take a look at its features.

## How to install

### Linter for React projects `eslint-config-datarockets`

Sharable eslint config for datarocket's projects.

It's based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some specific changes.

1. Installing deps:

  With `npm`:

  ```
  (
    export PKG=eslint-config-datarockets;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  With `yarn`:

  ```
  (
    export PKG=eslint-config-datarockets;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

2. Add `extends: "datarockets"` to your `.eslintrc` file.

### Linter for Vanilla JavaScript projects `eslint-config-datarockets-base`

Sharable eslint config for datarocket's projects.

It's based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some specific changes.

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

### Style lint config `stylelint-config-datarockets`

Shareable stylelint config for datarocket's projects.

1. Installing deps:

   With `npm`:

   ```
   (
     export PKG=stylelint-config-datarockets;
     npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
   )
   ```

   With `yarn`:

   ```
   (
     export PKG=stylelint-config-datarockets;
     npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
   )
   ```

2. Add `extends: "datarockets"` to your `.stylelintrc` file.

## Extend the config

If you need to upgrade or alter rules in this config, just add the `rules` section to the `.eslintrc` file.
  ```
    "rules": {
      "no-extra-semi": "error"
    }
  ```

### Add file name linter

1. Install `eslint-plugin-filenames` in your project

2. Add a `filename` plugin to the `.eslintrc` file
  ```
    "plugins": [
      "filenames"
    ]
  ```

3. Update the rules section the `.eslintrc` file 
  ```
    "rules": {
      "filenames/match-regex": [2, 'camel', true]
    }
  ```

### Add React Pug linter

1. Install `eslint-plugin-react-pug` in your project

2. Add a `react-pug` plugin to the `.eslintrc` file
  ```
    "plugins": [
      "react-pug"
    ]
  ```

3. Update the `extends` section
  ```
    "extends": [
      "plugin:react-pug/all"
    ]
  ```

4. Add the following rules to make linter works with Pug
  ```
    "rules": {
      "react/prefer-stateless-function": "off",
      "react/prop-types': "off",
      "react/no-unused-prop-types": "off",
      "react/no-unused-state": "off",
    }
  ```

## Why all configurations under one version

*Coming soon...*
