import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';
import Mine from '../components/Mine';
import NoFound from '../components/NoFound';
import Qq from '../components/Qq'; 
import Shop from '../components/Shop'; 
import Search from '../components/Search'; 
import {Route, BrowserRouter as Router,Switch,Redirect,Prompt} from 'react-router-dom';
import Sub from './../components/SubRou';

const Routers=()=>(
	<Router>
		{/* <Prompt when={true} message='您确定要离开当前页面吗' /> */}
		<Switch>
			<Route exact path='/home' component={Home}></Route>
			<Route path='/list' component={Qq}></Route>
			<Route path='/shop' component={Shop}></Route>
			<Route exact path='/mine' component={Mine}></Route>
			<Route path='/mine/:type' component={Sub}></Route>
			<Route path='/search' component={Search}></Route>
			<Redirect from='/' to='/home' />
			<Route default component={NoFound}></Route>
		</Switch>
	</Router>
)
export default Routers;
//<Route exact path='/mine' render={()=>(<Redirect from='/mine' to='/mine/a' />)}></Route>
//<Route exact path='/mine' render={()=>(<Redirect push to='/mine/a' />)}></Route>