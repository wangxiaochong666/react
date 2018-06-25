const path=require('path');
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
		filename:'static/js/[name]-[hash:5].js',
		path:path.join(__dirname,'..','dist'),
		publicPath: '/'
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
				use:['babel'],
				include: [resolve('src')],
			},
		]
	},
}
module.exports=config;