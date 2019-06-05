import React from 'react';
import Pros from './Pros';
import Cons from './Cons';
import classes from './Layout.css';


const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <h1>Should I eat at McDonalds?</h1>
            <>
                <Pros/>
                <Cons/>
            </>
        </div>
    )
};

export default Layout;