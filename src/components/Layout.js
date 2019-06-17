import React from 'react';

import NamedList from './NamedList';
import classes from './Layout.css';

const Layout = () => (
  <div className={classes.Layout}>
    <h2 className={classes.Header}>Should I eat at McDonalds?</h2>
    <div className={classes.ProsCons}>
      <NamedList name="pros" />
      <NamedList name="cons" />
    </div>
  </div>
);

export default Layout;
