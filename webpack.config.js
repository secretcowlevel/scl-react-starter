// const Webpack = require('webpack');
const path = require('path');
const pjson = require('./package.json');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
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
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /.(js|jsx)?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                exclude: /node_modules/
            }]
    },
    plugins: [
    ]
};
