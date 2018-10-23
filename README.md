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

## Why all configurations under one version

*Coming soon...*
