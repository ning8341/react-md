// App.js
import React from 'react';
import { connect } from 'react-redux'
import { Button, Alert } from 'antd'
import { increaseCount, reduceCount } from '../store/action'

function App(props) {
  var { count, increaseCount, reduceCount } = props
  return (
    <div className="App">
        <Alert type='success' message={count} />
        <div style={{marginTop: 10}}>
          <Button type='primary' onClick={increaseCount} style={{marginRight: 10}}>increase</Button>
          <Button type='primary' onClick={reduceCount}>reduce</Button>
        </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch){
  return {
    increaseCount: (data)=>dispatch(increaseCount(data)),
    reduceCount: (data)=>dispatch(reduceCount(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);