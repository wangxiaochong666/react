import React,{Component} from 'react';
import './Lists.scss';
export default class Lists extends Component{
	constructor(props){
		super(props);
		this.state={
			startX:0,
			touchX:0,
		}
	}
	touchstart=(e)=>{
		this.setState({
			startX:e.touches[0].clientX
		})
	}
	touchmove=(e)=>{
		var {startX}=this.state;
		this.setState({
			touchX:e.touches[0].clientX-startX
		})

	}
	touchend=(e)=>{
		var {touchX}=this.state;

		if(touchX<0){
			this.props.changeList(this.props.idx);
		}
		// else{
		// 	e.target.style.transform='translateX(0px)'
		// }
	}
	render(){
		var action=this.props.states?'action':'';
		return (
			<div className={`list-item ${action}`}
			onTouchStart={this.touchstart}
			onTouchMove={this.touchmove}
			onTouchEnd={this.touchend}>
				<img src={this.props.src} />
				<span>{this.props.title}</span>
			</div>
		)
	}
}