# Contributing

## Before creating a pull request

These config is designed for usage inside [datarockets](https://datarockets.com/).
Before creating a pull request, it's better to raise an issue and confirm that
your proposal will be accepted by datarockets.

## Development

### Getting started

This project uses `pnpm`.

To get started, you need to have it installed on your system. You can do it
by running this command:

```sh
corepack enable
# [Optional] On Node.js >= 20, you might need to upgrade pnpm
corepack prepare pnpm@8.3.1 --activate
```

Then, run:

```sh
pnpm i
```

### Testing

You can test locally on some project by linking local `@datarockets/style-guide`.

For linking, you need to use project's package manager. For example, if your
project uses `npm` as a package manager, you need to use `npm` as well for
linking:

```sh
# Inside `@datarockets/style-guide`
npm link
# Inside some project
npm link @datarockets/style-guide
```

> Note: you might need to clear ESLint cache when you change configs.

Follow [README](./README.md) to find out how to use the configs.

#### Creating a commit

Commit messages should be in the format:

```
type(scope?): message

[Body]
```

The scope should be included most of the time, and all allowed types and scopes
are documented in [.commitlintrc.js](./.commitlintrc.js).
