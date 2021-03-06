import React,{Component,Children} from 'react';
import ReactDom from 'react-dom';
import Tab from '../Tab';
export default class Content extends Component{
	componentDidMount(){
		//获取当前组件的实例
		// console.log(ReactDom.findDOMNode(this))
		
		// console.log(this.refs['input'])
		// console.log(this.inp1)

	}
	render(){
		var Itemstyle={
			flex:1,
			overflowY:'auto'
		}
		// 返回子组件的总数量
		// console.log(Children.count(this.props.children))
		return(
			<div style={Itemstyle}>
				{Children.map(this.props.children,(item)=>{
					return item
				})}
				{/*
					<div ref='input'></div>
					<div ref={e=>this.inp1=e}></div>
				*/}
				<Tab />
			</div>
		)
	}
}