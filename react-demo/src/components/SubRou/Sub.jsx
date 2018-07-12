import React,{Component} from 'react'
import {connect} from 'react-redux'

const Sub=(props)=>{
	let {params}=props.match;
	function goTip(){
		props.history.go(-1);
		// history.push('/mine/b');
	}
	return(
		<div>
			<div onClick={goTip}>{params.type}</div>
			<div>{props.text}</div>
		</div>
	)
}
const mapStateToProps=(state,action)=>{
	console.log(state,action)
	return {
		text:'特别爱笑可脾气暴躁'
	}
}
export default connect(mapStateToProps)(Sub);
// export default Sub;