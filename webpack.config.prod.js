const config = {
  entry: './client.js',
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: './js/bundle.js',
    path: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
};

module.exports = config;
