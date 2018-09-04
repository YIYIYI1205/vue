const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name]-[hash].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: "首页",
    // filename:"index.html",
    template:"./src/index1.html"
  }),
   new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude:/node_modules/
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader','css-loader' ],
      },
      {

        test: /\.(eot|svg|ttf|woff|woff2)$/,

        loader:"url-loader",

        options: {

          name: '[name].[ext]?[hash]'

        }

      }
    ]
  },
  // babel:{
  //   presets:["es2015"],
  //   plugins:["transform-routime"]
  // }
};