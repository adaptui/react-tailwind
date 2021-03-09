# Renderlesskit React Tailwind

React UI built with renderleskit-react & tailwind

## Get Started

`yarn`

## Eslint

> Uses **Create React App** configs

## Prettier

> Uses in conjuction with Eslint with `eslint-plugin-prettier` &
> `eslint-config-prettier`

## Storybook

> Start the development server

`yarn storybook`

> Build the storybook

`yarn build-storybook`

## Build

> Build the components ready for packages with tree shaking ability into `dist`
> folder

`yarn build`

## Release

> Release a new version

`yarn release`

> **Note:** to release a package

> For Github Release, we use
> [conventional-github-releaser](https://github.com/conventional-changelog/releaser-tools/tree/master/packages/conventional-github-releaser).
> Create a new Github Token as per the
> [docs](https://github.com/conventional-changelog/releaser-tools/tree/master/packages/conventional-github-releaser#setup-token-for-cli)
> and export to the CLI env like
> `export CONVENTIONAL_GITHUB_RELEASER_TOKEN=xxxx`

## Commit

`git add . && yarn commit`

> Uses **[gacp](https://github.com/vivaxy/gacp#readme)**

- Runs [Husky](https://github.com/typicode/husky) to improve the commits.
- Husky runs [Lint Staged](https://github.com/okonet/lint-staged) as a
  pre-commit hook to run lintes & formatters
- Husky lints the commit message with
  [Commitlint](https://github.com/conventional-changelog/commitlint)

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
