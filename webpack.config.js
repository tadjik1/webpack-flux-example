var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'eslint-loader'
    //  }
    //],

    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'scripts')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.gif/,
        loaders: ['url-loader'],
        query: {limit:10000, mimetype: 'image/gif'}
      },
      {
        test: /\.jpg/,
        loaders: ['url-loader'],
        query: {limit:10000, mimetype: 'image/jpg'}
      },
      {
        test: /\.png/,
        loaders: ['url-loader'],
        query: {limit:10000, mimetype: 'image/png'}
      },
      {
        test: /\.svg/,
        loaders: ['url-loader'],
        query: {limit:10000, mimetype: 'image/svg+xml'}
      }
    ]
  }
};
