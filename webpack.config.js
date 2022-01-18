const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'assets/index.html',
      }),
      new ESLintPlugin({
        extensions: ['.tsx', '.ts'],
      }),
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    optimization: {
      minimizer: [new CssMinimizerPlugin(), '...'],
    },
  };
};
