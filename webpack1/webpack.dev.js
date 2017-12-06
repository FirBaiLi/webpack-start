/**
 * Created by HuJunjie on 2017/11/29.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common,{  // 将common配置和dev配置合并
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist'
  }
})