const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const productionConfig = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
});

module.exports = () => productionConfig;
