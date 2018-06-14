import React,{Component} from 'react';
export default class Footers extends Component{
	render(){
		var Itemstyle={
			color:'red',
			textAlign:'center',
			lineHeight:'50px',
			borderTop:'1px solid yellow',
			cursor:'pointer',
		}
		return(
			<div style={Itemstyle}>footer</div>
		)
	}
}