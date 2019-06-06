import React, { memo } from 'react';

import Layout from './components/Layout';

const App = () => (
  <div className="App">
    <header className="App-header" />
    <Layout />
  </div>
);

export default memo(App);
