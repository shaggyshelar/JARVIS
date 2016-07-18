const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const swPrecache = require('sw-precache');

function WebpackSwPrecachePlugin(options) {
}

WebpackSwPrecachePlugin.prototype.apply = function(compiler) {
    var rootDir = 'src/www';

    var options = {
      staticFileGlobs: [
      '/src/app/*.css',
      '/src/www/index.html',
      '/src/app/layout/*.js',
      '/src/app/smartHomeApp.js',
      '/src/app/app.js',
      '/src/app/routes/index.js',
      '/node_modules/material-ui/{**,*}.{js,css}',
      '/node_modules/**/**/*.{js,css}',
      '/node_modules/**/*.{js,css}',
      ],
      stripPrefix: rootDir 
  }
    compiler.plugin("after-emit", (compilation, callback) => {
        swPrecache.write(path.join(rootDir,"sw-precache-config.js"), options, function(err){
            if (err) {
                console.log("\n*** sw-precache file creation error: "+err);
            } else {
                console.log("\nCreated sw-precache file static/sw-precache-config.js");
            }
            callback(err);
        })
    });
};

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/routes/index.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
    new WebpackSwPrecachePlugin(),
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      { 
        test: /\.ttf$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.png$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.woff2$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.woff$/,
        loader: 'url-loader?limit=20000000'
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"}
    ],
  },
};

module.exports = config;
