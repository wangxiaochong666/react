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
			type:'CHANGE-STATE',
			idx
		})
	}
	render(){
		return(
			<div className='con-container'>
				<div className='con-tit'>
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