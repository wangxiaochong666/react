import React,{Component} from 'react';
import Home from '../components/Home';
import Mine from '../components/Mine';
import NoFound from '../components/NoFound';
import Qq from '../components/Qq';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
const Routers=()=>(
	<Router>
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route path='/shop' component={Qq}></Route>
			<Route path='/mine' component={Mine}></Route>
			<Route default component={NoFound}></Route>	
		</Switch>
	</Router>
)
export default Routers; 	