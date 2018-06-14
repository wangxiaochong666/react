import React,{Component} from 'react';
 export default class Headers extends Component{
 	static defaultProps={
 		isHeader:true,
 	}
 	onHead=(e)=>{
 		const {isHeader,onHead} =this.props;
 		onHead(!isHeader);
 	}
 	//子组件改变父组件的父组件props才会触发该事件
 	componentWillReceiveProps(nextProps){
 		console.log(this.props,nextProps)
 	}
 	render(){
 		var like=this.props.isHeader?'喜欢':'不喜欢';
 		var Itemstyle={
 			color:'red',
 			textAlign:'center',
 			lineHeight:'50px',
 			borderBottom:'1px solid yellow',
 			cursor:'pointer',
 		}
 		return(
 			<div onClick={this.onHead} style={Itemstyle}>我是{like}header</div>
 		)
 	}
 }