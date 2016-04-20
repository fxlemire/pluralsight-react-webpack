'use strict'; // eslint-disable-line strict
const config = require('./gulp.config');
const path = require('path');
const webpack = require('webpack');

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
    path: path.join(__dirname, config.build),
    publicPath: config.build.slice(1) // eslint-disable-line no-magic-numbers
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, config.client),
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive: true, optimizationLevel: 7, interlaced: false, pngquant: {quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.spec.js$/,
        include: path.join(__dirname, './test/'),
        loader: 'babel'
      }
    ]
  }
};
