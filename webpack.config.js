var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/app/react",
  entry: "./index.js",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  externals: {jquery: 'var jQuery'},
  plugins: [
    new ExtractTextPlugin('../stylesheets/bundle.css', {
      allChunks: true
    })
  ]
};
