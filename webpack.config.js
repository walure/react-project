const path = require('path');

module.exports = {
  entry:'./app/index.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'temp/'//动态更新首页地址
  },
  devServer:{
    contentBase:'./',//设置目录,
    host:'localhost',//访问地址
    compress:true,//是否压缩
    port:3000
  },
  module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        },
        {
          test:/\.css$/,
          loader:['style-loader','css-loader']
        }
    ]
  }
}