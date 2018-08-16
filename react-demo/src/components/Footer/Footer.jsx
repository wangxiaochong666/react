import React,{Component} from 'react';
import {Route,NavLink,BrowserRouter as Router} from 'react-router-dom';
export default class Footers extends Component{
	render(){
		var Itemstyle={			
			width:'100%',
			height:'50px',
			background:'#fff',
			position:'fixed',
			bottom:0,
			left:0,
			borderTop:'1px solid yellow',
			cursor:'pointer',
			display:'flex'
		},
		spanStyle={
			flex:1,
			textAlign:'center',
			lineHeight:'50px'
		}
		return(
			<div style={Itemstyle}>
				<NavLink activeStyle={{background:'green'}} to='/home' style={spanStyle}>首页</NavLink>
				<NavLink activeStyle={{background:'green'}} to='/list' style={spanStyle}>列表</NavLink>
				<NavLink activeStyle={{background:'green'}} to='/shop' style={spanStyle}>购物车</NavLink>
				<NavLink activeStyle={{background:'green'}} to='/mine' style={spanStyle}>我的</NavLink>
			</div>
		)
	}
}