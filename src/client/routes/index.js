import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import React from 'react';
import ReactDom from 'react-dom';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Chat} />
      <Route path="/chat" component={Chat} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById('container'));
