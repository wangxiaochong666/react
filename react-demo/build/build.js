const path=require('path');
const merge = require('webpack-merge');
const htmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpckPlugin=require('clean-webpack-plugin');
const extractWebpackPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const cssEXT=new extractWebpackPlugin({
  filename: 'static/css/css.css',
});
const sassEXT=new extractWebpackPlugin({
  filename: 'static/css/css.css',
});
const baseConfig = require('./base');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const buildConfig = merge(baseConfig,{
	mode: 'production',
	module:{
		rules:[
			
			{
				test:/\.(css|postcss)$/,
				include: [resolve('src')],
				loader:cssEXT.extract({
					fallback:{
						loader:'style',
						options:{
							sourceMap:true
						}
					},
					use:[
						{
							loader:'css',
							options:{sourceMap:true}

						},
						{
							loader:'postcss',
							options:{sourceMap:true}

						},
					]
				})
			},
			{
				test:/\.(scss|sass)$/,
				include: [resolve('src')],
				loader:cssEXT.extract({
					fallback:{
						loader:'style',
						options:{
							sourceMap:true
						}
					},
					use:[
						{
							loader:'css',
							options:{sourceMap:true}

						},
						{
							loader:'postcss',
							options:{sourceMap:true}

						},
						{
							loader:'sass',
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
		new copyPlugin([
	      {
	        from: resolve('static'),
	        to: resolve('dist/static'),
	        ignore: ['.*']
	      }
	    ]),
		new UglifyJsPlugin(),
		new htmlWebpackPlugin({
			title:'react-demo',
			template:'index.html',
			minify:{
				collapseWhitespace: true,
			}
		}),
		cssEXT,sassEXT,
		
	]
})
module.exports = buildConfig