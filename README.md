# JS package loaders tests

## What it does
It creates and registers 5 packages with cross dependencies in private npm registry

Each package contains `console.warn("PACKAGE@VERSION: ...")` statement to detect number of times it's loaded

`Secret` package exports single function which does `console.log("PACKAGE@VERSION: ...")`

Packages that imports secret call it's exported function to verify package version

`Main` does `console.info("MAIN: importing PACKAGE@VERSION")` before requiring next module

## Global dependencies

1. sinopia
2. npm configuration to use local sinopia registry for @dependency-test `npm config set @dependency-test:registry http://localhost:4873/`

## Loaders tested

1. SystemJS
2. Webpack
3. JSPM

## Usage

### `./republish.sh`
1. will remove all new modules from node_modules and all jspm_packages `node_modules/@dependency-test`, `jspm_packages`
2. remove published version of each module `npm unpublish`
3. publish each module`npm publish`
4. do `npm install`
5. create webpack bundle `webpack`
6. do `jspm install`
> You probably should clear jspm cache (`jspm cc`) before installing

### Results
To see the results you should open corresponding index.html file in browser
> web server is not included, so use WebStorm open in browser option

### ./cleanup.sh
1. will unpublish all modules which is published to local npm

### Notes
1. webpack bundle could be optimised with `--optimize-dedupe` flag. more information on this flag [here](https://github.com/webpack/docs/wiki/optimization#deduplication)

### TODO:

- [ ] include simple web server to the project
- [ ] add test specs
- [ ] rollup support
- [ ] hook on require to do `console.info` on importing automatically
- [ ] check if you need to `jspm cc` before install
