 import React,{Component} from 'react';
 import Headers from './components/Header';
 import Content from './components/Content';
 import Footers from './components/Footer';
 import Qq from './components/Qq';
 import PropTypes from 'prop-types';
 export default class Renders extends Component{
 	constructor(){
 		super();
 		this.state={
 			isHeader:false
 		}
 	}
 	static childContextTypes={
 		name:PropTypes.string
 	}
 	getChildContext(){
 		return {
 			name:'我是Render组件通过context传给当前组件的'
 		}
 	}
 	onHead=(show)=>{
 		this.setState(item=>{
 			return item.isHeader=show
 		})
 	}
 	render(){
 		var Itemstyle={
 			widtht:'100%',
 			height:'100%',
 			display:'flex',
 			flexDirection:'column',
 			overflow:'hidden'
 		}
 		var Item1tyle={
			color:'red',
			textAlign:'center',
			lineHeight:'50px',
			borderBottom:'1px solid yellow',
			cursor:'pointer',
		}
		// <div style={Itemstyle}>
		// 	<Headers isHeader={this.state.isHeader} onHead={this.onHead}></Headers>
		// 	<Content>
		// 		<ul>
		// 			<li>1</li>
		// 		</ul>
		// 	</Content>
		// 	<Footers />
		// </div>
 		return(
 			<div style={Itemstyle}>
 				<Qq />
 			</div>
 		)
 	}
 }