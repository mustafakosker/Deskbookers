import path from 'path';

const webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000/',
    'webpack/hot/only-dev-server',
    'babel-polyfill', 'App.jsx', 'app.scss'
  ],
  output: {
    publicPath: 'http://localhost:3000/build/',
    filename: 'deskbookers.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./src/components'),
      path.resolve('./src/constants')
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000
  }
};

export default webpackConfig;
