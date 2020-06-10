# Angular Sample project

back to [Samples list][samples] - back to [main project page][mainpage]

This example demonstrate the usage of the PoC/library as a **Typescript Module integrated in an Angular application**.

<h2>Table-of-Content</h2>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->

<!-- code_chunk_output -->

- [setup the Angular app](#setup-the-angular-app)
- [run the Angular app](#run-the-angular-app)
- [Usage of the library](#usage-of-the-library)
  - [package &amp; binding](#package-amp-binding)
  - [import and usage in Angular files](#import-and-usage-in-angular-files)
  - [run the CLI application](#run-the-cli-application)

<!-- /code_chunk_output -->

## setup the Angular app

To setup this sample application, please do in the folder containing this example i.e. the `package.json` file:

```shell
> npm install
```

This will install all dependencies required to run the Angular app and thus bbind the PoC library in the Angular app project... see the "package &amp; binding" section below.

## run the Angular app

To start the web application, do:

```shell
> npm start
```

This will start a (provisory) web server and open your default browser to display the web application. The web server is not suitable for production, though.

## Usage of the library

### package &amp; binding

The package.json of this example Angular app is binding the library (as a runtime dependency) directly from the local library package:

```json
  "dependencies": {
    "@khatastroffik/one-ts-for-all": "file:../../../one-ts-for-all"
  }
```

This can be usefull to test locally, that the library integration is working as expected.

In a **real project context**, you'd better bind the library from a repository:

```shell
> npm install --save @khatastroffik/one-ts-for-all
```

**Note**: Since the library is including the types information, the code completion in editors supporting Typescript (e.g. VSCode) will work automatically and there's no need to import any supplemental `*.d.ts` file or types definition package.

### import and usage in Angular files

Since the library declares the Typescript module to be provided by default (`"main": "lib/ts/library.ts"` in the Library (root) `package.json`), importing the library in a client TS file is straightforward:

```typescript
import { Car } from "@khatastroffik/one-ts-for-all";}
```

**Usage**: the `Car` class implemented in the PoC library is used in the `CarPoolComponent` (see the project folder: `src/app/car-pool/`)

### run the CLI application

The library is shipping a small CLI app for PoC purpose.

After the library package has been installed (see "setup" above), you can execute the CLI application with:

```shell
> npx ts4all

or

> npm run ts4all
```

This will pick the `ts4all` executable directly from the `node_modules/.bin/` folder and execute...

**Note**: If the library package is *installed globally* instead of *locally*, the CLI is available from any command line on the system:

```shell
ts4all
```

[mainpage]: ../../README.md
[samples]: ../README.md
