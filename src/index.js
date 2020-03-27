import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import ButtonAppBar from './navbar/nav'
import Financial from './financial/finanacial'
import Food from './food/food'
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <Router>
  <ButtonAppBar/>
  <Route exact path="/" component={App} />    
  <Route path="/financial" component={Financial} />
  <Route path="/food" component={Food} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
