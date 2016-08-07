var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'app/assets/');
var APP_DIR = path.resolve(__dirname, '');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  module : {
    loaders : [      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        include: APP_DIR + 'css/src/',
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
      }
    ]
  },
  postcss: [autoprefixer]
};

module.exports = config;
