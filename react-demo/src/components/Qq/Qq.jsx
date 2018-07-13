import React,{Component} from 'react'
import './Qq.scss'
import Lists from './Lists'
import Footer from '../Footer'
import {connect} from 'react-redux' 

class Qq extends Component{
	constructor(){
		super();
	}
	deleteFn=(idx)=>{
		this.props.dispatch({
			type:'DELETE',
			idx
		})
	}
	changeList=(idx)=>{
		this.props.dispatch({
			type:'CHANGE-STATE'
		})
		// var flag=true;
		// var newList=[...this.state.lists];
		// for(var i=0;i<newList.length;i++){
		// 	if(newList[i].states===1){
		// 		newList[i].states=0;
		// 		flag=false;
		// 	}
		// }
		// if(!flag){
		// 	this.setState(item=>{
		// 		return item.lists=newList
		// 	})
		// }else{
		// 	this.setState(item=>{
		// 		return item.lists[idx].states=1;
		// 	})
		// }	
	}
	render(){
		return(
			<div className='over-dom-box'>
				<div className='over-dom-content'>
					{
						this.props.lists.map((item,idx)=>{
							return <Lists key={idx}
							title={item.title}
							idx={idx}
							src={item.src} 
							states={item.states}
							deleteFn={this.deleteFn}
							changeList={this.changeList} />
						})
					}
				</div>
				<Footer />
			</div>
		)
	}
}
const mapStateToProps=(state,action)=>{
	return {
		lists:state.shop.lists,
	}
}
export default connect(mapStateToProps)(Qq)