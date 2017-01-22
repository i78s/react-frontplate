'use strict';
const webpack = require("webpack");
const entries = require("webpack-entries");
const path = require('path');
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = {
  output: {
    path: path.join(FRP_DEST,'assets/js'),
    publicPath: '/assets',
    filename: "[name].js",
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['./src/js', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre'},
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ],
    exprContextCritical: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: path.join(__dirname,'/../.eslintrc'),
          failOnError: true
        }
      }
    })
  ]
};
module.exports = webpackConfig;
