// Set up your application entry point here...

require('./favicon.ico');
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import './styles/fonts.scss';
import './styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render (
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>, document.getElementById('app')
);
