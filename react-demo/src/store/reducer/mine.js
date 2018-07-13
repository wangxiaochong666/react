const initalState={
    name:"mine",
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