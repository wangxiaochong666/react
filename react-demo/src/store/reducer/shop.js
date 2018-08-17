const initalState={
    name:"shop"
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'CHANGE-NAME':
            var name=(action.name==='shop')?'商品':'shop';
            return{
                ...state,
                name
            }
        break;
        default: return state;
    }
    return state
}
export default reducer