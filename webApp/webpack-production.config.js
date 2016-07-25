const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require("fs");
const swPrecache = require('sw-precache');

function WebpackSwPrecachePlugin(options) {
}

WebpackSwPrecachePlugin.prototype.apply = function(compiler) {
    var rootDir = 'public';

    var options = {
      staticFileGlobs: [
        'public/app.js',
        'public/styles.css',
        'public/assets/images/*.png',
        'public/favicon.ico'
      ],
      stripPrefix: rootDir 
  }
    compiler.plugin("after-emit", (compilation, callback) => {
        swPrecache.write(path.join(rootDir,"sw-precache-config.js"), options, function(err){
            if (err) {
                console.log("\n*** sw-precache file creation error: "+err);
            } else {
              fs.readFile("public/sw.js", "utf-8", function(err, data) {
                fs.appendFile('public/sw-precache-config.js', data, function (err) {
                  console.log("\nCreated sw-precache file static/sw-precache-config.js");
                });
              });
            
            }
            callback(err);
        })
    });
};

const config = {
  entry: [path.join(__dirname, '/src/app/routes/index.js')],
  // Render source-map file for final build
  //devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // // Transfer Files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
    new ExtractTextPlugin("styles.css"),
    new WebpackSwPrecachePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        //exclude: [nodeModulesPath]
      },
      { 
        test: /\.ttf$/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.png$/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.woff2$/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.woff$/,
        loader: 'url-loader?limit=10000'
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"}
    ],
  },
};

module.exports = config;
