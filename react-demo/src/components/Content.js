import React,{Component,Children} from 'react';
export default class Content extends Component{
	render(){
		var Itemstyle={
			flex:1,
			overflowY:'auto'
		}
		return(
			<div style={Itemstyle}>
				{Children.map(this.props.children,(item)=>{
					return item
				})}
			</div>
		)
	}
}