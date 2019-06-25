import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppModule from './App';
import reducer from './store/reducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const App = (
  <Provider store={store}>
    <AppModule />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
