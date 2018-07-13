import React,{Component} from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux' 

var changeName=(props)=>{
	const {dispatch,totle}=props;
	if(totle<10){
		dispatch({
			type:'CHANGE'
		})
	}
	
}
const Mine=(props)=>{
	return (
		<div>
			<Header title={props.name+props.totle} />
			<button onClick={()=>{changeName(props)}}>改变state.mine的name属性</button>
			<Content />
			<ul>
				<li><Link to={`${props.match.url}/one`}>二级1</Link></li>
				<li><Link to={`${props.match.url}/two`}>二级2</Link></li>
				<li><Link to={`${props.match.url}/three`}>二级3</Link></li>
			</ul>
			<Footer />
		</div>
	)
}
// export default Mine;
const mapStateToProps=(state,action)=>{
	// console.log(state.mine)
	return {
		name:state.mine.name,
		totle:state.mine.totle
	}
}
export default connect(mapStateToProps)(Mine);