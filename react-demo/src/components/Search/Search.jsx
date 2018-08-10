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
        this.state.value.trim()&&
        this.props.history.push({
            pathname : '/home' ,
            search:`?search=${this.state.value}`,
            query:{search:this.state.value}
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>this.changeVal(e)} />
                <button onClick={this.sureBtn}>确定</button>
            </div>
        )
    }
}