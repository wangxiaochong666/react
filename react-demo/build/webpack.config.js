var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var cleanWebpckPlugin=require('clean-webpack-plugin');
var config={
	mode:'development',
	entry:{
		main:`./src/main.js`,
	},
	output:{
		filename:'js/[name]-[hash:5].js',
		path:path.join(__dirname,'..','dist')
	},
	devtool: 'inline-source-map',
	devServer:{
		//端口
		port:3030,
		//自动刷新
		inline:true,
		contentBase:'/dist',
		//信息提示
		noInfo:false,
		//主机 host
		//统计 stats
		//热更新 hot
		//打开浏览器 open
		//不跳转 historyApiFallback
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				use:['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins:[
		new cleanWebpckPlugin(['dist'],{
			root:path.join(__dirname,'..')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			title:'react-demo',
			template:'index.html',
		})
	]
}
module.exports=config;