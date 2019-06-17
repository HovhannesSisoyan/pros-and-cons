import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppModule from './App';
import reducer from './store/reducer';

const store = createStore(reducer);

const App = (
  <Provider store={store}>
    <AppModule />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
