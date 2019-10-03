const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseDir = path.resolve(__dirname, '../app');

module.exports = {
  entry: {
    main: './app/main.jsx'
  },
  // optimization
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CopyWebpackPlugin([
      path.resolve(baseDir, 'config/config.json'),
      {
        from: path.resolve(baseDir, 'config/locales'),
        to: 'locales'
      },
      {
        from: {
          glob: './images/**/*',
          dot: true,
        },
      },
      {
        from: {
          glob: './public/assets/**/*',
          dot: true,
        },
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(svg|png|jpg|ttf|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  }
};