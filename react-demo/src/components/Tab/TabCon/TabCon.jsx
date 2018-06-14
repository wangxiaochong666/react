import React,{Component} from 'react';
import './TabCon.scss';
import emitter from '../../../common/js/emitter';
export default class TabCon extends Component{
	emitfn=()=>{
		emitter.emit('emitfunc','兄歹,是我。')
	}
	render(){
		const active=this.props.activeIndex===this.props.index?'show-con':'';
		return(
			<div className={`hide-con ${active}`}>
				{this.props.content}
				<button onClick={this.emitfn}>同级组件之间的通信</button>
			</div>
		)
	}
}