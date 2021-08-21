const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/sass/style.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/index.html')
    }),
    new CopyPlugin([{
        from: './src/img',
        to: './img'
      },
      {
        from: './src/fonts',
        to: './fonts'
      }
    ]),
  ],
};
