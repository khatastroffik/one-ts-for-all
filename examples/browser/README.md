# Browser Sample Project

back to [Samples list][samples] - back to [main project page][mainpage]

This example demonstrate the usage of the PoC/library as an **EcmaScript Module integrated in a web application**.

<h2>Table-of-Content</h2>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->

<!-- code_chunk_output -->

- [setup](#setup)
- [start](#start)
  - [run the web app](#run-the-web-app)
  - [run the CLI application](#run-the-cli-application)
- [package &amp; binding](#package-amp-binding)
- [Importing the library in a (client) script](#importing-the-library-in-a-client-script)
  - [direct import](#direct-import)
  - [import from the library package](#import-from-the-library-package)

<!-- /code_chunk_output -->

## setup

To setup this sample application, please do in the folder containing this example i.e. the `package.json` file:

```shell
> npm install
```

This will bind the library in the browser app project... see the "package &amp; binding" section below.

## start

### run the web app

To start the web application, do:

```shell
> npm start
```

This will start a (provisory) web server and open your default browser to display the web application. The web server is not suitable for production, though.

### run the CLI application

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

## package &amp; binding

The package.json of this example is binding the library (as a dependency) directly from the local package:

```json
  "dependencies": {
    "@khatastroffik/one-ts-for-all": "file:../../../one-ts-for-all"
  }
```

This can be usefull to test locally, that the library integration is working as expected.

In a real project context, you'd better bind the library from a repository:

```shell
> npm install --save @khatastroffik/one-ts-for-all
```

## Importing the library in a (client) script

### direct import

The `library.js` script (ESM version) has been **manually copied** from the package (within `node_modules`) to the `js` folder.
This was required in this example project in order to import and *publish* the script  it easily.
Reason: the web server is serving the *published* scripts as static resources from the `js` folder.

```javascript
...
import { Car } from '/js/library.js';
...
```

### import from the library package

This is **not necessary** when your project is **using a module bundler** like "*webpack*", "*browserify*" etc. or if the project is **based on a framework** like "*angular*", "*react*", "*vue*" etc...
In this case, you can import the `library.js` file from the package directly.

The *bundler* or *framework* will operate the appropriate convertion/linkage i.e. it will *resolve the correct path depending on the web server configuration* before the app is started:

```javascript
...
import { Car } from '@khatastroffik/one-ts-for-all/lib/esm/library.js';
...
```

or

```javascript
...
import { Car } from '@khatastroffik/one-ts-for-all/';
...
```

depending of the configuration of your (client) project.

[mainpage]: ../../README.md
[samples]: ../README.md
