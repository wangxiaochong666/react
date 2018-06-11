 import React,{Component} from 'react';
 import Headers from './components/Header.js';
 export default class Renders extends Component{
 	constructor(){
 		super();
 		this.state={
 			isHeader:false
 		}
 	}
 	onHead(){
 		this.setState(item=>{
 			return item.isHeader=!this.state.isHeader
 		})
 	}
 	render(){
 		return(
 			<div>
 				<Headers isHeader={this.state.isHeader} onHead={::this.onHead}></Headers>
 			</div>
 		)
 	}
 }