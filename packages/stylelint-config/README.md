# stylelint-config-datarockets

[![npm version](https://img.shields.io/npm/v/stylelint-config-datarockets.svg)](https://www.npmjs.com/package/stylelint-config-datarockets)

Shareable stylelint config for datarocket's projects.

## Usage

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
