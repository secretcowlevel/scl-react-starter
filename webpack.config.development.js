const webpack = require('webpack')
// const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base')


const config = Object.assign({}, baseConfig)

// config.debug = true;
config.mode = 'development'

config.devtool = 'cheap-module-eval-source-map'

config.entry = [
    'react-hot-loader/patch',
    './src/js/'
]

config.devServer = {
    historyApiFallback: true
}

config.output.publicPath = '/dist'

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
)

module.exports = config
