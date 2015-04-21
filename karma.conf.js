module.exports = function (config) {
  config.set({
    'frameworks': [
      'mocha',
      'chai-as-promised',
      'chai',
      'sinon'
    ],
    'browsers': ['PhantomJS'],
    'files': [
      './phantomjs-shim.js',
      'scripts/**/__tests__/*.js'
    ],
    'preprocessors': {
      'scripts/**/__tests__/*.js': ['webpack']
    },
    'webpackMiddleware': {'noInfo': true},
    'reporters': [
      'mocha',
      'coverage',
      'notify'
    ],
    'plugins': [
      'karma-webpack',
      'karma-mocha',
      'karma-chai-as-promised',
      'karma-chai',
      'karma-sinon',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-notify-reporter'
    ],
    'coverageReporter': {
      'dir': 'coverage',
      'reporters': [
        {'type': 'html'}
      ]
    },
    'webpack': {
      'entry': './scripts/index.js',
      'debug': true,
      'devtool': 'eval',
      'output': {
        'path': './build',
        'publicPath': 'http://localhost:8080/',
        'filename': 'index.js'
      },
      'module': {
        'preLoaders': [
          {
            'test': /\.js/,
            'exclude': /(__tests__|node_modules)/,
            'loader': 'isparta-instrumenter-loader'
          }
        ],
        'loaders': [
          {
            'test': /\.js/,
            'exclude': /node_modules/,
            'loaders': ['babel']
          },
          {
            'test': /\.js/,
            'exclude': /node_modules/,
            'loaders': [
              'react-hot',
              'babel'
            ]
          },
          {
            test: /\.styl/,
            loader: 'style!css!stylus'
          },
          {
            test: /\.css$/,
            loader: 'style!css'
          },
          {
            test: /\.png$/,
            loader: 'url?limit=100000&mimetype=image/png'
          },
          {
            test: /\.svg$/,
            loader: 'url?limit=100000&mimetype=image/svg+xml'
          },
          {
            test: /\.gif$/,
            loader: 'url?limit=100000&mimetype=image/gif'
          },
          {
            test: /\.jpg$/,
            loader: 'file'
          }
        ]
      },
      'resolve': {
        'extensions': [
          '',
          '.js'
        ]
      }
    }
  });
};
