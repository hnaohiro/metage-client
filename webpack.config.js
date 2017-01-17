const path = require('path');

module.exports = {
  entry: {
    bundle: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public',
    port: 3000,
    inline: true
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
