import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";
import router from './router/RouterArray';
import App from './componets/App';
import { Provider } from 'react-redux';
import store from './store/index'

// ReactDOM.render(
//   <Provider store={store}>
//         <App />
//     </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Router>
    <div >
      <div className="container">
      <ul className="homeUl">
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/about">介绍</Link>
        </li>
        <li>
          <Link to="/goods">计划</Link>
        </li>
      </ul>
      </div>
      <div>
        {
          router.map((value, key) => {
            if (value.exact) {
              return <Route key={key} exact path={value.path} component={value.componet} />
            } else {
              return <Route key={key} path={value.path} component={value.componet} />
            }
          })
        }
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
