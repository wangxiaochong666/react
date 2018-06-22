import React,{Component} from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';
import Mine from '../components/Mine';
import NoFound from '../components/NoFound';
import Qq from '../components/Qq';
import {Route, BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
const A=({match})=>{
	return <div>match.params.type</div>
}
const Routers=()=>(
	<Router>
		<Switch>
			<Redirect exact from='/' to='/mine' />
			<Route exact path='/' component={Home}></Route>
			<Route path='/shop' component={Qq}></Route>
			<Route path='/mine' component={Mine}></Route>
			<Route default component={NoFound}></Route>
		</Switch>
	</Router>
)
export default Routers; 	
// <Route exact path='/' component={Home}></Route>
//<Route exact path='/' render={()=><Redirect to='/Mine/one' />}></Route>