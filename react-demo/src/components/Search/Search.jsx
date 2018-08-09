import React,{Component} from 'react'
import './Search.scss'
import {Link} from 'react-router-dom';
export default class Search extends Component{
    state={
        value:''
    };
    changeVal=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    sureBtn=()=>{
        this.props.history.push({
            pathname : '/home' ,
            search:'?the=search',
            query:{search:this.state.value}
        })
        // this.props.history.push({ pathname : '/home' ,query:{search:this.state.value} })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>this.changeVal(e)} />
                <button onClick={this.sureBtn}>确定</button>
                {/* <Link to={{pathname:'/home',query:{search:this.state.value}}}>确定</Link> */}
            </div>
        )
    }
}