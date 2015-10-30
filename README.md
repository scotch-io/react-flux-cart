flux-webpack-boilerplate
===============

## Overview

This is a boilerplate for [Flux](https://facebook.github.io/flux/) and [Webpack](https://webpack.github.io/) workflow of my best practice.

The Flux application part was coded by [@kenwheeler](https://twitter.com/ken_wheeler) for the tutorial: [Create a Shopping Cart Using React.js and Flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux). I used it as a simple Flux boilerplate, but the highlight of this project is all about Webpack workflow. You can use it as a seed project to build your own Flux app.

This boilerplate has features as below so far:

* Up-to-date React **v0.14** migrated, including seperated ReactDOM package and tons of new features as well as deprecations. Please check out the upgrade guide of [v0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html).
* **Webpack** bundler.
* **Babel** instead of JSX transformer introduced.
* **Webpack-dev-server** serving and hot swapping.
* **React-hot-loader** livereload.
* **Uglifying** the bundled JavaScript.
* Preprocessing styles in **Sass**. Required resources such as images and font files are bundled altogether into JavaScript. *Note that I use .woff font format and it is transpiled into inline base64 string.*

## Install

1. Make sure you have *npm* and maybe *webpack* installed globally.
2. Download [zip](https://github.com/jasonlam0619/flux-webpack-boilerplate/archive/master.zip) or `git clone git@github.com:jasonlam0619/flux-webpack-boilerplate.git` onto your computer.
2. `cd flux-webpack-boilerplate-master`
3. `npm install`
4. `npm start` to build the bundle with Webpack, and power the server.
5. Visit `localhost: 8080`.

## Outlook

There will be plenty adjustments in the future. Below are those in the picture:

* ES2015 (ECMAScript 6) migration.
* File-loader for Webpack.
