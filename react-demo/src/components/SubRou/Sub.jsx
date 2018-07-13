import React,{Component} from 'react'

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
export default Sub;