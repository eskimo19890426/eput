// // // //打包 上线发布的时候用
// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
// var path = require('path');

// const BabiliPlugin = require("babili-webpack-plugin");
// module.exports = {
//   devServer: {
//     historyApiFallback: true,
//   },
//   context: path.join(__dirname),  // devtool:debug ? "inline-sourcemap" : null,
//   entry: {
//     bundle:["@babel/polyfill","./src/js/root.js"],
//     vendor:['react','antd','jquery','echarts'],
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react', 'stage-1'],
//           plugins: ['react-html-attrs'], //添加组件的插件配置
//         }
//       },
//       { test: /\.css$/, loader: 'style-loader!css-loader' },//下面是使用 ant-design 的配置文件
//       {
//         test: /\.less$/,
//         use: [{
//           loader: "style-loader" // creates style nodes from JS strings
//         }, {
//           loader: "css-loader" // translates CSS into CommonJS
//         }, {
//           loader: "less-loader" // compiles Less to CSS
//         }]
//       }
//     ]
//   },
//   output: {
//     path: __dirname+'/src/',
//     filename: '[name].js',
//   },
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false,compress:{warnings:false} }),
//     new BabiliPlugin(),
//     new webpack.optimize.CommonsChunkPlugin({
//       name:'vendor'
//     })
//   ],
// };

// //修改 代码调试的时候用
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["@babel/polyfill","./src/js/root.js"],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },//下面是使用 ant-design 的配置文件
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js",
    publicPath:'http://localhost:8074'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false,compress:{warnings:false} }),
  ],
};