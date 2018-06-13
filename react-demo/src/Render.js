 import React,{Component} from 'react';
 import Headers from './components/Header';
 import Content from './components/Content';
 import Footers from './components/Footer';
 export default class Renders extends Component{
 	constructor(){
 		super();
 		this.state={
 			isHeader:false
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
 		return(
 			<div style={Itemstyle}>
 				<Headers isHeader={this.state.isHeader} onHead={this.onHead}></Headers>
 				<Content>
 					<ul>
 						<li>1</li>
 						<li>2</li>
 						<li>3</li>
 						<li>4</li>
 						<li>5</li>
 					</ul>
 				</Content>
 				<Footers />
 			</div>
 		)
 	}
 }