const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const pjson = require('./package.json');


module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/js/app.jsx'
    ],

    output: {
        path: path.join(__dirname, 'js'),
        filename: `${pjson.name}.min.js`,
        publicPath: 'http://localhost:8080/js/'
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }],
        resolveLoader: {
            packageMains: ['json-loader']
        }
    },
    plugins: [
        new DashboardPlugin()
    ]
};
