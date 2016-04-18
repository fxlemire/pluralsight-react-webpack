'use strict'; // eslint-disable-line strict
const path = require('path');
const webpack = require('webpack');

const config = {
  client: './src/client/',
  public: '/public/'
};

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      `${config.client}main.js`
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, config.public),
    publicPath: config.public
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, config.client),
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, config.client),
        loader: 'style!css!sass'
      }
    ]
  }
};
