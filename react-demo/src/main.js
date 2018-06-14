import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Renders from './Render.js';
import './common/index.scss';
ReactDom.render(
	<Renders />,
	document.querySelector('#root') 
)
 // setTimeout(()=>{
 // 	ReactDom.render(
	// 	<div>我是3秒后改变的值</div>,
	// 	document.querySelector('#root') 
	// )
 // },3000)