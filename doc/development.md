# Development settings

## JEST

- [jest-Extended](https://github.com/jest-community/jest-extended)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)
- [jest-mock-process](https://github.com/EpicEric/jest-mock-process)

## ESLINT

- [Typescript-Eslint :: Getting started](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
- [Eslint-jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)

## local installation

Locally install the package (using a symlink!).

**Warning**: Use at your own risk! the npm link/unlink seems to cause troubles sometimes... see note and refs below.

### install/link

To bind the package in the **local npm repository** i.e. to make the libraries and the CLI available globaly on the local dev machine, one can **link** the package:

```
npm run dev:publish
```

### uninstall/unlink

To uninstall the locally deployed package i.e. to **unlink** the package from the **local npm repository**, one can use:

```
npm run dev:unpublish
```

note: uninstalling may break the package integrity (at least on windows os). In this case, the "node_modules" and "package.lock.json" need to be re-created. This is implemented in the "dev:unpublish" script.

### Refs

- see: [npm-link](https://docs.npmjs.com/cli/link)
- see: [create a node cli package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
