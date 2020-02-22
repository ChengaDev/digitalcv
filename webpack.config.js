const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var outputPath = path.normalize('C:distdigitalCV');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true
      })
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: __dirname + '/node_modules',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: __dirname + '/node_modules',
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: __dirname + '/node_modules',
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: __dirname + '/node_modules',
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
            name: '[name].[ext]',
            publicPath: 'fonts'
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  stats: {
    colors: true
  }
};
