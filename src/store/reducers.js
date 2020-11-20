// reducers.js
// 存放真正的数据
import initState from './state'
import { combineReducers } from 'redux'
function count(state = initState.count, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'REDUCE':
            return state - 1
        default:
            return state
    }
}
export default combineReducers({
    count
})