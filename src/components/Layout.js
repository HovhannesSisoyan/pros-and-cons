import React from 'react';

import Pros from './Pros';
import Cons from './Cons';
import classes from './Layout.css';

const Layout = () => {
    return (<div className={classes.Layout}>
        <h2 className={classes.Header}>Should I eat at McDonalds?</h2>
        <div className={classes.ProsCons}>
            <Pros name='PRO'/>
            <Cons name='CON'/>
        </div>
    </div>);
};

export default Layout;