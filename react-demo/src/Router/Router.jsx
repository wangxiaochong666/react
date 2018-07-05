import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';
import Mine from '../components/Mine';
import NoFound from '../components/NoFound';
import Qq from '../components/Qq';
import {Route, BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import Sub from './../components/SubRou';
const Routers=()=>(
	<Router>
		<Switch>
			<Route path='/home' component={Home}></Route>
			<Route path='/shop' component={Qq}></Route>
			<Route exact path='/mine' component={Mine}></Route>
			<Route path='/mine/:type' component={Sub}></Route>
			<Redirect from='/' to='/home' />
			<Route default component={NoFound}></Route>
		</Switch>
	</Router>
)
export default Routers;
//<Route exact path='/mine' render={()=>(<Redirect from='/mine' to='/mine/a' />)}></Route>
//<Route exact path='/mine' render={()=>(<Redirect push to='/mine/a' />)}></Route>