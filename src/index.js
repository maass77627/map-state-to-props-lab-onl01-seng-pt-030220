import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import manageUsers from './reducers/manageUsers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(cityReducer, composeEnhancers(applyMiddleware(thunk)))
// add imports and code


ReactDOM.render(
  <Provider store={store}>
  // add imports and code
  <App />
  // add imports and code
  ,
  </provider>
  document.getElementById('root')
);
