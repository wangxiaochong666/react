import React,{Component} from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
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
			<Footer />
		</div>
	)
}
export default Mine;