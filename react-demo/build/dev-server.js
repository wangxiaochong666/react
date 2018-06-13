const path=require('path');
const webpack=require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const devConfig = merge(baseConfig,{
	mode: 'development',
	module:{
		rules:[
			{
				test: /\.(css|postcss)/,
				use: [
				  { loader: 'style-loader', options: { sourceMap: true } },
				  { loader: 'css-loader', options: { sourceMap: true } },
				  { loader: 'postcss-loader', options: { sourceMap: true } }
				]
			},
			{
				test: /\.(sass|scss)/,
				use: [
					{ loader: 'style-loader', options: { sourceMap: true } },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},
		]
	},
	devServer:{
		//打开浏览器
		open:true,
		// 热加载
	    hot: true,
	    // 内联样式
	    inline: true,
		//端口
		port:3030,
		//入口
		contentBase:resolve('dist'),
		//信息提示
		noInfo:false,
		//主机
		host:'localhost', 
		//统计 stats
		//不跳转 
		historyApiFallback:true
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
})
module.exports = devConfig