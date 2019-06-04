import React from 'react';
import Pros from './Pros';
import Cons from './Cons';


const Layout = (props) => {
    return (
        <div>
            <h1>Should I eat at McDonalds?</h1>
            <>
                <Pros/>
                <Cons/>
            </>
        </div>
    )
};

export default Layout;