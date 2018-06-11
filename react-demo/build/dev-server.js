const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

// const opn = require('opn')
// var express = require('express')
const server=new WebpackDevServer(compiler,{
	contentBase: path.resolve(__dirname, '../dist'),
	port:3030,
	publicPath: "/",
	hot:true,
})
server.listen(3030,'localhost',function(err){
	if (err) throw err
})