import React,{Component} from 'react';
import './Lists.scss';
import PropTypes from 'prop-types';
export default class Lists extends Component{
	constructor(props){
		super(props);
		this.state={
			startX:0,
			touchX:0,
		}
	}
	static propTypes={
		title:PropTypes.string,
		states:PropTypes.number,
		changeList:PropTypes.func,
		src:PropTypes.string.isRequired
	}
	static defaultProps={
		src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3726983732,1319823109&fm=27&gp=0.jpg'
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
			this.setState({
				startX:0,
				touchX:0
			})
		}
	}
	deleteFn=(e)=>{
		this.props.deleteFn(this.props.idx)
	}
	get action(){
		return this.props.states?'action':'';
	}
	set titleFn(val){
		if(this.props.title.indexOf('列表')!==-1){
			this.title=val+this.props.title.split('列表')[1]
		}
	}
	render(){
		this.titleFn='我是你的好友'
		return (
			<div className={`list-item trans ${this.action}`}
			onTouchStart={this.touchstart}
			onTouchMove={this.touchmove}
			onTouchEnd={this.touchend}>
				<img src={this.props.src} />
				<span>{this.title}</span>
				<div className='delete' onClick={this.deleteFn}>删除</div>	
			</div>
		)
	}
}