import React,{Component} from 'react';
 export default class Headers extends Component{
 	static defaultProps={
 		title:'首页'
 	}
 	render(){
 		var Itemstyle={
 			color:'red',
 			textAlign:'center',
 			lineHeight:'50px',
 			borderBottom:'1px solid yellow',
 			cursor:'pointer',
 		}
 		return(
 			<div style={Itemstyle}>{this.props.title}</div>
 		)
 	}
 }