import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
const Headers=(props)=>{
	var Itemstyle={
		color:'red',
		textAlign:'center',
		lineHeight:'50px',
		borderBottom:'1px solid yellow',
		cursor:'pointer',
		position:'relative'
	},spanStyle={
		position:'absolute',
		top:0,
		left:0,
		padding:'0 10px'
	},{location,history}=props;
	return(
		<div style={Itemstyle}>
			{
				/\/mine/.test(location.pathname)?
				<span style={spanStyle} onClick={()=>{history.push('/home')}}>返回</span>
				:null
			}
			{props.title?props.title:"首页"}
		</div>
	)
}
export default withRouter(Headers);