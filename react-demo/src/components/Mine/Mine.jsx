import React,{Component} from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import {Link,Route} from 'react-router-dom';

const A=({match})=>{
	return <div>{match.params.type}</div>
}
const B=()=>{
	return <div>这是一级路由才有的标签</div>
}
const Mine=(props)=>{
	return (
		<div>
			<Header title={'我的'} />
			<Content />
			<ul>
				<li><Link to={`${props.match.url}/one`}>二级1</Link></li>
				<li><Link to={`${props.match.url}/two`}>二级2</Link></li>
				<li><Link to={`${props.match.url}/three`}>二级3</Link></li>
			</ul>
			<Route path='/mine/:type' component={A}></Route>
			<Route exect path={props.match.url} component={B}/>
			<Footer />
		</div>
	)
}
export default Mine;