# NodeJS Sample Project

back to [Samples list][samples] - back to [main project page][mainpage]

This example demonstrate the usage of the PoC/library as a CommonJS module integrared in a nodeJS application project.

## setup

The Node.js setup is straightforward:

```shell
> npm install
```

## running the client app

To start the Node.js app, do either:

```shell
> npm start

or

> node .

or 

> npx .

or

> node index.js
```

Note: None of the calls above are declared in the `package.json`: *node* and *npm* will handle those commands "by default"...

## binding the library in a client javascript

To bind the CommonJS (CJS) version of the library in a CommonJS client script, the following import method should be used:

```javascript
const one4all = require('@khatastroffik/one-ts-for-all/lib/cjs/library');

// or more specific i.e. targeted

const Car = require('@khatastroffik/one-ts-for-all/lib/cjs/library').Car;
```
The path used above is targeting the specific sub-directory containing the cjs library (without the ".js" extension, though).

This path is required du to the *configuration of the library*: the **library `package.json`** is defining the **main entrypoint** to be the **Typescript version**:

```json
{
  "...": "...",

  "main": "lib/ts/library.ts",

  "....": "...."
}
```

If the library would define `main` to point to the CJS version instead (i.e. `"main": "lib/cjs/library.js"`), then the binding would be:
```javascript
const one4all = require('@khatastroffik/one-ts-for-all/');
```

Hence, a client application always have to *take the configuration of the used library into account*!

## sample client project package

The `package.json` of this example is binding the library (as a dependency) directly from the local package:

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

[mainpage]: ../../README.md
[samples]: ../README.md