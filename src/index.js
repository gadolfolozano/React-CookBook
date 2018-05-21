import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'

import {
    performLogin
} from './actions'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

//store.dispatch(loginUser('gadolfolozano', 'e10adc3949ba59abbe56e057f20f883e'))

// Log the initial state
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'logs'});
log.info({intialState: store.getState()});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
