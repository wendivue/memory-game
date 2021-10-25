const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

const CssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    modules: true,
  },
};

const config = {
  entry: `${PATHS.src}/index.js`,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, PATHS.dist),
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, `${PATHS.src}`),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(s)css$/,
        use: ['style-loader', CssLoader, 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${PATHS.src}/index.html` }),
    new CopyPlugin({
      patterns: [{ from: `${PATHS.src}/public` }],
    }),
  ],
};

module.exports = config;
