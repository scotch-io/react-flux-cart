react-flux-cart
===============

## Overview

**Original branch** was coded for the tutorial by [@kenwheeler](https://twitter.com/ken_wheeler): [Create a Shopping Cart Using React.js and Flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux).

This forked branch has additional features below:

* Up-to-date React 0.14.0 migrated, including seperated ReactDOM package.
* All JavaScript bundled with Webpack.
* Babel instead of JSX transformer introduced.
* Underscore.js discarded. It was total overkill for just object merging. Instead, `react/lib/Object.assign` is used.
* `http-server` for powering the server.

**Updated:**

* `http-server` deprecated, `webpack-dev-server` introduced instead.
* `react-hot-loader` introduced as a livereload watcher.
* `bundle.js` compressed with `uglify-loader`, size shrunk considerably.
* Preprocessing styles in Sass. Related packages are added to compile Sass into `bundle.js`.

## Install

1. Make sure you have *npm* and maybe *webpack* installed globally.
2. Download [zip](https://github.com/jasonlam0619/react-flux-cart/archive/master.zip) or `git clone git@github.com:jasonlam0619/react-flux-cart.git` onto your computer.
2. `cd react-flux-cart`
3. `npm install`
4. `npm start` to build the bundle with Webpack, and power the server.
5. Visit `localhost: 8080` and begin shopping.

## Outlook

There will be plenty adjustments in the future. Below are those in the picture:

* ES2015 (ECMAScript 6) migration.
* ~~Preprocess styles with Sass.~~ **Done.**
* ~~Gulp for translating Sass and minifying images.~~ **Canceled.**
* ~~Webpack Dev Server instead of http-server.~~ **Done.**
* ~~Livereload.~~ **Done.**
