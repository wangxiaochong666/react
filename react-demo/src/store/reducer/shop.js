const initalState={
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
    ]
}
const reducer=(state=initalState,action)=>{
    var newState={...state}
    switch(action.type){
        case 'CHANGE-STATE':
        // var flag=true;
        for(var i=0;i<newState.lists.length;i++){
			if(newState.lists[i].states===1){
				newState.lists[i].states=0;
				// flag=false;
			}
		}
        // if(flag){
            newState.lists[action.idx].states=1;
        // }
        return {
            ...state,
            lists: [...newState.lists]
        };
        case 'DELETE':
            newState.lists.splice(action.idx,1)
            return {
                ...state,
                lists: [...newState.lists]
            };
        ;
        default: return state;
    }
}
export default reducer