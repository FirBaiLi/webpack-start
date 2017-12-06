/**
 * Created by HuJunjie on 2017/11/29.
 */
const path = require('path');
const htmlWebpakPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index:'./src/index.js',
    print: './src/print.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),  // 每次build前都将dist清空
    // 动态添加bundle文件
    // 由于可能会修改入口文件名活出口文件名
    // 会影响自定义的index的文件引入的输出文件名，
    // 用这个插件可以自动根据配置生成index文件，如果之前存在这个文件会被覆盖
    new htmlWebpakPlugin({title: '自动生成一个index文件'}),
    new webpack.HashedModuleIdsPlugin(),  //（module.id 模块标识符） vendor的hash不会发生变化，别的文件hash变化是正常
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'  // （模板的提取）一般第三方资源改动较少 将第三方资源存在vendor缓存中，减少第三方的请求
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'  // 两个模块都有加载loadch,budle中会重复，将重复的放在同一个文件
    })

    // new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"   // 使用前需要安装 样式加载
          }
        ]
      }
    ]
  }
};