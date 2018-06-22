import React,{Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
{/* <Link to='/Mine/12'>GO Mine</Link> */}
function f(props){
	props.history.push('/mine')
}
const Home=(props)=>{
	return (
		<div>
			<Header />
				<div>
					<button onClick={()=> f(props)}>go Mine</button>
				</div>
			<Footer />
		</div>
	)
}
export default Home;