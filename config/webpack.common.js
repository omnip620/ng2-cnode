var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor'   : './src/vendor.ts',
    'app'      : './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.styl']
  },

  module : {
    loaders: [
      {
        test   : /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test  : /\.html$/,
        loader: 'html'
      },
      {
        test  : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test   : /\.styl$/,
        include: [helpers.root('src')],
        loader : 'raw-loader!stylus-loader'
      },
      {
        test   : /\.css$/,
        include: helpers.root('src', 'app'),
        loader : 'raw'
      },
      {
        test   : /\.styl$/,
        exclude: [helpers.root('src')],
        loader : ExtractTextPlugin.extract('css-loader!stylus-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
