import React from 'react';
import classes from './Input.css';

const Input = ({ changed, submited, blured, ...restProps }) => {
    return (
        <input
           className={classes.Input}
           onChange={changed}
           onKeyPress={submited}
           onBlur={blured}
           {...restProps}
        />
    );
};

export default Input;