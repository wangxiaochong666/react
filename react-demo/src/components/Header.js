import React,{Component} from 'react';
 export default class Headers extends Component{
 	static defaultProps={
 		isHeader:true
 	}
 	render(){
 		var like=this.props.isHeader?'喜欢':'不喜欢';
 		var Itemstyle={
 			color:'red',
 			textAlign:'center',
 			lineHeight:'50px',
 			borderBottom:'1px solid #ccc',
 			cursor:'pointer'
 		}
 		return(
 			<div onClick={this.props.onHead} style={Itemstyle}>我是{like}header</div>
 		)
 	}
 }