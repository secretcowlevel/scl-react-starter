const webpack = require('webpack');
const path = require('path');
const entry = path.resolve(__dirname, 'src/js/', 'app.jsx');
const pjson = require('./package.json');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: `${pjson.name}.min.js`
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /.(js|jsx)?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                exclude: /node_modules/
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
