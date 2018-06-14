import React,{Component} from 'react';
import './TabTit.scss';
export default class TabTit extends Component{
	showItem=()=>{
		this.props.showContent(this.props.index)
	}
	render(){
		const active=this.props.activeIndex===this.props.index?'active':'';
		return(
			<span className={`title-item ${active}`} onClick={this.showItem}>{this.props.title}</span>
		)
	}
}