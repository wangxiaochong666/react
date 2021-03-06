import React,{Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {connect} from 'react-redux';
function f(props){
	props.history.push('/mine')
}
const changeCount=(e,props)=>{
	if(!isNaN(e.target.value)){
		props.dispatch({
			type:'CHANGECOUNT',
			count:e.target.value
		})
	}
},addCount=(e,props)=>{
	props.dispatch({
		type:'ADDRED',
		add:true
	})
},reduceCount=(e,props)=>{
	if(props.allMoney-props.count*1>0){
		props.dispatch({
			type:'ADDRED',
			add:false
		})
	}
},goSearch=({history})=>{
	history.push('/search')
}

const Home=(props)=>{
	return (
		<div className='con-container'>
			<div className='con-tit'>
				<Header />
					<div>
						<input type="text" placeholder='搜索' onFocus={()=>goSearch(props)} />
					</div>
					<div>
						<button onClick={()=> f(props)}>go Mine-page</button>
					</div>
					{
						props.location.query&&props.location.query.search&&<div>
						<button onClick={(e)=>{addCount(e,props)}}>加</button>
						<input type="text" value={props.count} onChange={(e)=>{changeCount(e,props)}} />
						<button onClick={(e)=>{reduceCount(e,props)}}>减</button>
						<div>合计：{props.allMoney}</div>
					</div>
					}
			</div>
			<Footer />
		</div>
	)
}
const mapStateToProps=(state,action)=>{
	return {
		allMoney:state.home.allMoney,
		count:state.home.count
	}
}
export default connect(mapStateToProps)(Home); 
// export default Home;