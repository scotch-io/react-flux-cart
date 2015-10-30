var path    = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/js/App.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(woff|png)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, './app/scss/')]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.NoErrorsPlugin()
  ]

};