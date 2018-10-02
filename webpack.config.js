const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

// const HotModuleReplacement = new HtmlWebpackPlugin = new HtmlWebPackPlugin({
//     template: './client/index.html',
//     filename: './index.html',
//   });

module.exports = {
    entry: './Client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'Client'),
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { presets: ['env', 'react'] },
          },
          {
            test: /\.(sc|c)ss$/,
            use: [
              'style-loader', 'css-loader', 'sass-loader',
            ],
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=5000&mimetype=application/font-woff',
          },
          {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=5000',
          },
          {
            test: /\.(jpg|png|svg)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
          },
        ],
      },
      plugins: [
          new HtmlWebpackPlugin({
            template: './Client/index.html'
          })
      ]
}
