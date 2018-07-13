import { combineReducers } from 'redux'
import home from './home'
import shop from './shop'
import mine from './mine'

const rootReducer=combineReducers({
    home,
    shop,
    mine
})
 export default rootReducer;