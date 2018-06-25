import React,{Component} from 'react';
const Sub=({match})=>{
	let {params}=match;
	return(
		<div>{params.type}</div>
	)
}
export default Sub;