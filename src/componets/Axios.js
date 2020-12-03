import React, { Component } from 'react';
import axios from 'axios'


/**
 * 使用axios发送请求
 */
class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }


  //  教程------    https://www.npmjs.com/package/axios
  handlerClick = () => {
    axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
      .then((response) => {
        this.setState({
          list: response.data.result
        })
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  //组件加载完成后执行，刷新页面也是执行该方法
  componentDidMount() {
    this.handlerClick();
  }


  render() {
    return (
      <div>

        <h1>axios获取数据</h1>
        <br /><br />
        <button type="button" onClick={this.handlerClick} >点击按钮</button>
        <ul>
          {
            this.state.list.map((value, key) => {
              return <li key={key}>{value.title}</li>
            })

          }
        </ul>
      </div>

    )
  }
}

export default Axios;