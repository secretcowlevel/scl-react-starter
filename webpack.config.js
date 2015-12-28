var Webpack = require('webpack');
var path = require('path');
var pjson = require('./package.json');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/js/app.jsx'
    ],

    output: {
        path: path.join(__dirname, 'js'),
        filename: pjson.name + '.min.js',
        publicPath: 'http://localhost:8080/js/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
};
