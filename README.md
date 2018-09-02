# webpack4-starter-kit

Webpack 4 with webpack-dev-server configuration (and Web Components).

## Requirements

- Node >= v6.x
- Yarn >= v1.1 | NPM >= v5.0

## Installation via CLI

  * Install w4kit-cli

```
npm install -g w4kit-cli
```

  * launch the CLI

```
w4kit
```

## Installation via Clone

* Clone this repository

```
git clone -b typescript https://github.com/king-prawns/webpack4-starter-kit.git [your-app-name]
```

Remove the .git folder and change details within:

```
package.json
src/manifest.json
```

* Install dependencies

```
$ cd my-app-name
$ yarn
```

## Available tasks

```sh

# Runs development server (Webpack dev server)
$ yarn dev

# Build command
$ yarn build

# Lint with TSLint
$ yarn lint

# Run only type checking
$ yarn tc

# Run unit tests (ava-ts)
$ yarn test

# Runs http-server on port 8082
$ yarn httpserver

```

## Features

* [Webpack 4](https://github.com/webpack/webpack)
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
* [TypeScript](http://www.typescriptlang.org/)
* [TSLint](https://palantir.github.io/tslint/)
* [StyleLint](https://github.com/stylelint/stylelint)
* [Postcss](https://github.com/postcss/postcss)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Ava](https://github.com/avajs/ava)
* <s>[nyc](https://github.com/istanbuljs/nyc)</s> [(open issue)](https://github.com/andywer/ava-ts/issues/7)
* [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [Service Worker](https://github.com/NekR/offline-plugin)
* Webpack Plugins: Html, Copy, MiniCssExtract, Define
