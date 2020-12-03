import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../assets/css/Home.css';
/**
 * home组件是一个轮播图
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Carousel autoplay>
          <img className="identyImg" src={require('../assets/images/1.jpeg')} />
          <img className="identyImg" src={require('../assets/images/2.jpeg')} />
          <img className="identyImg" src={require('../assets/images/3.jpeg')} />
          <img className="identyImg" src={require('../assets/images/4.jpeg')} />
          <img className="identyImg" src={require('../assets/images/5.jpeg')} />
          <img className="identyImg" src={require('../assets/images/6.jpeg')} />
        </Carousel>
        <div className="content">
          <p className="detail">热点景色</p>
        </div>
        <div>
          <ul className="hotUl">
            <li><img className="identyImg" src={require('../assets/images/8.jpeg')} /></li>
            <li><img className="identyImg" src={require('../assets/images/7.jpeg')} /></li>
            <li><img className="identyImg" src={require('../assets/images/8.jpeg')} /></li>
            <li><img className="identyImg" src={require('../assets/images/7.jpeg')} /></li>
          </ul>


        </div>
        <p className="tailP">@2020-2021--董维宁</p>
      </div>
    );
  }
}

export default Home;