// index.js
// 初始化store
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

export default store // 导出store