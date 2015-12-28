var webpack = require('webpack');
var path = require('path');
var entry = path.resolve(__dirname, 'src/js/', 'app.jsx');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var pjson = require('./package.json');
var CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: pjson.name + '.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: [nodeModulesPath]
            },
            {
                test: /\.js$/,
                exclude: [nodeModulesPath],
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new CompressionPlugin()
    ]

};
