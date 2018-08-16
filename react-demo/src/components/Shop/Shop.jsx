import React,{Component} from 'react';
import Footer from '../Footer';
import './Shop.scss';

export default class Shop extends Component{
    render=()=>(
        <div className='con-container'>
            <div className='con-tit'>
                <h1>shop</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}