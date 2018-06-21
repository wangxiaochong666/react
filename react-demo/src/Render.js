import React,{Component} from 'react';
import Routers from './Router';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom';
export default class Renders extends Component{
	render = () => <Routers />	
}
// export default class Renders extends Component{
// 	render = () =>{
// 		return (
// 			<Router>
// 				<div>
// 					<ul>
// 						<li><Link to='/'>home</Link></li>
// 						<li><Link to='/mine'>mine</Link></li>
// 						<li><Link to='/shop'>shop</Link></li>
// 					</ul>
// 					<Route path='/' exact component={()=>(<div>home</div>)}></Route>	
// 				 	<Route path='/mine' exact component={()=>(<div>mine</div>)}></Route>	
// 				 	<Route path='/shop' exact component={()=>(<div>shop</div>)}></Route>	
// 				</div>
// 			</Router>
// 		)
// 	}
// }
