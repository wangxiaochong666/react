const path=require('path');
// const extractWebpackPlugin=require('extract-text-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const config={
	// 模式
    mode: 'none',
    // 目标
    target: 'web',
	entry:{
		main:`./src/main.js`,
	},
	// 上下文
    context: resolve('.'),
	output:{
		filename:'js/[name]-[hash:5].js',
		path:path.join(__dirname,'..','dist')
	},
	resolve:{
		extensions: ['.js', '.jsx','.json'],
		alias: {
	    	'@': resolve('src'),
	    }
	},
	resolveLoader:{
		moduleExtensions: [ '-loader' ]
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				use:['babel-loader'],
				include: [resolve('src')],
			},
			// {
				// 	test:/\.(css|scss|sass)$/,
				// 	include: [resolve('src')],
				// 	use:extractWebpackPlugin.extract({
				// 		fallback:{
				// 			loader:'style',
				// 			options:{
				// 				sourceMap:true
				// 			}
				// 		},
				// 		use:[
				// 			{
				// 				loader:'css',
				// 				options:{sourceMap:true}

				// 			},
				// 			{
				// 				loader:'postcss',
				// 				options:{sourceMap:true}

				// 			},
				// 			{
				// 				loader:'sass',
				// 				options:{sourceMap:true}

				// 			},
				// 		]
				// 	})
			// }
		]
	},
}
module.exports=config;