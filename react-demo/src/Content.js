import React,{Component} from 'react';
export default class Content extends Component{
	render(){
		var Itemstyle={
			flex:1,
			overflowY:'auto'
		}
		return(
			<div style={Itemstyle}>
				<div height=900></div>
			</div>
		)
	}
}