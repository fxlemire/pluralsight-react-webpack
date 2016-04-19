import './main.scss';
import $ from 'jquery';
import App from './components/App.jsx';
import React from 'react';
import ReactDom from 'react-dom';

if ($('#container').length <= 0) {
  $('body').prepend('<div id="container"></div>');
}

ReactDom.render(
  <App />,
  document.getElementById('container')
);
