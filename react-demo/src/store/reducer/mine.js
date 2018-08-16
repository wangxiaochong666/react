const initalState={
    name:"我的",
    totle:1
}
const reducer=(state=initalState,aciton)=>{
    switch (aciton.type){
        case 'CHANGE':
        return {
            ...state,
            totle:state.totle+1
        };
        default: return state;

    }
}
export default reducer