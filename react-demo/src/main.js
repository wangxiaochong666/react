import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Renders from './Render.js'
import './common/css/index.scss'
import mockJSON from './mock/mock'
import {Provider} from 'react-redux'
import store from './store/store'

mockJSON();
ReactDom.render(
	<Provider store={store}>
		<Renders />
	</Provider>,
	document.querySelector('#root') 
)