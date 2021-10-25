const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: path.join(__dirname, './dist'),
    port: 8080,
    hot: true,
  },
});

module.exports = () => developmentConfig;
