const path = require('path')
const baseConfig = require('./webpack.config.base')
const config = Object.assign({}, baseConfig)
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// config.debug = true;
config.mode = 'production'

config.devtool = 'source-map'

config.output.publicPath = 'dist/'

config.entry = [
  './src/js/'
]

config.output = {
  filename: '[name].[chunkhash].js',
  chunkFilename: '[name].[chunkhash].chunk.js',
  path: path.join(__dirname, '/dist')
}

config.optimization = {
  nodeEnv: 'production',
  minimize: true
}

config.plugins.push(
  // new BundleAnalyzerPlugin()
)

module.exports = config
