import React,{Component} from 'react';
import {connect} from 'react-redux';
import Footer from '../Footer';
import './Shop.scss';

class Shop extends Component{
    shop=()=>{
        this.props.dispatch({
            type:'CHANGE-NAME',
            name:this.props.name,
        })
    }
    render=()=>(
        <div className='con-container'>
            <div className='con-tit'>
                <h1 onClick={this.shop}>{this.props.name}</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}
var mapStateToProps=(state,action)=>{
    return {
        name:state.shop.name
    }
}
export default connect(mapStateToProps)(Shop)