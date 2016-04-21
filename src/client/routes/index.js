import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import ChatStore from '../stores/ChatStore';
import Login from '../components/Login.jsx';
import React from 'react';
import ReactDom from 'react-dom';

function requireAuth(nextState, replace) {
  if (!ChatStore.getState().user) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    });
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Chat} />
      <Route path="/chat" component={Chat} onEnter={requireAuth}/>
      <Route path="/chat/:channel" component={Chat} onEnter={requireAuth}/>
      <Route path="/login" component={Login} />
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById('container'));
