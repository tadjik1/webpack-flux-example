var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({

    files: [
      'scripts/**/*-test.js'
    ],

    browsers: ['Firefox'],

    frameworks: ['mocha', 'chai-as-promised', 'chai', 'sinon'],

    preprocessors: {
      'scripts/**/*-test.js': ['webpack']
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'text'},
        {type: 'html'}
      ]
    },

    webpack: {
      devtool: 'eval',
      preLoaders: {
        test: /\.jsx?$/,
        exclude: /(__tests__|node_modules)/,
        loader: 'isparta-instrumenter-loader'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'scripts')
          },
          {
            test: /\.css$/,
            loaders: ['null-loader']
          },
          {
            test: /\.styl/,
            loaders: ['null-loader']
          }
        ]
      }
    },

    reporters: ['mocha', 'coverage', 'notify'],

    webpackMiddleware: {
      noInfo: true
    }

  });
};
