# Datarockets Style Guide

This repository is the home of Datarockets' style guide, which includes configs
for popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)

## Contributing

Please read our [contributing](./CONTRIBUTING.md) guide before creating a pull
request.

## Installation

All of our configs are contained in one package, `@datarockets/style-guide`. To
install:

```sh
npm i -D @datarockets/style-guide
```

Some of our configs require peer dependencies. Install them depending on which
configs you use:

```sh
# If you use @datarockets/style-guide/prettier
npm i -D prettier

# If you use @datarockets/style-guide/eslint
npm i -D eslint

# If you use Next.js and @datarockets/style-guide/eslint/next
npm i -D @next/eslint-plugin-next

# If you use @datarockets/style-guide/typescript
npm i -D typescript
```

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@datarockets/style-guide/prettier"
}
```

If you need to override the configuration (see:
https://prettier.io/docs/en/configuration#sharing-configurations):

```js
import datarocketsPrettierConfig from '@datarockets/style-guide/prettier';

export default {
  ...datarocketsPrettierConfig,
  semi: false,
};
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in `extends`:

- `@datarockets/style-guide/eslint/browser`
- `@datarockets/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@datarockets/style-guide/eslint/jest`
- `@datarockets/style-guide/eslint/jest-react` (includes rules for `@testing-library/react`)
- `@datarockets/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
  - extends `@datarockets/style-guide/eslint/react`
- `@datarockets/style-guide/eslint/playwright`
- `@datarockets/style-guide/eslint/react`
- `@datarockets/style-guide/eslint/storybook`
- `@datarockets/style-guide/eslint/typescript` (requires `typescript` to be installed)

### Examples

> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

#### Next.js

> Note: you might need to clear ESLint cache for the first usage.

Here is a recommened approach of using ESLing configs in Next.js projects.

`.eslintrc.js`:

```js
module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules/',
    '/public',
    '/playwright-report',
    '__screenshots__/',
    // Any other directories which makes sense to ignore to improve ESLint
    // performance. Note: ESLint ignores dot directories (e.g. .git) by default.
  ],
  extends: [
    require.resolve('@datarockets/style-guide/eslint/node'),
    require.resolve('@datarockets/style-guide/eslint/browser'),
    require.resolve('@datarockets/style-guide/eslint/typescript'),
    require.resolve('@datarockets/style-guide/eslint/next'),
  ],
  overrides: [
    // Unit tests (Jest)
    {
      files: [
        'src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        'src/**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
        'jest.setup.{js,ts}',
      ],
      extends: [
        require.resolve('@datarockets/style-guide/eslint/jest'),
        require.resolve('@datarockets/style-guide/eslint/jest-react'),
      ],
      settings: {
        jest: {
          version: require('jest/package.json').version,
        },
      },
    },
    // E2E tests (Playwright)
    {
      files: ['tests/**/?(*.)+(spec|test).{js,jsx,ts,tsx}'],
      extends: [require.resolve('@datarockets/style-guide/eslint/playwright')],
    },
    // Storybook
    {
      files: ['*.stories.{js,jsx,ts,tsx}'],
      extends: [require.resolve('@datarockets/style-guide/eslint/storybook')],
    },
  ],
};
```

`next.config.js`:

```js
/** @type {NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      // By default, Next.js lints only `app`, `pages`, `components`, `lib`, `src`
      // directories. Here we overwrite it to lint all files in the project.
      '.',
      // [Optional] By default, ESLint ignores directories started with dot so
      // we need to specify such directories explicitly.
      '.storybook',
    ],
  },
};
```

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

In this example, Jest rules are only being applied to files matching Jest's
default test match pattern.

```js
module.exports = {
  extends: [require.resolve('@datarockets/style-guide/eslint/node')],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
      ],
      extends: [require.resolve('@datarockets/style-guide/eslint/jest')],
    },
  ],
};
```

### Configuring rules/settings

There are some rules/settings that you probably want to configure manually to
fit your project needs.

#### `jsx-a11y` custom components

It's common practice for React apps to have shared components like `Button`,
which wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

For example,

```js
module.exports = {
  root: true,
  extends: [require.resolve('@datarockets/style-guide/eslint/react')],
  settings: {
    'jsx-a11y': {
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
        // ...
      },
    },
  },
};
```

#### `unicorn/filename-case`

By default, it's configured to ensure that all files are in `kebab-case`. If
your project already have a convention for file names, you can configure this
rule to fit the convention (see [Documentation](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md)):

```js
module.exports = {
  rules: {
    // Your project uses both `camelCase` and `PascalCase`
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
};
```

#### `simple-import-sort/imports` (import order)

We enforce a certain import order by default. For example:

```tsx
// Side effects
import './global.css';

// Node.js builtins prefixed with `node:`.
import path from 'node:path';

// External packages
import Image from 'next/image';

// 1. Absolute imports and other imports such as Vue-style `@/foo`.
// 2. Relative imports.
import { SomeComponent } from '@/components';
import { parent } from '../parent';
import { sibling } from './sibling';
```

You can configure it by modifying `simple-import-sort/imports` rule (see [Documentation](https://github.com/lydell/eslint-plugin-simple-import-sort)):

```js
module.exports = {
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          ['^@?\\w'],
          // 1. Absolute imports and other imports such as Vue-style `@/foo`.
          // 2. Relative imports.
          ['^', '^\\.'],
        ],
      },
    ],
  },
};
```

### Debugging ESLint

Sometimes you need to debug ESLint to understand what actually happens and why
something doesn't work.

To output ESLint debug logs:

```sh
DEBUG=eslint* npx eslint .
# For Next.js projects
DEBUG=eslint* npx next lint
```

To show final ESLint config:

```sh
npx eslint --print-config <some-file>
```

## TypeScript

We provide a base config for TypeScript which contains some defaults we usually
use.

To use it, just extend it in your `tsconfig.json`:

```json
{
  "extends": "@datarockets/style-guide/typescript"
}
```

The base config isn't intented to be used as a complete one so you might need
to add more settings in your `tsconfig.json`. For example:

```json
{
  "extends": "@datarockets/style-guide/typescript",
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".storybook/**/*"
  ],
  "exclude": ["node_modules"]
}
```

## Acknowledge

Inspired by https://github.com/vercel/style-guide.
