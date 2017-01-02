import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import HomePage from './containers/homePage';
import LoginPage from './containers/loginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
  </Route>
);