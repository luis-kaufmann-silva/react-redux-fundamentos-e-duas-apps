const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        // modules: ['node_modules'],
        alias: {
            root: path.resolve(__dirname, "app"),
            components: path.resolve(__dirname, "app/components"),
            utils: path.resolve(__dirname, "app/utils"),
        },
        extensions: ['*', '.js', '.jsx'],
    },    
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, './public'),
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }

}