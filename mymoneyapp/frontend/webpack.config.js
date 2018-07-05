const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    // modules: ['node_modules'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      root: path.resolve(__dirname),
      common: 'root/common/',
      components: path.resolve(__dirname, 'components'),
      jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min',
      bootstrap:
        'modules/admin-lte/dist/js/plugins/bootstrap/js/bootstrap.bundle.min.js'
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './public')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.png|.svg|.jpg*.*$/,
        loader: 'file-loader'
      }
    ]
  }
};
