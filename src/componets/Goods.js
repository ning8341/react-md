import React, { Component } from 'react';
import '../assets/css/Goods.css';
import {
  Route,
  Link
} from "react-router-dom";

import Info1 from './goods/Info1';
import Info2 from './goods/Info2';

/**
 * react嵌套路由演示
 */
class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="left">
            <ul className="good-ul">
              <li><Link to="/goods/">我想去马代</Link></li>
              <li><Link to="/goods/info2">我想去马代</Link></li>
            </ul>
          </div>


          <div className="right">
            <Route exact path="/goods/">
              <Info1 />
            </Route>
            <Route path="/goods/info2">
              <Info2 />
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default Goods;