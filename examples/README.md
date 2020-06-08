# Usage Examples

back to [README][readme]

The library implemented in the PoC (see [**src**](src) folder) and deployed as a [NPM package](npmp) can be used in different ways by any/multiple client projects (e.g. the provided sample projects).

## Installation

### standard installation

In most of the case, the client project needs to install the [NPM package](npmp) as a dependency.

The *one-ts-for-all* should be integrated in the client project to augment its functionality, hence it should be installed as a *productive* dependency, hence:
```shell
npm install --save @khatastroffik/one-ts-for-all
```
Note: In a real scenario, you'd replace the name of the installed package above with the adequate name for the library of your choice.

### alternative installation

Alternatively, the client project could download the library from a Source-Code Repository (e.g. use the present repository [download file](https://github.com/khatastroffik/one-ts-for-all/archive/master.zip)) and manually link/integrate the library files in the client project wherever needed. Cloning the library and installing the cloned repository locally is also a possible alternative.

These **'loose" installation procedures aren't recommanded**, though! Hence, they're not documented in detail here.

## Use Cases

### Usage as a CommonJS module in a node project

goto ['NodeJS' Sample Project](./node/README.md)

### Usage as EcmaScript Module in a web application

goto ['Browser' Sample Project](./browser/README.md)

### Usage as Typescript module in a TS application


[readme]: ../README.md
[src]: ../src
[npmp]: XXX