const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/',
  },
  resolve: {
    fallback: {
      "url": require.resolve("url/"),   // Polyfill for 'url'
      "http": require.resolve("stream-http"),  // Polyfill for 'http' if needed
      "https": require.resolve("https-browserify"),  // Polyfill for 'https'
      "buffer": require.resolve("buffer/"),  // Polyfill for 'buffer'
      "stream": require.resolve("stream-browserify"),  // Polyfill for 'stream'
      "crypto": require.resolve("crypto-browserify"),  // Polyfill for 'crypto' if required
      "os": require.resolve("os-browserify/browser"),  // Polyfill for 'os'
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,   // Rule for JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpile modern JS to older versions using Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-import-attributes']  // Enable import attributes syntax if necessary
          },
        },
      },
      {
        test: /\.css$/,  // Rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Rule for image files
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,  // Development server port
    historyApiFallback: true,  // For React Router (SPA)
  },
};
