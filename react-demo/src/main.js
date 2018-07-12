import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Renders from './Render.js'
import './common/css/index.scss'
import mockJSON from './mock/mock'

mockJSON();
console.log(process)
ReactDom.render(
	<Renders />,
	document.querySelector('#root') 
)