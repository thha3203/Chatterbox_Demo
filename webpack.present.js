const path = require('path');

module.exports = {
  mode: 'development',
  entry: './srcPresent/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'presentation')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};