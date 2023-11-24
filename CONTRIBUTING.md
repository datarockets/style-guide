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

### Commits

Commit messages should be in the format:

```
type(scope?): message

[Body]
```

The scope should be included most of the time, and all allowed types and scopes
are documented in [.commitlintrc.js](./.commitlintrc.js).

Commits are used to automatically generate releases (see [Releases](#releases)).

## Releases

The default branch for this repository is `canary`. Each relevant commit into
`canary` triggers an automated pre-release. Merging `canary` into `main` will
trigger a release.

We use [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
to automate releases. It will automatically generate Git tag, create release
notes based on the commits, publish to npm, etc.

### How commits affect versions

By default, commits with the `feat` type will cause a minor version bump, and
commits with the `fix` or `perf` type will cause a patch version bump.

If your commit is a breaking change, which will create new major release, you
should add a footer with `BREAKING CHANGE: [message]`

```
feat(eslint): migrate to ESLint 8

Resolves #1

BREAKING CHANGE: see the ESLint 8 release notes for all breaking changes
```

In this example, the release notes would look like this:

> # 1.0.0 (2023-01-01)
>
> ### Features
>
> - eslint: migrate to ESLint 8 ([commit-hash])
>
> ### BREAKING CHANGES
>
> - eslint: see the ESLint 8 release notes for all breaking changes
