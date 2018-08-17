import { combineReducers } from 'redux'
import home from './home'
import shop from './shop'
import mine from './mine'
import list from './list'

const rootReducer=combineReducers({
    home,
    list,
    shop,
    mine
})
 export default rootReducer;