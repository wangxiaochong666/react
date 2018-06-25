import React,{Component} from 'react';
const Sub=({match,history})=>{
	let {params}=match;
	function goTip(){
		history.go(-1);
	}
	return(
		<div onClick={goTip}>{params.type}</div>
	)
}
export default Sub;