import React,{Component} from 'react';
import './TabCon.scss';
export default class TabCon extends Component{
	render(){
		const active=this.props.activeIndex===this.props.index?'show-con':'';
		return(
			<div className={`hide-con ${active}`}>{this.props.content}</div>
		)
	}
}