const path = require('path');
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'app/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
        // packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop')
    ],
    externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
    ]
};
