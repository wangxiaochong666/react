import React,{Component} from 'react'
import './Tab.scss'
import TabTit from './TabTit'
import TabCon from './TabCon'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Tab extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					name:'第一页',
					content:'第一页第一页第一页第一页第一页第一页第一页第一页第一页第一页第一页第一页第一页',
				},{
					name:'第二页',
					content:'第二页第二页第二页第二页第二页第二页第二页第二页第二页第二页第二页第二页第二页',
				},{
					name:'第三页',
					content:'第三页第三页第三页第三页第三页第三页第三页第三页第三页第三页第三页第三页第三页',
				}
			],
			activeIndex:0
		}
	}
	componentDidMount(){
		//拦截请求
		// axios.get('/users2').then(success=>{
		// 	console.log(success)
		// }).catch((e)=>{
		// 	throw Error(e)
		// })
	}
	static contextTypes={
		name:PropTypes.string
	}
	showContent=(idx)=>{
		this.setState((item)=>{
			return item.activeIndex=idx
		})
	}
	render(){
		return(
			<div>
				<div className='title-style'>
					{
						this.state.tabs.map((item,idx)=>{
							return <TabTit key={idx}
								title={item.name}
								index={idx}
								activeIndex={this.state.activeIndex}
								showContent={this.showContent} />
						})
					}
				</div>
				<div className='content-style'>
					{
						this.state.tabs.map((item,idx)=>{
							return <TabCon key={idx}
								content={item.content}
								index={idx}
								activeIndex={this.state.activeIndex}/>
						})
					}
				</div>
				{this.context.name}
			</div>
		)
	}
}