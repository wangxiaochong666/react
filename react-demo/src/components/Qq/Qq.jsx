import React,{Component} from 'react';
import './Qq.scss';
import Lists from './Lists';
import Footer from '../Footer';
export default class Qq extends Component{
	constructor(){
		super();
		this.state={
			lists:[
				{
					states:1,
					title:'列表1'
				},{
					states:0,
					title:'列表2',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表3',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表4',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表5',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表6',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表7',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表8',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表9',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表10',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表11',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				},{
					states:0,
					title:'列表12',
					src:'https://imgsa.baidu.com/forum/w%3D580/sign=d6335b499525bc312b5d01906ede8de7/a896167adab44aedd5b53063bf1c8701a38bfbc9.jpg'
				}
			],

		}
	}
	deleteFn=(idx)=>{
		var newList=[...this.state.lists];
		newList.splice(idx,1)
		this.setState(item=>{
			return item.lists=newList
		})
	}
	changeList=(idx)=>{
		var flag=true;
		var newList=[...this.state.lists];
		for(var i=0;i<newList.length;i++){
			if(newList[i].states===1){
				newList[i].states=0;
				flag=false;
			}
		}
		if(!flag){
			this.setState(item=>{
				return item.lists=newList
			})
		}else{
			this.setState(item=>{
				return item.lists[idx].states=1;
			})
		}	
	}
	render(){
		return(
			<div className='over-dom-box'>
				<div className='over-dom-content'>
					{
						this.state.lists.map((item,idx)=>{
							return <Lists key={idx}
							title={item.title}
							idx={idx}
							src={item.src} 
							states={item.states}
							changeList={this.changeList}
							deleteFn={this.deleteFn} />
						})
					}
				</div>
				<Footer />
			</div>
		)
	}
}