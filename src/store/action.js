// action.js
// 存放触发数据更新的方法
function increaseCount(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREASE', data })
  }
}
function reduceCount(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'REDUCE', data })
  }
}

module.exports = {
  increaseCount,
  reduceCount
}