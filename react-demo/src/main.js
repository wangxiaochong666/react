import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Renders from './Render.js';
import './common/css/index.scss';
ReactDom.render(
	<Renders />,
	document.querySelector('#root') 
)