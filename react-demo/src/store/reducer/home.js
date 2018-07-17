const initalState={
    allMoney:100,
    count:0
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case 'CHANGECOUNT':
        return {
            ...state,
            count:action.count
        };
        case 'ADDRED':
        return {
            ...state,
            allMoney:action.add?state.allMoney+state.count*1:state.allMoney-state.count*1
        };
        default:return state;
    }
}
export default reducer