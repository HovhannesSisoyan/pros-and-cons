import React from 'react';
import classes from './Input.css';

const Input = ({ changed, submited, blured, draged, ...restProps }) => {
    return (
        <input
           className={classes.Input}
           onChange={changed}
           onKeyPress={submited}
           //onDrag={draged}
           onBlur={blured}
           {...restProps}
        />
    );
};

export default Input;