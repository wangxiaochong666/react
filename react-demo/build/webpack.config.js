const path=require('path');
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpckPlugin=require('clean-webpack-plugin');
const extractWebpackPlugin=require('extract-text-webpack-plugin');
const cssEXT=new extractWebpackPlugin('css.css');
const sassEXT=new extractWebpackPlugin('sass.sass');
const config={
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
			},
			{
				test:/\.(css|postcss)$/,
				loader:cssEXT.extract({
					fallback:{
						loader:'style-loader',
						options:{
							sourceMap:true
						}
					},
					use:[
						{
							loader:'css-loader',
							options:{sourceMap:true}

						},
						{
							loader:'postcss-loader',
							options:{sourceMap:true}

						},
					]
				})
			},
			{
				test:/\.(scss|sass)$/,
				loader:cssEXT.extract({
					fallback:{
						loader:'style-loader',
						options:{
							sourceMap:true
						}
					},
					use:[
						{
							loader:'css-loader',
							options:{sourceMap:true}

						},
						{
							loader:'postcss-loader',
							options:{sourceMap:true}

						},
						{
							loader:'sass-loader',
							options:{sourceMap:true}

						},
					]
				})
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
		}),
		cssEXT,sassEXT
	]
}
module.exports=config;