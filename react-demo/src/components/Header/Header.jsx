import React,{Component} from 'react';
const Headers=(props)=>{
	var Itemstyle={
		color:'red',
		textAlign:'center',
		lineHeight:'50px',
		borderBottom:'1px solid yellow',
		cursor:'pointer',
	}
	return(
		<div style={Itemstyle}>{props.title?props.title:"首页"}</div>
	)
}
export default Headers;