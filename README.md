react-flux-cart
===============

## Overview

**Original master branch** was coded for the tutorial by [@kenwheeler](https://twitter.com/ken_wheeler): [Create a Shopping Cart Using React.js and Flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux).

This forked branch has additional features below:

* Up-to-date React 0.14.0 migrated, including seperated ReactDOM package.
* All JavaScript bundled with Webpack.
* Babel instead of JSX transformer introduced.
* Underscore discarded. It was total overkill for just object merging. Instead, `react/lib/Object.assign` is introduced.
* `http-server` for powering the server.

## Install

1. Download [zip](https://github.com/jasonlam0619/react-flux-cart/archive/master.zip) or `git clone git@github.com:jasonlam0619/react-flux-cart.git` onto your computer.
2. `cd react-flux-cart`
3. `npm install`
4. `npm start` to build the bundle with Webpack, and power the server.
5. Visit `localhost: 3000` and begin shopping.