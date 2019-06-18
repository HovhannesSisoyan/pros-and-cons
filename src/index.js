import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppModule from './App';
import reducer from './store/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const App = (
  <Provider store={store}>
    <AppModule />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
